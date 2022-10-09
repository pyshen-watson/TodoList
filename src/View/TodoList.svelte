<script lang="ts">
    import TodoItem from "./TodoItem.svelte"
    import db from "../Data/db"
    import { uuidv4 } from "@firebase/util"
    import { doc, getDoc, setDoc, deleteDoc, collection, onSnapshot  } from "firebase/firestore"
    import type { DocumentData} from "firebase/firestore"

    let todoList = []
    let taskInput = ""

    const unsubscribe = onSnapshot(collection(db, "todos"), (querySnapshot) => {

        let dbTodoList = []

        querySnapshot.forEach((doc) => {
            let todo = doc.data()
            dbTodoList.push(todo)
        })

        todoList = dbTodoList
    })

    const addTask = () => {

        if(taskInput === ""){
            alert("Task can't be empty.")
            return
        }

        let id = uuidv4()
        setDoc(doc(db, 'todos', id), {
            id: id,
            task: taskInput,
            isCompleted: false,
        })

        taskInput = ""
    }

    const completeTask = (e:CustomEvent) => {

        let origin: DocumentData
        const taskDoc = doc(db, 'todos', e.detail)

        getDoc(taskDoc)
        .then((res) => {
            origin = res.data()
            setDoc(doc(db, 'todos', e.detail),
                { isCompleted:!origin.isCompleted },
                { merge: true }
            )
        })

    }

    const deleteTask = (e:CustomEvent) => {
        deleteDoc(doc(db, 'todos', e.detail))
    }

    const keypress = (event: any) => {

        if(event.key === 'Enter'){
            addTask()
        }
    }

</script>

<div class="main">

    <div>
        <input type="text" placeholder="Type the task" bind:value={taskInput}>
        <button on:click={addTask}>Add</button>
    </div>

    {#each todoList as todo}
        <TodoItem
            id={todo.id}
            task={todo.task}
            isCompleted={todo.isCompleted}
            on:completeTask={completeTask}
            on:deleteTask={deleteTask}
        />
    {:else}
        <div class="no-task">No task</div>
    {/each}

</div>

<svelte:window on:keydown={keypress} />

<style lang="scss">

    .main{
        background-color: rgba(gray, 0.7);
        height: 60vh;
        width: 100%;
        overflow-y: scroll;
        border-radius: 15px;
        padding: 5%;
        font-size: 2rem;
        text-align: center;

        input{
            font-size: inherit;
            padding: 5px;
        }

        button{
            font-size: inherit;
            padding: 5px;
            border-radius: 5px;
            background-color: rgba(black, 0.3);
        }

        .no-task{
            margin-top: 50%;
        }
    }

</style>