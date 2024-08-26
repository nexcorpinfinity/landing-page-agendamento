import styled from 'styled-components';
import { temaGlobal } from '../../styles/theme';
import { Link } from 'react-router-dom';

export const Container = styled.div<{ $active: string | boolean }>`
    background-color: ${(props) => (props.$active ? temaGlobal.backgroundDark : temaGlobal.backgroundLight)};
    color: ${(props) => (props.$active ? temaGlobal.colorDark : temaGlobal.colorLight)};
    width: 320px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    gap: 1rem;
    transition: width 0.3s ease;
    height: 93vh;
`;

export const StyledLink = styled(Link) <{ $active?: boolean }>`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    gap: 10px;
    text-decoration: none;
    color: #000000;
    background-color: ${(props) => (props.$active ? '#4267ce' : 'white')};
    border: 1px solid ${(props) => (props.$active ? 'blue' : 'black')};
    font-size: 0.9rem;
    transition: background-color 0.3s ease, color 0.3s ease;

    .icon {
        font-size: 1.2rem;
    }

    span {
        transition: opacity 0.3s ease;
    }

    &:hover {
        background-color: ${(props) => (props.$active ? 'darkblue' : '#0083bf')};
        color: #000000;
    }

    &:hover span {
        display: block;
        color: #000000;

    }
    &:active {
            transform: scale(0.98);
        }
`;

export const ComercioTitle = styled.div`
    /* border: 1px solid black; */
    margin-top: 1rem;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    div:nth-child(3) {
        cursor: pointer;
    }
`;

export const LinksNavLateral = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    small {
        padding-left: 7px;
        font-size: 1rem;
    }
`;