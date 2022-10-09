<script lang="ts">
    import TodoItem from "./TodoItem.svelte"
    import { getTodos } from "../Data/store"


    let todoPromise = getTodos()
    let taskInput: string

    const addTask = () => {

        // if(taskInput === ""){
        //     alert("Task can't be empty.")
        //     return
        // }

        // todolist = [taskInput, ...todolist]
        // taskInput = ""
    }
    const deleteTask = (e:CustomEvent) => {
        // todolist = todolist.filter(task => task!==e.detail)
    }
    const keypress = (event) => {
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

    {#await todoPromise then todolist}
        {#each todolist as todo}
            <TodoItem task={todo.task} on:deleteTask={deleteTask}/>
        {:else}
            <div class="no-task">No task</div>
        {/each}
    {/await}

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