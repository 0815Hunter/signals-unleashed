import { Injectable } from '@angular/core';
import { Quiz } from '@app/holidays/feat-quiz/model';
import { questionsIndia } from '@app/holidays/feat-quiz/data/questions-india';
import { questionsNorway } from '@app/holidays/feat-quiz/data/questions-norway';

const questions = [...questionsIndia, ...questionsNorway];

@Injectable({ providedIn: 'root' })
export class QuizService {
  findById(id: number): Promise<Quiz> {
    return Promise.resolve({
      title: 'Quiz',
      timeInSeconds: 180,
      questions: questions
        .filter((question) => question.holidayId === id)
        .map((question) => ({
          ...question,
          choices: shuffleArray(question.choices),
        })),
    });
  }
}

export function shuffleArray<T>(array: T[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
