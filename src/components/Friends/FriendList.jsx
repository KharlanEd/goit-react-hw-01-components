import PropTypes from 'prop-types';
import { BiCircle } from "react-icons/bi";
import  css  from 'components/Friends/Friends.module.css';
import { Isonline } from "./friends.styled";


export const FriendList = ({ friends }) => {
return (<ul className={css.friend_list}>
        {friends.map(({ id, avatar, name, isOnline }) =>
        (<li className={css.item} key={id}> 
         
        <Isonline isActive ={isOnline === true}><BiCircle/></Isonline>  
         <img  src={avatar} alt="User avatar" width="48" />
            <p >{name}</p>
</li>)
        )}
    </ul>)
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired 
    })) 
}