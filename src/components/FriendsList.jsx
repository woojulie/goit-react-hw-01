import React from 'react'
import PropTypes from 'prop-types';
import FriendsListItem from "./FriendsListItem";
import './FriendsList.css'


const FriendsList = ({ friends }) => {
  return (
    <ul className='list'>
      {friends.map((item) => {
        return (
          <li className='item' key={item.id}>
            <FriendsListItem
              photo={item.avatar}
              name={item.name}
              status={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendsList;