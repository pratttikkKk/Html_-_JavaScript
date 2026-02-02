class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log("student name is: "+this.name+", "+" student age is : "+this.age+ " student grade is :" + this.grade);
				        
    }
}

const s1 = new Student("Pratik", 20, "A");
const s2 = new Student("psf", 22, "B+");
const s3 = new Student("pf", 19, "A-");

s1.displayInfo();
s2.displayInfo();
s3.displayInfo();
