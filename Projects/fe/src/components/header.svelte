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
</script>

<div
  class="sticky top-[44px] z-10 transition-all duration-300 w-full h-[60px] overflow-hidden bg-black border-t-0 border-r-0 border-b border-l-0 border-[#191919]"
>
  <p
    class="font-['Paytone_One'] absolute left-[19px] top-[9px] text-3xl text-left"
  >
    <span class="text-3xl text-left text-[#f2f2f2]">Fire </span><span
      class="text-3xl text-left text-[#e45454]">A</span
    ><span class="text-3xl text-left text-[#8672f3]">O</span>
  </p>
  <div class="w-[129px] h-[38px]">
    <div
      class="flex flex-col justify-start items-start w-[126px] absolute left-[228px] top-[11px] gap-2.5"
    >
      <div
        class="flex-grow-0 flex-shrink-0 w-[126px] h-[38px] rounded-[50px] bg-[#191919]"
      ></div>
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 absolute left-[17px] top-[9px] gap-1"
      >
        <Link
          to="/applyPage"
          class="flex-grow-0 flex-shrink-0 text-[13px] text-center text-[#f2f2f2]"
        >
          지원하러 가기
        </Link>
        <svg
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
    </div>
    <!-- <div
      class="flex flex-col justify-start items-start w-[126px] absolute left-[231px] top-[11px] gap-2.5"
    >
      <div
        class="flex-grow-0 flex-shrink-0 w-[126px] h-[38px] rounded-[50px] bg-[#191919]"
      ></div>
      <div
        class="flex justify-center items-center flex-grow-0 flex-shrink-0 absolute left-[17px] top-[9px] gap-1"
      >
        <p
          class="flex-grow-0 flex-shrink-0 text-[13px] text-center text-[#f2f2f2]"
        >
          지원하러 가기
        </p>
        <svg
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
    </div> -->
  </div>
</div>
