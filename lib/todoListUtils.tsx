import {todoListDB} from "../models/todoListDB";

export function deleteList(todoListId: number | undefined) {
    return todoListDB.transaction('rw', todoListDB.todoItems, todoListDB.todoLists, () => {
        todoListDB.todoItems.where({ todoListId }).delete();
        if (todoListId != null) {
            todoListDB.todoLists.delete(todoListId);
        }
    });
}

export function resetDatabase() {
    return todoListDB.transaction('rw', todoListDB.todoLists, todoListDB.todoItems, async () => {
        await Promise.all(todoListDB.tables.map(table => table.clear()));
        await populate();
    });
}

export async function populate() {
    const todoListId = await todoListDB.todoLists.add({
        title: "To Do Today"
    });
    await todoListDB.todoItems.bulkAdd([
        {
            todoListId,
            title: "Feed the birds"
        },
        {
            todoListId,
            title: "Watch a movie"
        }
    ]);
}