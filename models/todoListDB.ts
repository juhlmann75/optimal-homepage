import Dexie, { Table } from 'dexie';
import {TodoItem} from "./todoItem";
import {TodoList} from "./todoList";

export class TodoListDB extends Dexie {

    todoLists!: Table<TodoList, number>;
    todoItems!: Table<TodoItem, number>;

    constructor() {
        super('todoListDB');
        this.version(1).stores({
            todoLists: '++id',
            todoItems: '++id, todoListId'
        });
    }
}

export const todoListDB = new TodoListDB();