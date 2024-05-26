import React from 'react';
import About from '../about/indext';
import Award from '../award';
import Convenience from '../convenience';
import Quality from '../quality';
import Competitive from '../competitive';
import SamsungAccount from '../samsungAccout';
import PremiumSupport from '../premiumSupport';
import Service from '../service/indext';
import ServicesCar from '../serviceCar';
import Mail_service from '../mail_service';
import PartneringLocations from '../partneringLocations';
import SelfRepair from '../selfRepair';
import Greener_Future from '../greener_Future';
import Contact_Banner from '../contact_Banner';
import Banner from '../banner';
import NeverTakeBroken from '../neverTakeBroken';
import Discount from '../discount';
import OurAllies from '../OurAllies';
import TopSelling from '../topSelling';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <NeverTakeBroken/>
            <About/>
            <Award/>
            <Convenience/>
            <Discount/>
            <Quality/>
            <TopSelling/>
            <Competitive/>
            <SamsungAccount/>
            <PremiumSupport/>
            <Service/>
            <ServicesCar/>
            <Mail_service/>
            <OurAllies/>
            <PartneringLocations/>
            <SelfRepair/>
            <Greener_Future/>
            <Contact_Banner/>
        </div>
    );
};

export default HomePage;