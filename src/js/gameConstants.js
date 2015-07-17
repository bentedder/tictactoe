import KeyMirror from "keymirror";

module.exports = {

  ActionTypes: KeyMirror({
    START: null,
    UPDATE_SCORE: null,
    CREATE_SQUARES: null,
    SEND_MESSAGE: null,
    SET_TURN: null
  }),

  PayloadSources: KeyMirror({
    BOT_ACTION: null,
    VIEW_ACTION: null
  })

};
