import { supabase } from '../api/supabaseClient';

/**
 * Why: Modular Auth Logic
 * How: Communicates with Supabase Auth API for login and registration.
 */

export const handleSignIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { success: false, message: error.message };
  return { success: true, data };
};

export const handleSignUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ 
    email, 
    password,
    options: {
        emailRedirectTo: window.location.origin // Returns them to your site after they click the email link
    }
  });
  if (error) return { success: false, message: error.message };
  return { success: true, data };
};