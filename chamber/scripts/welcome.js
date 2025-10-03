const now = Date.now();

const lastVisit = localStorage.getItem("lastVisit");

const welcome = document.querySelector('#welcome');

if (lastVisit) {
    // minor help from chatgpt with this line
    const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));

    welcome.textContent = days < 1
        ? 'Back so soon! Awesome!'
        : `You last visited ${days} days ago.`;
}

localStorage.setItem("lastVisit", now);