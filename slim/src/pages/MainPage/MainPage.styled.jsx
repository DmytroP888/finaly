import styled
    // , { css } 
    from "styled-components"

import {
    //     WHITE,        
    // GRAY_WHITE,   
    GRAY_LIGHT
    // GRAY_BLUE,    
    // GRAY_GRADIENT,
    // GRAY_DARK,    
    // ORANGE_RED,   
    // CYAN_BLUE,    
    // CYAN_DARK,    
    // BLACK        
} from "../../assets/themes/colors"

// export const GothamPro_bold = css` 
//     font-family: "GothamPro-700";
//     line-height: 15px;
//     font-size: 12px;
//     letter-spacing: 0.04em;
// `;

export const HeadLeftBlock = styled.div` 
    display: flex;
`;

export const Logo = styled.img` 
    width: 167px;
    height: 66px;
    margin-left: 16px;
    margin-top: 80px;
`;

export const NavBlock = styled.nav` 
    height: 32px;
    margin-left: 20px;
    margin-top: 121px;
    border-left: 2px solid ${GRAY_LIGHT};
    display: flex;
    align-items: center;
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

export const FigureBackground = styled.div` 
    margin-right: 0px;
    margin-bottom: 0px;
    width: 602.01px;
    height: 816px;
`;

export const FigureBackgroundPNG = styled.img` 
    margin-left: 20px;
`;

