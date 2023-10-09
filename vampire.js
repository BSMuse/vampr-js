class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(...vampires) {
    this.offspring.push(...vampires); 
    vampires.forEach(vampire => {
      vampire.creator = this;
    });
  }
  

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0; 
    let currentVampire = this 
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator
      numberOfVampires++
    }
    return numberOfVampires
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.

  closestCommonAncestor(vampire) {
    const ancestors1 = this.getAncestors(); 
    const ancestors2 = vampire.getAncestors(); 
  

    for (const ancestor1 of ancestors1) {
      for (const ancestor2 of ancestors2) {
        if (ancestor1 === ancestor2) {
          return ancestor1; 
        }
      }
    }
  
    return this; 
  }

  getAncestors() {
    const ancestors = [];
    let currentVampire = this;
  
    while (currentVampire.creator) {
      ancestors.push(this);
      currentVampire = currentVampire.creator;
      ancestors.push(currentVampire);
    }
  
    return ancestors;
  }

    vampireWithName(name) {
      if (this.name === name) {
        return this; 
      }
    
      for (const offspring of this.offspring) {
        const descendantVampire = offspring.vampireWithName(name);
        if (descendantVampire) {
          return descendantVampire; 
        }
      }
    
      return null;
    }
    
  
    get totalDescendents() {
      let total = 1;

      for(let decendent of this.offspring){
        total += decendent.totalDescendents;
      };

      return total
  
    }
  
  get allMillennialVampires() {
    let total = [];

    if (this.yearConverted > 1980) {
      total.push(this);
    }

    for (const descendant of this.offspring) {
      total.push(...descendant.allMillennialVampires);
    }

    return total;
  }
}

const dracula = new Vampire("Dracula", 1450);
const vlad = new Vampire("Vlad", 1475);
const elizabeth = new Vampire("Elizabeth", 1981);
const beth = new Vampire("Beth", 1982);

dracula.addOffspring(vlad);
vlad.addOffspring(elizabeth);
elizabeth.addOffspring(beth);

console.log(dracula.allMillennialVampires)

module.exports = Vampire;

