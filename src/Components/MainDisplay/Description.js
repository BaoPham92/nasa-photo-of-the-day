import React from 'react';

export const Description = ({
    title,
    explanation
}) => (
        <article>
            <h1>{title}</h1>
            <p>{explanation}</p>
        </article>
    )