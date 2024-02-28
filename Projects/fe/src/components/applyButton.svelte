<script>
  import { Link } from "svelte-routing";
  import { darkMode } from "../store";
</script>

{#if $darkMode}
  <Link
    to="/apply"
    class="flex justify-center items-center w-[337px] mx-auto gap-2.5"
  >
    <div
      class="active:bg-blue-700 active:scale-95 transition duration-100 ease-in-out flex flex-grow relative overflow-hidden gap-2.5 px-5 py-3.5 rounded-[50px] bg-[#ff4a3f]"
    >
      <p
        class="flex-grow-0 flex-shrink-0 text-base text-center text-balck mx-auto"
      >
        <span
          class="font-['PRETENDARD'] flex-grow-0 flex-shrink-0 text-base text-center text-balck"
          >Fire AO
        </span>
        <span
          class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-balck"
          >지원하러 가기</span
        >
      </p>
    </div>
  </Link>
{:else}
  <Link
    to="/apply"
    class="flex justify-center items-center w-[337px] mx-auto gap-2.5"
  >
    <div
      class="active:bg-blue-700 active:scale-95 transition duration-100 ease-in-out flex flex-grow relative overflow-hidden gap-2.5 px-5 py-3.5 rounded-[50px] bg-[#684dff]"
    >
      <p
        class="flex-grow-0 flex-shrink-0 text-base text-center text-[#f2f2f2] mx-auto"
      >
        <span
          class="font-['Helvetica95_Black'] flex-grow-0 flex-shrink-0 text-base text-center text-[#f2f2f2]"
          >Fire AO
        </span>
        <span
          class="flex-grow-0 flex-shrink-0 text-base font-['Pretendard'] font-bold text-center text-[#f2f2f2]"
          >지원하러 가기</span
        >
      </p>
    </div>
  </Link>
{/if}
