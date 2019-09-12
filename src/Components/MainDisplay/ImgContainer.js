import React from 'react';
import { Description } from './Description'

export const ImgContainer = ({obj}) => (
        <div>
            <img src={obj.url} alt={obj.copyright} />
            <Description title={obj.title} explanation={obj.explanation}/>
        </div>
    )