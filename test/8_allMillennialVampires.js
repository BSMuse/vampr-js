const chai = require('chai');
const { expect } = chai;
const Vampire = require('../vampire'); 

describe('Vampire', function () {
  const dracula = new Vampire('Dracula', 1650);
  const bunicula = new Vampire('Bunicula', 1680)
  const vlad = new Vampire('Vlad', 1700);
  const elizabeth = new Vampire('Elizabeth', 1800);
  const ivan = new Vampire('Ivan', 1981);
  const anne = new Vampire('Anne', 2000);

  dracula.addOffspring(vlad);
  vlad.addOffspring(elizabeth);
  elizabeth.addOffspring(ivan);
  ivan.addOffspring(anne);
  

  describe('allMillennialVampires', function () {
    it('should return an array of all vampires converted after 1980', function () {
      const millennialVampires = dracula.allMillennialVampires;
      expect(millennialVampires).to.deep.include.members([ivan, anne]); // Ivan and Anne were converted after 1980
      expect(millennialVampires).to.not.include.members([dracula, vlad, elizabeth]); // Dracula, Vlad, and Elizabeth were converted before 1980
    });

    it('should include all millennial vampires from descendants', function () {
      const millennialVampires = dracula.allMillennialVampires;
      expect(millennialVampires).to.have.lengthOf(2); // Ivan and Anne
    });

    it('should return an empty array if no millennial vampires are found', function () {
      const millennialVampires = bunicula.allMillennialVampires;
      console.log(bunicula.allMillennialVampires)
      expect(millennialVampires).to.be.an('array').that.is.empty; //Bunicula has no offspring... human offspring
    });
  });
});
