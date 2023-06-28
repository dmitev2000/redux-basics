import "./App.css";
import AddNewPostForm from "./features/posts/AddNewPostForm";
import PostsList from "./features/posts/PostsList";
//import Counter from "./features/counter/Counter";

function App() {
  return (
    <>
      {/* <Counter /> */}
      <AddNewPostForm />
      <PostsList />
    </>
  );
}

export default App;
