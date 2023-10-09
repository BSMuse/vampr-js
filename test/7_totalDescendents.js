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

  describe('totalDescendents', function () {
    it('should return the total number of descendants', function () {
      expect(dracula.totalDescendents).to.equal(5); 
      expect(vlad.totalDescendents).to.equal(4); 
      expect(elizabeth.totalDescendents).to.equal(3); 
    });
  });
});
