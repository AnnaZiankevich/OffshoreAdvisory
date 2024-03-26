import {
    ABOUT, 
    COMPANY_FORMATION, 
    BANKING_LICENSE,
    GAMING_LICENSE, 
    RESIDENCE_PASSPORT, 
    WESTERN_SAHARA,
    ST_LUCIA,
    ST_VINCENT,
    COMOROS,
    ASSEST_PROTECTION,
    CONTACT_US,
} from "./RoutesConstants";

import About from "../pages/PublicPages/About/About";
import AssetProtection from '../pages/AssetProtection/AssetProtection.jsx'
import BankingLicense from '../pages/Services/BankingLicense/BankingLicense.jsx'
import CompanyFormation from '../pages/Services/CompanyFormation/CompanyFormation.jsx'
import GamingLicense from '../pages/Services/GamingLicense/GamingLicense.jsx'
import ResidencePassport from '../pages/Services/ResidencePassport/ResidencePassport.jsx'
import Comoros from '../pages/Regions/Comoros/Comoros.jsx'
import StLucia from '../pages/Regions/StLucia/StLucia.jsx'
import StVincent from '../pages/Regions/StVincent/StVincent.jsx'
import WesternSahara from '../pages/Regions/WesternSahara/WesternSahara.jsx'
import Contacts from "../pages/PublicPages/Contacts/Contacts";

export const publicRoutes = [
    {
        name: 'About',
        path: ABOUT,
        element: <About />
    },
    {
        name: 'Asset Protection',
        path: ASSEST_PROTECTION,
        element: <AssetProtection />
    },
    {
        name: 'Contact us',
        path: CONTACT_US,
        element: <Contacts />
    },
]

export const ServicesPublicRoutes = [
    {
        path: COMPANY_FORMATION,
        element: <CompanyFormation />
    },
    {
        path: GAMING_LICENSE,
        element: <GamingLicense />
    },
    {
        path: RESIDENCE_PASSPORT,
        element: <ResidencePassport />
    },
    {
        path: BANKING_LICENSE,
        element: <BankingLicense />
    },
]

export const RegionsPublicRoutes = [
    {
        path: COMOROS,
        element: <Comoros />
    },
    {
        path: ST_LUCIA,
        element: <StLucia />
    },
    {
        path: ST_VINCENT,
        element: <StVincent />
    },
    {
        path: WESTERN_SAHARA,
        element: <WesternSahara/>
    },
]
