import "./posts.css";
import { useState } from "react";
import { addPost } from "./postsSlice";
import { useDispatch } from "react-redux";

const AddNewPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (title && content) {
          dispatch(addPost(title, content));
          setTitle("");
          setContent("");
        }
      }}
    >
      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br />
      <label htmlFor="content">Content</label>
      <br />
      <textarea
        id="content"
        rows={3}
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <br />
      <input type="submit" value="Add post" />
    </form>
  );
};

export default AddNewPostForm;
