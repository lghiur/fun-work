import BaseComponent from '../../base-component/js/base-component';

const displayName = 'ActionInput';

class ActionInput extends BaseComponent {
  constructor() {
    super();
    this._bind('handleChange', 'handleSubmit');
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});

    if(this.props.onChangeCallback && typeof this.props.onChangeCallback === 'function') {
      this.props.onChangeCallback(this.state.value);
    }
  }

  handleSubmit(event) {
    if(event.keyCode !== 13) {
      return;
    }
    this.props.onSubmitCallback(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <input
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
            type="text"
            value={this.state.value}
        />
      </div>
      );
  }
}

ActionInput.displayName = displayName;
ActionInput.propTypes = {
  onChangeCallback: React.PropTypes.func.isRequired,
  onSubmitCallback: React.PropTypes.func.isRequired
};

export default ActionInput;
