<script>
  import NewHeader from "../components/newHeader.svelte";
  import ArchiveMain from "../components/archiveMain.svelte";
  import NewFooter from "../components/newFooter.svelte";
</script>

<div class="overflow-y-auto flex flex-col min-h-screen bg-white dark:bg-black">
  <nav class="mb-[33px]">
    <NewHeader />
  </nav>

  <main class="mb-[43px] flex-grow">
    <ArchiveMain />
  </main>

  <NewFooter />
</div>
