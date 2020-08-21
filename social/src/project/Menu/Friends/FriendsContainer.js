import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import { getFriendsThunc } from '../../../state/menuReducer'

class FriendsContainer extends React.Component {
  componentDidMount = () => {
    this.props.getFriendsThunc()
  }
  render() {
    return (
      <Friends friendsData = {this.props.friendsData}/>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    friendsData: state.menu.friendsData
  }
}


export default connect(mapStatesToProps, { getFriendsThunc })(FriendsContainer);