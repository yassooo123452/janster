document.getElementById("open-letter-btn").addEventListener("click", function() {
    const letter = document.querySelector(".letter h1");
    const message = document.querySelector(".message");
    
    // Trigger the "opening" effect on the letter
    letter.style.transform = "scaleX(1)"; // Open the letter
    letter.style.opacity = "1"; // Make the letter visible

    // Add a delay for when the letter opens before showing the message
    setTimeout(function() {
        // Reveal the message after the letter has opened
        message.style.display = "block"; // Display the message
        message.classList.add("fade-in"); // Add fade-in effect
    }, 1000); // Delay in milliseconds (time it takes for the letter to open)
});
