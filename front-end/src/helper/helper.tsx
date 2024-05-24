import axios from 'axios';

export const attempts_Number = (result: (any | undefined)[]): number => {
    return result.filter(r => r !== undefined).length;
}

export const earnPoints_Number = (result: any[], answers: any[], point: number): number => {
    return result.map((element: any, i: number) => 
        answers[i] === element
    ).filter(Boolean).map(() => point)
        .reduce((prev, curr) => prev + curr, 0);
}

export const flagResult = (totalPoints: number, earnPoints: number): boolean => {
    return (totalPoints * 50 / 100) < earnPoints;
}

export const getServerData = async (url: string, callback?: (data: any) => any): Promise<any> => {
    const data = (await axios.get(url)).data;
    return callback ? callback(data) : data;
}

export const postServerData = async (url: string, result: any, callback?: (data: any) => any): Promise<any> => {
    const data = (await axios.post(url, result)).data;
    return callback ? callback(data) : data;
}
