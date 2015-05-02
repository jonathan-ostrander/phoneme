var fs = require('fs');
var cmuDict = __dirname + '/data/cmudict.json'
var cmuObj = JSON.parse(fs.readFileSync(cmuDict, 'utf8'));

module.exports = {

  phoneme: this,

  process: function(word) {
    return cmuObj[word.toUpperCase()] ? cmuObj[word.toUpperCase()][0] : undefined;
  },

  _isConsonant: function(pho) {
    return pho.length < 3;
  },

  _isVowel: function(pho) {
    return !(phoneme._isConsonant(pho));
  },

  vowels: function(word) {
    return phoneme.process(word).filter(phoneme._isVowel);
  },

  consonants: function(word) {
    return phoneme.process(word).filter(phoneme._isConsonant);
  },

  attach: function() {

    String.prototype.phonemes = function() {
      return phoneme.process(this);
    };

    String.prototype.vowels = function() {
      return phoneme.vowels(this);
    }

    String.prototype.consonants = function() {
      return phoneme.consonants(this);
    }

  }
}
