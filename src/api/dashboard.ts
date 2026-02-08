import { supabase } from './api/supabaseClient';
import { calculateRewards } from './logic/rewards';

/**
 * Modular Logic Connection
 * Why: Every function must include JSDoc comments explaining the 'Why' and 'How'.
 * How: Uses the calculateRewards logic to update the Supabase database.
 */

const questBtn = document.getElementById('completeQuestBtn');
const goldDisplay = document.getElementById('goldDisplay');

questBtn?.addEventListener('click', async () => {
    const titleInput = document.getElementById('bookTitle') as HTMLInputElement;
    const pagesInput = document.getElementById('pageCount') as HTMLInputElement;
    
    const pages = parseInt(pagesInput.value);
    const title = titleInput.value;

    if (!title || isNaN(pages)) {
        alert("Enter your book title and pages read!");
        return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return alert("Session expired. Please log in again.");

    // Call Modular Logic
    const rewards = calculateRewards(pages);

    // Update Database
    const { error } = await supabase.from('reading_logs').insert([{
        user_id: user.id,
        book_title: title,
        pages_read: pages,
        gold_earned: rewards.goldEarned,
        xp_earned: rewards.xpEarned
    }]);

    if (error) {
        console.error(error);
        alert("Quest log failed. Check your connection.");
    } else {
        alert(`Success! You earned ${rewards.goldEarned} Gold!`);
        if (goldDisplay) goldDisplay.innerText = `${rewards.goldEarned} 🪙`;
        titleInput.value = '';
        pagesInput.value = '';
    }
});