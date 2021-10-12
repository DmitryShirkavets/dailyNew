import s from './NavMenu.module.css';

import home from './../../assets/img/home.svg';
import explore from './../../assets/img/feed.svg';
import saved from './../../assets/img/Bookmark.svg';
import subscriptions from './../../assets/img/Document.svg';
import messages from './../../assets/img/messages.svg';
import settings from './../../assets/img/Settings.svg';
import logout from './../../assets/img/logout.svg';

function NavMenu() {
    return (
        <nav className={s.navMenu}>
            <ul className={s.list}>
                <li className={s.listItem}>
                    <img className={s.listImg} src={home} alt="" />
                    Home
                </li>
                <li className={s.listItem}>
                    <img className={s.listImg} src={explore} alt="" />
                    Explore
                </li>
                <li className={s.listItem}>
                    <img className={s.listImg} src={saved} alt="" />
                    Saved
                </li>
                <li className={s.listItem}>
                    <img className={s.listImg} src={subscriptions} alt="" />
                    Subscriptions
                </li>
                <li className={s.listItem}>
                    <img className={s.listImg} src={messages} alt="" />
                    Messages
                </li>
                <li className={s.listItem}>
                    <img className={s.listImg} src={settings} alt="" />
                    Settings
                </li>
                <li className={s.listItem}>
                    <img className={s.listImg} src={logout} alt="" />
                    Logout
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;