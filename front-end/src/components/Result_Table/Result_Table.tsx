import React from 'react';
import * as C from '../Result/styles';
import { IResultTable } from '../../interfaces/IResult_Table';

interface ResultTableProps {
  data: IResultTable[];
}

const Result_Table: React.FC<ResultTableProps> = ({ data }) => {

  return (
    <C.Container>
      <table>
        <thead className='table-header'>
          <tr className='table-row'>
            <td>Name:</td>
            <td>Attempts:</td>
            <td>Earn points:</td>
            <td>Result:</td>
          </tr>
        </thead>
        <tbody>
          {!data.length ? (
            <tr><td colSpan={4}>No data found</td></tr>
          ) : (
            data.map((v, i) => (
              <tr className='table-body' key={i}>
                <td>{v.username || ''}</td>
                <td>{v.attempts || 0}</td>
                <td>{v.points || 0}</td>
                <td>{v.achieved || ''}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </C.Container>
  );
}

export default Result_Table;
