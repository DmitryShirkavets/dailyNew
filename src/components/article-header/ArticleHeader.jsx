import s from './ArticleHeader.module.css';

function ArticleHeader(props) {
    return (
        <h1 className={s.title} style={props.style}>{props.title}</h1>
    );
  }
  
  export default ArticleHeader;