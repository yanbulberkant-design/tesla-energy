// src/main.js

const CLIENT_ID = '8f401783-1fbb-471c-8d6e-48f20da0899f'; // Jouw Client ID

// Functie om in te loggen bij Tesla
function loginTesla() {
  const redirectUri = 'https://auth.tesla.com/void/callback';
  const scopes = 'openid vehicle_device_data vehicle_cmds vehicle_charging_cmds offline_access';

  const authUrl = `https://auth.tesla.com/oauth2/v3/authorize?` +
    `client_id=${CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&response_type=code` +
    `&scope=${encodeURIComponent(scopes)}` +
    `&state=12345`;

  window.location.href = authUrl;
}

// Toon login knop als nog niet ingelogd
if (!localStorage.getItem('tesla_token')) {
  document.body.innerHTML += '<button onclick="loginTesla()" style="padding:20px;font-size:20px;">Log in met Tesla-account</button>';
} else {
  document.body.innerHTML += '<p>Bezig met ophalen van data...</p>';
  // Hier komt later de echte data-fetch
}
