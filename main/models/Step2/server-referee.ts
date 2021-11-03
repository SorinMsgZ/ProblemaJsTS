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

    readline.question(this.serverQuestion + '?', (name: string) => {
      answer = name;
      //this.userAnswer = answer;
      //console.log(this.userAnswer);
      readline.close();
    });
    //this.userAnswer = answer;
    return answer;
  }

  printAnswer(c: string): void {
    console.log(c);
  }
}
