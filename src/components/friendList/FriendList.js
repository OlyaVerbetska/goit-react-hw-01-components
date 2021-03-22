import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "../friendList/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
         
        <FriendListItem avatar={avatar} name={name} status={isOnline} />
        
      ))}
      
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
