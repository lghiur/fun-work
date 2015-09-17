import ActionInputActions from './action-input-actions';

var ActionInputStore = Reflux.createStore({
  init: function() {
    this.listenTo(ActionInputActions.inputChanged, this.onInputChanged);
    this.listenTo(ActionInputActions.inputSubmited, this.onInputSubmited);
  },
  onInputChanged: function(obj) {
    if(typeof callback !== 'function') {
      return;
    }

    obj.callback(obj.value);
  },
  onInputSubmited: function(obj) {
    if(typeof obj.callback !== 'function') {
      return;
    }
    obj.callback(obj.value);
  }
});

export default ActionInputStore;