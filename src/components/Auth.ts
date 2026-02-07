import { supabase } from '../api/supabaseClient';

/**
 * Why: Centralized Auth logic.
 * How: Communicates with Supabase to verify user identity.
 */
export const handleSignIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { success: false, message: error.message };
  return { success: true, data };
};