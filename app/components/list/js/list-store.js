import ListActions from './list-actions';

var ListStore = Reflux.createStore({
  init: function() {
    this.listenTo(ListActions.addItem, this.onAddItem);
  },
  getList: function() {
    return JSON.parse(localStorage.getItem('list')) || [];
  },
  saveList: function(arr) {
    return localStorage.setItem('list', JSON.stringify(arr));
  },
  onAddItem: function(arr) {
    var list = this.getList();
    list.push(arr);
    this.saveList(list);
    this.trigger(list);
  }
});

export default ListStore;