import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import { getFriendsThunc } from '../../../state/menuReducer'
import { getUserProfile } from './../../../state/profileReducer'

class FriendsContainer extends React.Component {
  componentDidMount = () => {
    this.props.getFriendsThunc()
  }
  getProfile = (id) => {
    return this.props.getUserProfile(id)
  }
  render() {
    return (
      <Friends friendsData = {this.props.friendsData} getProfile = {this.getProfile}/>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    friendsData: state.menu.friendsData
  }
}


export default connect(mapStatesToProps, { getFriendsThunc, getUserProfile })(FriendsContainer);