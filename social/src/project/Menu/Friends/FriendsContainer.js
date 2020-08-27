import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
import { getFriendsMenuThunc } from '../../../state/menuReducer'
import { getUserProfile } from './../../../state/profileReducer'

class FriendsContainer extends React.Component {
  componentDidMount = () => {
    this.props.getFriendsMenuThunc()
  }
  getProfile = (id) => {
    return this.props.getUserProfile(id)
  }
  render() {
    return (
      <Friends friendsMenu = {this.props.friendsMenu} getProfile = {this.getProfile}/>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    friendsMenu: state.menu.friendsMenu
  }
}


export default connect(mapStatesToProps, { getFriendsMenuThunc, getUserProfile })(FriendsContainer);