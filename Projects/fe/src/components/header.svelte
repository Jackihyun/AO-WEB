<script>
  import { Link } from "svelte-routing";

  function handleScroll() {
    const header = document.querySelector(".sticky");
    if (window.scrollY > 0) {
      header.classList.add("bg-opacity-80");
      header.classList.remove("bg-opacity-0");
    } else {
      header.classList.add("bg-opacity-0");
      header.classList.remove("bg-opacity-80");
    }
  }
  window.addEventListener("scroll", handleScroll);

  function scrollToTop() {
    window.scrollTo({
      top: window.innerWidth > 768 ? 0 : 44,
      behavior: "smooth",
    });
  }

  let isTouched = false;

  function touchStart() {
    isTouched = true;
  }

  function touchEnd() {
    isTouched = false;
  }
</script>

<div
  class="sticky top-[44px] z-10 transition-all duration-300 cursor-pointer w-full h-[60px] overflow-hidden bg-black border-t-0 border-r-0 border-b border-l-0 border-[#191919]"
>
  <button on:click={scrollToTop}>
    <p
      class="font-['Paytone_One'] absolute left-[19px] top-[9px] text-3xl text-left"
    >
      <span class="text-3xl text-left text-[#f2f2f2]">Fire </span><span
        class="text-3xl text-left text-[#e45454]">A</span
      ><span class="text-3xl text-left text-[#8672f3]">O</span>
    </p>
  </button>
  <div class="w-[129px] h-[38px]">
    <div
      on:touchstart={touchStart}
      on:touchend={touchEnd}
      on:touchcancel={touchEnd}
      class="flex flex-col justify-start items-start w-[126px] absolute left-[228px] top-[11px] gap-2.5 ${isTouched
        ? 'bg-opacity-75 scale-95'
        : ''} "
    >
      <div
        class="flex-grow-0 flex-shrink-0 w-[126px] h-[38px] rounded-[50px] bg-[#191919] ${isTouched
          ? ' bg-emerald-500 transition duration-100 ease-in-out'
          : ''}"
      ></div>
      <Link to="/applyPage">
        <div
          class="flex justify-center items-center flex-grow-0 flex-shrink-0 absolute left-[17.5px] top-[8.5px] gap-1"
        >
          <p
            to="/applyPage"
            class="flex-grow-0 flex-shrink-0 text-[13px] text-center text-[#f2f2f2]"
          >
            지원하러 가기
          </p>
          <svg
            to="/applyPage"
            width="13"
            height="11"
            viewBox="0 0 13 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-[13px] h-[9.84px] relative"
            preserveAspectRatio="none"
          >
            <path
              d="M6.26562 2.36999L9.92187 5.63975L6.26562 8.9095M9.41406 5.63975L2 5.63975"
              stroke="#F2F2F2"
              stroke-width="0.9375"
              stroke-miterlimit="10"
              stroke-linecap="square"
            ></path>
          </svg>
        </div>
      </Link>
    </div>
  </div>
</div>
