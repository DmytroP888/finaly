import React from "react"

import {
    WrapperCalcform,
    TitleCalcform,
    WrapperBlockInputs,
    BlockInputs,
    Input,
    InputRadio,
    HiddenRadioButton,
    RadioButton,
    BackgroundRadio,
    RadioChecked


} from './Calculateform.styled'

const Calculateform = () => {


    return (
        <>
            <WrapperCalcform>
                <TitleCalcform>
                    Calculate your daily calorie intake right now
                </TitleCalcform>

                <WrapperBlockInputs>
                    <BlockInputs>Height*
                        <Input></Input>
                    </BlockInputs>
                    <BlockInputs>Age *
                        <Input></Input>
                    </BlockInputs>
                    <BlockInputs>Current weight *
                        <Input></Input>
                    </BlockInputs>
                    <BlockInputs>Desired weight *
                        <Input></Input>
                    </BlockInputs>
                    <BlockInputs>Blood type *
                        <Input></Input>
                    </BlockInputs>


                    <input type="radio" value={2} name='bloodtype' ></input>
                    <InputRadio type='radio' value={1} name='bloodtype' ></InputRadio>

                    <BackgroundRadio>
                        <RadioChecked>
                            <InputRadio type='radio' value={1} name='bloodtype' ></InputRadio>
                        </RadioChecked>
                    </BackgroundRadio>
                    <BackgroundRadio></BackgroundRadio>
                    <BackgroundRadio></BackgroundRadio>


                </WrapperBlockInputs>


            </WrapperCalcform>

        </>
    )
}

export default Calculateform