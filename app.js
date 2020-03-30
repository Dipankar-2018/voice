const btn = document.querySelector("#talk");
const content = document.querySelector(".content");


const greetings = [
    'Who is siri',
    'ask that bitch not me',
];

const weather = [
    'sorry, I have a boyfriend ',
    'you need  to go'
];


const siri = [
    'who is siri ???'
]

const sory = [
    'with due respect, I would like to apologize you for my and Rabhas mistakes' 
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('Voice is activated');
};

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;  
    readOutLoud(transcript); 
}


btn.addEventListener('click', ()=>{
    recognition.start();
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();


    speech.text = 'bhaal tu moi tumak e pao, kintu Udeep mur bestfriend ';

    if(message.includes('hey Siri')){
        const finalText = greetings[Math.floor(Math.random() * 10)];
        speech.text = finalText;
    }

    if(message.includes('I love you do you love me')){
        const finalText = weather[0];
        speech.text = finalText;
    }

    if(message.includes('hey Siri')){
        const finalText = siri[0];
        speech.text = finalText;
    }
   
    if(message.includes('please apologize Sangeeta')){
        const finalText = sory[0];
        speech.text = finalText;
    }





    speech.volume = 1;
    speech.rate = 1; 
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
     
   //return voice
}