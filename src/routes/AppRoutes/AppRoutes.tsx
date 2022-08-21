import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from '../../components/core/AppLayout/AppLayout';
import AppSideBar from '../../components/core/AppSideBar/AppSideBar';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <AppSideBar />
            <AppLayout />
        </BrowserRouter>
    );

};

export default AppRoutes;