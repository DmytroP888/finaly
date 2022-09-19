import React from "react"

import { GRAY_BLUE, GRAY_DARK } from '../../assets/themes/colors'

import {
    Tintedwindow,
    BoxModal,
    СrossСlosure,
    BlockContent,
    TitleModal,
    BlockKcal,
    NumberKcal,
    Kcal,
    Line,
    FoodsBlock
} from './Modal.styled'

const Modal = () => {
    return (
        <>
            <Tintedwindow>
                <BoxModal>
                    <СrossСlosure>&times;</СrossСlosure>
                    <BlockContent>
                        <TitleModal>
                            Your recommended daily
                            calorie intake is
                        </TitleModal>
                        <BlockKcal>
                            <NumberKcal>2800</NumberKcal>
                            <Kcal>kcal</Kcal>
                        </BlockKcal>
                        <Line>Foods you should not eat</Line>
                        <FoodsBlock>
                            1. Dsfgsdfgsdfgs
                            2. Sgvsdfgsdfg
                            3. Kdsdfsdfsdfs
                            3. Kdsdfsdfsdfs
                            3. Kdsdfsdfsdfs
                            3. Kdsdfsdfsdfs
                            3. Kdsdfsdfsdfs
                            3. Kdsdfsdfsdfs
                            3. Kdsdfsdfsdfs
                            3. Kdsdfsdfsdfs
                            3. Kdsdfsdfsdfs
                            3. Kdsdfsdfsdfs
                            3. Kdsdfsdfsdfs
                        </FoodsBlock>


                    </BlockContent>


                </BoxModal>
            </Tintedwindow>
        </>
    )
}

export default Modal