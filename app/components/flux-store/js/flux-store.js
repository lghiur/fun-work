var CHANGE_EVENT = 'change';

class FluxStore extends EventEmitter2 {

  constructor() {
    super();
  }

  emitChange(args) {
    this.emit(CHANGE_EVENT, args);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

FluxStore.dispatchToken = null;

export default FluxStore;
