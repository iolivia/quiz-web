import { QuestionProps } from './Question';
import { QuizProps } from "./Quiz";

export const getQuiz = (quizId: string): Promise<QuizProps | null> => {
    return getTestQuiz();
}

const getTestQuiz = (): Promise<QuizProps> => {
    const quizProps = {
        questions: buildQuestions(10),
        title: "Quiz title",
    };

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(quizProps);
        }, 2000);
    });
}

const buildQuestions = (count: number) => {

    const text = "What is the best fruit?";
    const options = [
        {
            isCorrect: true,
            text: "Apples",
        },
        {
            isCorrect: true,
            text: "Oranges"
        },
        {
            isCorrect: false,
            text: "Pears"
        },
        {
            isCorrect: false,
            text: "Other"
        }
    ];
    const question: QuestionProps = {
        isAnswered: false,
        options,
        text,
    };

    const questions = [];
    for (let i = 0; i < count; i++) {
        questions.push(question);
    }

    return questions;
}