import styled from "styled-components"

import {
    WHITE,
    GRAY_WHITE,
    GRAY_LIGHT,
    GRAY_BLUE,
    GRAY_DARK,
    ORANGE_RED,
    TINTED_MODAL,
    MODAL_SHADOW,
    CYAN_DARK,
    ORANGE_RED_SHADOW,
} from "../../assets/themes/colors"

export const Tintedwindow = styled.div` 
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${TINTED_MODAL};
    @media (max-width: 600px){
        background: ${GRAY_WHITE};
    }
`;

export const BoxModal = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 672px;
    height: 573px;
    background: ${WHITE};
    box-shadow: 0px 22px 40px ${MODAL_SHADOW};
    @media (max-width: 740px){
        width: 640px;
    }
    @media (max-width: 680px){
        width: 550px;
    }
`;

export const СrossСlosure = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin: 19px 25px;
    float: right;
    cursor: pointer;
`;

export const BlockContent = styled.div`
    width: 400px;
    height: 450px;
    margin: 60px 136px 60px 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 740px){
        margin: 60px 126px 60px 126px;
    }
    @media (max-width: 680px){
        margin: 60px 75px 60px 75px;
    }
`;

export const TitleModal = styled.h2`
    font-family: 'Verdana-400';
    font-size: 26px;
    line-height: 32px;
    text-align: center;
    color: ${GRAY_DARK};
`;

export const BlockKcal = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 600px;
    margin-top: 36px;
    @media (max-width: 680px){
        width: 450px;
    }
`;

export const NumberKcal = styled.div`
    font-family: 'Verdana-700';
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    letter-spacing: 0.04em;
    color: ${CYAN_DARK};
    overflow-x: overlay;
    max-width: 450px;
    height: 80px;
    @media (max-width: 680px){
        max-width: 350px;
    }
`;

export const Kcal = styled.div`
    font-family: 'Verdana-700';
    font-size: 15px;
    text-align: center;
    letter-spacing: 0.04em;
    height: 47px;
    margin-left: 12px;
    color: ${CYAN_DARK};
`;

export const Line = styled.span`
    margin-top: 25px;
    padding-top: 12px;
    width: 330px;
    height: 50px;
    border-top: 1px solid ${GRAY_LIGHT};
    font-family: 'Verdana-700';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${GRAY_DARK};
`;

export const FoodsBlock = styled.div`
    width: 330px;
    height: 112px;
    font-family: 'Verdana-400';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${GRAY_BLUE};
    overflow: auto;
`;

export const Buttonyellow = styled.button`
    margin-top: 35px;    
    width: 210px;
    height: 43px;
    background: ${ORANGE_RED};
    box-shadow: 0px 4px 10px ${ORANGE_RED_SHADOW};
    border-radius: 30px;
    font-family: "Verdana-700";
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${WHITE};
    cursor: pointer;
`;

// export const MobileWidth = styled.div`
//     @media only screen and (min-width: 600px){
//         display: none;
//     }
// `;
