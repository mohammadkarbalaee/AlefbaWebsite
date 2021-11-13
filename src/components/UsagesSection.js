import '../stylesheets/usages-section.scss';
import BusinessImage from '../assets/images/usages/businesses.png';
import OrganizationsImage from '../assets/images/usages/organizations.png';
import LibrariesImage from '../assets/images/usages/libraries.png';

const UsagesSection = () => {
    return(
        <div id={'usages-section'}>
            <p id={'usages-title'}>
                کاربرد های الفبا
            </p>
            <div style={{height: '8vw'}}/>
            <div id={'in-businesses'}>
                <img src={BusinessImage} id={'business-image'} alt={''}/>
                <p className={'orange-text'}>
                    در کسب‌و‌کار‌ها
                </p>
                <p className={'white-text'}>
                    کاغذ و نوشته همه جا پیدا می‌شود
                </p>
            </div>
            <div>
                <div style={{height: '10vw'}}/>
                <div id={'in-organizations'}>
                    <img src={OrganizationsImage} id={'organization-image'} alt={''}/>
                    <p className={'orange-text'}>
                        در سازمان ها
                    </p>
                    <p className={'white-text'}>
                        پرونده‌ها و نامه‌ها روی هم انباشته شده و در اتاق‌های بایگانی خاک می‌خورند. مسیر ((دولت الکترونیک)) از ورود این اسناد به دنیای دیجیتال میگذرد:
                    </p>
                </div>
            </div>
            <div>
                <div style={{height: '30vw'}}/>
                <div id={'in-libraries'}>
                    <img src={LibrariesImage} id={'library-image'} alt={''}/>
                    <p className={'orange-text'}>
                        در کتابخانه
                    </p>
                    <p className={'white-text'}>
                        صفحه‌های لا‌به‌لای قفسه‌های کتابخانه منتظر ورود به دنیای نو هستند.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UsagesSection;
