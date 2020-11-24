const jokes = [
    {
        "question": "Whats the object-oriented way to become wealthy?",
        "answer": "inheritance"
    },
    {
        "question": "Why did the developer ground their kid?",
        "answer": "They weren't telling the truthy"
    },
    {
        "question": "!false",
        "answer": "It's funny cause it's true"
    },
    {
        "question": "Why did the functions stop calling each other?",
        "answer": "Because they had constant arguments."
    },
    {
        "question": "What's the second movie about a database engineer called?",
        "answer": "The SQL."
    },
    {
        "question": "How do you get the code for the bank vault?",
        "answer": "You checkout their branch."
    },
    {
        "question": " How did the developer announce their engagement?",
        "answer": "They return ed true!"
    },
    {
        "question": "Why did the security conscious engineer refuse to pay their dinner bill?",
        "answer": "Because they could not verify the checksum."
    },
    {
        "question": "What do you call a busy waiter?",
        "answer": "A server."
    },
    {
        "question": "What do you call an idle server?",
        "answer": "A waiter."
    },
    {
        "question": "How many Prolog programmers does it take to change a lightbulb?",
        "answer": "Yes."
    },
    {
        "question": "I’ve been hearing news about this big boolean.",
        "answer": "Huge if true."
    },
    {
        "question": "What diet did the ghost developer go on?",
        "answer": "Boolean"
    },
    {
        "question": "Why was the developer unhappy at their job?",
        "answer": "They wanted arrays."
    },
    {
        "question": "Why did 10 get paid less than '10'?",
        "answer": "There was workplace inequality."
    },
    {
        "question": "Why was the function sad after a successful first call?",
        "answer": "It didn’t get a callback."
    },
    {
        "question": "Why did the angry function exceed the callstack size?",
        "answer": "It got into an Argument with itself"
    }
]

let index = 0;
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const nextBtn = document.querySelector('.next--btn');
renderJoke();


function renderJoke() {
    questionElement.innerText = jokes[index].question;
    answerElement.innerText = jokes[index].answer;
}


nextBtn.addEventListener('click', () => {
    index +=1;
    if (index >= jokes.length) {
        index = 0;
    };
    renderJoke();
});



function fetchData() {
    
}