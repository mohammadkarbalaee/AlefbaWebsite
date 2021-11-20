import '../stylesheets/usages-section.scss';
import BusinessImage from '../assets/images/usages/businesses.png';
import OrganizationsImage from '../assets/images/usages/organizations.png';
import LibrariesImage from '../assets/images/usages/libraries.png';
import { useInView } from 'react-intersection-observer';
import {isMobile} from 'react-device-detect';

const UsagesSection = () => {

    const observerOptions = {
        delay: 1000
    };

    const beforeFade = isMobile? {opacity: 1}: {opacity: 0};

    const afterFade = {
        opacity: 1
    };

    const [businessesRef,businessesInView] = useInView(observerOptions);
    const [organizationsRef,organizationsInView] = useInView(observerOptions);
    const [librariesRef,librariesInView] = useInView(observerOptions);

    return(
        <div>
            <p id={'usages-title'}>
                کاربرد های الفبا
            </p>
            <div id={'space-4'}/>
            <div id={'usages-section'}>
                <div id={'space-1'}/>
                <div id={'in-businesses'} ref={businessesRef} style={businessesInView? afterFade : beforeFade}>
                    <img src={BusinessImage} id={'business-image'} alt={''}/>
                    <p className={'orange-text-usages'}>
                        در کسب‌و‌کار‌ها
                    </p>
                    <p className={'white-text-usages'}>
                        کاغذ و نوشته همه جا پیدا می‌شود
                    </p>
                </div>
                <div>
                    <div id={'space-2'}/>
                    <div id={'in-organizations'} ref={organizationsRef}  style={organizationsInView? afterFade : beforeFade}>
                        <img src={OrganizationsImage} id={'organization-image'} alt={''}/>
                        <p className={'orange-text-usages'}>
                            در سازمان ها
                        </p>
                        <p className={'white-text-usages'}>
                            پرونده‌ها و نامه‌ها روی هم انباشته شده و در اتاق‌های بایگانی خاک می‌خورند. مسیر ((دولت الکترونیک)) از ورود این اسناد به دنیای دیجیتال میگذرد:
                        </p>
                    </div>
                </div>
                <div>
                    <div id={'space-3'}/>
                    <div id={'in-libraries'} ref={librariesRef}  style={librariesInView? afterFade : beforeFade}>
                        <img src={LibrariesImage} id={'library-image'} alt={''}/>
                        <p className={'orange-text-usages'}>
                            در کتابخانه
                        </p>
                        <p className={'white-text-usages'}>
                            صفحه‌های لا‌به‌لای قفسه‌های کتابخانه منتظر ورود به دنیای نو هستند.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsagesSection;
