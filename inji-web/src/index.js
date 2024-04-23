import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppRouter} from "./Router";
import './index.css';
import '../src/utils/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter/>
);
