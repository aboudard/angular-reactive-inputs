import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, filter, map, Observable } from 'rxjs';
import { Todo, TodosService } from 'src/app/services/todos.service';
import { Observe } from 'src/app/shared/observe';
import { simpleDecorator } from 'src/app/shared/simple-decorator';

// @simpleDecorator
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input()
  title!: string;

  @Observe('title')
  private title$!: Observable<string>;

  todos$ = this.todosService.getTodos();
  filteredTodos$: Observable<Todo[]>;

  constructor(
    private todosService: TodosService
  ) {
    
    this.filteredTodos$ = combineLatest([this.todos$, this.title$]).pipe(
      map(([todos, title]) => {
        return todos.filter((todo: Todo) => todo.title != title);
      }
    ));

  }

  ngOnInit(): void {
    // console.log((this as any).simple);
  }

}
