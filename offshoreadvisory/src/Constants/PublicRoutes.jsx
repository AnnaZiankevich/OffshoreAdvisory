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

import About from "../pages/About/About";
import AssetProtection from '../pages/AssetProtection/AssetProtection.jsx'
import BankingLicense from '../pages/Services/BankingLicense/BankingLicense.jsx'
import CompanyFormation from '../pages/Services/CompanyFormation/CompanyFormation.jsx'
import GamingLicense from '../pages/Services/GamingLicense/GamingLicense.jsx'
import ResidencePassport from '../pages/Services/ResidencePassport/ResidencePassport.jsx'
import Comoros from '../pages/Regions/Comoros/Comoros.jsx'
import StLucia from '../pages/Regions/StLucia/StLucia.jsx'
import StVincent from '../pages/Regions/StVincent/StVincent.jsx'
import WesternSahara from '../pages/Regions/WesternSahara/WesternSahara.jsx'
import Contacts from "../pages/Contacts/Contacts";

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

export const servicesPublicRoutes = [
    {
        name: 'Company Formation',
        path: COMPANY_FORMATION,
        element: <CompanyFormation />
    },
    {
        name: 'Banking license',
        path: BANKING_LICENSE,
        element: <BankingLicense />
    },
    {
        name: 'Gaming & gambling license',
        path: GAMING_LICENSE,
        element: <GamingLicense />
    },
    {
        name: 'Residency & passport',
        path: RESIDENCE_PASSPORT,
        element: <ResidencePassport />
    },
]

export const regionsPublicRoutes = [
    {
        name: 'Western Sahara',
        path: WESTERN_SAHARA,
        element: <WesternSahara/>
    },
    {
        name: 'St. Lucia',
        path: ST_LUCIA,
        element: <StLucia />
    },
    {
        name: 'St. Vincent & the Grenadines',
        path: ST_VINCENT,
        element: <StVincent />
    },
    {
        name: 'Comoros',
        path: COMOROS,
        element: <Comoros />
    },
]
