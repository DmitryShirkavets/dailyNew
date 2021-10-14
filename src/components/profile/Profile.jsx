import s from './Profile.module.css';

import male from './../../assets/img/male.png';

function Profile() {
    return (
        <div className={s.profile}>
            <button className={s.profileButton}></button>
            <img className={s.profileimg} src={male} alt="" />
        </div>
    );
  }
  
  export default Profile;