import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";

const PostsList = () => {
  const postsData = useSelector(selectPosts);
  return (
    <div className="posts-list">
      {postsData.posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;
