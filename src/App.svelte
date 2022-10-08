<script lang="ts">
  import TodoList from "./View/TodoList.svelte"
</script>

<main>
  <h1>Todo List X Firebase</h1>
  <TodoList />
</main>

<style lang="scss">

  main{

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10%;

    h1{
      margin-bottom: 5%;
    }
  }

</style>