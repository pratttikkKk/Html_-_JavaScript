function checkGrade() {
    var marks = 72;   // change marks to test
    var grade;

    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 75) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    alert("Student Grade: " + grade);
}
