import KartMelli from "./samples/KartMelli";
import Sherr from "./samples/Sherr";
import TarazNameh from "./samples/TarazNameh";
import Border from '../assets/images/samples/border.png';
import Sample1Mobile from '../assets/images/samples/sample-1-mobile.png';
import Sample2Mobile from '../assets/images/samples/sample-2-mobile.png';
import Sample3Mobile from '../assets/images/samples/sample-3-mobile.png';
import {ReactComponent as Dot} from "../assets/images/samples/dot.svg";
import {ReactComponent as Polygon} from "../assets/images/samples/polygon.svg";
import '../stylesheets/sample-section.scss';
import {useState} from "react";

enum Sample {
    KartMelli,
    Sherr,
    Taraznameh
}

const SampleSection = () => {

    let [activeSample,setActiveSample] = useState(Sample.KartMelli);

    const onKartMelliClick = () => {
        setActiveSample(Sample.KartMelli);
    }

    const onTarazNamehClick = () => {
        setActiveSample(Sample.Taraznameh);
    }

    const onSherClick = () => {
        setActiveSample(Sample.Sherr);
    }

    const whichSample = () => {
        switch (activeSample){
            case Sample.KartMelli: return (<KartMelli/>);
            case Sample.Sherr: return (<Sherr/>);
            case Sample.Taraznameh: return (<TarazNameh/>);
        }
    }

    return(
        <div className={'sample'}>
            <p id={'sample-title'}>
                نمونه های الفبا
            </p>
            <div style={{height: '10vw'}}/>
            <div id={'sample-section'}>
                ({whichSample()})
                <div  id={'orange-border'}>
                    <img src={Border} id={'orange-border-main'} alt={''}/>
                </div>
                <div style={{width: '20vw'}}/>
                <div id={'buttons'}>
                    <div className={'button'} onClick={onKartMelliClick}>
                        <img src={Sample1Mobile} className={'mobile-image float-right'} id={'sample-1-mobile'} alt={''}/>
                        <div className={'sample-row'}>
                            <p className={'white-title-sample'} id={activeSample === Sample.KartMelli ? 'active-orange-title' : ''}>
                                حفظ ساختار سند
                            </p>
                            <Dot className={activeSample === Sample.KartMelli ? 'no-dot' : 'dot'}/>
                            <Polygon className={activeSample === Sample.KartMelli ? 'polygon' : 'no-dot'}/>
                        </div>
                        <p className={'description-sample'} id={activeSample === Sample.KartMelli ? 'active-orange-description' : ''}>
                            جدول درون سند، درست با همان قالب ردیف‌ها و ستون‌ها تحلیل می‌شود.
                        </p>
                    </div>
                    <div className={'button'} onClick={onTarazNamehClick}>
                        <img src={Sample2Mobile} className={'mobile-image float-left'} id={'sample-2-mobile'} alt={''}/>
                        <div className={'sample-row'}>
                            <p className={'white-title-sample text-left-title'} id={activeSample === Sample.Taraznameh ? 'active-orange-title' : ''}>
                                اصلاح تصویر
                            </p>
                            <Dot className={activeSample === Sample.Taraznameh ? 'no-dot' : 'dot'}/>
                            <Polygon className={activeSample === Sample.Taraznameh ? 'polygon' : 'no-dot'}/>
                        </div>
                        <p className={'description-sample text-left'} id={activeSample === Sample.Taraznameh ? 'active-orange-description' : ''}>
                            پس‌زمینه نوشته اگر تمیز هم نباشد، الفبا می‌تواند آن را بخواند.
                        </p>
                    </div>
                    <div className={'button'} onClick={onSherClick}>
                        <img src={Sample3Mobile} className={'mobile-image float-right'} id={'sample-3-mobile'} alt={''}/>
                        <div className={'sample-row'}>
                            <p className={'white-title-sample'} id={activeSample === Sample.Sherr ? 'active-orange-title' : ''}>
                                حفظ ساختار متن
                            </p>
                            <Dot className={activeSample === Sample.Sherr ? 'no-dot' : 'dot'}/>
                            <Polygon className={activeSample === Sample.Sherr ? 'polygon' : 'no-dot'}/>
                        </div>
                        <p className={'description-sample'} id={activeSample === Sample.Sherr ? 'active-orange-description' : ''}>
                            خطوط نوشته در قالب پاراگراف‌های متن به مخاطب ارائه می‌شوند.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SampleSection;
