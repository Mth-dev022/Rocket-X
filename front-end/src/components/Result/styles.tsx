import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'thicccboi';
    
    h1 {
        text-align: center;
        padding: 1rem;
    }
    
    .flex-center{
        display: flex;
        justify-content: center;    
        flex-direction: column;
        border: 1px solid #cecece;
        padding: 3em 4em;
        gap: 1em;
        padding-left: 900px;
    }

    .btn {
        padding: .7rem 3rem;
        background-color: #52F791;
        color: white;
        text-decoration: none;
        border-radius: 1rem;
        transition: .3s ease;

        &:hover {
            background-color: #D8D8D8;
            color: black;
        }
    }
    
    table {
        width: 100%;
    }
    .table-header {
        color: #cecece;
        font-size: 1.1em;
        text-align: center;
        background: #212121;
        padding: 18px 0;
    }

    .table-body {
        font-size: 1.1em;
        text-align: center;
        /* color: #cecece; */
        background: #d8d8d8;
        padding: 18px 0;
    }

    .table-header > tr > td{
        border: 1px solid #faff5a;   
    }
    `