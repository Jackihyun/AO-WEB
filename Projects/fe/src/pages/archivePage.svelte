<script>
  import NewHeader from "../components/newHeader.svelte";
  import ArchiveMain from "../components/archiveMain.svelte";
  import NewFooter from "../components/newFooter.svelte";
</script>

<div class="overflow-y-auto flex flex-col min-h-screen bg-white dark:bg-black">
  <nav class="fixed top-0 left-0 z-[1000]">
    <NewHeader />
  </nav>

  <main class="mb-[43px] flex-grow pt-[93.67px]">
    <ArchiveMain />
  </main>

  <NewFooter />
</div>
