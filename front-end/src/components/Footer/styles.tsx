import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: #121229;
    padding: 1rem 0rem 3rem 0rem;

    .all-content {
        width: 65%;
        margin: 0 auto;
    }

    .logo {
        width: 20%;
    }

    .card {
        width: 90%;
        padding: 130px;
        margin: 0 auto;
        transform: translateY(-13rem);
        background-color: #C3EDFF;
        border-radius: .8rem;
        font-size: 3.7rem;
        font-weight: 600;
        font-family: 'thicccboi regular';
        text-align: center;
    }
    .icon01 {
        position: absolute;
        right: 5rem;
        top: 5rem;
        animation: rotate-half 2s infinite;
    }
    .icon02 {
        position:absolute;
        left: 4rem;
        bottom: 4rem;
        animation: rotate-half 2s infinite;
    }
    .content {
        display:flex;
        flex-direction: column;
        gap: 3rem;
        margin-left: 3.5rem;
    }
    .about-my-job {
        color: white;
        font-family: 'thicccboi regular';
        width: 28rem;
    }
    .icons-container {
        display:flex;
        gap: 2.5rem;
    }
    .icon-circle {
        display:flex;
        justify-content:center;
        align-items:center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: white;
        cursor: pointer;
    }
    .icon {
        font-size: 1.3rem;
        color: black;
    }
    .copyright {
        color: white;
        font-family: 'thicccboi';
        text-align: center;
        margin-top: 2rem;
    }

    @keyframes rotate-half {
            0% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(180deg);
            }
            100% {
                transform: rotate(0deg);
            }
        }
`