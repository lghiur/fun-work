const displayName = 'HelloMessage';

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

HelloMessage.displayName = displayName;
HelloMessage.propTypes = {
  name: React.PropTypes.string
};

export default HelloMessage;