import KeyMirror from "keymirror";

module.exports = {

  ActionTypes: KeyMirror({
    START: null
  }),

  PayloadSources: KeyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
