const grid_container = document.querySelector('.discover .grid');

async function getDiscovery() {
    const response = await fetch('data/discover.json');
    const data = await response.json();

    const discover = data.discover;
    
    let content = "";

    discover.forEach(m => {
        content += `
<div class="item">
    <h2>${m.name}</h2>
    <figure>
        <img src="${m.image}" alt="${m.name}" loading="lazy">
        <figcaption><i><a href="${m.source}">image source</a></i></figcaption>
    </figure>
    <address>${m.address}</address>
    <p>${m.description}</p>
    <button class="color">Learn More</button>
</div>
`;
    });

    grid_container.innerHTML = content;
}

getDiscovery();