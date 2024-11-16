document.addEventListener("DOMContentLoaded", () => {
    const showCountdownButton = document.getElementById("showCountdownButton");
    const goBackButton = document.getElementById("goBackButton");
    const profileContainer = document.getElementById("profileContainer");
    const birthdayContainer = document.getElementById("birthdayContainer");

    // Show the birthday countdown and switch to black background
    showCountdownButton.addEventListener("click", () => {
        profileContainer.style.display = "none";
        birthdayContainer.style.display = "block";
        document.body.classList.remove("blue-background");
        document.body.classList.add("black-background");
    });

    // Go back to the profile container and switch to blue background
    goBackButton.addEventListener("click", () => {
        birthdayContainer.style.display = "none";
        profileContainer.style.display = "block";
        document.body.classList.remove("black-background");
        document.body.classList.add("blue-background");
    });
});

function countdown() {
    const now = new Date();
    let birthDate = new Date(now.getFullYear(), 11, 5); // December 5 this year

    // If it's past the birthday this year, switch to next year's date
    if (now > birthDate) {
        birthDate.setFullYear(birthDate.getFullYear() + 1);
    }

    const timeDiff = birthDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Show the "Coming Soon" message if the birthday is within 30 days
    if (days <= 30) {
        document.getElementById('coming-soon-message').style.display = 'block';
    } else {
        document.getElementById('coming-soon-message').style.display = 'none';
    }
}

// Update countdown every second
setInterval(countdown, 1000);
// JavaScript to generate random balloons
function createBalloons() {
    const balloonContainer = document.getElementById("balloon-container");

    // Create 20 balloons
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");

        // Set random horizontal starting position for each balloon
        balloon.style.left = `${Math.random() * 100}vw`;
        
        // Set random animation delay to make the floating effect natural
        balloon.style.animationDelay = `${Math.random() * 5}s`;

        // Add the balloon to the container
        balloonContainer.appendChild(balloon);
    }
}

// Call the function to generate balloons when the page loads
window.onload = createBalloons;
// Get references to the button, first container, and birthday container
const showCountdownButton = document.getElementById("showCountdownButton");
const goBackButton = document.getElementById("goBackButton");
const profileContainer = document.querySelector(".container.fade-in");
const birthdayContainer = document.getElementById("birthdayContainer");

// Show the birthday container and hide the profile container
showCountdownButton.addEventListener("click", () => {
    profileContainer.style.display = "none";
    birthdayContainer.style.display = "block";
});

// Show the profile container and hide the birthday container
goBackButton.addEventListener("click", () => {
    birthdayContainer.style.display = "none";
    profileContainer.style.display = "block";
});

