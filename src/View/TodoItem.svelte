<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let id: string
    export let task: string
    export let isCompleted:boolean

    const dispatcher = createEventDispatcher()

    const completeTask = () => {
        dispatcher('completeTask', id)
    }
    const deleteTask = () => {
        dispatcher('deleteTask', id)
    }

</script>

<div class="main">
    <span class:completed={isCompleted}>
        {task}
    </span>
    <span>
        <i class="fa-solid fa-check done" on:click={completeTask}/>
        <i class="fa-solid fa-trash-can delete" on:click={deleteTask}/>
    </span>
</div>

<style lang="scss">
    .main{
        padding: 1rem;
        margin: 1rem;
        border-radius: 15px;
        background-color: rgba(black, 0.3);
        cursor: pointer;

        display: flex;
        justify-content: space-between;

        &:hover{
            background-color: rgba(black, 0.5);
        }

        .completed{
            text-decoration: line-through;
        }

       .done:hover{
            color: green;
       }

       .delete:hover{
            color: red;
       }
    }
</style>