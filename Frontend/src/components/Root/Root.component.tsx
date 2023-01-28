//react imports
import { useEffect } from 'react';
//React router dom imports
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
//Components imports
import NavbarCustom from '../Navbar/Navbar.component';

const Root = () => {
    //Hook for current location
    const {pathname} = useLocation();
    //Hook for navigate 
    const navigate = useNavigate()
    //Change the / path in /home (default)
    useEffect(() => {
   if(pathname === '/') {
    navigate('/home');
   }  
    },[pathname])

    //Render the navbar and the content
    return(
        <>
        <NavbarCustom />
        <Outlet />
        </>
    )
}

export default Root;