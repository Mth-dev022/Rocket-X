import styled from "styled-components";

export const Container = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0rem;
    font-family: 'thicccboi regular', 'sans-serif';

    .login-btn {
        padding: 1rem 3rem;
        border-radius: 10px;
        border: none;
        background-color: #121229;
        color: white;
        font-family: 'thicccboi regular', 'sans-serif';
        cursor: pointer;
    }
    .register-btn {
        margin-left: 2rem;
        padding: 1rem 3rem;
        border-radius: 10px;
        border: none;
        background-color: #7473FA;
        color: white;
        font-family: 'thicccboi regular', 'sans-serif';
        cursor: pointer;
    }

    .logged-user, .user-content {
        display: flex;
        justify-content:center;
        align-items:center;
    }
    .user-content {
        margin-right: 3rem;
        gap: .6rem;
    }
    .icon {
        font-size: 2rem;
    }

    .logout-btn {
        font-family: 'thicccboi regular', 'sans-serif';
        padding: .7rem 2.5rem;
        border: none;
        border-radius: 1rem;
        cursor: pointer;
        background-color: #7272FF;
        color: white;
    }
`