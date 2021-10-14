import s from './Select.module.css';

function Select(props) {
    return (
        <div className={s.select}>
            <select className={s.select}>
                <option value={props.select}>{props.select}</option>
            </select>
        </div>
    );
  }
  
  export default Select;