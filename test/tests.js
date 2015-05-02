var assert = require('assert');
var phoneme = require('../index.js');

describe('phoneme', function() {

  describe('#process()', function() {
    it('should return, in order, all phonetic sounds of a valid input word', function() {
      assert.deepEqual(phoneme.process('phonetic'), [ 'F', 'AH0', 'N', 'EH1', 'T', 'IH0', 'K' ]);
    });

    it('should return undefined when the word is not valid', function() {
      assert.equal(phoneme.process('humblebutterscotch'), undefined);
    });
  });

  describe('#vowels()', function() {
    it('should return, in order, only the vowel sounds of a valid input word', function() {
      assert.deepEqual(phoneme.vowels('phonetic'), [ 'AH0', 'EH1', 'IH0' ]);
    });

    it('should return undefined when the word is not valid', function() {
      assert.equal(phoneme.vowels('humblebutterscotch'), undefined);
    });
  });

  describe('#consonants()', function() {
    it('should return, in order, only the consonant sounds of a valid input word', function() {
      assert.deepEqual(phoneme.consonants('phonetic'), [ 'F', 'N', 'T', 'K' ]);
    });

    it('should return undefined when the word is not valid', function() {
      assert.equal(phoneme.consonants('humblebutterscotch'), undefined);
    });
  });

  describe('#attach()', function() {
    before(function() {
      phoneme.attach();
    });

    it('should add the phoneme method to String', function() {
      assert.deepEqual('phonetic'.phonemes(), phoneme.process('phonetic'));
    });

    it('should add the vowels method to String', function() {
      assert.deepEqual('phonetic'.vowels(), phoneme.vowels('phonetic'));
    });

    it('should add the consonants method to String', function() {
      assert.deepEqual('phonetic'.consonants(), phoneme.consonants('phonetic'));
    });

  })
})
