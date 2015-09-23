import BaseComponent from '../../base-component/js/base-component';
import ActionInput from '../../action-input/js/action-input';
import ListActions from './list-actions';
import ListStore from './list-store';
import ListItem from '../components/list-item/js/list-item';

const displayName = 'List';

class List extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      listItems: ListStore.getList()
    };

    this._bind('addItem', 'onChange');
  }

  componentDidMount() {
    ListStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    ListStore.removeChangeListener(this._onChange);
  }

  onChange() {
    this.setState({
      listItems: ListStore.getList()
    });
  }

  addItem(value) {
    ListActions['list.addItem']({
      id: this.state.listItems.length + 1,
      content: value
    });
  }

  render() {
    var listItems = this.state.listItems;
    return (
      <div>
      <ActionInput onSubmitCallback={this.addItem}/>
      <ul></ul>
      {listItems.map(function(item) {
        return (
          <ListItem content={item.content}
              key={item.id}
          />);
      })}
      </div>
      );
  }
}

List.displayName = displayName;

export default List;
