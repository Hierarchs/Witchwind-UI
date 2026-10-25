const MODULE_ID = "witchwind-ui";

/** Each setting turns on one part of the restyle, through a body class the stylesheet is scoped under. */
const AREAS = {
  chat: "wwui-chat",
  sidebar: "wwui-sidebar",
  controls: "wwui-controls",
  popups: "wwui-popups"
};

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

  register("sidebar", {
    name: "WITCHWIND_UI.Settings.Sidebar.Name",
    hint: "WITCHWIND_UI.Settings.Sidebar.Hint"
  });

  register("controls", {
    name: "WITCHWIND_UI.Settings.Controls.Name",
    hint: "WITCHWIND_UI.Settings.Controls.Hint"
  });

  register("popups", {
    name: "WITCHWIND_UI.Settings.Popups.Name",
    hint: "WITCHWIND_UI.Settings.Popups.Hint"
  });

  // Applied during init, before the interface first renders, so it never flashes the default style.
  applyStyles();
});

/* -------------------------------------------- */
/*  Styles                                      */
/* -------------------------------------------- */

/** Everything in the stylesheet is scoped under these body classes, so switching a setting off restores the default at once. */
function applyStyles() {
  for ( const [key, cls] of Object.entries(AREAS) ) {
    document.body.classList.toggle(cls, game.settings.get(MODULE_ID, key));
  }
}
