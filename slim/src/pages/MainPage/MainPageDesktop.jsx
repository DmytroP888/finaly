import React from "react"
import { NavLink } from 'react-router-dom'

import { GRAY_BLUE, GRAY_DARK } from '../../assets/themes/colors'

import {
    HeadLeftBlock,
    Logo,
    NavBlock,
    LinkMenu,
    FigureBackground,
    FigureBackgroundPNG
} from './MainPage.styled'
import FigureBackgroundAvif from '../../assets/img/figure-background.avif'
import FigureBackgroundWebp from '../../assets/img/figure-background.webp'
import FigureBackgroundPng from '../../assets/img/figure-background.png'
import LogoSVG from '../../assets/svg/LogoSVG.svg'

const linkActiveColor = ({ isActive }) => { return { color: isActive ? GRAY_DARK : GRAY_BLUE } }

const MainPageDesktop = () => {

    return (
        <>
            <HeadLeftBlock>
                <Logo src={LogoSVG} alt="Logo header"></Logo>
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
            <FigureBackground>
                <picture>
                    <source srcSet={FigureBackgroundWebp} type="image/webp" />
                    <source srcSet={FigureBackgroundAvif} type="image/avif" />
                    <FigureBackgroundPNG src={FigureBackgroundPng} alt="Background picture" />
                </picture>
            </FigureBackground>
        </>
    )

}

export default MainPageDesktop