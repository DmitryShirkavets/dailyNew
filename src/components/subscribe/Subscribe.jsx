import s from './Subscribe.module.css';

import fire from './../../assets/img/Fire.svg';
import ArticleHeader from '../article-header/ArticleHeader';

function Subscribe(props) {
    return (
      <div className={s.subscribe}>
        <div className={s.wrapper}>
            <button className={s.buttonClose}></button>
            <div className={s.imageWrapper}>
                <img className={s.image}  src={fire} alt="" />
            </div>
            <ArticleHeader style={{ textAlign: "center" }} title={props.title} />
            <p className={s.text}>It is a limited time offer that will expire soon.</p>
            <form className={s.form} action="" >
                <button className={s.buttonSubscribe}>
                    Subscribe now
                </button>
            </form>
        </div>
      </div>
    );
  }
  
  export default Subscribe;