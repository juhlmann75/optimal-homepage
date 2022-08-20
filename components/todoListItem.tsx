import {TodoItem} from "../models/todoItem";
import {todoListDB} from "../models/todoListDB";
import {Checkbox} from "flowbite-react";

interface Props {
    item: TodoItem;
}
export function TodoListItem({ item }: Props) {
    return (
        <div className={'row ' + (item.done ? 'done' : '')}>
            <div className="narrow">
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
            <div className="todo-item-trash">
                <a onClick={() => {
                    if (item.id != undefined) {
                        todoListDB.todoItems.delete(item.id)
                    }
                }} title="Delete item">
                    {/*<FontAwesomeIcon icon={faTrash} />*/}
                </a>
            </div>
        </div>
    );
}