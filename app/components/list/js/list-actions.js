import AppDispatcher from '../../app-dispatcher/js/app-dispatcher';

var ListActions = {
  'list.addItem': function(data) {
    AppDispatcher.dispatch({
      eventName: 'list.addItem',
      data: data
    });
  }
};

export default ListActions;
