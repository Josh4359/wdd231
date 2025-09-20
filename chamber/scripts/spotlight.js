memberships = ["Bronze", "Siver", "Gold"];

const grid_container = document.querySelector('.business-cards.grid');

async function getSpotlight() {
    const response = await fetch('data/members.json');
    const data = await response.json();

    let spotlight = data.members.filter(x => x.membership > 1);
    spotlight = spotlight.sort(() => 0.5 - Math.random());
    spotlight = spotlight.slice(0, 3);
    
    let content = "";

    spotlight.forEach(m => {
        content += `
<div class="card">
    <div class="title">
        <h2>${m.name}</h2>
        <i>${m.tagline}</i>
    </div>
    <img src="${m.logo}" alt="Business Logo" class="logo">
    <ul>
        <li><b>Membership:</b> ${memberships[m.membership - 1]}</li>
        <li><b>URL:</b> ${m.website}</li>
    </ul>
</div>
`;
    });

    grid_container.innerHTML = content;
}

getSpotlight();