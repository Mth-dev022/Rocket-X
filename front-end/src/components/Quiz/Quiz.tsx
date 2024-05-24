import { useContext, useEffect, useState } from "react";
import * as C from './styles'

import Questions from "../Questions/Questions";

import { MoveNextQuestion, MovePrevQuestion } from "../../hooks/fetchQuestions";
import { PushAnswer } from "../../hooks/setResult";

import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Quiz = () => {
  const [check, setCheck] = useState(undefined)

  const result = useSelector(state => state.result.result)
  const { queue, trace } = useSelector(state => state.questions)
  const dispatch: any = useDispatch()

  const onNext = () => {

    if (trace < queue.length) {
      dispatch(MoveNextQuestion())

      // insert new result
      if (result.length <= trace) {
        dispatch(PushAnswer(check))
      }
    }
    setCheck(undefined)
  }
  const onPrev = () => {
    if (trace > 0) {
      dispatch(MovePrevQuestion())
    }
  }
  const onChecked = (check: any) => {
    setCheck(check)
  }
  if (result.length && result.length >= queue.length) {
    return <Navigate to={'/result'} replace={true}></Navigate>
  }

  return (
    <C.Container>
      <div className="container">

        <Questions onChecked={onChecked} />

        <div className="grid">
          {trace > 0 ? <button className="btn prev" onClick={() => onPrev()}>Prev</button> : <div></div>}
          <button className="btn next" onClick={() => onNext()}>Next</button>
        </div>
      </div>
    </C.Container>
  );
};

export default Quiz;
