# Witchwind UI

The rest of Foundry's interface in the style of [Witchwind Inventory](https://github.com/Hierarchs/Witchwind-Inventory-System-VTT): dark leather and gold, Cinzel headings, square slots and parchment or steel cards. Witchwind Inventory restyles the character sheets; this restyles the chat and its cards, the sidebar tabs, tooltips, menus and dialogs, and the controls around the edges of the screen, so the two read as one.

### Chat

- **Chat cards.** Every message is a card with a thin inner rule, in parchment or dark steel (your choice, as with Witchwind Inventory's item cards). Speakers and item names are in Cinzel, details in Alegreya Sans and text in Alegreya. Portraits sit in a thin gold frame inside a dark mat, as on the sheets.
- **Whispers, blind rolls and emotes** keep a colored lower edge (indigo, violet, amber), so they still stand out.
- **dnd5e cards.** Item, attack, damage, save and check cards from dnd5e 6 get the same card: the item's picture framed, the description on a deeper inset between fine rules, tags as outlined labels, and Attack, Damage and Apply as solid buttons in Cinzel. A chosen damage multiplier is lit gold.
- **Rolls.** Each total sits on a framed plate in Cinzel, with the d20 shown as a solid die. Hits, successes and criticals are in green; misses, failures and fumbles in red. Core `/roll` results get the same treatment.
- **Message box.** Where you type is dark leather with a thin inner rule, in Alegreya, and it glows gold while you're typing.

### Sidebar tabs

- **Every tab is a leather panel.** Combat, Scenes, Actors, Items, Journal, Tables, Cards, Macros, Playlists, Compendiums and Settings, docked or popped out, use the sheets' leather with a thin inner rule.
- **Lists.** Names are in Alegreya Sans and pictures in a thin gold frame inside a dark mat; the chosen or right-clicked entry is ringed in gold. Folders become raised leather strips with their names in Cinzel over a gold rule, and a folder's own color still shows through. Buttons have the sheets' thin gold edge and turn gold under the cursor.
- **Combat tracker.** The encounter is in gold Cinzel, initiative is large in gold, and the combatant whose turn it is gets a lit band and a gold ring.

### Tooltips, menus and dialogs

- **Tooltips** are Witchwind Inventory's steel card. dnd5e's item and effect cards are left to dnd5e, or to Witchwind Inventory if you use it.
- **Right-click menus** are steel panels; the entry under the cursor turns gold on a faint gold band.
- **Notifications** are steel slips edged in Witchwind Inventory's rarity colors: blue for news, orange for warnings, red for errors, green for success. Progress bars fill in gold.
- **Dialogs, dnd5e's roll dialogs and Configure Settings** are leather windows with the sheets' header: the title in Cinzel over a double gold rule. The main action is solid gold, the others outlined; legends and headings are gold Cinzel.

### Screen controls

- **Side icons.** The sidebar tabs on the right and the scene controls on the left become square slots on dark leather, like the inventory grid. Under the cursor a slot rings in gold; the open tab or chosen tool turns solid gold with a dark icon, like the sheets' tabs. A new-message notice is a gold diamond, like an equipped item's mark. The message-mode and log buttons beside the message box match.
- **Players.** The player list is a small leather panel; your own name is in gold and idle players are faded.
- **Macro bar.** Each slot is an inventory slot: square, framed, sunk into the leather and gold-ringed under the cursor, with its key number in gold on a dark tab.
- **Scene navigation.** Scene names sit on leather plaques in Cinzel; the active scene is edged in gold, and the one you're viewing is gold with a gold underline.
- **Token HUD.** The buttons around a token are slots, gold-edged when on; hit points and the second bar are in Cinzel, edged in the rarity green and blue. The status-effect palette is a steel panel.
- **Pause.** "Game Paused" is set in gold Cinzel.

Everything else is Foundry's and dnd5e's own behavior. Animations are short and switch off if your system asks for reduced motion. Each player can set the chat style and turn each other part off separately.

## Requirements

- Foundry VTT v14
- Any system. The chat card styling is written for dnd5e 6.0 and newer; other systems get the message, roll and interface styling.

## Installing

Install it from this manifest URL (Foundry's **Install Module** dialog, or your host's module manager):

```
https://raw.githubusercontent.com/Hierarchs/Witchwind-UI/main/module.json
```

Then enable **Witchwind UI** in your world's module settings.

## License

The module's code is under the [MIT License](LICENSE). The bundled fonts are under the SIL Open Font License 1.1; each license is in `fonts/`.

## Releasing a new version

1. Bump `version` in `module.json`.
2. Run `build.ps1` to rebuild `dist/witchwind-ui.zip`.
3. Commit and push. Foundry will offer the update the next time it checks.

## Settings

Under **Configure Settings > Witchwind UI**:

| Setting | What it does |
|---|---|
| Chat card style | Parchment, Steel, or Foundry default for the chat, its cards and the message box. |
| Restyle sidebar tabs | Turns the leather Combat, Actors, Items, Journal and other tabs on or off for you. |
| Restyle screen controls | Turns the slot icons, player list, macro bar, scene navigation and token HUD on or off for you. |
| Restyle tooltips, menus and dialogs | Turns the steel tooltips, right-click menus and notifications and the leather dialogs on or off for you. |

## Notes

- The fonts (Cinzel, Alegreya, Alegreya Sans) are the same files Witchwind Inventory bundles, so the look doesn't depend on an internet connection.
- Other windows (sheets, journal pages, other modules' apps) keep their own look. Witchwind Inventory restyles the dnd5e sheets.
- With Nik's DnD5e Tweaks' chat card styling on, its roll-type colors (the attack, damage and save badges, the ATK and DMG labels and the colored action buttons) follow the chat card style rather than Foundry's interface theme: its light colors on parchment, drawn as tints so they sit on the paper, and its dark colors on steel.
