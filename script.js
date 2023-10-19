let count = 0; 

function incrementCounter() {
    count++;
    updateCounter();
}

function decrementCounter() {
    count--;
    updateCounter();
}

function updateCounter() {
    // Update the counter value displayed in the HTML
    document.getElementById("counter").textContent = count;
}
function resetCounter() {
    count = 0;
    updateCounter();
}
