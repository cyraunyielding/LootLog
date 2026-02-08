import { supabase } from './supabaseClient';
import { AuthResponse } from '../types/schema';

/**
 * Scalable Infrastructure: Centralized Auth Service
 * WHY: Decouples authentication logic from the UI.
 * HOW: Wraps Supabase Auth methods in a standardized response format.
 */

export const signUp = async (email: string, pass: string): Promise<AuthResponse> => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password: pass,
        options: { emailRedirectTo: window.location.origin }
    });

    if (error) return { success: false, message: error.message };
    return { success: true, message: "Check your email for the magic link!", data };
};

export const signIn = async (email: string, pass: string): Promise<AuthResponse> => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: pass,
    });

    if (error) return { success: false, message: error.message };
    return { success: true, data };
};

export const signOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
};

/**
 * WHY: Safety Gate for Protected Routes
 * HOW: Checks if a valid session exists before allowing access to the dashboard.
 */
export const getCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
};