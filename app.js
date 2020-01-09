const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = ['I am good you piece of shit', 'Doing fine cunt', 'Leave me alone!'];
const weather = ['It is very fine', 'You need some big boy boots on'];
const speechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRec();

recognition.onstart = function () {
    console.log('Voice is acticated');

};
recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);

};
//Add the listener to button
btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = ' i dont know what you said,mate';

    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    if (message.includes('how is the weather')) {
        const finalWeather = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalWeather;
    }

    speech.volume = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);

}