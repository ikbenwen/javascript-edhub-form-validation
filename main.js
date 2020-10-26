//referenties naar inputvelden opslaan
const usernameInput = document.getElementById('input-username');
const passwordInput = document.getElementById('input-password');

//sla referenties naar warning-message op
const usernameWarning = document.getElementById('username-warning');
const passwordWarning = document.getElementById('password-warning');

// voeg eventlisteners toe op inputvelden
usernameInput.addEventListener("keyup", checkUsername);
passwordInput.addEventListener('keyup', checkPassword);

// maak een functie die de username input checkt en door de event listener wordt aangeroepen
function checkUsername(e) {
    // wanneer de waarde een @ bevat willen we de melding WEL tonen.
    if (e.target.value.includes('@')) {
        usernameWarning.textContent = 'Gebruikersnaam mag geen @ bevatten';
        // in alle andere gevallen tonen we de melding niet.
    } else {
        usernameWarning.textContent = ' ';
    }
}

// maak een functie die de password input checkt en door de event listener wordt aangeroepen
function checkPassword (e) {
    // Als het invoerveld leeg is, of wanneer het wachtwoord lang genoeg is willen we de melding NIET tonen
    if (e.target.value === '' || e.target.value.length > 6) {
        passwordWarning.textContent = '';
    } else {
        // in alle andere gevallen (e.target.value !== '' && e.target.value.length <= 6) tonen we de melding WEL
        passwordWarning.textContent = 'Wachtwoord is te kort, gebruik minimaal 6 tekens';
    }
}

