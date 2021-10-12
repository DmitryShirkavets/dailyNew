import s from './Channels.module.css';

import SectionTitle from '../section-title/SectionTitle';
import OneChannel from '../one-channel/OneChannel';

function Channels() {
    return (
        <section className={s.channels}>
          <SectionTitle title="Explore Channels" />
          <div className="block-content">
            <OneChannel />
          </div>
        </section>
    );
}

export default Channels;