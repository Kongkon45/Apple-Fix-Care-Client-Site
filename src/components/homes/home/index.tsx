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

const HomePage = () => {
    return (
        <div>
            <About/>
            <Award/>
            <Convenience/>
            <Quality/>
            <Competitive/>
            <SamsungAccount/>
            <PremiumSupport/>
            <Service/>
            <ServicesCar/>
            <Mail_service/>
            <PartneringLocations/>
            <SelfRepair/>
            <Greener_Future/>
            <Contact_Banner/>
        </div>
    );
};

export default HomePage;