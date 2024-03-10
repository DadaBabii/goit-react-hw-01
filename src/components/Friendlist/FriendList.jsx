import clsx from "clsx";
import css from "./Friendlist.module.css";
import FriendlistItem from "../FriendlistItem/FriendlistItem";

const FriendList = ({ friends }) => {
    
    return (
        <ul className={css.container}>
            {friends.map(friend => {
              
                return (
                    <li className={css.friendItem} key={friend.id}>
                        <FriendlistItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                 
                </li>)
            })}
        </ul>
    );
};

export default FriendList