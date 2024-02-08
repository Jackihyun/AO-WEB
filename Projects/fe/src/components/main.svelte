<script>
  import Intro1 from "./intro1.svelte";
  import Intro2 from "./intro2.svelte";
  import Activity1 from "./activity1.svelte";
  import Activity2 from "./activity2.svelte";
  import Article1 from "./article1.svelte";
  import Article2 from "./article2.svelte";
  import ApplyButton from "./applyButton.svelte";
</script>

<div class="bg-black">
  <div class="mb-[312px]">
    <Intro1 />
  </div>
  <div class="mb-[319px]">
    <Intro2 />
  </div>
  <div class="mb-[193px]">
    <Activity1 />
  </div>
  <div class="mb-[190px]">
    <Activity2 />
  </div>
  <div class="mb-[190px]">
    <Article1 />
  </div>
  <div class="mb-[150px]">
    <Article2 />
  </div>
  <div>
    <ApplyButton />
  </div>
</div>

<!-- <div class="bg-black space-y-40">

    <Intro1 />


    <Intro2 />


    <Activity1 />


    <Activity2 />


    <Article1 />


    <Article2 />

    <ApplyButton />

</div> -->