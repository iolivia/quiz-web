import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface ButtonProps {
    onClick: () => void;
    text: string;
}

// tslint:disable-next-line:no-empty-interface
export interface ButtonState {}

export class Button extends React.Component<ButtonProps, ButtonState> {
    public render() {
        const { text, onClick } = this.props;

        return (
            <div className="button-container" onClick={onClick}> 
                {text}
            </div>
        );
    }
}