<script lang="ts">
    export let task:string
</script>

<div class="main">
    {task}
</div>

<style lang="scss">
    .main{
        padding: 1rem;
        margin: 1rem 0rem;
        border-radius: 15px;
        background-color: rgba(black, 0.3);
        cursor: pointer;

        &:hover{
            background-color: rgba(black, 0.5);
        }
    }
</style>