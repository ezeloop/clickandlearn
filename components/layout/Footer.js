import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

const Foot = styled.div`
    background-color: var(--primary);
    height: 80px; 
    width: 100%;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Azo Sans", sans-serif;
    
    
    p {
        font-size: 0.8rem;
        color: var(--text);
    } 
    @media (max-width: 576px) {
        marginTop: 100px;
        p {
            font-size: 12px;
        }
        
    }
`

const Footer = () => {

    const loadingState = useSelector(state => state.ui.loading)

    return (
        <>
            {loadingState ?  null : <Foot >
                <p>
                    Cats Developing - Copyright © {new Date().getFullYear()}
                </p>
            </Foot>}

        </>

    );
}

export default Footer;