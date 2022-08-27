import * as React from 'react';
import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import {todoListDB} from "../models/todoListDB";
import {Button, TextInput} from "flowbite-react"
import {HiViewList} from "react-icons/hi";

export function AddTodoList() {
    const [isActive, setIsActive] = useState(false);
    const [title, setTitle] = useState('');
    const hasAnyList = useLiveQuery(async () => {
        const listCount = await todoListDB.todoLists.count();
        return listCount > 0;
    });

    const addText = hasAnyList ? `Add another list` : `Create To-Do List`;

    return !isActive ? (
        <div className="flex flex-col my-4 max-w-2xl mx-auto items-center">
            <div className="w-fit">
                <Button onClick={() => setIsActive(!isActive)}>
                    <HiViewList className="mr-2 h-5 w-5"/>
                    {addText}
                </Button>
            </div>
        </div>
    ) : (
        <div className="flex flex-col mb-6 max-w-2xl mx-auto">
            <h2>To-Do List Name:</h2>
            <div>
                <TextInput
                    autoFocus
                    placeholder="Name of list..."
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                    onKeyUp={ev => {
                        if (ev.key === 'Enter') {
                            todoListDB.todoLists.add({ title });
                            setTitle('');
                            setIsActive(false);
                        }
                    }}
                />
            </div>
        </div>
    );
}
