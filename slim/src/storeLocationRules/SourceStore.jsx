import React, { useState } from "react"
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import PolicyCookie from './PolicyCookie'
import {
    BlurredBackground,
    BlockModal,
    BlockButton,
    RefuseButton,
    AgreeButton
} from './SourceStore.styled'

const SourceStore = () => {
    return (<>
        <BlurredBackground>
            <BlockModal>
                This site uses cookies and related technologies,
                for purposes that may include site performance, analytics,
                improved user experience, or advertising.
                You can choose to consent to our use of these technologies or opt-out of them.
                <PolicyCookie />
                <BlockButton>
                    <RefuseButton>refusal</RefuseButton>
                    <AgreeButton>AGREE & PROCEED</AgreeButton>
                </BlockButton>
            </BlockModal>
        </BlurredBackground>
    </>)
}

export default SourceStore