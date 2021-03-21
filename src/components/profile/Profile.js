import React from "react";
import imagePlacer from "../profile/ImagePlacer.jpg";
import PropTypes from 'prop-types';

const Profile = ({avatar, name, tag, location, stats:{followers,views,likes}}) => {
  return (
    <div class="profile">
      <div class="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          class="avatar"
        // Delete next string after studying styles React (module2)
          width="300px"
        />
        <p class="name">{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>
      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
avatar: imagePlacer,
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views:PropTypes.number.isRequired,
  likes:PropTypes.number.isRequired,
}

export default Profile;
