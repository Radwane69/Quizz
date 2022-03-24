function check() {
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let correct = 0;
    if (question1 == "sens") {
        correct++;
    }
    if (question2 == "même direction mais des sens opposés") {
        correct++;
    }
    if (question3 == "CA") {
        correct++;
    }
    let images = ["", "", ""];
    let messages = ["Bravo!", "Pas mal !", "Vous pouvez faire mieux!"];
    let score;
    if (correct < 1) {
        range = 2;
    }
    if (correct > 0 && correct < 3) {
        range = 1;
    }
    if (correct == 3) {
        range = 0;
    }
    document.getElementById("salut").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("nombrecorrecte").innerHTML = "Vous avez eu " + correct + " correct.";
    document.getElementById("image").src = images[range];
}

