
const words = document.querySelector('#word-input');
const checkBtn = document.querySelector('.btn-check');
let displayMessage = document.querySelector(".show-text");
let vowels = ['a', 'e', 'i', 'o', 'u']; 
let vowelCount = 0;

// Event Listeners
checkBtn.addEventListener('click', wordCheck);
words.addEventListener('keypress', () => {
    displayMessage.innerHTML = "";
    vowelCount = 0;
 })

 // Game start

function wordCheck(event) {
    // prevent default
    event.preventDefault()

    // Converting Users input to LowerCase
    const wordCount = words.value;
    wordCount.toLowerCase();

    // Check number of vowels in Users input
    vowels.forEach((vowel) => {
        if(wordCount.includes(vowel)) {
            console.log(vowel);
            vowelCount++;
            displayMessage.innerHTML = "You have " + vowelCount + " vowels in your words";
           
        
        } else {
            displayMessage.innerHTML = "You have " + vowelCount + " vowels in your words";
        }
    })

    words.value = "";
}
