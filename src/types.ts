/**
 * Safety Gate: Data Schema
 * Why: Every function must match the expected schema to reduce risk of crashes.
 */
export interface ChildProfile {
  id: string;
  total_gold: number;
  current_level: number;
  total_xp: number;
}