import s from './OneNews.module.css';

import ArticleHeader from '../article-header/ArticleHeader';
import Label from '../label/Label';
import Time from '../time/Time';

function OneNews(props) {
    return (
        <article className={s.oneNews}>
            <img className={s.thumbnailImg} src={props.thumbnail} alt="" />
            <div className={s.info}>
                <ArticleHeader title={props.title} />
                <div className={s.wrapper}>
                    <Label label={props.label} />
                    <Time time={props.time} />
                </div>
            </div>
        </article>
    );
}

export default OneNews;