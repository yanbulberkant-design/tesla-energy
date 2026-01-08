// src/main.js

const CLIENT_ID = '8f401783-1fbb-471c-8d6e-48f20da0899f'; // Jouw Client ID

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

// Toon login knop als nog niet ingelogd
const loginBtn = document.createElement('button');
loginBtn.textContent = 'Log in met Tesla-account';
loginBtn.style = 'padding: 20px 40px; font-size: 20px; background: #e82127; color: white; border: none; border-radius: 8px; cursor: pointer; margin-top: 30px;';
loginBtn.onclick = loginWithTesla;

const appDiv = document.getElementById('app') || document.body;
appDiv.appendChild(loginBtn);

// Placeholder voor data
const dataDiv = document.createElement('div');
dataDiv.id = 'data';
dataDiv.style = 'margin-top: 50px; font-size: 24px;';
dataDiv.innerHTML = '<p>Wacht op login...</p>';
appDiv.appendChild(dataDiv);
