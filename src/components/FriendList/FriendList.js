import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      <FriendListItem props={friends} />
    </ul>
  );
};

export default FriendList;
