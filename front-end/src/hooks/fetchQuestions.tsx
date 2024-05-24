import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import * as Action from '../redux/question_reducer'

import { IGetData } from '../interfaces/IGetData'
import { getServerData } from "../helper/helper"

// import dotenv from 'dotenv';
// dotenv.config();

export const useFetchQuestion = () => {
    const url = "https://quizz-back-end.onrender.com/api/questions/getQuestions"
    const dispatch = useDispatch()
    const [getData, setGetData] = useState<IGetData>({
        isLoading: false,
        apiData: [],
        serverError: null
    })
    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));

        // ASYNC fetch to back-end
        (async () => {
            try {
                const [{ questions, answers }] = await getServerData(url, (data: any) => data)
                if (questions.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: questions }));

                    // Dispatch action
                    dispatch(Action.startExamAction({ question: questions, answers }));
                }
                else {
                    throw new Error("No questions available");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, serverError: error as Error }));
            }
        })()
    }, [dispatch])

    return [getData, setGetData]
}

export const MoveNextQuestion = () => async (dispatch: any) => {
    try {
        dispatch(Action.moveNextAction())
    }
    catch (e) {
        console.log(e)
    }
}

export const MovePrevQuestion = () => async (dispatch: any) => {
    try {
        dispatch(Action.movePrevAction())
    }
    catch (e) {
        console.log(e)
    }
}