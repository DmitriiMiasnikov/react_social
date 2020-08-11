import { addPost, updateNewPost } from '../../../state/profileReducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    postsData: state.profile.postsData,
    newPostText: state.profile.newPostText,
  }
}

export default connect(mapStateToProps, {
  addPost,
  updateNewPost
})(MyPosts);
