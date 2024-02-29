<script>
  import NewHeader from "../components/newHeader.svelte";
  import TeamIntro from "../components/teamIntro.svelte";
  import TeamMain from "../components/teamMain.svelte";
  import NewFooter from "../components/newFooter.svelte";
</script>

<div
  class="bg-white dark:bg-black relative overflow-hidden flex flex-col min-h-screen"
>
  <NewHeader />
  <div class="mt-[77px] flex-grow">
    <TeamIntro />
  </div>
  <div class="mt-[77px]">
    <TeamMain />
  </div>
  <NewFooter />
</div>
