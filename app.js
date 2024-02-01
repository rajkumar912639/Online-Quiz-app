const question = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'How many header tags are there in HTML?',
        'a': '5',
        'b': '4',
        'c': '6',
        'd': '8',
        'correct': 'c'
    },
    {
        'que': 'Which of the following is not a part of CSS?',
        'a': 'Border',
        'b': 'Padding',
        'c': 'Margin',
        'd': 'Variable',
        'correct': 'd'
    }
];

let index = 0;
let right = 0;
let wrong = 0;
let total = question.length;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".option");

function loadQuestion() {
    reset();
    if (index === total) {
        return endquiz();
    }
    const data = question[index];

    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

function getAnswer() {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
}

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
}

const endquiz = () => {
    document.getElementById("box").innerHTML = `<h1>End of the quiz  </h1>
    <h2>${right}/${total}</h2>`;
    
}

loadQuestion();
