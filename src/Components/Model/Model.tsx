import React from 'react'
import { ModelHead, ModelBikiniBottom, ModelBikinitop, ModelBody, ModelContain, ModelFeet, ModelFeetLeft, ModelFeetRight, ModelHair, ModelHandBag, ModelNeckLaces } from './Model.style'
import { connector, PropsFromReducer } from 'Redux/ConnectReducer'

const Model = ({ model }: PropsFromReducer) => {

    return (
        <ModelContain>
            <ModelBody />
            <ModelHead />
            <ModelBikinitop />
            <ModelBikiniBottom />
            <ModelFeetLeft />
            <ModelFeetRight />
            <ModelBikinitop backgroundChange={model.topclothes} />
            <ModelBikiniBottom backgroundChange={model.botclothes} />
            <ModelHandBag backgroundChange={model.handbags} />
            <ModelNeckLaces backgroundChange={model.necklaces} />
            <ModelHair backgroundChange={model.hairstyle} />
            <ModelFeet backgroundChange={model.shoes} />
            <ModelContain backgroundChange={model.background} />
        </ModelContain>
    )
}

export default connector(Model)


