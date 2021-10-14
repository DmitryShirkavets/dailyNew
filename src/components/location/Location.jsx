import s from './Location.module.css';

import location from './../../assets/img/location.svg';
import Select from '../select/Select';

function Location(props) {
    return (
        <div className={s.location}>
            <img className={s.img} src={location} alt="" />
            <Select select={props.select} />
        </div>
    );
  }
  
  export default Location;