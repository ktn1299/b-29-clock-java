let clockInterval;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time to be always two digits (e.g., 01:02:03)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time in the clock div
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Start the clock when the page loads
function startClock() {
    clockInterval = setInterval(updateClock, 1000);
}

// Stop the clock
function stopClock() {
    clearInterval(clockInterval);
}

// Add event listener to the stop button
document.getElementById('stopButton').addEventListener('click', stopClock);

// Start the clock on page load
startClock();