import React from "react"
import { NavLink } from 'react-router-dom'

import {
    WrapperAuthform,
    TitleAuthform,
    FormBlockInputs,
    BlockInputs,
    LeftBlockInputs,
    Input,
    LabelInput,
    ButtonLoginAuthform,
    ButtonRegisterAuthform
} from './AuthForm.styled'

const AuthForm = () => {
    return (
        <>
            <WrapperAuthform>
                <TitleAuthform>
                    Register
                </TitleAuthform>
                <FormBlockInputs>
                    <LeftBlockInputs>
                        <BlockInputs>
                            <LabelInput htmlFor="nameuser" >Name *</LabelInput>
                            <Input type='text' name='nameuser' id="nameuser" minlength="3" maxlength="254" required />
                        </BlockInputs>
                        <BlockInputs>
                            <LabelInput htmlFor="email" >Email *</LabelInput>
                            <Input type='email' name='email' id="email" minlength="3" maxlength="254" required />
                        </BlockInputs>
                        <BlockInputs>
                            <LabelInput htmlFor="password">Password *</LabelInput>
                            <Input type='password' name='password' id="password" minlength="8" maxlength="100" required />
                        </BlockInputs>
                    </LeftBlockInputs>
                    <NavLink to="/login">
                        <ButtonLoginAuthform  >Login</ButtonLoginAuthform>
                    </NavLink>
                    <ButtonRegisterAuthform type="submite">Register</ButtonRegisterAuthform>
                </FormBlockInputs>
            </WrapperAuthform>
        </>
    )
}

export default AuthForm