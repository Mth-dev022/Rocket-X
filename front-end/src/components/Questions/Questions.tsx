import React, { useEffect, useState } from 'react'
import './styles'

import { useFetchQuestion } from '../../hooks/fetchQuestions'
import { updateResult } from '../../hooks/setResult'

import { useDispatch, useSelector } from 'react-redux'

import { IQuestion } from '../../interfaces/IQuestions'
import { Container, ProgressBar } from './styles'

const Questions = ({ onChecked }: any) => {
    const [checked, setChecked] = useState<boolean>(false)
    const { trace, queue } = useSelector(state => state.questions)
    const result = useSelector(state => state.result.result)
    const [{ isLoading, apiData, serverError }] = useFetchQuestion()

    const totalQuestions = queue.length;
    const answeredQuestions = Object.keys(result).length;
    const progress = answeredQuestions / totalQuestions * 100;

    const questions: IQuestion = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(updateResult({ trace, checked }))
    }, [checked])

    const onSelect = (i: number | any) => {
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked }))
    }

    if (isLoading) return <h3 className=''>Loading...</h3>
    if (serverError) return <h3 className=''>{serverError.toString() || "Unknown Error"}</h3>
    

    return (
        <Container>
             <ProgressBar progress={progress} />
            <div className='square'>
                <h2 className=''>{questions?.question}</h2>
            </div>
            <ul key={questions?.id}>
                {questions?.options.map((q: any, i: any) => (
                    <div>
                        <li className='question-square' key={i}>
                            <input
                                type="radio"
                                name='options'
                                id={`q${i}-option`}
                                onChange={() => onSelect(i)} />
                            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                            <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                        </li>
                    </div>
                ))}
            </ul>
        </Container>
    )
}

export default Questions
