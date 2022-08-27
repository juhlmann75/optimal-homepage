import {TodoItem} from "../models/todoItem";
import {todoListDB} from "../models/todoListDB";
import {Checkbox} from "flowbite-react";
import { FaTrash } from "react-icons/fa";

interface Props {
    item: TodoItem;
}
export function TodoListItem({ item }: Props) {
    return (
        <div className={'row ' + (item.done ? 'done' : '') + " flex items-start py-2"}>
            <div className="pr-3">
                <Checkbox
                    checked={!!item.done}
                    onChange={ev =>
                        todoListDB.todoItems.update(item, {
                            done: ev.target.checked
                        })
                    }
                />
            </div>
            <div className="todo-item-text">{item.title}</div>
            <div className="pl-3 p-1">
                <a onClick={() => {
                    if (item.id != undefined) {
                        todoListDB.todoItems.delete(item.id)
                    }
                }} title="Delete item">
                    <FaTrash />
                </a>
            </div>
        </div>
    );
}