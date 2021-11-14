import '../stylesheets/usages-section.scss';
import BusinessImage from '../assets/images/usages/businesses.png';
import OrganizationsImage from '../assets/images/usages/organizations.png';
import LibrariesImage from '../assets/images/usages/libraries.png';

const UsagesSection = () => {
    return(
        <div>
            <p id={'usages-title'}>
                کاربرد های الفبا
            </p>
            <div id={'space-4'}/>
            <div id={'usages-section'}>
                <div id={'space-1'}/>
                <div id={'in-businesses'}>
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
                    <div id={'in-organizations'}>
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
                    <div id={'in-libraries'}>
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
