import s from './NavMenu.module.css';

import home from './../../assets/img/home.svg';
import explore from './../../assets/img/feed.svg';
import saved from './../../assets/img/bookmark.svg';
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
                    <span>Home</span>
                </li>
                <li className={s.listItem}>
                    <img className={s.listImg} src={explore} alt="" />
                    <span>Explore</span>
                </li>
                <li className={s.listItem}>
                    <img className={s.listImg} src={saved} alt="" />
                    <span>Saved</span>
                </li>
                <li className={s.listItem}>
                    <img className={s.listImg} src={subscriptions} alt="" />
                    <span>Subscriptions</span>
                </li>
                <li className={s.listItem}>
                    <img className={s.listImg} src={messages} alt="" />
                    <span>Messages</span>
                </li>
                <li className={s.listItem}>
                    <img className={s.listImg} src={settings} alt="" />
                    <span>Settings</span>
                </li>
                <li className={s.listItem}>
                    <img className={s.listImg} src={logout} alt="" />
                    <span>Logout</span>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;