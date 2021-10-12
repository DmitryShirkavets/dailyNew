import s from './Headliner.module.css';
import ArticleHeader from '../article-header/ArticleHeader';
import Label from '../label/Label';
import Time from '../time/Time';

// images

import likeIcon from './../../assets/img/like.svg';
import dislikeIcon from './../../assets/img/dislike.svg';


function Headliner(props) {
    return (
        <article className={s.headliner}>
            <img className={s.thumbnailImg} src={props.thumbnail} alt="" />
            <div className={s.info}>
                <ArticleHeader title={props.title} />
                <div className={s.rating}>
                    <div className={s.like}>
                        <img className={s.likeIcon} src={likeIcon} alt="" />
                        <span className={s.text}>{props.like}</span>
                    </div>
                    <div className={s.dislike}>
                        <img className={s.dislikeIcon} src={dislikeIcon} alt="" />
                        <span className={s.text}>{props.dislike}</span>
                    </div>
                </div>
                <div className={s.wrapper}>
                    <Label label={props.label} />
                    <Time time={props.time} />
                </div>
            </div>
        </article>
    );
}

export default Headliner;