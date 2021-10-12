// import logo from './logo.svg';
import './App.css';

import Headliners from './components/headliners/Headliners'
import News from './components/news/News';


function App() {
  return (
    <div className="App">
      <header className="header">Header</header>
      <aside className="sidebar">Sidebar</aside>
      <main className="main">
        <Headliners />
        <News />
      </main>
    </div>
  );
}

export default App;
