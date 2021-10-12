import s from './LogoSite.module.css';

import logo from './../../assets/img/logo-site.svg'

function LogoSite() {
    return (
        <div className={s.logoSite}>
            <img className={s.logo} src={logo} alt="" />
        </div>
    );
}

export default LogoSite;