import AppDispatcher from '../../app-dispatcher/js/app-dispatcher';

var ListActions = {
  'list.addItem': function(data) {
    console.log('add item');
    AppDispatcher.dispatch({
      eventName: 'list.addItem',
      data: data
    });
  }
};

export default ListActions;
