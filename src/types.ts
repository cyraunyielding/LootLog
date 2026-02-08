/**
 * Safety Gate: Data Schema
 * Why: Ensures data entering the 'Blue Box' matches the expected schema.
 */

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  gold_balance: number; // Matches the SQL update above
  current_level: number;
  total_xp: number;
  created_at: string;
}

export interface ReadingLog {
  id: string;
  user_id: string;
  book_title: string;
  pages_read: number;
  gold_earned: number;
  xp_earned: number;
  created_at: string;
}

export type AuthResponse = {
  success: boolean;
  message?: string;
  data?: any;
};