import React from 'react';
import { Description } from './Description'

// Styled components
import style from '../StyledComponents/StyledComponents'

export const ImgContainer = ({obj}) => (
        <div>
        <style.Img src={obj.url} alt={obj.copyright} />
            <Description title={obj.title} explanation={obj.explanation}/>
        </div>
    )