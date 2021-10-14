import s from './News.module.css';

import SectionTitle from './../section-title/SectionTitle';
import OneNews from '../one-news/OneNews';

import thumbnail1 from './../../assets/img/news1.png';
import thumbnail2 from './../../assets/img/news2.png';
import thumbnail3 from './../../assets/img/news3.png';

function News() {
    return (
        <section className={s.news}>
          <SectionTitle title="Featured News" />
          <div className="block-content">
            <OneNews title="Travellers to pay more than $2K, Trudeau says" thumbnail={thumbnail1} label="FOX NEWS" time="2:00 pm" />
            <OneNews title="Myanmar’s military seizes control of country ov  er..." thumbnail={thumbnail2} label="CNN NEWS" time="2:00 pm" />
            <OneNews title="Pressure builds for Biden to cancel other pipeline..." thumbnail={thumbnail3} label="BBC NEWS" time="2:00 pm" />
          </div>
        </section>
    );
}

export default News;