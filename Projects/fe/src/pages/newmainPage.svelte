<script>
  import NewHeader from "../components/newHeader.svelte";
  import NewMain from "../components/newMain.svelte";
  import NewFooter from "../components/newFooter.svelte";
</script>

<div
  class="bg-white dark:bg-black overflow-y-auto flex flex-col min-h-screen h-auto"
>
  <NewHeader />
  <main class="mt-[35px] flex-grow">
    <NewMain />
  </main>
  <NewFooter />
</div>
