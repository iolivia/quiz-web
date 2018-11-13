export interface OptionData {
    text: string;
    isCorrect: boolean;
}

export interface QuestionData {
    text: string;
    options: OptionData[];
}

export interface QuizData {
    id: string;
    title: string;
    questions: QuestionData[];
}