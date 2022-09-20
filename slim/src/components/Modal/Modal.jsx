import React from "react"

import {
    // MobileWidth,
    Tintedwindow,
    BoxModal,
    СrossСlosure,
    BlockContent,
    TitleModal,
    BlockKcal,
    NumberKcal,
    Kcal,
    Line,
    FoodsBlock,
    Buttonyellow
} from './Modal.styled'

const Modal = () => {
    return (
        <>
            {/* <MobileWidth>
        </MobileWidth> */}

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
                            3. Kdsdfsdfsdfs
                        </FoodsBlock>

                        <Buttonyellow>Start losing weight</Buttonyellow>

                    </BlockContent>


                </BoxModal>
            </Tintedwindow>
        </>
    )
}

export default Modal