import clsx from "clsx";
import css from "./Profile.module.css"

const Profile = ({name = "unknown", tag = "no tag", location = " ",image, stats = 0}) => {
  return (
   <div className={css.container}>
  <div>
    <img className={css.profImage}
      src={image}
      alt="User avatar"
    />
    <p className={css.profName}>{name}</p>
    <p className={css.profInfo}>@{tag}</p>
    <p className={css.profInfo}>{location}</p>
  </div>

  <ul className={css.profInfoList}>
    <li className={css.profInfoListItem}>
      <span className={css.profInfoListItemName}>Followers</span>
      <span className={css.profInfoListItemCount}>{stats.followers}</span>
    </li>
    <li className={css.profInfoListItem}>
      <span className={css.profInfoListItemName}>Views</span>
      <span className={css.profInfoListItemCount}>{stats.views}</span>
    </li>
    <li className={css.profInfoListItem}>
      <span className={css.profInfoListItemName}>Likes</span>
      <span className={css.profInfoListItemCount}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile