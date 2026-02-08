import { supabase } from './supabaseClient';
import { ReadingLog, ChildProfile } from '../types/schema';

/**
 * Scalable Infrastructure: Centralized API Service
 * Why: Use a centralized API service for database calls. 
 * How: Wraps Supabase calls with TypeScript types for safety.
 */

export const submitReadingLog = async (log: Partial<ReadingLog>) => {
  const { data, error } = await supabase
    .from('reading_logs')
    .insert([log]);
  
  return { data, error };
};

export const updateChildStats = async (childId: string, updates: Partial<ChildProfile>) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', childId);
    
  return { data, error };
};