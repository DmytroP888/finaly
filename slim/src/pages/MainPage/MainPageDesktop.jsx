import React from "react"
import { NavLink } from 'react-router-dom'

import { GRAY_BLUE, GRAY_DARK } from '../../assets/themes/colors'

import Calculateform from '../../components/Calculateform'
import {
    HeadLeftBlock,
    Logo,
    NavBlock,
    LinkMenu,
    FigureBackgroundPNG,
    Screensaver
} from './MainPage.styled'
import {
    FigureBackgroundAvif,
    FigureBackgroundWebp,
    FigureBackgroundPng
} from '../../assets/img'
import {
    MainPageImgAvif,
    MainPageImgWebp,
    MainPageImgPng
} from '../../assets/img/desktop'
import LogoSVG from '../../assets/svg/LogoSVG.svg'

const linkActiveColor = ({ isActive }) => { return { color: isActive ? GRAY_DARK : GRAY_BLUE } }

const MainPageDesktop = () => {

    return (
        <>
            <HeadLeftBlock>
                <NavLink to="login" >
                    <Logo src={LogoSVG} alt="Logo header"></Logo>
                </NavLink>
                <NavBlock>
                    <LinkMenu>
                        <NavLink to="login" style={linkActiveColor} >
                            Sign in
                        </NavLink>
                    </LinkMenu>
                    <LinkMenu>
                        <NavLink to="auth" style={linkActiveColor} >
                            Registration
                        </NavLink>
                    </LinkMenu>
                </NavBlock>
            </HeadLeftBlock>
            <picture>
                <source srcSet={FigureBackgroundWebp} type="image/webp" />
                <source srcSet={FigureBackgroundAvif} type="image/avif" />
                <FigureBackgroundPNG src={FigureBackgroundPng} alt="Background figure" />
            </picture>
            <picture>
                <source srcSet={MainPageImgAvif} type="image/webp" />
                <source srcSet={MainPageImgWebp} type="image/avif" />
                <Screensaver src={MainPageImgPng} alt="Screensaver picture" />
            </picture>
            <Calculateform />
        </>
    )
}

export default MainPageDesktop