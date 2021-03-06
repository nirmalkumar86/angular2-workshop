import {Component,Inject} from "angular2/core";
import {TodoService} from "./todoService";
@Component({
    selector: "todo-input",
    template: `    
        <div class="col-md-6">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="What todo..." (keypress)="enterTask($event,todo)" #todo>
                <span class="input-group-btn">
                    <a class="btn btn-primary" (click)="showLogInput($event,todo)">ADD</a>
                </span>
            </div>
        </div>          
    `
})

export class TodoInput {
    public _todoService: TodoService;
    constructor(@Inject(TodoService) todoService: TodoService){
        this._todoService = todoService;
        // console.log(this._todoService);
    }
    showLogInput(e: Event, todo: HTMLInputElement){
        this._todoService.addTodo(todo.value);
        todo.value = "";
        // console.log(e,this._todoService.todos);
    }

    enterTask(e:KeyboardEvent, todo: HTMLInputElement){
        if(e.keyCode === 13){
            this.showLogInput(e,todo);
        }
    }
}