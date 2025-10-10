import { loadData } from "./utility.mjs";

const container = document.querySelector('.lds-presidents.container');

async function getPresidents() {
    const data = await loadData('data/lds-presidents.json');
    if (data.error) {
        container.innerHTML = `<div class="error">${data.message}</div>`;
        return;
    }

    let content = "";

    data.data.forEach(m => {
        content += `
<button href="#" class="lds-presidents card" id="${m.id}-card">
    <img src="images/lds-presidents/${m.id}.webp" alt="${m.name} Portrait" loading="lazy" width="225" height="300">
    <h3>${m.name}</h3>
</button>
<dialog class="lds-presidents modal" id="${m.id}-modal">
    <figure>
        <img src="images/lds-presidents/${m.id}.webp" alt="${m.name} Portrait" loading="lazy" width="225" height="300">
        <figcaption><i><a href="${m.image_url}">image source</a></i></figcaption>
    </figure>
    <h2>${m.name}</h2>
    <ul>
        <li><b>Born:</b> ${m.birthdate}</li>
        <li><b>Died:</b> ${m.deathdate}</li>
        <li><b>Years Served:</b> ${m.years_as_president}</li>
    </ul>
    <button class="close">Close</button>
</dialog>
`;
    });

    container.innerHTML = content;

    data.data.forEach(m => {
        const card = document.querySelector(`#${m.id}-card`);
        const modal = document.querySelector(`#${m.id}-modal`);
        const close = modal.querySelector('.close');
        
        card.addEventListener('click', () => {
            modal.showModal();
        });

        close.addEventListener('click', () => {
            modal.close();
        });
    });
}

getPresidents();