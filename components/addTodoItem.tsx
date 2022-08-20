import {TodoList} from "../models/todoList";
import {useState} from "react";
import {todoListDB} from "../models/todoListDB";
import {TodoItem} from "../models/todoItem";
import {Checkbox, TextInput} from "flowbite-react";

interface Props {
    todoList: TodoList;
}

export function AddTodoItem({ todoList }: Props) {

    if (todoList.id == undefined) {
        return null;
    }

    const [item, setItem] = useState<TodoItem>({
        todoListId: todoList.id,
        title: ''
    });

    return (
        <div className="row add-item">
            <div className="narrow">
                <Checkbox disabled />
            </div>
            <div className="todo-item-input">
                <TextInput
                    type="text"
                    placeholder="Add todo item..."
                    value={item.title}
                    onChange={ev =>
                        setItem(itemValue => ({
                            ...itemValue,
                            title: ev.target.value
                        }))
                    }
                    onKeyUp={ev => {
                        if (ev.key === 'Enter' && todoList.id != undefined) {
                            todoListDB.todoItems.add(item);
                            setItem({
                                todoListId: todoList.id,
                                title: ''
                            });
                        }
                    }}
                />
            </div>
        </div>
    );
}