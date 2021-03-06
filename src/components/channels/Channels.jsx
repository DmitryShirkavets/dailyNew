import s from './Channels.module.css';

import SectionTitle from '../section-title/SectionTitle';
import OneChannel from '../one-channel/OneChannel';

import logo1 from './../../assets/img/channel1.png';
import logo2 from './../../assets/img/channel2.png';
import logo3 from './../../assets/img/channel3.png';
import logo4 from './../../assets/img/channel4.png';
import logo5 from './../../assets/img/channel5.png';
import logo6 from './../../assets/img/channel6.png';

function Channels() {
    return (
        <section className={s.channels}>
          <SectionTitle title="Explore Channels" />
          <div className={s.blockContent}>
            <OneChannel style={{ marginBottom: "27px" }} title="FOX NEWS" logo={logo1} />
            <OneChannel style={{ marginBottom: "39px" }} title="CW6 NEWS" logo={logo2} />
            <OneChannel style={{ marginBottom: "39px" }} title="ABC NEWS" logo={logo3} />
            <OneChannel style={{ marginBottom: "29px" }} title="AL JAZEERA" logo={logo4} />
            <OneChannel style={{ marginBottom: "42px" }} title="BBC NEWS" logo={logo5} />
            <OneChannel style={{ marginBottom: "38px" }} title="CNN NEWS" logo={logo6} />
          </div>
        </section>
    );
}

export default Channels;