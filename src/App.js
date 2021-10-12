// import logo from './logo.svg';
import './App.css';

import Channels from './components/channels/Channels';
import Headliners from './components/headliners/Headliners'
import LogoSite from './components/logo-site/LogoSite';
import NavMenu from './components/nav-menu/NavMenu';
import News from './components/news/News';
import Subscribe from './components/subscribe/Subscribe';


function App() {
  return (
    <div className="App">
      <header className="header">Header</header>
      <aside className="sidebar">
        <LogoSite />
        <NavMenu />
        <Subscribe title="Subscribe to our new plan $25" />
      </aside>
      <main className="main">
        <Channels />
        <Headliners />
        <News />
      </main>
    </div>
  );
}

export default App;
