import React from 'react';
import PropTypes from 'prop-types';
// there are 2 reasons to connect a comp to redux: dispatch actions OR display your state
import { connect } from 'react-redux';

import { sortBirds } from '../utils';

class BirdList extends React.Component {
  static propTypes = {
    birds: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired
      })
    ).isRequired,
    birdCount: PropTypes.number.isRequired
  };

  render() {
    return (
      <div>
        <h2>You have {this.props.birdCount} birds</h2>
        <ul>
          {this.props.birds.map(bird => {
            return (
              <li key={bird.name}>
                {bird.name} <img src={bird.image_url} alt={bird.name} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    birds: sortBirds(state.birds),
    birdCount: state.birds.length
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BirdList);
