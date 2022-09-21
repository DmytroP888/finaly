import React from "react"
import { NavLink } from 'react-router-dom'

import { GRAY_BLUE, GRAY_DARK } from '../../assets/themes/colors'
import {
    DesktopWidth,
    TabletWidth,
    MobileWidth,
    Header,
    Logo,
    LogoTablet,
    LogoMobile,
    NavBlock,
    LinkMenu
} from './Header.styled'
import LogoSVG from '../../assets/svg/logo.svg'
import LogoTabletSVG from '../../assets/svg/logo-tablet.svg'
import LogoMobileSVG from '../../assets/svg/logo-mobile-guest.svg'

const linkActiveColor = ({ isActive }) => { return { color: isActive ? GRAY_DARK : GRAY_BLUE } }

const HeaderAuth = () => {
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
        </>
    )
}

export default HeaderAuth