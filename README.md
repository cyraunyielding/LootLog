# LootLog
Reading Tracker POC
# ⚔️ LootLog: The LitRPG Reading Quest
**Version:** 1.0.0-Alpha  
**Status:** LLC Operating (Feb 2026)

LootLog turns daily reading into a gamified adventure, rewarding young heroes with gold and XP based on their progress.

---

## 🛡️ Developer Standards (THE BLUE BOX)
All code in this repository must adhere to the following:
* **Code Documentation:** Every function must include JSDoc comments explaining the 'Why' and 'How'.
* **Modular Logic:** LitRPG math formulas are stored in `/src/logic/`. No hard-coding in UI components.
* **Scalable Infrastructure:** Centralized API service via Supabase. Schema is normalized for future cloud migration.
* **Safety Gates:** TypeScript interfaces (see `schema.ts`) ensure data matches expected schemas before processing.

---

## 🗺️ Project Phase Hierarchy

### Phase 1: Core Engine (Current)
- [x] LLC Formation & Legal Setup
- [x] Repository Architecture (The Blue Box Folders)
- [x] Supabase Database Connection
- [x] Modular Math Logic (`rewards.ts`)
- [x] Authentication Gatekeeper (`Auth.ts`)
- [x] The Kingdom Entrance (`index.html`)

### Phase 2: The Hero's Journey
- [ ] Character Dashboard (Visualizing Gold & XP)
- [ ] Quest Logging (Adding books and pages)
- [ ] Streak Tracking Logic
- [ ] Sound Effects & Level-up Animations

### Phase 3: Marketplace & Rewards
- [ ] Gold-to-Real-Life Reward Redemption
- [ ] Avatar Customization
- [ ] Mobile App Packaging (PWA)

---

## 📂 Repository Structure
- `/src/api/`: Database clients and connection logic.
- `/src/components/`: UI-related logic (Auth, Buttons).
- `/src/logic/`: The "Brain"—Math formulas and data schemas.
- `/index.html`: The application entry point.

---

## ⚖️ Compliance & Legal
- **Entity:** LootLog LLC
- **Compliance:** BOI Report filed with FinCEN (Feb 2026).
- **Safety:** Role-Level Security (RLS) active on all database tables.