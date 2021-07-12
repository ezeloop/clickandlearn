import React from 'react';
import styled from '@emotion/styled';

const Foot = styled.div `
    background-color: var(--primary);;
    height: 50px;
    width: 100%;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Azo Sans", sans-serif;
    position: absolute;
    bottom: 0;
    
    p {
        font-size: 0.8rem;
        color: black;
    } 
    @media (max-width: 576px) {
        p {
            font-size: 12px;
        }
        
    }
`

const Footer = () => {

    return ( 
        <Foot >
            <p className="text-center text-muted">
            Cats Developing - Copyright © {new Date().getFullYear()}
            </p> 
        </Foot> 
     );
}
 
export default Footer;