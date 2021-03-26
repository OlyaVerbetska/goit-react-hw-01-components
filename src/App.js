// Data
import user from './user.json';
import statsData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

// Components
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Container from './components/Container/Container';
// styles
import './styles.css';

const App = () => {
  return (
    <Container>
      <h1>
        <em>Профиль социальной сети</em>
      </h1>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h1>
        <em>Секция статистики</em>
      </h1>
      <Statistics statsData={statsData} title="Upload stats" />
      {/* <Statistics statsData={statsData} /> */}

      <h1>
        <em>Список друзей</em>
      </h1>
      <FriendList friends={friends} />
      <h1>
        <em>История транзакций</em>
      </h1>
      <TransactionHistory items={transactions} />
    </Container>
  );
};
export default App;
