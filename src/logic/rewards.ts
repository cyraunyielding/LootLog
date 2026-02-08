/**
 * Modular Logic: LitRPG Math
 * Why: Store math formulas in /logic, not in UI components.
 */
export const calculateRewards = (pages: number) => {
    return {
        goldEarned: Math.floor(pages * 0.5),
        xpEarned: Math.floor(pages * 2)
    };
};