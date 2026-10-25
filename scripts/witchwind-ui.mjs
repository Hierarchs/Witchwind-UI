const MODULE_ID = "witchwind-ui";

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
    name: "WITCHWIND_UI.Settings.Chat.Name",
    hint: "WITCHWIND_UI.Settings.Chat.Hint"
  });

  register("controls", {
    name: "WITCHWIND_UI.Settings.Controls.Name",
    hint: "WITCHWIND_UI.Settings.Controls.Hint"
  });

  // Applied during init, before the interface first renders, so it never flashes the default style.
  applyStyles();
});

/* -------------------------------------------- */
/*  Styles                                      */
/* -------------------------------------------- */

/** Everything in the stylesheet is scoped under these body classes, so switching a setting off restores the default at once. */
function applyStyles() {
  document.body.classList.toggle("wwui-chat", game.settings.get(MODULE_ID, "chat"));
  document.body.classList.toggle("wwui-controls", game.settings.get(MODULE_ID, "controls"));
}
