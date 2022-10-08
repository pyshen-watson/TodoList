<script lang="ts">
    import Todo from "./Todo.svelte"

    let todolist = ['Get milk', 'Get banana', 'Go to work']
    let taskInput: string

    const addTask = () => {

        if(taskInput === ""){
            alert("Task can't be empty.")
            return
        }

        todolist = [taskInput, ...todolist]
        taskInput = ""
    }

    const keypress = (event) => {
        if(event.key === 'Enter'){
            addTask()
        }
    }

</script>

<div class="main">
    <div>
        <input type="text" placeholder="Type the task" bind:value={taskInput} autofocus>
        <button on:click={addTask}>Add</button>
    </div>
    {#each todolist as todo}
        <Todo task={todo} />
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
    }

</style>