import { supabase } from '../api/supabaseClient';

export const handleSignIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { success: false, message: error.message };
  return { success: true, data };
};

export const handleSignUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ 
    email, 
    password,
    options: { emailRedirectTo: window.location.origin }
  });
  if (error) return { success: false, message: error.message };
  return { success: true, data };
};