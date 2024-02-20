<script>
  export let direction;
  export let onClick;
</script>

<button
  class="embla__button"
  class:embla__prev={direction === "prev"}
  class:embla__next={direction === "next"}
  on:click={onClick}
>
  {#if direction === "prev"}
    &lt;
  {:else if direction === "next"}
    &gt;
  {/if}
</button>
