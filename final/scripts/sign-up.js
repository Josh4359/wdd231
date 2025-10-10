const timestamp = document.querySelector('#timestamp');

document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();

    const date = now.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    });

    const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
    });

    timestamp.value = `${date} ${time}`;
});