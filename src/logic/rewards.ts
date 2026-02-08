/**
 * Modular Logic: LitRPG Math
 * Why: Store all LitRPG math formulas in a standalone /logic directory. 
 * How: Calculated rewards based on user input (pages).
 */

/**
 * Calculates gold and XP rewards.
 * @param pages - Number of pages read.
 */
export const calculateRewards = (pages: number) => {
    const goldMultiplier = 0.5;
    const xpMultiplier = 2;

    return {
        goldEarned: Math.floor(pages * goldMultiplier),
        xpEarned: Math.floor(pages * xpMultiplier)
    };
};

/**
 * Calculates XP required for the next level.
 * @param currentLevel - The player's current level.
 */
export const getXPRequired = (currentLevel: number): number => {
    return Math.floor(100 * Math.pow(currentLevel, 1.5));
};