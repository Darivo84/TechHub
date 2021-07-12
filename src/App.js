import './App.css';
import { HomePage } from './containers/HomePage/index';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=9GAE1woEWYA
// Start @ 1h37.30

// json-server --watch db.json --static ./src/images/thumbnails/ --port 9000
