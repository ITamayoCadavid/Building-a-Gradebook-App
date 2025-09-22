const studentScores = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];

function getAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return parseFloat((total / scores.length).toFixed(1));
}

function getGrade(score) {
    if (score === 100) return "A++";
    else if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    const classAverage = getAverage(totalScores);
    const grade = getGrade(studentScore);
    const passed = hasPassingGrade(studentScore);

    let message = "Promedio de la clase: " + classAverage + ". Tu nota: " + grade + ". ";
    message += passed ? "Has aprobado el curso." : "No has aprobado el curso.";

    return message;
}

// Ejemplos
console.log(studentMsg(studentScores, 77)); // "Promedio de la clase: 71.7. Tu nota: C. Has aprobado el curso."
console.log(studentMsg(studentScores, 50)); // "Promedio de la clase: 71.7. Tu nota: F. No has aprobado el curso."
