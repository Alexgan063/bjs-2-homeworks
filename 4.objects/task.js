function Student(name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
  }

Student.prototype.setSubject = function (subjectName) {
  
    this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
   /*if ( 'marks' in this || marks.length === 0) {
        return 0;
    }
// Прове рки на то, есть ли свойство или нет

    if (Object.keys(this).includes('excludeds')){
        return 0;
    }
*/
    if (Object.keys(this).includes('marks')) {
      this.marks.push(...marks);
    } else {
        return 0;
    }
  }

Student.prototype.getAverage = function () {
    
    if (!(Object.keys(this).includes('marks'))) {
        return 0;
    }
    if (this.marks.length === 0){
        return 0;
    }
    
  let sum = this.marks.reduce((acc, number) => acc + number , 0);
 
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {

    delete this.marks;
    delete this.subject;

    this.excluded = reason;
  
}
