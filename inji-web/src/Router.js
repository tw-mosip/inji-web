import {createBrowserRouter} from 'react-router-dom';
import Issuer from './pages/IssuersPage';
import Home from './pages/HomePage';
import Certificate from './pages/CertificatePage';
import {HelpPage} from './pages/HelpPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/issuers',
        element: <Home />,
    },
    {
        path: '/issuers/:issuerId',
        element: <Issuer />,
    },
    {
        path: '/issuers/:issuerId/certificate/:certificateId',
        element: <Certificate />,
    },
    {
        path: '/help',
        element: <HelpPage />,
    },
]);
