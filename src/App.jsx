import { useState } from 'react'
import './App.css'
import Profile from './components/Profile';
import userData from './components/userData.json';
import Friendslist from './components/FriendsList.jsx';
import friends from './components/friends.json';
import TransactionHistory from './components/TransactionHistory.jsx'
import transactions from './components/transactionHistory.json'


function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <Friendslist friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};

export default App;