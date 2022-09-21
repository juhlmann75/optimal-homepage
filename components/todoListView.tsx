import {TodoList} from "../models/todoList";
import {useLiveQuery} from "dexie-react-hooks";
import {todoListDB} from "../models/todoListDB";
import {deleteList} from "../lib/todoListUtils";
import {AddTodoItem} from "./addTodoItem";
import {TodoListItem} from "./todoListItem";
import { FaTrash } from "react-icons/fa";

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
        <div className="border-solid border-2 border-sky-500 rounded p-2 m-3 w-screen md:w-[500px]">
            <div className="flex items-center mb-3">
                <h2 className="text-xl font-bold">{todoList.title}</h2>
                <div className="ml-3 p-1">
                    <a className="hover:cursor-pointer" onClick={() => deleteList(todoList.id)} title="Delete list">
                        <FaTrash />
                    </a>
                </div>
            </div>
            <hr />
            <div className="my-3">
                {items.map(item => (
                    <TodoListItem key={item.id} item={item} />
                ))}
            </div>
            <div className="my-3">
                <AddTodoItem todoList={todoList} />
            </div>
        </div>
    );
}