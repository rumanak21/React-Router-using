import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import PostDetail from '../PostDetail/PostDetail';

const Posts = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))

    }, [])
    return (
        <div>
            <h2>Post : {posts.length}</h2>

            {
                posts.map(post => <Link to={`/posts/${post.id}`}> <button>{post.id}</button> </Link>)
            }

            <Outlet></Outlet>

        </div>
    );
};

export default Posts;