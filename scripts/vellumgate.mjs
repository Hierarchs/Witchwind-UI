const MODULE_ID = "vellumgate";

/* -------------------------------------------- */
/*  Settings                                    */
/* -------------------------------------------- */

Hooks.once("init", () => {
  const register = (key, data) => game.settings.register(MODULE_ID, key, {
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange: applyStyles,
    ...data
  });

  register("chat", {
    name: "VELLUMGATE.Settings.Chat.Name",
    hint: "VELLUMGATE.Settings.Chat.Hint"
  });

  register("controls", {
    name: "VELLUMGATE.Settings.Controls.Name",
    hint: "VELLUMGATE.Settings.Controls.Hint"
  });

  // Applied during init, before the interface first renders, so it never flashes the default style.
  applyStyles();
});

/* -------------------------------------------- */
/*  Styles                                      */
/* -------------------------------------------- */

/** Everything in the stylesheet is scoped under these body classes, so switching a setting off restores the default at once. */
function applyStyles() {
  document.body.classList.toggle("vg-chat", game.settings.get(MODULE_ID, "chat"));
  document.body.classList.toggle("vg-controls", game.settings.get(MODULE_ID, "controls"));
}
