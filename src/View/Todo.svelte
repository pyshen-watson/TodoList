<script lang="ts">
    export let task:string
    let isCompleted:boolean = false
</script>

<div class="main">
    <span class:completed={isCompleted}>
        {task}
    </span>
    <span>
        <i class="fa-solid fa-check done" on:click={() => {isCompleted = !isCompleted}}/>
        <i class="fa-solid fa-trash-can delete"/>
    </span>
</div>

<style lang="scss">
    .main{
        padding: 1rem;
        margin: 1rem 0rem;
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