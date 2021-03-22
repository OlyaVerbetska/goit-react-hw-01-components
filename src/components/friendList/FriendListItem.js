import React from 'react';
import PropTypes from 'prop-types';
import imagePlacer from "../../ImagePlacer.jpg";


const FriendListItem =({ id, avatar, name, status }) =>
{return (
    <li className="item" key={id}>
  <span className="status">{status? "online" : "offline"}</span>
  <img className="avatar" src={avatar} alt="" width="48" />
  <p className="name">{name}</p>
</li>
)}


FriendListItem.defaultProps = {
  avatar: imagePlacer,
  }
  

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  status:  PropTypes.bool.isRequired,
}


export default FriendListItem;