import KeyMirror from "keymirror";

module.exports = {

  ActionTypes: KeyMirror({
    SELECT_SQUARE: null,
    RESET: null
  }),

  PayloadSources: KeyMirror({
    VIEW_ACTION: null
  })

};
