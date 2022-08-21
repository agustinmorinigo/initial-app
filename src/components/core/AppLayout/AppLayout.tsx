import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';

const AppLayout = () => {

    return(

        <div className='w-full grid grid-cols-[1fr] grid-rows-[auto_1fr_auto]'>
            <Header />
            <MainContent />
            <Footer />
        </div>

    );

};

export default AppLayout;