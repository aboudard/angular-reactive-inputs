import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {}

  getTodos(): Observable<Todo[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next([
          { id: 1, title: 'Todo 1', completed: false },
          { id: 2, title: 'Todo 2', completed: true },
          { id: 3, title: 'Todo 3', completed: false },
        ]);
      }, 2000);
    });
  }
}
