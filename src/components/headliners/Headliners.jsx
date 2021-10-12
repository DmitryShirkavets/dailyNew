import s from './Headliners.module.css';

import SectionTitle from './../section-title/SectionTitle';
import Headliner from './../headliner/Headliner';

import thumbnail1 from './../../assets/img/image 1.svg';
import thumbnail2 from './../../assets/img/image 2.svg';
import thumbnail3 from './../../assets/img/image 3.svg';
import thumbnail4 from './../../assets/img/image 4.svg';
import thumbnail5 from './../../assets/img/image 5.svg';
import thumbnail6 from './../../assets/img/image 6.svg';

function Headliners() {
    return (
        <section className={s.headliners}>
          <SectionTitle title="Today’s Headlines" />
          <div className="block-content">
            <Headliner thumbnail={thumbnail1} title="Hate speech vs free speech" like="10.8k" dislike="1.4k" label="BBC NEWS" time="2:00 pm" />
            <Headliner thumbnail={thumbnail2} title="Ontario Liberal leadership" like="10.8k" dislike="3.4k" label="BBC NEWS" time="2:00 pm" />
            <Headliner thumbnail={thumbnail3} title="Victim of Scarborough" like="20.8k" dislike="1.1k" label="BBC NEWS" time="2:00 pm" />
            <Headliner thumbnail={thumbnail4} title="Mother who left her baby" like="0" dislike="20k" label="ABC NEWS" time="2:00 pm" />
            <Headliner thumbnail={thumbnail5} title="Mother of Stefanie Rengel" like="10.8k" dislike="1.4k" label="CW6 NEWS" time="2:00 pm" />
            <Headliner thumbnail={thumbnail6} title="World Cup: Popular items" like="10.8k" dislike="1.4k" label="CNN NEWS" time="2:00 pm" />
          </div>
        </section>
    );
}

export default Headliners;