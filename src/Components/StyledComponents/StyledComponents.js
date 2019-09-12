import styled from 'styled-components';

const App = styled.div`
    height: 100vh;
    width: 100vw;
    text-align: center;
    background-color: #50595C;

    & > p {
        color: white;
    }
`;

const Display = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 1rem;
    background-color: #EFEFEF;
    border-radius: 0.3rem;
    border-bottom: 5px solid grey;
`;

const Img = styled.img`
    border-radius: 0.2rem;
`;

const Article = styled.article`
    & > h1 {
        color: #50595C;
        margin: 0.5rem;
    }
`;

export default {
    App,
    Display,
    Img,
    Article
}