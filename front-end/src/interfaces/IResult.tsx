// types.ts
export interface QuestionState {
    queue: Array<string>;
    answers: Array<string>;
  }
  
  export interface ResultState {
    result: Array<number>;
    userId: string;
  }
  
  export interface RootState {
    questions: QuestionState;
    result: ResultState;
  }
  