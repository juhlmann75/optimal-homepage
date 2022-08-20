import {TodoList} from "../models/todoList";
import {useLiveQuery} from "dexie-react-hooks";
import {todoListDB} from "../models/todoListDB";
import {deleteList} from "../lib/todoListUtils";
import {AddTodoItem} from "./addTodoItem";
import {TodoListItem} from "./todoListItem";

interface Props {
    todoList: TodoList;
}

export function TodoListView({ todoList }: Props) {
    const items = useLiveQuery(
        () => todoListDB.todoItems.where({ todoListId: todoList.id }).toArray(),
        [todoList.id]
    );

    if (!items) return null;

    return (
        <div className="border-solid border-2 border-sky-500 rounded p-2 m-3 w-100 mx-auto">
            {/*<div className="grid-row">*/}
            {/*    <h2>{todoList.title}</h2>*/}
            {/*    <div className="todo-list-trash">*/}
            {/*        <a onClick={() => deleteList(todoList.id)} title="Delete list">*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div>
                {items.map(item => (
                    <TodoListItem item={item}/>
                ))}
            </div>
            <div>
                <AddTodoItem todoList={todoList} />
            </div>
        </div>
    );
}