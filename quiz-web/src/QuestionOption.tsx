import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export interface QuestionOptionProps {
    text: string;
}

// tslint:disable-next-line:no-empty-interface
export interface QuestionOptionState {}

export default class QuestionOption extends React.Component<QuestionOptionProps, QuestionOptionState> {

    public render() {

        const { text } = this.props;

        return (
            <div className="question-option-container">
                 <FontAwesomeIcon icon={["far", "circle"]} />
                 <FontAwesomeIcon icon={["far", "check-circle"]} />
                * {text}
            </div>
        );
    }

}