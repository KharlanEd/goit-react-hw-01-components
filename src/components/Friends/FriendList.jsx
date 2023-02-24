
import friends from 'path/friends.json'
import  css  from 'components/Friends/Friends.module.css';

import { FriendListItem } from './FriendListItem';


export const FriendList = () => {
return (<ul className={css.friend_list}>
    <FriendListItem friends={friends} />
    </ul>)
}


