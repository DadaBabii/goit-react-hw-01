import clsx from "clsx";
import css from './FriendlistItem.module.css'

const FriendlistItem = (friend) => {
    
  return (
    <div>
        <img className={css.friendItemAva} src={friend.avatar} alt="Avatar" />
            <p className={css.friendItemName}>{friend.name}</p>
                { friend.isOnline ? <p className={css.friendItemStatus}>Online</p> :
             <p className={clsx(css.friendItemStatus, css.offLine)}>Offline</p>};
    </div>
  )
}

export default FriendlistItem