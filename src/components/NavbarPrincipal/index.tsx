/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/modules/rootReducer';
import React, { useState } from 'react';

import * as actions from '../../store/modules/auth/actions';
import { Badge, Container, ContentRight, IntroductionAndButton, Links, LinksHomeNotLogin, Logo, MenuLateral, Nav, NotificationContainer, NotificationDiv, ProfileDiv } from './styled';
import { IoMenuSharp } from 'react-icons/io5';
import RotasRegistradas from '../../Routers/RotasRegistradas';
import NavbarLateral from '../NavbarLateral';
import { AppDispatch } from '../../store';
import { toggleTheme } from '../../store/modules/theme/actions';
import ButtonDarkTheme from '../ButtonDarkTheme';

const NavbarPrincipal: React.FC = () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    const theme = useSelector((state: RootState) => state.theme.theme);

    const [menuLateral, setMenuLateral] = useState<boolean>(false);

    const toggleMenuLateral = () => {
        setMenuLateral(!menuLateral);
    };

    // const handleNotificationClick = () => {
    //     setToggleNotification(!toggleNotification);
    // };
    const dispatch = useDispatch<AppDispatch>();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <Container $active={theme}>

            {isLoggedIn === true ? (
                <MenuLateral>
                    <NavbarLateral setMenuLateral={setMenuLateral}/>
                    <RotasRegistradas />
                </MenuLateral>
            ) : (

                <>
                    {/* fazer a verificacao se  a permissao dele é igual a user para, se for oculta o meunu lateral */}
                    <Nav>
                        <Logo>
                            {isLoggedIn && (
                                <span>
                                    <IoMenuSharp onClick={toggleMenuLateral} size={30} />
                                </span>
                            )}
                            <h2>Saas</h2>
                        </Logo>

                        <ContentRight>
                            <ButtonDarkTheme theme={theme} handleToggleTheme={handleToggleTheme} />
                            <Links $active={theme} to="/">Login</Links>
                            <Links $active={theme} to="/criar-conta">Registre-se</Links>

                        </ContentRight>

                    </Nav>
                    <RotasRegistradas />

                </>
            )}

        </Container>
    );
};

export default NavbarPrincipal;