<script>
  import NewHeader from "../components/newHeader.svelte";
  import TeamIntro from "../components/teamIntro.svelte";
  import TeamMain from "../components/teamMain.svelte";
  import NewFooter from "../components/newFooter.svelte";
</script>

<div
  class="bg-white dark:bg-black relative overflow-hidden flex flex-col h-full"
>
  <NewHeader />
  <div class=" flex-grow">
    <TeamIntro />
  </div>
  <div class="mt-[20px] mb-[48px]">
    <TeamMain />
  </div>
  <NewFooter />
</div>
