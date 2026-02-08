/**
 * Safety Gate: Data Schema
 * Why: Ensures data entering the 'Blue Box' matches the expected schema.
 */
export interface ChildProfile {
  id: string;
  gold_balance: number;
  current_level: number;
  total_xp: number;
}

export interface ReadingLog {
  user_id: string;
  book_title: string;
  pages_read: number;
  gold_earned: number;
  xp_earned: number;
}