import { signIn, signUp } from './api/authService';

/**
 * WHY: UI Controller for the Entry Gate.
 * HOW: Hooks into the auth service to manage user entry.
 */

const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');
const emailInput = document.getElementById('email') as HTMLInputElement;
const passInput = document.getElementById('password') as HTMLInputElement;

loginBtn?.addEventListener('click', async () => {
    const res = await signIn(emailInput.value, passInput.value);
    if (res.success) {
        window.location.href = '/dashboard.html';
    } else {
        alert(`Access Denied: ${res.message}`);
    }
});

signUpBtn?.addEventListener('click', async () => {
    const res = await signUp(emailInput.value, passInput.value);
    alert(res.message);
});