import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuLateral = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.div`
    width: 100%;

`;
export const Nav = styled.nav`
    padding: 13px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;

`;

export const LinksHomeNotLogin = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

`;

export const NotificationContainer = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
`;

export const Badge = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
`;

export const IntroductionAndButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .noti-poupap{
        position: absolute;
        top: 50px;
        right: 170px;
        width: 300px;
        height: 200px;
        border: 1px solid black;
        background-color: white;
        border-radius: 10px;
    }
`;

export const ContentRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    padding: 5px;
    border-radius: 50%;
    &:hover {
        background-color: white;
    }
`;
export const NotificationDiv = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    padding: 5px;
    border-radius: 50%;
    &:hover {
        background-color: white;
    }
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    span {
        cursor: pointer;
    }
`;

export const Links = styled(Link)`

    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 18px;
    &:hover {
        color: blue;
    }

`;