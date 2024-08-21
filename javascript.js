// Set the goal percentage (0 to 100)
let goalPercentage = 75;

// Calculate the rotation angle based on the percentage
let rotationAngle = (goalPercentage / 100) * 360;

let fill = document.getElementById('fill');

// Apply the rotation to the fill element
if (goalPercentage <= 50) {
    fill.style.transform = `rotate(${rotationAngle}deg)`;
} else {
    fill.style.transform = `rotate(180deg)`;
    setTimeout(() => {
        fill.style.transform = `rotate(${rotationAngle - 180}deg)`;
        fill.parentElement.classList.add('full');
    }, 500);
}

// Update the displayed percentage
document.getElementById('goal-percentage').innerText = `${goalPercentage}%`;
