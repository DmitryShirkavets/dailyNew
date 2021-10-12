import s from './OneChannel.module.css';

import ArticleHeader from '../article-header/ArticleHeader';

function OneChannel(props) {
    return (
        <div className={s.oneChannel}>
            <img style={props.style} className={s.logo} src={props.logo} alt="" />
            <ArticleHeader title={props.title} />
        </div>
    );
}

export default OneChannel;