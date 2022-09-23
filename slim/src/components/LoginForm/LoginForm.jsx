import React from "react"
import { NavLink } from 'react-router-dom'

import {
    WrapperLoginform,
    TitleLoginform,
    FormBlockInputs,
    BlockInputs,
    LeftBlockInputs,
    Input,
    LabelInput,
    ButtonLogin,
    ButtonRegister
} from './LoginForm.styled'

const LoginForm = () => {
    return (
        <>
            <WrapperLoginform>
                <TitleLoginform>
                    Sign in
                </TitleLoginform>
                <FormBlockInputs>
                    <LeftBlockInputs>
                        <BlockInputs>
                            <LabelInput htmlFor="email" >Email *</LabelInput>
                            <Input type='email' name='email' id="email" minlength="3" maxlength="254" required />
                        </BlockInputs>
                        <BlockInputs>
                            <LabelInput htmlFor="password">Password *</LabelInput>
                            <Input type='password' name='password' id="password" minlength="8" maxlength="100" required />
                        </BlockInputs>
                    </LeftBlockInputs>
                    <ButtonLogin type="submite" >Login</ButtonLogin>
                    <NavLink to="/auth">
                        <ButtonRegister >Register</ButtonRegister>
                    </NavLink>
                </FormBlockInputs>
            </WrapperLoginform>
        </>
    )
}

export default LoginForm