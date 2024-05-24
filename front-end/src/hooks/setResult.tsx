import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'
import { useEffect } from 'react'

export const PushAnswer = (result: any) => async (dispatch: any) => {

    try {
        await dispatch(Action.pushResultAction(result))
    } catch (e) {
        console.log(e)
    }
}

export const updateResult = (index: any) => async (dispatch: any) => {
    try {
        dispatch(Action.updateResultAction(index))
    } catch(error) {
        console.log(error)
    }
}

export const usePublishResult = (resultData: any) => {
    const {result, username, attempts, points, achieved} = resultData;
    
    useEffect(() => {
        (async () => {
            try {
                if (Array.isArray(result) && result.length === 0 && !username) {
                    throw new Error("Couldn't get result");
                    await postServerData('https://quizz-back-end.onrender.com/api/questions/result', resultData, data => data);
                }
            } catch (e) {
                console.log(e);
            }
        })();
    }, [result, username, attempts, points, achieved]);
};


