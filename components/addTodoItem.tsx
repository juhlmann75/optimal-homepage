import {TodoList} from "../models/todoList";
import {useState} from "react";
import {todoListDB} from "../models/todoListDB";
import {TodoItem} from "../models/todoItem";
import {Checkbox, TextInput} from "flowbite-react";

interface Props {
    todoList: TodoList;
}

export function AddTodoItem({ todoList }: Props) {

    let todoListIdValue = 0;

    if (todoList.id != undefined) {
        todoListIdValue = todoList.id;
    }

    const [item, setItem] = useState<TodoItem>({
        todoListId: todoListIdValue,
        title: ''
    });

    if (item.todoListId == 0) {
        return null;
    }

    return (
        <div>
            <div>
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