import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend
    
    let navigate = useNavigate();
    
    const showFriendDetails = () =>{

        // const path = `/friends/${username}`

        navigate(`/friend/${id}`);
    }

    
    
    return (
        <div>
            <h2>{name} </h2>
            <button onClick={showFriendDetails} >{username}:{id}</button>
        </div>
    );
};

export default Friend;