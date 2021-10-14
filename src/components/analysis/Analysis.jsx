import s from './Analysis.module.css';

import analysis from './../../assets/img/analysis.svg';
import Select from '../select/Select';

function Analysis(props) {
    return (
        <div className={s.analysis}>
            <img className={s.img} src={analysis} alt="" />
            <Select select={props.select} />
        </div>
    );
  }
  
  export default Analysis;