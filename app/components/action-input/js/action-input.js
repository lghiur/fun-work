import BaseComponent from '../../base-component/js/base-component';
import ActionInputActions from './action-input-actions';
import ActionInputStore from './action-input-store';

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
    ActionInputActions.inputChanged({
      value: this.state.value,
      callback: this.props.onChangeCallback
    });
  }

  handleSubmit(event) {
    if(event.keyCode !== 13) {
      return;
    }

    ActionInputActions.inputSubmited({
      value: this.state.value,
      callback: this.props.onSubmitCallback
    });
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