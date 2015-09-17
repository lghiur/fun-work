import BaseComponent from '../../base-component/js/base-component';
import ActionInputActions from './action-input-actions';
import ActionInputStore from './action-input-store';

export default class ActionInput extends BaseComponent {
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
        <input type="text" value={this.state.value} 
          onChange={this.handleChange} 
          onKeyDown={this.handleSubmit} /> 
      </div>
      );
  }
}