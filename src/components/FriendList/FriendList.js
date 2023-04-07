import css from './FriendList.module.css';
import propTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return <ul className={css.friendList}>{friends}</ul>;
};

export default FriendList;
