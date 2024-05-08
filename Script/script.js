const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


// Typing effect function
function typeWriter(elementId, text, speed) {
    const element = document.getElementById(elementId);
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Call the function to start typing effect when the page is loaded
window.onload = function() {
    // Element ID and text to type
    const elementId = 'dynamicText';
    const text = "I am an Early Software Professional based out of Toronto with experience in Software Development and Testing.";

    // Typing speed (milliseconds)
    const speed = 40;

    // Start typing effect
    typeWriter(elementId, text, speed);
};