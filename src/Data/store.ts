import db from "./db"
import { collection, getDocs, QueryDocumentSnapshot, type DocumentData } from "firebase/firestore"

export class Todo {

    id: string
    completed: boolean
    task: string

    constructor(doc: QueryDocumentSnapshot<DocumentData>){
        this.id = doc.id
        this.task = doc.data()['task']
        this.completed = doc.data()['completed']
    }
}

export const getTodos = async () => {

    const todosRef = collection(db, 'todos')
    const docsSnap = await getDocs(todosRef)
    const todos:Todo[] = []

    docsSnap.forEach( doc => {
        let todo = new Todo(doc)
        todos.push(todo)
    })

    return todos
}