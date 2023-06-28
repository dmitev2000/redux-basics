import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 0,
      title: "Hello world",
      content: "Never miss a chance to greet the world.",
    },
    {
      id: 1,
      title: "Learn redux",
      content: "React is weak without redux. So, go ahead and learn it.",
    },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
        reducer(state, action) {
            state.posts.push(action.payload);
        },
        prepare(title, content) {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                }
            }
        }
    },
  },
});

export const selectPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
