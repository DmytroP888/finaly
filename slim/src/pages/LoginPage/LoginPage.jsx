import React from "react"

import Header from '../../components/Header'
import {
    Logo,
    HeaderDesktop,
    DesktopWidth,
    TabletWidth,
    ContainerRelative,
    FigureBackgroundPNG,
    MainpageTabletLeaves,
    MainpageTabletStrawb,
    MainpageTabletBanana,
    Screensaver
} from './LoginPage.styled'
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
    LogAuthTabletLeavesAvif,
    LogAuthTabletLeavesWebp,
    LogAuthTabletLeavesPng,
    StrawberryLoginTabletAvif,
    StrawberryLoginTabletWebp,
    StrawberryLoginTabletPng
} from '../../assets/img'

import LogoSVG from '../../assets/svg/logo.svg'

const LoginPage = () => {
    return (
        <>
            <HeaderDesktop>
                <Header />
            </HeaderDesktop>
            <DesktopWidth>
                <Logo src={LogoSVG} alt="Logo header" />
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
                        <source srcSet={LogAuthTabletLeavesWebp} type="image/webp" />
                        <source srcSet={LogAuthTabletLeavesAvif} type="image/avif" />
                        <MainpageTabletLeaves src={LogAuthTabletLeavesPng} alt="Background figure" />
                    </picture>
                    <picture>
                        <source srcSet={StrawberryLoginTabletWebp} type="image/webp" />
                        <source srcSet={StrawberryLoginTabletAvif} type="image/avif" />
                        <MainpageTabletStrawb src={StrawberryLoginTabletPng} alt="Background figure" />
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

export default LoginPage