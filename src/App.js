import React from "react";
import Profile from "./components/profile/Profile";
import user from "./user.json";
import StatisticsList from "./components/statistics/StatisticsList";
import statsData from "./statistical-data.json";


const title = 'Upload stats';


const App = () => {
  return (
    <div>
      <h1><em>Профиль социальной сети</em></h1>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h1><em>Секция статистики</em></h1>
      <StatisticsList statsData={statsData} title={title}/>
    </div>
  );
};
export default App;
