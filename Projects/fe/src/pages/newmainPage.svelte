<script>
  import NewHeader from "../components/newHeader.svelte";
  import NewMain from "../components/newMain.svelte";
  import NewFooter from "../components/newFooter.svelte";
  import ApplyButton from "../components/applyButton.svelte";
</script>

<div class="overflow-y-auto flex flex-col min-h-screen">
  <NewHeader />
  <main class="mb-[43px] flex-grow">
    <NewMain />
    <ApplyButton />
  </main>
  <NewFooter />
</div>
