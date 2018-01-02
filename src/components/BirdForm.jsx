import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addBird } from '../actions';

class BirdForm extends React.Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();

          // call the addBird action function
          this.props.onAdd(this.input.value);
          e.target.reset();
        }}
      >
        <label htmlFor="bird">Bird</label>
        <input type="text" id="bird" ref={input => (this.input = input)} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

// when you need to show something from the state within the component
const mapStateToProps = state => {
  // return {birdCount: state.birds.length};
  return {};
};

// for passing action functions that need to be made available to the form
// what dispatch wants to receive is the action object in order to send it to the reducer
const mapDispatchToProps = dispatch => {
  return {
    onAdd: bird => {
      // We're not passing the function, we're calling it
      dispatch(addBird(bird));
    }
  };
};

// connect component to redux
// connect returns a function. We're calling the function right away passing BirdForm to it

// const connectFunction = connect(mapStateToProps, mapDispatchToProps);
// export default connectFunction(BirdForm);
export default connect(mapStateToProps, mapDispatchToProps)(BirdForm);
