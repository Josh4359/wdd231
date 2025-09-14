const grid_container = document.querySelector('.business-cards.grid');

const list_container = document.querySelector('.business-cards.list');

async function GetMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    
    let content = "";

    data.members.forEach(m => {
        content += `
<div class="card">
    <div class="title">
        <h2>${m.name}</h2>
        <i>${m.tagline}</i>
    </div>
    <img src="${m.logo}" alt="Business Logo" class="logo">
    <ul>
        <li><b>Email:</b> ${m.email}</li>
        <li><b>Phone:</b> ${m.phonenumber}</li>
        <li><b>URL:</b> ${m.website}</li>
    </ul>
</div>
`;
    });

    grid_container.innerHTML = content;

    content = "";

    data.members.forEach(m => {
        content += `
<div class="card">
    <ul>
        <li>${m.name}</li>
        <li><b>Address:</b> ${m.address}</li>
        <li><b>Phone:</b> ${m.phonenumber}</li>
        <li><b>URL:</b> ${m.website}</li>
    </ul>
</div>
`;
    });

    list_container.innerHTML = content;
}

GetMembers();

const toggle = document.querySelector('#list-toggle');
let grid = true;

function ToggleGrid(grid) {
    if (grid) {
        grid_container.classList.add('show');
        list_container.classList.remove('show');
    }
    else {
        grid_container.classList.remove('show');
        list_container.classList.add('show');
    }
}

ToggleGrid(grid);

toggle.addEventListener('click', () => {
    grid = !grid;
    ToggleGrid(grid);
});