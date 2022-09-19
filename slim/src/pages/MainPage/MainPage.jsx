import React from "react"
import { NavLink } from 'react-router-dom'

import { GRAY_BLUE, GRAY_DARK } from '../../assets/themes/colors'

import Calculateform from '../../components/Calculateform'
import {
    DesktopWidth,
    TabletWidth,
    MobileWidth,
    Header,
    Logo,
    LogoTablet,
    LogoMobile,
    NavBlock,
    LinkMenu,
    ContainerRelative,
    FigureBackgroundPNG,
    MainpageTabletLeaves,
    MainpageTabletStrawb,
    MainpageTabletBanana,
    Screensaver,
} from './MainPage.styled'
import {
    FigureBackgroundAvif,
    FigureBackgroundWebp,
    FigureBackgroundPng,
    FigureBackTabletAvif,
    FigureBackTabletWebp,
    FigureBackTabletPng,
    MainPageImgAvif,
    MainPageImgWebp,
    MainPageImgPng,
    MainpageTabletBananaAvif,
    MainpageTabletBananaWebp,
    MainpageTabletBananaPng,
    MainpageTabletLeavesAvif,
    MainpageTabletLeavesWebp,
    MainpageTabletLeavesPng,
    StrawberryMainTabletAvif,
    StrawberryMainTabletWebp,
    StrawberryMainTabletPng
} from '../../assets/img'
import LogoSVG from '../../assets/svg/logo.svg'
import LogoTabletSVG from '../../assets/svg/logo-tablet.svg'
import LogoMobileSVG from '../../assets/svg/logo-mobile-guest.svg'

const linkActiveColor = ({ isActive }) => { return { color: isActive ? GRAY_DARK : GRAY_BLUE } }

const MainPage = () => {
    return (
        <>
            <Header>
                <NavLink to="login" >
                    <DesktopWidth>
                        <Logo src={LogoSVG} alt="Logo header" />
                    </DesktopWidth>
                    <TabletWidth>
                        <LogoTablet src={LogoTabletSVG} alt="Logo header" />
                    </TabletWidth>
                    <MobileWidth>
                        <LogoMobile src={LogoMobileSVG} alt="Logo header" />
                    </MobileWidth>
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
            </Header>
            <Calculateform />
            <DesktopWidth>
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
            </DesktopWidth>
            <TabletWidth>
                <ContainerRelative>
                    <picture>
                        <source srcSet={FigureBackTabletWebp} type="image/webp" />
                        <source srcSet={FigureBackTabletAvif} type="image/avif" />
                        <FigureBackgroundPNG src={FigureBackTabletPng} alt="Background figure" />
                    </picture>
                    <picture>
                        <source srcSet={MainpageTabletLeavesWebp} type="image/webp" />
                        <source srcSet={MainpageTabletLeavesAvif} type="image/avif" />
                        <MainpageTabletLeaves src={MainpageTabletLeavesPng} alt="Background figure" />
                    </picture>
                    <picture>
                        <source srcSet={StrawberryMainTabletWebp} type="image/webp" />
                        <source srcSet={StrawberryMainTabletAvif} type="image/avif" />
                        <MainpageTabletStrawb src={StrawberryMainTabletPng} alt="Background figure" />
                    </picture>
                    <picture>
                        <source srcSet={MainpageTabletBananaWebp} type="image/webp" />
                        <source srcSet={MainpageTabletBananaAvif} type="image/avif" />
                        <MainpageTabletBanana src={MainpageTabletBananaPng} alt="Background figure" />
                    </picture>
                </ContainerRelative>
            </TabletWidth>
        </>
    )
}

export default MainPage