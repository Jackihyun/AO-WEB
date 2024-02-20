<script>
  export let menuVisible = false;
  import { fade } from "svelte/transition";

  function closeMenu() {
    menuVisible = false;
  }
</script>

{#if menuVisible}
  <div
    class="menu overflow-hidden fixed top-0 left-0 bg-[#684DFF] w-screen h-screen text-white z-50"
    transition:fade
  >
    <header class="mb-[27px]">
      <div
        class="flex justify-between items-center w-screen relative overflow-hidden px-5 py-[11px]"
      >
        <svg
          width="27"
          height="28"
          viewBox="0 0 27 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-[27px] h-[27px] invisible"
          preserveAspectRatio="none"
        >
          <circle cx="13.5" cy="14" r="13.5" fill="black"></circle>
          <path
            d="M13.5001 17.5454C15.4582 17.5454 17.0455 15.958 17.0455 14C17.0455 12.0419 15.4582 10.4545 13.5001 10.4545C11.542 10.4545 9.95462 12.0419 9.95462 14C9.95462 15.958 11.542 17.5454 13.5001 17.5454Z"
            stroke="white"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M19.409 14H19.9999"
            stroke="white"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13.5 8.09091V7.5"
            stroke="white"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13.5 20.5V19.9091"
            stroke="white"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18.2273 18.7273L17.6364 18.1364"
            stroke="white"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18.2273 9.27271L17.6364 9.86361"
            stroke="white"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.7728 18.7273L9.36371 18.1364"
            stroke="white"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8.7728 9.27271L9.36371 9.86361"
            stroke="white"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7 14H7.59091"
            stroke="white"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <p class="flex-grow-0 flex-shrink-0 text-3xl text-left">
          <span
            class="font-['Helvetica95_Black'] flex-grow-0 flex-shrink-0 text-3xl font-black text-left text-white"
            >Fire
          </span><span
            class="font-['Helvetica95_Black'] flex-grow-0 flex-shrink-0 text-3xl text-left text-white"
            >AO</span
          >
        </p>
        <button on:click={closeMenu}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[18px] h-[18px] flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M2 20L11 11M11 11L20 2M11 11L2 2M11 11L20 20"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </header>
    <!-- 메뉴 로고, 닫기 버튼 -->

    <!-- 메뉴 항목들 -->
    <div class="flex flex-col items-start justify-start h-full ml-[18px]">
      <a
        href="/about"
        class="w-[95%] font-['Helvetica_Bold'] text-2xl border-t-0 border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px]"
        >About AO</a
      >
      <a
        href="./archivePage"
        class="w-[95%] font-['Helvetica_Bold'] text-2xl border-t-0 border-r-0 border-b-0 border-l-0 border-[#FFFFFF] pl-[33px] py-[30px]"
        >Archive AO</a
      >
      <a
        href="/contact"
        class="w-[95%] font-['Helvetica_Bold'] text-2xl border-t border-r-0 border-b border-l-0 border-[#FFFFFF] pl-[33px] py-[30px]"
        >Contact</a
      >
      <!-- ... 나머지 메뉴 항목 ... -->
    </div>

    <p
      class="absolute bottom-0 w-full text-[13px] font-['Helvetica_Light'] mx-[67px]= mb-[23px] text-center text-neutral-200"
    >
      ⓒ Fire AO. 2024 All rights reserved
    </p>
  </div>
{/if}
