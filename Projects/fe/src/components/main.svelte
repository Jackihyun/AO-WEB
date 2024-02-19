<script>
  import Intro1 from "./intro1.svelte";
  import Intro2 from "./intro2.svelte";
  import Intro3 from "./intro3.svelte";
  // import Activity1 from "./activity1.svelte";
  // import Activity2 from "./activity2.svelte";
  // import Article1 from "./article1.svelte";
  // import Article2 from "./article2.svelte";
  import ApplyButton from "./applyButton.svelte";
</script>

<div class="bg-black">
  <div class ="mt-[215px]">
    <Intro1 />
  </div>
  <div>
    <Intro2 />
  </div>
  <br>
  <div class="mt-[315px]">
    <Intro3 />
  </div>
  <div>
    <ApplyButton />
  </div>
</div>
