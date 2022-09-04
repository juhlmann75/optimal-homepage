import {useLiveQuery} from "dexie-react-hooks";
import {todoListDB} from "../models/todoListDB";
import {resetDatabase} from "../lib/todoListUtils";
import {TodoListView} from "./todoListView";

export function TodoLists() {
    const lists = useLiveQuery(async () => todoListDB.todoLists.toArray());

    if (!lists) {
        return null;
    }

    return (
        <div>
            {lists.map(list => (
                <TodoListView key={list.id} todoList={list} />
            ))}
        </div>
    );
}