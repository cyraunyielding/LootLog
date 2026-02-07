/**
 * Safety Gate: Data Schema
 * Why: Ensures data entering the 'Blue Box' matches the expected schema.
 * How: Defines TypeScript interfaces for the database objects.
 */

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  total_gold: number;
  current_streak: number;
  created_at: string;
}

export interface ReadingLog {
  id: string;
  child_id: string;
  book_title: string;
  pages_read: number;
  gold_earned: number;
  date: string;
}

export type AuthResponse = {
  success: boolean;
  message?: string;
  data?: any;
};