import styled from 'styled-components'

interface ProgressBarProps {
    progress: number; 
}

export const Container = styled.div`

    h2 {
        color: white;
    }
    .square {
        width: 40rem;
        padding: 3rem;
        border-radius: 1rem;
        border: 1px solid #1FB9E7;
        text-align: center;
        margin-bottom: 3rem;
    }
    .question-square {
        width: 40rem;
        border: 1px solid #1FB9E7;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
`
export const ProgressBar = styled.div<ProgressBarProps>`
    width: ${(props) => props.progress}%;
    height: 10px;
    background-color: #1FB9E7;
    transition: width 0.5s ease-in-out;
    margin-bottom: 2rem;
    border-radius: 1rem;
`;