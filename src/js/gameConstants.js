import KeyMirror from "keymirror";

module.exports = {

  ActionTypes: KeyMirror({
    START: null,
    UPDATE_SCORE: null,
    CREATE_SQUARES: null
  }),

  PayloadSources: KeyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
