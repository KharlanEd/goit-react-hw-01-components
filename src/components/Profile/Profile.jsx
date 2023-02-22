import { UserCard } from "./UserCard"
import { Stats } from "./Stats"
import user from 'path/user.json'
import css from 'components/Profile/userCard.module.css'

export const Profile = () => {
    return <div className={css.profile}>
        <UserCard
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
        />
        <Stats
            stats={user.stats}
        />
    </div>
}