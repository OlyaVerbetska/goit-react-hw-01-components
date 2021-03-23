import React from "react";
import Profile from "./components/profile/Profile";
import user from "./user.json";
import StatisticsList from "./components/statistics/StatisticsList";
import statsData from "./statistical-data.json";
import friends from "./friends.json";
import FriendList from "./components/friends/FriendList";
import transactions  from "./transactions.json";
import TransactionHistory from "./components/transactions/TransactionHistory"




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
      <StatisticsList statsData={statsData} title='Upload stats'/>
      <StatisticsList statsData={statsData}/>
            
      <h1><em>Список друзей</em></h1>
      <FriendList friends = {friends}/>
      <h1><em>История транзакций</em></h1>
      <TransactionHistory
      items = {transactions}/>
          </div>
  );
};
export default App;
