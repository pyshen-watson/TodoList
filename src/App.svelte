<script lang="ts">
  import TodoList from "./View/TodoList.svelte"
</script>

<main>
  <h1>Todo List X Firebase</h1>
  <TodoList />
</main>

<style lang="scss">

  @mixin pad{
    @media(max-width:768px){
      @content;
    }
  }
  @mixin mobile{
    @media(max-width:475px){
      @content;
    }
  }

  main{

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3% 10%;


    h1{
      margin-bottom: 2%;

      @include pad{
        margin-bottom: 5%;
      }

      @include mobile(){
        font-size: 1.5rem;
        margin-bottom: 10%;
      }
    }

  }

</style>