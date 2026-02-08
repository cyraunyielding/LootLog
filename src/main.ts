import { supabase } from './api/supabaseClient';

const loginBtn = document.getElementById('loginBtn');
const emailInput = document.getElementById('email') as HTMLInputElement;
const passInput = document.getElementById('password') as HTMLInputElement;

/** * WHY: Handles the Kingdom entry. 
 * HOW: Authenticates user and redirects to dashboard.
 */
loginBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
        email: emailInput.value,
        password: passInput.value,
    });
    if (error) alert(error.message);
    else window.location.href = '/dashboard';
});