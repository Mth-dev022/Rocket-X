import styled from 'styled-components';

export const Container = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    margin-top: 7rem;
    font-family: 'thicccboi', sans-serif;

    .left-side {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .right-side {
        width: 50%;
    }
    .line {
        width: 5rem;
        height: .3rem;
        background-color: black;
        position: absolute;
        left: 0;
        top: .8rem;
    }
    .dev-quiz {
        margin-left: 6rem;
        font-size: 1.6rem;
    }
    .title {
        font-size: 4.2rem;
        color: #121229;
        font-weight: 700;
    }
    .description {
        font-family: "thicccboi regular", "Sans-serif";
        font-size: 1.2rem;
        color: #7F7F8D;
        font-weight: 700;
        width: 35rem;
    }
    .start-btn {
        width: 20rem;
        padding: 1rem 0px;
        margin-top: 2rem;
        border-radius: 20px;
        background-color: gray;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
    }
    .lock-icon {
        font-size: 1.4rem;
    }
    .image {
        width: 45rem;
        position: absolute;
        top: 7rem;
    }
`;

export const Card = styled.div`
    width: 75%;
    margin: 25rem auto 30rem auto;
    display: flex;
    justify-content: center;
    gap: 2rem;
    font-family: 'thicccboi', sans-serif;

    .card {
        width: 29rem;
        background-color: #FDE3B1;
        padding: 2rem 0 3.5rem 3rem;
        border: none;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        color: #121229;
        cursor: pointer;
        transition: transform 0.5s, box-shadow 0.5s;
        &:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
    }
    .card-01 {
    width: 29rem;
    background-color: #FDE3B1;
    padding: 2rem 0 3.5rem 3rem;
    border: none;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: #121229;
    cursor: pointer;
    transition: transform 0.5s; /* Apenas transição para a escala */

    &:hover {
        transform: scale(1.05);
        transition: transform 0.5s; /* Apenas transição para a escala */
    }

    .select-btn {
        font-size: 1.1rem;
        color: #11A04E;
    }
}

.card-02 {
    width: 29rem;
    background-color: #77CDF6;
    padding: 2rem 0 3.5rem 3rem;
    border: none;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: #121229;
    cursor: pointer;
    transition: transform 0.5s; /* Apenas transição para a escala */

    &:hover {
        transform: scale(1.05);
        transition: transform 0.5s; /* Apenas transição para a escala */
    }

    .select-btn {
        font-size: 1.1rem;
        color: #214CE5;
    }
}

.card-03 {
    width: 29rem;
    background-color: #F4B39A;
    padding: 2rem 0 3.5rem 3rem;
    border: none;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: #121229;
    cursor: pointer;
    transition: transform 0.5s; /* Apenas transição para a escala */

    &:hover {
        transform: scale(1.05);
        transition: transform 0.5s; /* Apenas transição para a escala */
    }

    .select-btn {
        font-size: 1.1rem;
        color: #F05030;
    }
}

    .text {
        width: 23rem;
        font-weight: 400;
    }

    .select-btn {
        display: flex;
        align-items: center;
        font-weight: 700;
        transition: color 0.5s;
        &:hover {
            color: #11A04E;
        }
    }

    .icon {
        margin-left: .4rem;
    }
    .selected-card {
        border: 3px solid black;
    }
`;
