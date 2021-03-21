import React from "react";
import Profile from './components/profile/Profile';
import user from './user.json';

const App = () => {
  return (
    <div>
      <h1>Профиль социальной сети</h1>
      <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </div>
  );
};
export default App;
