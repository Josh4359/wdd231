const info = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p>First Name: ${info.get('first-name')}</p>
<p>Last Name: ${info.get('last-name')}</p>
<p>Email: ${info.get('email')}</p>
<p>Phone Number: ${info.get('phone')}</p>
<p>Timestamp: ${info.get('timestamp')}</p>
`;