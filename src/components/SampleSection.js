import Sample1 from '../assets/images/samples/sample-1.png';
import Sample2 from '../assets/images/samples/sample-2.png';
import Sample3 from '../assets/images/samples/sample-3.png';
import Sample1Mobile from '../assets/images/samples/sample-1-mobile.png';
import Sample2Mobile from '../assets/images/samples/sample-2-mobile.png';
import Sample3Mobile from '../assets/images/samples/sample-3-mobile.png';
import {ReactComponent as Dot} from "../assets/images/samples/dot.svg";
import '../stylesheets/sample-section.scss';
import {useState} from "react";

const SampleSection = () => {

    let [activeSample,setActiveSample] = useState(1);

    const onSample1Click = () => {
        setActiveSample(1);
    }

    const onSample2Click = () => {
        setActiveSample(2);
    }

    const onSample3Click = () => {
        setActiveSample(3);
    }

    const whichSample = () => {
        switch (activeSample){
            case 1: return Sample1;
            case 2: return Sample2;
            case 3: return Sample3;
            default: return Sample1;
        }
    }

    return(
        <div className={'sample'}>
            <p id={'sample-title'}>
                نمونه های الفبا
            </p>
            <div style={{height: '10vw'}}/>
            <div id={'sample-section'}>
                <img src={whichSample()} id={'image-sample'} alt={''}/>
                <div style={{width: '20vw'}}/>
                <div id={'buttons'}>
                    <div className={'button'} onClick={onSample1Click}>
                        <img src={Sample1Mobile} className={'mobile-image float-right'} id={'sample-1-mobile'} alt={''}/>
                        <div className={'sample-row'}>
                            <p className={'white-title-sample'} id={activeSample === 1 ? 'active-orange-title' : ''}>
                                حفظ ساختار سند
                            </p>
                            <Dot className={'dot'}/>
                        </div>
                        <p className={'description-sample'}>
                            جدول درون سند، درست با همان قالب ردیف‌ها و ستون‌ها تحلیل می‌شود.
                        </p>
                    </div>
                    <div className={'button'} onClick={onSample2Click}>
                        <img src={Sample2Mobile} className={'mobile-image float-left'} id={'sample-2-mobile'} alt={''}/>
                        <div className={'sample-row'}>
                            <p className={'white-title-sample text-left-title'} id={activeSample === 2 ? 'active-orange-title' : ''}>
                                اصلاح تصویر
                            </p>
                            <Dot className={'dot'}/>
                        </div>
                        <p className={'description-sample text-left'}>
                            پس‌زمینه نوشته اگر تمیز هم نباشد، الفبا می‌تواند آن را بخواند.
                        </p>
                    </div>
                    <div className={'button'} onClick={onSample3Click}>
                        <img src={Sample3Mobile} className={'mobile-image float-right'} id={'sample-3-mobile'} alt={''}/>
                        <div className={'sample-row'}>
                            <p className={'white-title-sample'} id={activeSample === 3 ? 'active-orange-title' : ''}>
                                حفظ ساختار متن
                            </p>
                            <Dot className={'dot'}/>
                        </div>
                        <p className={'description-sample'}>
                            خطوط نوشته در قالب پاراگراف‌های متن به مخاطب ارائه می‌شوند.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SampleSection;
