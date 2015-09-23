import AppDispatcher from '../../app-dispatcher/js/app-dispatcher';
import FluxStore from '../../flux-store/js/flux-store';

class ListStore extends FluxStore {
  constructor() {
    super();
  }

  getList() {
    return JSON.parse(localStorage.getItem('list')) || [];
  }

  saveList(arr) {
    return localStorage.setItem('list', JSON.stringify(arr));
  }

  onAddItem(arr) {
    var list = this.getList();
    list.push(arr);
    this.saveList(list);
  }
}

let storeInstance = new ListStore();

storeInstance.dispatchToken = AppDispatcher.register(action => {
  switch(action.eventName) {
    case 'list.addItem':
      console.log('store add item');
      storeInstance.onAddItem(action.data);
      break;

    case 'inputSubmited':
      storeInstance.onInputSubmited(action.data);
      break;

    default:
      return;
  }

  storeInstance.emitChange();

});

export default storeInstance;
