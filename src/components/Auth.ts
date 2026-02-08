import { supabase } from '../api/supabaseClient';

/**
 * WHY: Modular Auth Logic (Blue Box Standard)
 * HOW: Uses the centralized Supabase client to perform auth actions.
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
      // This sends users back to your Vercel site after they click the email link
      emailRedirectTo: window.location.origin 
    }
  });
  if (error) return { success: false, message: error.message };
  return { success: true, data };
};