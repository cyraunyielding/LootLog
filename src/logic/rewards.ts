/**
 * Modular Logic: LitRPG Math
 * Why: Keeps math formulas separate from UI.
 * How: Gold = Pages * 0.5 | XP = Pages * 2
 */

export const calculateRewards = (pages: number) => {
    return {
        goldEarned: Math.floor(pages * 0.5),
        xpEarned: Math.floor(pages * 2)
    };
};

/**
 * Level Progression Logic
 */
export const getXPRequired = (currentLevel: number): number => {
    return Math.floor(100 * Math.pow(currentLevel, 1.5));
};