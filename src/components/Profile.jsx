import React from 'react'
import PropTypes from 'prop-types';

const Profile = (props) => {
  const { name, tag, location, image, stats } = props;
    
  return (
    <div>
      <div>
        <img
          src={image}
          alt="User avatar"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers: </span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views: </span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes: </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Profile.propTypes = {
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default Profile