export class ServerReferee {
  serverQuestion: string;
  userAnswer: string;

  constructor(serverQuestion: string) {
    this.serverQuestion = serverQuestion;
    this.userAnswer = '';
  }

  questionAnswerQA(): string {
    let answer = '';
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(this.serverQuestion, (name: string) => {
      answer = name;
      this.userAnswer = answer;
      //console.log(this.userAnswer);
      readline.close();
    });
    let z = answer;
    //this.userAnswer = answer;
    console.log(z);
    console.log(this.userAnswer);
    return answer;
  }

  /*printAnswer(c: string): void {
    console.log(c);
  }*/
  printAnswer(c: string): string {
    return c;
  }
}

/*//Antonio:
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let question: string = 'Whatever?';

function server(answer: string | null): void {
  switch (answer) {
    case 'Yes': {
      console.log('haha yes');
      break;
    }
    case 'quit': {
      readline.close();
      process.exit();
    }
  }
  readline.question(question, (questionAnswer: string) => {
    server(questionAnswer);
  });
}

server(null);*/
