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
    minute: "2-digit"//,
    // hour12: false
    });

    timestamp.value = `${date} ${time}`;
});

const np_more = document.querySelector('.membership-card.np .more');
const np_modal = document.querySelector('.join #modal-np');
const np_close = np_modal.querySelector('.close');

np_more.addEventListener('click', () => {
    np_modal.showModal();
});

np_close.addEventListener('click', () => {
    np_modal.close();
});


const bronze_more = document.querySelector('.membership-card.bronze .more');
const bronze_modal = document.querySelector('.join #modal-bronze');
const bronze_close = bronze_modal.querySelector('.close');

bronze_more.addEventListener('click', () => {
    bronze_modal.showModal();
});

bronze_close.addEventListener('click', () => {
    bronze_modal.close();
});


const silver_more = document.querySelector('.membership-card.silver .more');
const silver_modal = document.querySelector('.join #modal-silver');
const silver_close = silver_modal.querySelector('.close');

silver_more.addEventListener('click', () => {
    silver_modal.showModal();
});

silver_close.addEventListener('click', () => {
    silver_modal.close();
});


const gold_more = document.querySelector('.membership-card.gold .more');
const gold_modal = document.querySelector('.join #modal-gold');
const gold_close = gold_modal.querySelector('.close');

gold_more.addEventListener('click', () => {
    gold_modal.showModal();
});

gold_close.addEventListener('click', () => {
    gold_modal.close();
});