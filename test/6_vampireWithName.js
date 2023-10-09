const chai = require('chai');
const { expect } = chai;
const Vampire = require('../vampire'); 

describe('Vampire', function () {
  const dracula = new Vampire('Dracula', 1650);
  const vlad = new Vampire('Vlad', 1700);
  const elizabeth = new Vampire('Elizabeth', 1800);
  const ivan = new Vampire('Ivan', 1950);
  const anne = new Vampire('Anne', 2000);

  dracula.addOffspring(vlad);
  vlad.addOffspring(elizabeth);
  elizabeth.addOffspring(ivan);
  ivan.addOffspring(anne);

  describe('vampireWithName', function () {
    it('should return the vampire with the given name', function () {
      expect(dracula.vampireWithName('Anne')).to.equal(anne);
      expect(dracula.vampireWithName('Ivan')).to.equal(ivan);
      expect(dracula.vampireWithName('Dracula')).to.equal(dracula);
      expect(dracula.vampireWithName('Vlad')).to.equal(vlad);
    });

    it('should return null if the vampire with the given name is not found', function () {
      expect(dracula.vampireWithName('Lucas')).to.equal(null);
      expect(dracula.vampireWithName('Mina')).to.equal(null);
      expect(dracula.vampireWithName('John')).to.equal(null);
    });
  });
});
