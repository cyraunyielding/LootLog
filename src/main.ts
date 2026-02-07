import { handleSignIn } from './components/Auth';

/**
 * Why: Main Entry Point
 * How: Attaches event listeners to the UI and triggers the Auth logic.
 */
const loginBtn = document.getElementById('loginBtn');
const emailInput = document.getElementById('email') as HTMLInputElement;
const passInput = document.getElementById('password') as HTMLInputElement;

loginBtn?.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passInput.value;

    if (!email || !password) {
        alert("Enter your credentials, Adventurer!");
        return;
    }

    const result = await handleSignIn(email, password);
    if (result.success) {
        alert("Welcome back!");
    } else {
        alert("Access Denied: " + result.message);
    }
});