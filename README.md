# Witchwind UI

Foundry's interface restyled after The Elder Scrolls IV: Oblivion: the chat and its cards, the sidebar tabs, tooltips, menus and dialogs, and the controls around the edges of the screen. It pairs with [Witchwind Inventory](https://github.com/Hierarchs/Witchwind-Inventory-System-VTT), which restyles the character sheets.

### Chat

- **Chat messages.** Every message is its own parchment page, darker toward the edges, in a bronze frame with small corner brackets. Speakers' names are in Almendra, a calligraphic face; the text is in IM Fell English. A fine bronze rule runs under each header.
- **Whispers, blind rolls and emotes.** Each has a faint tint and a colored lower edge (indigo, violet, amber), so they still stand out.
- **dnd5e chat cards.** Item, attack, damage, save and check cards from dnd5e 6 get the same page: the item's picture in a bronze frame, its name in Almendra and its details in italic, the description set like a page from a book, tags as parchment labels, and Attack, Damage and Apply as raised parchment plaques that glow under the cursor.
- **Rolls.** Each roll sits in an engraved well with its total on a raised plate, the d20 shown as a dark ink die. Hits, successes and criticals are in green ink; misses, failures and fumbles in red. The breakdown that opens under a roll is a loose sheet of parchment. Core `/roll` results get the same treatment.
- **Damage and effect trays.** The Apply and Effects trays get small Almendra labels between fine rules, and the multiplier buttons press in when chosen.
- **Message box.** Where you type is a parchment page in the same frame, in IM Fell. It glows faintly while you're typing.

### Sidebar tabs

- **Every tab is a parchment page.** Combat, Scenes, Actors, Items, Journal, Tables, Cards, Macros, Playlists, Compendiums and Settings, docked or popped out, each sit in a bronze frame with ink text.
- **Lists.** Names are in Almendra and pictures in small bronze frames; the chosen or right-clicked entry is ringed in bronze. Folders become bronze ribbons, and a folder's own color still shows through. Create buttons are raised plaques and the search box an engraved strip.
- **Combat tracker.** The encounter and each combatant's name are in Almendra, initiative is large in red-brown ink, and the combatant whose turn it is gets a lit band and a bronze ring. Defeated combatants are struck through as usual.

### Tooltips, menus and dialogs

- **Tooltips** are small slips of parchment. dnd5e's item and effect cards are left to dnd5e, or to Witchwind Inventory if you use it.
- **Right-click menus** are parchment lists in a bronze frame; the entry under the cursor gets a darker band, as Oblivion's lists do.
- **Notifications** are parchment slips with a colored edge and icon for their kind: blue for news, amber for warnings, red for errors, green for success. Progress bars fill in bronze.
- **Dialogs, dnd5e's roll dialogs and Configure Settings** are parchment windows with a dark bronze title bar in Almendra, plaque buttons, engraved fields and Almendra headings.

### Screen controls

- **Side icons.** The sidebar tabs on the right and the scene controls on the left become round parchment medallions in bronze rims, with ink-drawn icons. Under the cursor the rim brightens and the medallion glows; the open tab or chosen tool is lit from within, its icon in red-brown ink. A new-message notice is a red wax seal. The message-mode and log buttons beside the message box match.
- **Players.** The player list is a small parchment page; your own name is in red-brown ink and idle players are faded.
- **Macro bar.** Each slot is a parchment tile in a bronze rim, with its key number on a small bronze tab.
- **Scene navigation.** Scene names sit on parchment plaques; the active scene is ringed in bright bronze and the one you're viewing is lit.
- **Token HUD.** The buttons around a token are parchment tiles with Foundry's icons redrawn in brown ink, and hit points sit on raised plaques edged in green and blue. The status-effect palette is a parchment panel.
- **Pause.** "Game Paused" is set in bronze Almendra.

Everything else is Foundry's and dnd5e's own behavior. Animations are short and switch off if your system asks for reduced motion. Each player can turn each part off separately.

## Requirements

- Foundry VTT v14
- Any system. The chat card styling is written for dnd5e 6.0 and newer; other systems get the message, roll and icon styling.

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
| Restyle chat | Turns the parchment chat, cards, rolls and message box on or off for you. |
| Restyle sidebar tabs | Turns the parchment Combat, Actors, Items, Journal and other tabs on or off for you. |
| Restyle screen controls | Turns the medallion icons, player list, macro bar, scene navigation and token HUD on or off for you. |
| Restyle tooltips, menus and dialogs | Turns the parchment tooltips, right-click menus, notifications and dialogs on or off for you. |

## Notes

- The fonts (Almendra, IM Fell English) are bundled with the module, so the look doesn't depend on an internet connection.
- Other windows (sheets, journal pages, other modules' apps) keep their own look. Witchwind Inventory restyles the dnd5e sheets.
