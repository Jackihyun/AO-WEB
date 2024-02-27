<script>
  import NewHeader from "../components/newHeader.svelte";
  import ContactIntro from "../components/contactIntro.svelte";
  import ContactMain from "../components/contactMain.svelte";
  import NewFooter from "../components/newFooter.svelte";
</script>

<div
  class="bg-white dark:bg-black relative overflow-hidden flex flex-col min-h-screen"
>
  <NewHeader />
  <div class="mt-[77px] flex-grow">
    <ContactIntro />
  </div>
  <div class="mt-[77px]">
    <ContactMain />
  </div>
  <NewFooter />
</div>
