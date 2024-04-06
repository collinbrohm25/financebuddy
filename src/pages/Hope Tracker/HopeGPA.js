import React from "react";


function HopeGPA(props) {
    const hours = props.hours;
    const grades = props.grades;

    let totalGradePoints = 0;
    let totalCreditHours = 0;

    // Calculate total grade points and total credit hours
    for (let i = 0; i < hours.length; i++) {
        totalGradePoints += calculateGradePoints(grades[i]) * hours[i];
        totalCreditHours += hours[i];
    }

    // Calculate GPA
    const gpa = totalGradePoints / totalCreditHours;

    return (
        <div>
            
            <p>Total Credit Hours: {totalCreditHours}</p>
            <p>Total Grade Points: {totalGradePoints}</p>
            <p>GPA: {gpa.toFixed(2)}</p>
        </div>
    );
}

// Function to calculate grade points based on letter grade
function calculateGradePoints(grade) {
    switch (grade.toUpperCase()) {
        case "A":
            return 4.0;
        case "B":
            return 3.0;
        case "C":
            return 2.0;
        case "D":
            return 1.0;
        case "F":
            return 0.0;
        default:
            return 0.0; // Treat unrecognized grades as F
    }
}

export default HopeGPA;