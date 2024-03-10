import clsx from "clsx";
import css from "./Friendlist.module.css";

const FriendList = ({ friends }) => {
    
    return (
        <ul className={css.container}>
            {friends.map(friend => {
                // const friendOffline = friend.isOnline === false;
                return friend.isOnline ?  
                ( <li className={css.friendItem} key={friend.id}>
                    <div>
                        <img className={css.friendItemAva} src={friend.avatar} alt="Avatar" />
                        <p className={css.friendItemName}>{friend.name}</p>
                        <p className={css.friendItemStatus}>Online</p>
                    </div>
                </li>): ( <li className={css.friendItem} key={friend.id}>
                    <div>
                        <img className={css.friendItemAva} src={friend.avatar} alt="Avatar" />
                        <p className={css.friendItemName}>{friend.name}</p>
                            <p className={clsx(css.friendItemStatus, css.offLine)}>Offline</p>
                    </div>
                </li>)
            })}
        </ul>
    );
};

export default FriendList

// : вміст_якщо_умова_false
