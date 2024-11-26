import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CountProvider } from './context/MyContextTaskOne';
import { RoleProvider } from './context/MyContextTaskThree';
import { NotificationProvider } from './context/MyContexTaskTwo';
import "./index.css"
import "./App.css"

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
        <NotificationProvider>
                <RoleProvider>
                        <CountProvider>
                                <App/>
                        </CountProvider>
                </RoleProvider>
        </NotificationProvider>
);
