// CODE here for your Lambda Classes
class Person{
  constructor(info){
    this.name = info.name;
    this.location = info.location;
    this.age = info.age;
  }

  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Student extends Person{
  constructor(studentInfo){
  super(studentInfo);
  this.background = studentInfo.background;
  this.className = studentInfo.className;
  this.favSubjects = studentInfo.favSubjects;
  }

  listsSubjects(){
    for(let i = 0; i < this.favSubjects.length; i++){
      console.log(this.favSubjects[i]);
    }
  }
  
  PRAssignment(subject){
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class Instructors extends Person{
  constructor(instructorInfo){
    super(instructorInfo);
    this.specialty = instructorInfo.speciality;
    this.favLanguage = instructorInfo.favLanguage;
    this.catchPhrase = instructorInfo.catchPhrase;
  }

  demo(subject){
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject){
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class ProjectManager extends Instructors{
  constructor(pmInfo){
    super(pmInfo);
    this.gradClassName = pmInfo.gradClassName;
    this.favInstructor = pmInfo.favInstructor;
  }

  standUp(channel){
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}

const brad = new Student({
  name: 'Brad',
  location: 'Wyoming',
  age: 24,
  background: 'College student',
  className: 'WEB21',
  favSubjects: ['HTML', 'Arrays', 'Graphs'],
});

const dan = new Instructors({
  name: 'Dan',
  location: 'Unknown',
  age: '38???',
  speciality: 'Web Development',
  favLanguage: 'JavaScript',
  catchPhrase: 'Breaks are important'
});

const zach = new ProjectManager({
  name: 'Zach',
  location: 'Unknown',
  age: '29',
  gradClassName: 'WEB 18?',
  favInstructor: 'Dan',
});


console.log(brad);
brad.listsSubjects();
brad.PRAssignment('JS 4');
brad.sprintChallenge('JS 4.5');

console.log(dan);
dan.demo('classes');
dan.grade(brad, 'javascript 4');

console.log(zach);
zach.standUp('zach_o');
zach.debugsCode(brad, 'JavaScript 4');
