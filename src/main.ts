import { handleSignIn, handleSignUp } from './components/Auth';

/**
 * WHY: Main Controller for Authentication
 * HOW: Listens for UI events and uses the Auth component to talk to Supabase.
 */

const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');
const emailInput = document.getElementById('email') as HTMLInputElement;
const passInput = document.getElementById('password') as HTMLInputElement;

loginBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passInput.value;

    if (!email || !password) return alert("Enter credentials, Adventurer!");

    const result = await handleSignIn(email, password);
    if (result.success) {
        window.location.href = '/dashboard.html';
    } else {
        alert("Access Denied: " + result.message);
    }
});

signUpBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passInput.value;

    if (!email || !password) return alert("Email and Key required!");

    const result = await handleSignUp(email, password);
    if (result.success) {
        alert("Guild Invitation Sent! Check your email to verify your account.");
    } else {
        alert("Enrollment Failed: " + result.message);
    }
});