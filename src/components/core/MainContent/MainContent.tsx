import { Route, Routes } from 'react-router-dom';
import HomePage from '../../../pages/Home/Home';
import NotFoundPage from '../../../pages/NotFound/NotFound';
import ProfilePage from '../../../pages/Profile/Profile';
import SettingsPage from '../../../pages/Settings/Settings';

const MainContent = () => {

    return(

        <main className='p-6 bg-white select-text max-w-[100%]'>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
        
    );

};

export default MainContent;