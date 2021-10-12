import s from './SectionTitle.module.css'

function SectionTitle(props) {
    return (
        <h2 className={s.title}>{props.title}</h2>
    );
  }
  
  export default SectionTitle;