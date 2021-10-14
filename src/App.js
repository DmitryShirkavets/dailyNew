import './App.css';

import Location from './components/location/Location';
import Channels from './components/channels/Channels';
import Headliners from './components/headliners/Headliners'
import LogoSite from './components/logo-site/LogoSite';
import NavMenu from './components/nav-menu/NavMenu';
import News from './components/news/News';
import Subscribe from './components/subscribe/Subscribe';
import Analysis from './components/analysis/Analysis';
import Calendar from './components/calendar/Calendar';
import Search from './components/search/Search';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Location select="San Francisco, California" />
        <Analysis select="Analysis" />
        <Calendar select="Monthly" />
        <Search />
        <Profile />
      </header>
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
