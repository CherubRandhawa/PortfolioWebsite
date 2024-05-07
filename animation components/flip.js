// Function to handle card flip animation and typing effect
function handleCardInteraction() {
    const projectCard = document.getElementById('project-card');
    const projectDescription = document.getElementById('project-desc');
    const descriptionText = 'A Python-based clone of the Unix wc command line tool running 4+ commands, adhering to Unix philosophy principles, showcasing proficiency in Python and command line interface (CLI) development.';

    // Toggle hover class to trigger flip animation
    projectCard.classList.toggle('hover');

    // Clear existing content and initiate typing effect
    projectDescription.textContent = '';
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < descriptionText.length) {
            projectDescription.textContent += descriptionText.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 50); // Typing speed (milliseconds per character)
}

// Get the project card element and add event listeners
const projectCard = document.getElementById('project-card');

projectCard.addEventListener('mouseenter', handleCardInteraction);
projectCard.addEventListener('mouseleave', handleCardInteraction);