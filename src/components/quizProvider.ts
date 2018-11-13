import { QuestionProps } from './Question';
import { QuestionOptionProps } from './QuestionOption';
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

const buildOptionProps = () : QuestionOptionProps[] => {
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

    const optionsProps = [];
    for (const option of options) {
        const optionProps = {
            ...option,
            isSelected: false,
            // tslint:disable-next-line:no-empty
            onToggleSelected: () => { }
        };
        optionsProps.push(optionProps);
    }

    return optionsProps;
}

const buildQuestions = (count: number) => {

    const text = "What is the best fruit?";

    const questions = [];
    for (let i = 0; i < count; i++) {
        const question: QuestionProps = {
            isAnswered: false,
            options: buildOptionProps(),
            // tslint:disable-next-line:no-empty
            onOptionChanged: () => { },
            text,
        };
        questions.push(question);
    }

    return questions;
}