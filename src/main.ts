import { handleSignIn, handleSignUp } from './components/Auth';

const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');
const emailInput = document.getElementById('email') as HTMLInputElement;
const passInput = document.getElementById('password') as HTMLInputElement;

loginBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passInput.value;
    if (!email || !password) return alert("Credentials required!");
    
    const result = await handleSignIn(email, password);
    if (result.success) {
        window.location.href = '/dashboard.html';
    } else {
        alert("Gate Closed: " + result.message);
    }
});

signUpBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passInput.value;
    if (!email || !password) return alert("Email and Key required!");

    const result = await handleSignUp(email, password);
    if (result.success) {
        alert("Guild request sent! Check your email to verify.");
    } else {
        alert("Enrollment failed: " + result.message);
    }
});