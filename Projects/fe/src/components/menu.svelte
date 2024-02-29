<script>
  import { Link } from "svelte-routing";
  export let menuVisible = false;
  import { fade } from "svelte/transition";

  function closeMenu() {
    menuVisible = false;
  }
</script>

{#if menuVisible}
  <div
    class="menu overflow-hidden fixed top-0 left-0 bg-[#684DFF] dark:bg-[#FF4A3F] w-screen h-screen text-white z-50"
    transition:fade
  >
    <header class="mb-[27px]">
      <div
        class="flex justify-between items-center w-screen relative overflow-hidden px-5 py-[11px]"
      >
        <div class="w-[27px] h-[28px]"></div>

        <Link to="/">
          <p class="flex-grow-0 flex-shrink-0 text-3xl text-left">
            <span
              class="font-['PRETENDARD-BOLD'] flex-grow-0 flex-shrink-0 text-3xl font-black text-left text-white"
              >Fire
            </span><span
              class="font-['Helvetica95_Black'] flex-grow-0 flex-shrink-0 text-3xl text-left text-white"
              >AO</span
            >
          </p>
        </Link>
        <div class="w-[22px] h-[22px]"></div>
      </div>
    </header>
    <!-- 메뉴 로고, 닫기 버튼 -->

    <!-- 메뉴 항목들 -->
    <div class="flex flex-col items-start justify-start h-full ml-[18px]">
      <Link
        to="/about"
        class="w-[95%] font-['Helvetica_Bold'] text-2xl border-t-0 border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px]"
        ><p class="active:font-semibold">About AO</p>
      </Link>
      <Link
        to="/archive"
        class="w-[95%] font-['Helvetica_Bold'] text-2xl border-t-0 border-r-0 border-b-0 border-l-0 border-[#FFFFFF] pl-[33px] py-[30px]"
        ><p class="active:font-semibold">Archive AO</p>
      </Link>
      <Link
        to="/contact"
        class="w-[95%] font-['Helvetica_Bold'] text-2xl border-t border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px]"
        ><p class="active:font-semibold">Contact</p>
      </Link>
      <!-- ... 나머지 메뉴 항목 ... -->
    </div>

    <p
      class="absolute bottom-0 w-full text-[13px] font-['Helvetica_Light'] mx-[67px]= mb-[23px] text-center text-neutral-200"
    >
      ⓒ Fire AO. 2024 All rights reserved
    </p>
  </div>
{/if}
