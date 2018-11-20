import * as hljs from 'highlight.js';
import * as React from 'react';

export interface CodeBlockProps {
    value: string;
    language?: string;
}

export class CodeBlock extends React.PureComponent<CodeBlockProps, any> {
    private codeElement: any;

    constructor(props: any) {
        super(props);
        this.setRef = this.setRef.bind(this);
    }

    public setRef(el: any) {
        this.codeElement = el;
    }

    public componentDidMount() {
        this.highlightCode();
    }

    public componentDidUpdate() {
        this.highlightCode();
    }

    public highlightCode() {
        hljs.highlightBlock(this.codeElement);
    }

    public render() {
        return (
            <pre>
                <code ref={this.setRef} className={`language-${this.props.language}`}>
                    {this.props.value}
                </code>
            </pre>
        )
    }
}