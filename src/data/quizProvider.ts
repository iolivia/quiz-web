import localJson from "./data.json"; 
import { QuizData } from "./QuizData";

const localData: QuizData[] = localJson;

export const getQuiz = (quizId: string): Promise<QuizData | null> => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(localData[0]);
        }, 10);
    });
}