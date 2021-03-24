import PropTypes from 'prop-types';
import imagePlacer from '../../ImagePlacer.jpg';
import styles from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <li className={styles.item}>
      {status ? (
        <span className={styles.statusOnline}></span>
      ) : (
        <span className={styles.statusOffline}></span>
      )}
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <span className={styles.name}>{name}</span>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: imagePlacer,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendListItem;
