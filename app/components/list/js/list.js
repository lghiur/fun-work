import BaseComponent from '../../base-component/js/base-component';
import ActionInput from '../../action-input/js/action-input';
import ListActions from './list-actions';
import ListStore from './list-store';
import ListItem from '../components/list-item/js/list-item';

export default class List extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      listItems: ListStore.getList()
    };

    this._bind('addItem', 'onChange');
  }

  addItem(value) {
    ListActions.addItem({
      id: this.state.listItems.length + 1,
      content: value
    });
  }

  onChange(list) {
    this.setState({
      listItems: list
    });
  }

  componentDidMount() {
    this.unsubscribe = ListStore.listen(this.onChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    var listItems = this.state.listItems;
    return (
      <div>
      <ActionInput onSubmitCallback={this.addItem}/>
      <ul></ul>
      { listItems.map(function(item) {
        return <ListItem key={item.id} content={item.content} />;
      })}
      </div>
      );
  }
}