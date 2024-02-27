<script>
  import NewHeader from "../components/newHeader.svelte";
  import AboutAoIntro1 from "../components/aboutAoIntro1.svelte";
  import AboutAoIntro2 from "../components/aboutAoIntro2.svelte";
  import AboutAoIntro3 from "../components/aboutAoIntro3.svelte";
  import AboutAoArticle1 from "../components/aboutAoArticle1.svelte";
  import AboutAoActivity from "../components/aboutAoActivity.svelte";
  import ApplyButton from "../components/applyButton.svelte";
  import NewFooter from "../components/newFooter.svelte";
</script>

<NewHeader />
<div class="bg-white relative overflow-hidden flex flex-col min-h-screen">
  <div class="mt-[89px] flex-grow">
    <AboutAoIntro1 />
  </div>
  <div
    class="w-screen h-full bg-gray-200 rounded-tl-lg rounded-tr-lg"
    style="border-top-left-radius: 30px; border-top-right-radius: 30px;"
  >
    <div class="mt-[51px]">
      <AboutAoIntro2 />
    </div>
    <div class="mt-[43px]">
      <AboutAoIntro3 />
    </div>
    <div class="mt-[287px]">
      <AboutAoArticle1 />
    </div>
    <div class="mt-[51px]">
      <AboutAoActivity />
    </div>
    <div class="mt-[51px]">
      <ApplyButton />
    </div>
    <div class="mt-[61px]"></div>
  </div>
  <NewFooter />
</div>
