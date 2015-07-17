import KeyMirror from "keymirror";

module.exports = {

  ActionTypes: KeyMirror({
    SELECT_SQUARE: null,
    UPDATE_SCORE: null,
    SEND_MESSAGE: null,
    GAME_OVER: null
  }),

  PayloadSources: KeyMirror({
    VIEW_ACTION: null,
    APP_ACTION: null
  })

};
