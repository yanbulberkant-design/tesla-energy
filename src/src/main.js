// src/main.js

const CLIENT_ID = '8f401783-1fbb-471c-8d6e-48f20da0899f'; // Jouw Client ID (veilig)

const loginBtn = document.getElementById('loginBtn');
const appDiv = document.getElementById('app');
const dataDiv = document.getElementById('data');

function loginWithTesla() {
  const redirectUri = encodeURIComponent('https://auth.tesla.com/void/callback');
  const scopes = 'openid vehicle_device_data vehicle_cmds vehicle_charging_cmds offline_access';

  const authUrl = `https://auth.tesla.com/oauth2/v3/authorize?` +
    `client_id=${CLIENT_ID}` +
    `&redirect_uri=${redirectUri}` +
    `&response_type=code` +
    `&scope=${scopes}` +
    `&state=tesla_energy`;

  window.location.href = authUrl;
}

loginBtn.onclick = loginWithTesla;

// Check of we een code hebben na login (eenmalig)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('code')) {
  const code = urlParams.get('code');
  alert('Login succesvol! Code ontvangen: ' + code.substring(0, 20) + '... Kopieer deze code en stuur hem naar mij – dan geef ik je de volgende stap voor het token.');
  // Hier normaal token exchange, maar dat doen we handmatig voor veiligheid
}

// Voor nu: simuleer data na login (later echte API)
if (urlParams.has('code') || localStorage.getItem('tesla_logged_in')) {
  appDiv.style.display = 'none';
  dataDiv.style.display = 'block';

  // Voorbeeld data (vervang dit later met echte)
  document.getElementById('battery').textContent = '87';
  document.getElementById('range').textContent = '412';
  document.getElementById('charging').textContent = 'Niet aan het laden';
  document.getElementById('updated').textContent = new Date().toLocaleTimeString();

  localStorage.setItem('tesla_logged_in', 'true');
}
