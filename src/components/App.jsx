import { useState } from 'react'
import './App.css'
import Profile from './Profile';

const user = {
  name: 'Petra Marica',
  tag: 'pmarica',
  location: 'Salvador, Brasil',
  image: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats: {
    followers: 1000,
    views: 2000,
    likes: 3000,
  },
};

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        image={user.image}
        stats={user.stats}
      />
    </div>
  );
}
export default App;