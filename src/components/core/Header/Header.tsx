import { Link } from 'react-router-dom';

const Header = () => {

    return(

        <header className='bg-indigo-400 p-6 text-right'>
            <h1 className='text-3xl text-white font-bold inline'>
                <Link to="/">TaskApp</Link>
            </h1>
        </header>
        
    );

};

export default Header;