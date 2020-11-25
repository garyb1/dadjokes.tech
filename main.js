import jokes from './jokes.js';
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const nextBtn = document.querySelector('.next--btn');
let index = 0; 

nextBtn.addEventListener('click', onBtnClick);
renderJoke(jokes, index);

function onBtnClick() {
    index += 1;
    if (index >= jokes.length) {
        index = 0;
    };
    renderJoke(index);
}

function renderJoke() {
    questionElement.innerText = jokes[index][0];
    answerElement.innerText = jokes[index][1];
}