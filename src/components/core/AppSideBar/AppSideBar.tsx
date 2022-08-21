import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AppSideBar = () => {

    const [ showSideBar, setShowSideBar ] = useState( false );

    const handleToggle = () => {
        setShowSideBar( !showSideBar );
    };
  
    return(
        <div
            className={ `shrink-0 fixed top-0 ${ showSideBar ? 'left-0' : 'left-[-100%]' } h-full w-[70%] max-w-[300px] transition-[left] transition-300 ease-in-out lg:static overflow-hidden` }
        >
            <button
                type="button" 
                className='bg-indigo-800 p-[6px] fixed top-[23px] left-[24px] z-[9999] lg:hidden'
                onClick={ handleToggle }
            >
                { 
                    showSideBar 
                        ? <FaTimes color='#FFF' size={ '25px' } />
                        : <FaBars color='#FFF' size={ '25px' } />
                }
            </button>

            <nav
                className='bg-indigo-800 p-6 w-full max-w-[300px] h-full flex items-center justify-center text-white relative z-[999] overflow-hidden lg:fixed'
            >
                <ul 
                    className='w-full flex items-center justify-center gap-[15px] flex-col overflow-hidden'
                >
                    <li>
                        <Link 
                            to="/"
                            className='hover:underline text-2xl'
                            onClick={ handleToggle }
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="settings"
                            className='hover:underline text-2xl'
                            onClick={ handleToggle }
                        >
                            Ajustes
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="profile"
                            className='hover:underline text-2xl'
                            onClick={ handleToggle }
                        >
                            Perfil
                        </Link>
                    </li>
                </ul>
            </nav>

            <div
                className={`
                    bg-black/[.6] w-full h-full
                    fixed top-0 left-0
                    transition-[opacity,_visibility] ease-in-out duration-300
                    ${ showSideBar ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none' }
                    z-[99] lg:hidden
                `}
                onClick={ handleToggle }
            >
            </div>

        </div>
    );

};

export default AppSideBar;