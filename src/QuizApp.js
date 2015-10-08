import React, { Component, findDOMNode, Children } from 'react';

class Title extends Component {
  render(){
    return <h1>{this.props.title}</h1>
  }
}

class AnswerWrapper extends Component {
  render() {
    console.log(this.props.title);
    var answerNode = this.props.answers.map(
      answers => <div><input type="radio" name={this.props.title} value={answers} /> {answers}</div>
    )
    return <ul>{answerNode}</ul>
  }
}

class QuestionForm extends Component {
  render() {
    var questionNodes = this.props.questions.map(
      questions => <ul>
          <h1>{questions.question}</h1>
           <AnswerWrapper title={questions.question} answers={questions.answers} />
        </ul>
    );

    return (
        <div>
          {questionNodes}
          <button type="submit">Submit</button>
        </div>
    );
  }
}

export class QuizApp extends Component {
  constructor(){
    super();
    this.state = {questions: [
                              { question: 'What is your name?', answers: ['Rich', 'Richmond', 'Gozarin'] },
                              { question: 'What is your lastname?', answers: ['Richmond', 'Rich', 'Gozarin'] }
                            ]
                  };
  }

  render() {
    return (
      <div>
        <Title title="Quiz APP"></Title>
        <QuestionForm questions={this.state.questions}></QuestionForm>
      </div>
    );
  }
}
