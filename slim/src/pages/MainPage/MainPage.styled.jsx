import styled from "styled-components"

import {
    WHITE,
    GRAY_LIGHT,
    STRAWB_SHADOW
} from "../../assets/themes/colors"

export const Header = styled.header` 
    display: flex;
    position: absolute;
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
       z-index: 10;
    }
    @media (max-width: 600px){
        padding: 16px 20px;
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
`;

// --------------------- IMG ------------------------
export const ContainerRelative = styled.div` 
    position: relative;
    height: 1055px;
    width: 100%;
    @media (max-width: 600px){
        display: none;
    }
`;

export const FigureBackgroundPNG = styled.img` 
    width: 602px;
    height: 816px;
    float: right;
    margin-top: 34px;
    @media (max-width: 1000px){
        width: 530px;
        position: absolute;
        height: 580px;
        bottom: 0px;
        right: 0px;
    }
`;

export const Screensaver = styled.img` 
    float: right;
    height: 822px;
    position: absolute;
    right: 0px;
`;

export const MainpageTabletLeaves = styled.img`
    position: absolute;    
    bottom: 15px;
`;

export const MainpageTabletStrawb = styled.img`
    position: absolute;
    top: 583px;
    right: 30px;
    filter: drop-shadow(10px 20px 50px ${STRAWB_SHADOW});
`;

export const MainpageTabletBanana = styled.img`
    position: absolute;
    z-index: 2;
    right: 0px;
    bottom: 0px;
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