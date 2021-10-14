import s from './Calendar.module.css';

import calendar from './../../assets/img/calendar.svg';
import Select from '../select/Select';

function Calendar(props) {
    return (
        <div className={s.calendar}>
            <img className={s.img} src={calendar} alt="" />
            <Select select={props.select} />
        </div>
    );
  }
  
  export default Calendar;