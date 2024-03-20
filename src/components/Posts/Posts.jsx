import { useLoaderData } from "react-router-dom";


const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h2>Post: {posts.length}</h2>
        </div>
    );
};

export default Posts;