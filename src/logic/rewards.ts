/**
 * Why: Modular math formulas for LitRPG elements.
 * How: Calculates gold based on pages and age difficulty.
 */
export const calculateGoldReward = (pages: number, age: number): number => {
  const multiplier = Math.min(Math.max(7 / age, 0.5), 2.0);
  return Math.round(pages * multiplier);
};