import styled from "styled-components"

import {
    WHITE,
    GRAY_LIGHT
} from "../../assets/themes/colors"

export const Header = styled.header` 
    display: flex;
    position: absolute;
    z-index: 5;
    @media (max-width: 1000px){
       width: 100%;
       height: 80px;
       padding: 16px 32px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       position: fixed;
       border-bottom: 2px solid ${GRAY_LIGHT};
       background: ${WHITE};
    }
    @media (max-width: 600px){
        padding: 16px 20px;
        z-index: 7;
    }
    @media (max-width: 340px){
        padding: 16px 15px;
    }
`;

export const Logo = styled.img` 
    width: 167px;
    height: 66px;
    margin-left: 16px;
    margin-top: 80px;
`;

export const LogoTablet = styled.img` 
    width: 162px;
    height: 44px;
`;

export const LogoMobile = styled.img` 
    width: 43px;
    height: 44px;
`;

export const NavBlock = styled.nav` 
    height: 32px;
    margin-left: 20px;
    margin-top: 121px;
    border-left: 2px solid ${GRAY_LIGHT};
    display: flex;
    align-items: center;
    @media (max-width: 1000px){
       margin:0px;
       border-left: none;
    }
`;

export const LinkMenu = styled.li` 
    font-family: "GothamPro-700";
    font-size: 14px;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    list-style: none;
    margin-left: 20px;
    display: inline;
    @media (max-width: 345px){
        margin-left: 10px;
     }
`;
// ---------------- Width --------------------- 
export const DesktopWidth = styled.div`
    @media only screen and (max-width: 1000px){
        display: none;
    }
`;

export const TabletWidth = styled.div`
    @media only screen and (min-width: 1000px){
        display: none;
    }
    @media only screen and (max-width: 600px){
        display: none;
    }
`;

export const MobileWidth = styled.div`
    @media only screen and (min-width: 600px){
        display: none;
    }
`;