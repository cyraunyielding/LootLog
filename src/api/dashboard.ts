import { calculateRewards } from './logic/rewards';
import { submitReadingLog, updateChildStats, getChildProfile } from './api/dataService';
import { ReadingLog } from './types/schema';

/**
 * WHY: Orchestrates the 'Blue Box' workflow for the User Interface.
 * HOW: Takes UI input, processes through Modular Logic, and saves via Scalable Infrastructure.
 */

const questBtn = document.getElementById('completeQuestBtn');
const titleInput = document.getElementById('bookTitle') as HTMLInputElement;
const pagesInput = document.getElementById('pageCount') as HTMLInputElement;

questBtn?.addEventListener('click', async () => {
    const title = titleInput.value;
    const pages = parseInt(pagesInput.value);

    // 1. Safety Gate: Basic Validation
    if (!title || isNaN(pages) || pages <= 0) {
        return alert("Adventurer, please enter a valid book title and page count!");
    }

    // 2. Modular Logic: Calculate Rewards
    const rewards = calculateRewards(pages);

    // 3. Infrastructure: Save the Log
    // Note: In a real app, 'user_id' comes from your Supabase Auth session
    const newEntry: Partial<ReadingLog> = {
        book_title: title,
        pages_read: pages,
        gold_earned: rewards.goldEarned,
        xp_earned: rewards.xpEarned,
        date: new Date().toISOString()
    };

    const { error } = await submitReadingLog(newEntry);

    if (error) {
        console.error("Database Error:", error.message);
        alert("Quest failed to save to the kingdom records.");
    } else {
        alert(`⚔️ Victory! You earned ${rewards.goldEarned} Gold and ${rewards.xpEarned} XP!`);
        
        // Reset the UI
        titleInput.value = '';
        pagesInput.value = '';
        
        // Next Step: Trigger a UI refresh to show the new gold total
    }
});