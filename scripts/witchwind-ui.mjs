const MODULE_ID = "witchwind-ui";

/** The parts of the restyle that switch on or off, each through a body class the stylesheet is scoped under. */
const AREAS = {
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
    onChange: applyStyles,
    ...data
  });

  register("chatStyle", {
    name: "WITCHWIND_UI.Settings.ChatStyle.Name",
    hint: "WITCHWIND_UI.Settings.ChatStyle.Hint",
    type: String,
    choices: {
      parchment: "WITCHWIND_UI.Settings.ChatStyle.Choices.parchment",
      steel: "WITCHWIND_UI.Settings.ChatStyle.Choices.steel",
      none: "WITCHWIND_UI.Settings.ChatStyle.Choices.none"
    },
    default: "parchment"
  });

  register("sidebar", {
    name: "WITCHWIND_UI.Settings.Sidebar.Name",
    hint: "WITCHWIND_UI.Settings.Sidebar.Hint",
    type: Boolean,
    default: true
  });

  register("controls", {
    name: "WITCHWIND_UI.Settings.Controls.Name",
    hint: "WITCHWIND_UI.Settings.Controls.Hint",
    type: Boolean,
    default: true
  });

  register("popups", {
    name: "WITCHWIND_UI.Settings.Popups.Name",
    hint: "WITCHWIND_UI.Settings.Popups.Hint",
    type: Boolean,
    default: true
  });

  // Applied during init, before the interface first renders, so it never flashes the default style.
  applyStyles();
});

/* -------------------------------------------- */
/*  Styles                                      */
/* -------------------------------------------- */

/** Everything in the stylesheet is scoped under these body classes, so switching a setting off restores the default at once. */
function applyStyles() {
  const chat = game.settings.get(MODULE_ID, "chatStyle");
  document.body.classList.toggle("wwui-chat", chat !== "none");
  document.body.classList.toggle("wwui-chat-parchment", chat === "parchment");
  document.body.classList.toggle("wwui-chat-steel", chat === "steel");
  for ( const [key, cls] of Object.entries(AREAS) ) {
    document.body.classList.toggle(cls, game.settings.get(MODULE_ID, key));
  }
}
