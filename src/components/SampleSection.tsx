import KartMelli from "./samples/KartMelli";
import Sherr from "./samples/Sherr";
import TarazNameh from "./samples/TarazNameh";
import Sample1Mobile from '../assets/images/samples/sample-1-mobile.png';
import Sample2Mobile from '../assets/images/samples/sample-2-mobile.png';
import Sample3Mobile from '../assets/images/samples/sample-3-mobile.png';

import kartmelli from '../assets/images/samples/kart-melli.svg';
import sherr from '../assets/images/samples/Sher.svg';
import taraznameh from '../assets/images/samples/TarazNameh.svg';

import {ReactComponent as Dot} from "../assets/images/samples/dot.svg";
import {ReactComponent as Polygon} from "../assets/images/samples/polygon.svg";
import '../stylesheets/sample-section.scss';
import {motion} from 'framer-motion';

import {Component} from "react";
import {ImageAnimation} from "../animations/typingAnimation";

enum Sample {
    KartMelli,
    Taraznameh,
    Sherr
}

class SampleSection extends Component {

    state = {
        chosenSample: Sample.KartMelli
    }

    render() {

        const onKartMelliClick = () => {
            this.setState({
                chosenSample: Sample.KartMelli
            })
        }

        const onTarazNamehClick = () => {
            this.setState({
                chosenSample: Sample.Taraznameh
            })
        }

        const onSherClick = () => {
            this.setState({
                chosenSample: Sample.Sherr
            })
        }

        const whichImage = () => {
            switch (this.state.chosenSample) {
                case Sample.KartMelli:
                    return kartmelli;
                case Sample.Sherr:
                    return sherr;
                case Sample.Taraznameh:
                    return taraznameh;
            }
        }

        const whichSample = () => {
            switch (this.state.chosenSample) {
                case Sample.KartMelli:
                    return <KartMelli/>;
                case Sample.Sherr:
                    return <Sherr/>;
                case Sample.Taraznameh:
                    return <TarazNameh/>;
            }
        }

        return (
            <div className={'sample'}>
                <p id={'sample-title'}>
                    نمونه های الفبا
                </p>
                <div style={{height: '10vw'}}/>
                <div id={'sample-section'}>
                    <div className={'sample-container'}>
                        ({whichSample()})
                        <motion.img
                            variants={ImageAnimation}
                            initial={"hidden"}
                            animate={"visible"}
                            src={whichImage()}
                            key={this.state.chosenSample}
                            alt={''}
                            className={'sample-image'}
                        />
                    </div>
                    <div style={{width: '20vw'}}/>
                    <div id={'buttons'}>
                        <div className={'button'} onClick={onKartMelliClick}>
                            <img src={Sample1Mobile} className={'mobile-image float-right'} id={'sample-1-mobile'}
                                 alt={''}/>
                            <div className={'sample-row'}>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.KartMelli ? 'active-orange-title' : ''}>
                                    حفظ ساختار متن
                                </p>
                                <Dot className={this.state.chosenSample === Sample.KartMelli ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.KartMelli ? 'polygon' : 'no-dot'}/>
                            </div>
                            <p className={'description-sample'}
                               id={this.state.chosenSample === Sample.KartMelli ? 'active-orange-description' : ''}>
                                خطوط نوشته در قالب پاراگراف‌های متن به مخاطب ارائه می‌شوند.
                            </p>
                        </div>
                        <div className={'button'} onClick={onTarazNamehClick}>
                            <img src={Sample2Mobile} className={'mobile-image float-left'} id={'sample-2-mobile'}
                                 alt={''}/>
                            <div className={'sample-row'}>
                                <p className={'white-title-sample text-left-title'}
                                   id={this.state.chosenSample === Sample.Taraznameh ? 'active-orange-title' : ''}>
                                    حفظ ساختار سند
                                </p>
                                <Dot className={this.state.chosenSample === Sample.Taraznameh ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.Taraznameh ? 'polygon' : 'no-dot'}/>
                            </div>
                            <p className={'description-sample text-left'}
                               id={this.state.chosenSample === Sample.Taraznameh ? 'active-orange-description' : ''}>
                                جدول درون سند، درست با همان قالب ردیف‌ها و ستون‌ها تحلیل می‌شود.
                            </p>
                        </div>
                        <div className={'button'} onClick={onSherClick}>
                            <img src={Sample3Mobile} className={'mobile-image float-right'} id={'sample-3-mobile'}
                                 alt={''}/>
                            <div className={'sample-row'}>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.Sherr ? 'active-orange-title' : ''}>
                                    اصلاح تصویر
                                </p>
                                <Dot className={this.state.chosenSample === Sample.Sherr ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.Sherr ? 'polygon' : 'no-dot'}/>
                            </div>
                            <p className={'description-sample'}
                               id={this.state.chosenSample === Sample.Sherr ? 'active-orange-description' : ''}>
                                پس‌زمینه نوشته اگر تمیز هم نباشد، الفبا می‌تواند آن را بخواند.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SampleSection;
