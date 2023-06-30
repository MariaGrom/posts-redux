import './App.css';
import FetchedPosts from './components/FetchedPosts';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import ThemeButton from './components/ThemeButton';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-md-10 offset-md-10">
          <ThemeButton />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
