<!-- <script>
  import { Link } from "svelte-routing";

  function handleScroll() {
    //console.log("스크롤 이벤트 발생");
    const header = document.querySelector(".sticky");
    //header.style.top = "44px";
    if (window.scrollY > 0) {
      header.classList.add("bg-opacity-80");
      header.classList.remove("bg-opacity-0");
      //header.classList.add("bg-white");
      //console.log("스크롤 내리는중");
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
  class="sticky top-[44px] z-10 transition-all duration-300 cursor-pointer w-full h-[60px] overflow-hidden bg-black border-t-0 border-r-0 border-b border-l-0 border-[#191919] flex justify-between items-center"
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
  <div class="w-[129px] h-[38px] ml-auto">
    <div
      class="flex flex-col justify-start items-start w-[126px] absolute  gap-2.5"
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
</div> -->



<div
  class="flex justify-between items-center w-screen relative overflow-hidden px-5 py-[7px] bg-white border-t-0 border-r-0 border-b border-l-0 border-[#0d0d0d]"
>
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
  <p class="flex-grow-0 flex-shrink-0 text-3xl text-left">
    <span class="flex-grow-0 flex-shrink-0 text-3xl font-black text-left text-[#0d0d0d]">Fire</span
    ><span class="flex-grow-0 flex-shrink-0 text-3xl text-left text-[#0d0d0d]"> </span
    ><span class="flex-grow-0 flex-shrink-0 text-3xl text-left text-black">AO</span>
  </p>
  <svg
    width="27"
    height="22"
    viewBox="0 0 27 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="flex-grow-0 flex-shrink-0 w-[23px] h-[18px]"
    preserveAspectRatio="none"
  >
    <path d="M2 2H25" stroke="black" stroke-width="3" stroke-linecap="round"></path>
    <path d="M2 20H25" stroke="black" stroke-width="3" stroke-linecap="round"></path>
    <path d="M2 11H25" stroke="black" stroke-width="3" stroke-linecap="round"></path>
  </svg>
</div>