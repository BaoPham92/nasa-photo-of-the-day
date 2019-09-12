import React from 'react';

// Styled components
import style from '../StyledComponents/StyledComponents'

export const Description = ({
    title,
    explanation
}) => (
        <style.Article>
            <h1>{title}</h1>
            <p>{explanation}</p>
        </style.Article>
    )