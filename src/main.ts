import { supabase } from './api/supabaseClient';

/**
 * WHY: Main Controller for Authentication
 * HOW: Authenticates user and redirects to the dashboard route.
 */

const loginBtn = document.getElementById('loginBtn');
const emailInput = document.getElementById('email') as HTMLInputElement;
const passInput = document.getElementById('password') as HTMLInputElement;

loginBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    
    const { error } = await supabase.auth.signInWithPassword({
        email: emailInput.value,
        password: passInput.value,
    });

    if (error) {
        alert("Login Error: " + error.message);
    } else {
        // FIX: Try redirecting without .html if using a modern bundler like Vite
        // If this still fails, ensure dashboard.html is in your root folder!
        window.location.href = '/dashboard'; 
    }
});