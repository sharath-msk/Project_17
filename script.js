// Parent School class
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    // Getters
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    // Setter
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === 'number') {
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  
    // Methods
    quickFacts() {
      return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`;
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomIndex];
    }
  }
  
  // Primary School class
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    // Getter
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  // High School class
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    // Getter
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  // Create instances
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  // Output
  document.getElementById('output').innerHTML = `
    <h2>Lorraine Hansbury</h2>
    <p>${lorraineHansbury.quickFacts()}</p>
    <p>Pickup Policy: ${lorraineHansbury.pickupPolicy}</p>
    <p>Substitute Teacher: ${School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])}</p>
    <hr>
    <h2>Al E. Smith</h2>
    <p>${alSmith.quickFacts()}</p>
    <p>Sports Teams: ${alSmith.sportsTeams.join(', ')}</p>
  `;
  