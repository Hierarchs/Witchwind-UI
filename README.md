# Vellumgate

Foundry's chat, chat cards and the icons along the sides of the screen, restyled after The Elder Scrolls IV: Oblivion. It pairs with [Witchwind Inventory](https://github.com/Hierarchs/Witchwind-Inventory-System-VTT), which restyles the character sheets.

- **Chat messages.** Every message is its own parchment page, darker toward the edges, in a bronze frame with small corner brackets. Speakers' names are in Almendra, a calligraphic face; the text is in IM Fell English. A fine bronze rule runs under each header.
- **Whispers, blind rolls and emotes.** Each has a faint tint and a colored lower edge (indigo, violet, amber), so they still stand out.
- **dnd5e chat cards.** Item, attack, damage, save and check cards from dnd5e 6 get the same page: the item's picture in a bronze frame, its name in Almendra and its details in italic, the description set like a page from a book, tags as parchment labels, and Attack, Damage and Apply as raised parchment plaques that glow under the cursor.
- **Rolls.** Each roll sits in an engraved well with its total on a raised plate, the d20 shown as a dark ink die. Hits, successes and criticals are in green ink; misses, failures and fumbles in red. The breakdown that opens under a roll is a loose sheet of parchment. Core `/roll` results get the same treatment.
- **Damage and effect trays.** The Apply and Effects trays get small Almendra labels between fine rules, and the multiplier buttons press in when chosen.
- **Message box.** Where you type is a parchment page in the same frame, in IM Fell. It glows faintly while you're typing.
- **Side icons.** The sidebar tabs on the right and the scene controls on the left become round parchment medallions in bronze rims, with ink-drawn icons. Under the cursor the rim brightens and the medallion glows; the open tab or chosen tool is lit from within, its icon in red-brown ink. A new-message notice is a red wax seal. The message-mode and log buttons beside the message box match.

Everything else is Foundry's and dnd5e's own behavior. Animations are short and switch off if your system asks for reduced motion. Each player can turn the chat and the icons off separately.

## Requirements

- Foundry VTT v14
- Any system. The chat card styling is written for dnd5e 6.0 and newer; other systems get the message, roll and icon styling.

## Installing

Install it from this manifest URL (Foundry's **Install Module** dialog, or your host's module manager):

```
https://raw.githubusercontent.com/Hierarchs/Witchwind-UI/main/module.json
```

Then enable **Vellumgate** in your world's module settings.

## License

The module's code is under the [MIT License](LICENSE). The bundled fonts are under the SIL Open Font License 1.1; each license is in `fonts/`.

## Releasing a new version

1. Bump `version` in `module.json`.
2. Run `build.ps1` to rebuild `dist/vellumgate.zip`.
3. Commit and push. Foundry will offer the update the next time it checks.

## Settings

Under **Configure Settings > Vellumgate**:

| Setting | What it does |
|---|---|
| Restyle chat | Turns the parchment chat, cards, rolls and message box on or off for you. |
| Restyle side icons | Turns the medallion sidebar tabs and scene controls on or off for you. |

## Notes

- The fonts (Almendra, IM Fell English) are bundled with the module, so the look doesn't depend on an internet connection.
- Only the chat tab is restyled; the other sidebar tabs (Actors, Items, Journal and so on) keep Foundry's look behind their medallions.
