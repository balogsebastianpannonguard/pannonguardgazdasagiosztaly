# PannonGuard Gazdasági osztály

Meghívásos, kétlépcsős azonosítással védett alrendszer a Gazdasági osztály munkakörhöz, a PannonGuard Komplex része.

## Működés

- **Meghívás:** az Elosztóban (pannonguard-iranyitokozpont) a `Gazdasági osztály` munkakörre küldött meghívó regisztrációs linkje ide mutat (`/regisztracio?token=…`).
- **Regisztráció:** név és jelszó, majd hitelesítő alkalmazás (TOTP) beállítása. A link egyszer használható, 7 napig érvényes.
- **Belépés:** jelszó + hatjegyű kód. Az Elosztóban visszavont hozzáférés azonnal érvényes, a hitelesítő és a jelszó onnan visszaállítható.
- **Saját adattér:** minden gazdasági vezető elkülönített adatteret kap (`workspaces`); a modulok adatait kizárólag a `src/lib/workspace.ts` `ownedCollection` segédjén keresztül szabad olvasni és írni, így senki sem látja a másik adatait.
- **Modulok (fejlesztés alatt, zárolva):**
  1. Saját alkalmazottakkal végzett vagyonvédelmi tevékenység elemzése
  2. Alvállalkozóval végzett vagyonvédelmi tevékenység elemzése
  3. Havi eredmény elemzése, kimutatások készítése
  4. Főkönyvi karton elemzése
  5. KSH statisztikák készítésében való segítség

## Környezeti változók

| Változó | Leírás |
| --- | --- |
| `MONGODB_URI` | MongoDB kapcsolat (közös fürt) |
| `MONGODB_DB` | A Gazdasági osztály saját adatbázisa (`pannonguard_gazdasagi`) |
| `INVITES_DB` | Az Elosztó adatbázisa (`pannonguard_eloszto`) |
| `TOTP_ENCRYPTION_KEY` | 64 hex karakter; `npm run setup:secrets` generálja |

## Fejlesztés

```bash
npm install
npm run setup:secrets
npm run dev   # http://localhost:3005
```
