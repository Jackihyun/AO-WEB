<script>
  import Menu from "./menu.svelte";
  import { Router, Link } from "svelte-routing";

  let menuVisible = false;

  function toggleMenu() {
    menuVisible = !menuVisible;
  }
</script>

<div
  class="flex justify-between items-center w-screen relative overflow-hidden px-5 py-[11px] bg-white dark:bg-black border-t-0 border-r-0 border-b border-l-0 border-[#0d0d0d]"
>
  <button id="toogleDarkMode">
    <svg
      width="27"
      height="28"
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="flex-grow-0 flex-shrink-0 w-[27px] h-[27px]"
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
  </button>
  <Link to="/">
    <p class="flex-grow-0 flex-shrink-0 text-3xl text-left">
      <span
        class="font-['Helvetica95_Black'] flex-grow-0 flex-shrink-0 text-3xl font-black text-left text-[#0d0d0d]"
        >Fire
      </span>
      <span
        class="font-['Helvetica95_Black'] flex-grow-0 flex-shrink-0 text-3xl text-left text-black"
        >AO
      </span>
    </p>
  </Link>

  <button on:click={toggleMenu}>
    <svg
      width="27"
      height="22"
      viewBox="0 0 27 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="flex-grow-0 flex-shrink-0 w-[23px] h-[18px]"
      preserveAspectRatio="none"
    >
      <path d="M2 2H25" stroke="black" stroke-width="3" stroke-linecap="round"
      ></path>
      <path d="M2 20H25" stroke="black" stroke-width="3" stroke-linecap="round"
      ></path>
      <path d="M2 11H25" stroke="black" stroke-width="3" stroke-linecap="round"
      ></path>
    </svg>
  </button>
</div>
<Menu {menuVisible} />
