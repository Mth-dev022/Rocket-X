import React from 'react';
import * as C from './styles';

import { Link } from 'react-router-dom';

import Result_Table from '../Result_Table/Result_Table';
import { attempts_Number, earnPoints_Number, flagResult } from '../../helper/helper';

import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../../redux/question_reducer';
import { resetResultAction } from '../../redux/result_reducer';

import { usePublishResult } from '../../hooks/setResult';

import { RootState } from '../../interfaces/IResult';

const Result: React.FC = () => {
  const dispatch = useDispatch();
  const { questions: { queue, answers }, result: { result, userId } } = useSelector((state: RootState) => state);

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achieved: flag ? "Passed" : "Failed",
  });

  const onRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };

  const resultData = [
    {
      username: userId,
      attempts: attempts,
      points: earnPoints,
      achieved: flag ? "Passed" : "Failed"
    }
  ];

  return (
    <C.Container>
      <h1>Results</h1>
      <div className='flex-center'>
        <div className='flex'>
          <span>Username: </span>
          <span className='bold'>{userId || ''}</span>
        </div>
        <div className='flex'>
          <span>Total quiz points: </span>
          <span className='bold'>{totalPoints || 0}</span>
        </div>
        <div className='flex'>
          <span>Total questions: </span>
          <span className='bold'>{queue.length || 0}</span>
        </div>
        <div className='flex'>
          <span>Total attempts: </span>
          <span className='bold'>{attempts || 0}</span>
        </div>
        <div className='flex'>
          <span>Total earn points: </span>
          <span className='bold'>{earnPoints || 0} </span>
        </div>
        <div className='flex'>
          <span>Quiz Result: </span>
          <span style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
        </div>
        <div style={{marginTop:"2rem"}}>
          <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>
      </div>
      <div className='container'>
        <Result_Table data={resultData} />
      </div>
    </C.Container>
  );
};

export default Result;
