import s from './News.module.css';

import SectionTitle from './../section-title/SectionTitle';
import OneNews from '../one-news/OneNews';

import thumbnail1 from './../../assets/img/news1.svg';
import thumbnail2 from './../../assets/img/news2.svg';
import thumbnail3 from './../../assets/img/news3.svg';

function News() {
    return (
        <section className={s.news}>
          <SectionTitle title="Featured News" />
          <div className="block-content">
            <OneNews title="Travellers to pay more than $2K, Trudeau says" thumbnail={thumbnail1} />
            <OneNews title="Myanmar’s military seizes control of country ov  er..." thumbnail={thumbnail2} />
            <OneNews title="Pressure builds for Biden to cancel other pipeline..." thumbnail={thumbnail3} />
          </div>
        </section>
    );
}

export default News;