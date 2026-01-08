// src/main.js

const CLIENT_ID = '8f401783-1fbb-471c-8d6e-48f20da0899f'; // Jouw Tesla Client ID

function loginWithTesla() {
  const redirectUri = encodeURIComponent('https://auth.tesla.com/void/callback');
  const scopes = 'openid vehicle_device_data vehicle_cmds vehicle_charging_cmds offline_access';

  const authUrl = `https://auth.tesla.com/oauth2/v3/authorize?` +
    `client_id=${CLIENT_ID}` +
    `&redirect_uri=${redirectUri}` +
    `&response_type=code` +
    `&scope=${scopes}` +
    `&state=tesla_dashboard`;

  window.location.href = authUrl;
}

// Maak een mooie rode Tesla-login knop
const button = document.createElement('button');
button.textContent = 'Log in met Tesla-account';
button.style = 'padding: 20px 40px; font-size: 20px; background-color: #e82127; color: white; border: none; border-radius: 10px; cursor: pointer; margin-top: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);';
button.onclick = loginWithTesla;

// Voeg de knop toe aan de pagina
const container = document.getElementById('app') || document.body;
container.appendChild(button);

// Placeholder voor data (komt later)
const dataInfo = document.createElement('p');
dataInfo.textContent = 'Na login tonen we hier je batterij, range en laadstatus live!';
dataInfo.style = 'margin-top: 40px; font-size: 18px; color: #ccc;';
container.appendChild(dataInfo);
