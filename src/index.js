import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppRoutes} from './routes/AppRoutes';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRoutes />);

serviceWorkerRegistration.register();


