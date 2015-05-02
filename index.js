var fs = require('fs');
var cmuDict = __dirname + '/data/cmudict.json'
var cmuObj = JSON.parse(fs.readFileSync(cmuDict, 'utf8'));

module.exports = {

  process: function(word) {
    return cmuObj[word.toUpperCase()] ? cmuObj[word.toUpperCase()][0] : undefined;
  },

  _isConsonant: function(pho) {
    return pho.length < 3;
  },

  _isVowel: function(pho) {
    return pho.length === 3;
  },

  vowels: function(word) {
    var phonemes = this.process(word)
    return phonemes ? phonemes.filter(this._isVowel) : phonemes;
  },

  consonants: function(word) {
    var phonemes = this.process(word)
    return phonemes ? phonemes.filter(this._isConsonant) : phonemes;
  },

  attach: function() {
    var _this = this;

    String.prototype.phonemes = function() {
      return _this.process(this);
    };

    String.prototype.vowels = function() {
      return _this.vowels(this);
    };

    String.prototype.consonants = function() {
      return _this.consonants(this);
    };

  }
}
