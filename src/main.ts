import { handleSignIn, handleSignUp } from './components/Auth';

/**
 * Why: Main Controller
 * How: Maps UI buttons to Auth functions and prevents default form behavior.
 */

const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');
const emailInput = document.getElementById('email') as HTMLInputElement;
const passInput = document.getElementById('password') as HTMLInputElement;

// LOGIN ACTION
loginBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passInput.value;

    if (!email || !password) return alert("Credentials required!");

    const result = await handleSignIn(email, password);
    if (result.success) {
        alert("Welcome back, Adventurer!");
    } else {
        alert("Gate Closed: " + result.message);
    }
});

// SIGN UP ACTION
signUpBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passInput.value;

    if (!email || !password) return alert("An email and key are required to join!");

    const result = await handleSignUp(email, password);
    if (result.success) {
        alert("Guild request sent! Please check your email to verify your account.");
    } else {
        alert("Enrollment failed: " + result.message);
    }
});