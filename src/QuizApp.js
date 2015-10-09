import React, { Component, findDOMNode, Children } from 'react';

class Title extends Component {
  render(){
    return <h1>{this.props.title}</h1>
  }
}

class AnswerWrapper extends Component {
  render() {
    var choicesNode = this.props.choices.map(
      choices => <div><input type="radio" name={this.props.title} value={choices} onChange={this.props.onChangeOption}  /> {choices}</div>
    )
    return <ul>{choicesNode}</ul>
  }
}


class QuestionForm extends Component {
  constructor (){
    super();
    this.state = { answer: {} };
  }
  handleFormSubmit (e){
    e.preventDefault();
    this.props.onQuestionSubmit(this.state.answer);
    console.log('questions ==>', this.state.answer);
  }

  handleChangeOption (e){
    this.state.answers = this.props.questions;
    this.state.answers.map(
      questions => {
        if (questions.qid == e.target.name){
          questions.answer = e.target.value;
        }
      }
    );
    this.setState({answer: this.state.answers})
    console.log("answers",this.state.answers);
    console.log("name",e.target.name);
    console.log("value",e.target.value);
  }

  render() {
    var questionNodes = this.props.questions.map(
      questions => <ul>
          <h1>{questions.question}</h1>
           <AnswerWrapper title={questions.qid} choices={questions.choices} answer={questions.answer} onChangeOption={this.handleChangeOption.bind(this)}  />
        </ul>
    );

    return (
        <form>
          {questionNodes}
          <button type="submit" onClick={this.handleFormSubmit.bind(this)}>Submit</button>
        </form>
    );
  }
}

export class QuizApp extends Component {
  constructor(){
    super();
    this.state = {questions: [
                              { qid: 'q-1', question: 'What is your name?', choices: ['Rich', 'Richmond', 'Gozarin'], answer: '' },
                              { qid: 'q-2', question: 'What is your lastname?', choices: ['Richmond', 'Rich', 'Gozarin'], answer: '' }
                            ]
                  };
  }

  handleSubmit(ans){
    console.log('ANSWER ==>',ans);
  }

  render() {
    return (
      <div>
        <Title title="Quiz APP"></Title>
        <QuestionForm questions={this.state.questions} onQuestionSubmit={this.handleSubmit.bind(this)}></QuestionForm>
      </div>
    );
  }
}
