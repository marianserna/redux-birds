import React from 'react';
import PropTypes from 'prop-types';
// there are 2 reasons to connect a comp to redux: dispatch actions OR display your state
import { connect } from 'react-redux';

class BirdList extends React.Component {
  static propTypes = {
    birds: PropTypes.arrayOf(PropTypes.string).isRequired,
    birdCount: PropTypes.number.isRequired
  };

  render() {
    return (
      <div>
        <h2>You have {this.props.birdCount} birds</h2>
        <ul>{this.props.birds.map(bird => <li key={bird}>{bird}</li>)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    birds: state.birds.sort(),
    birdCount: state.birds.length
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BirdList);
