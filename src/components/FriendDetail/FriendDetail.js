import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Reading URL Parameters	


const FriendDetail = () => {

    let {friendId} = useParams()
    const [friend, setFriend] = useState([])
    console.log(friend)
    useEffect(()=>{
        let URL = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(URL)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])


    return (
        <div>
            <h2>Friend Detail Here {friendId}</h2>
            <h3> Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <p> City: <small>{friend.address?.city}</small> </p>
            <p> Latitude <small>{friend.address?.geo.lat}</small> </p>
            <p> Longitude: <small>{friend.address?.geo.lng}</small> </p>
            <p> Phone Number: <small>{friend.phone}</small> </p>
            <p> Website: <small>{friend.website}</small> </p>
        </div>
    );
};

export default FriendDetail;