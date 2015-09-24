const displayName = 'ListItem';

class ListItem extends React.Component {
  render() {
    return (<li>{this.props.content}</li>);
  }
}

ListItem.displayName = displayName;
ListItem.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default ListItem;
