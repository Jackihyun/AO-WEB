<script>
  import NewHeader from "../components/newHeader.svelte";
  import NewMain from "../components/newMain.svelte";
  import NewFooter from "../components/newFooter.svelte";
  import ApplyButton from "../components/applyButton.svelte";
</script>

<div
  class="bg-white dark:bg-black overflow-y-auto flex flex-col min-h-screen h-[2000px]"
>
  <NewHeader />
  <main class="mt-[35px] mb-[43px] flex-grow">
    <NewMain />
    <ApplyButton />
  </main>
  <NewFooter />
</div>
