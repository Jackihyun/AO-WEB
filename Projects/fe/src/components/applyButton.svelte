<!-- applyButton.svelte
<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleClick() {
    console.log("Button Clicked!");
    dispatch("click");
  }
</script>

<div
  class="flex justify-center items-center relative overflow-hidden gap-2.5 px-[136px] py-3.5 rounded-lg bg-[#333]"
>
  <button
    on:click={handleClick}
    class="flex-grow-0 flex-shrink-0 text-lg font-medium text-center text-neutral-200"
  >
    지원하기
  </button>
</div> -->
