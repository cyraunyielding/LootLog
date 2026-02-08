/**
 * Modular Logic: LitRPG Math
 * Why: Do not hard-code math into UI components.
 */
export const calculateGold = (pages: number): number => Math.floor(pages * 0.5);
export const calculateXP = (pages: number): number => pages * 2;