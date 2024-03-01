<script>
  import { Link } from "svelte-routing";
  import { darkMode } from "../store";
  import Aosimbol from "../images/AO simbol.png";
  import ScrollOut from "scroll-out";
  import { onMount } from "svelte";
  import "../App.css";

  let ischeck = false;
  let ischek2 = false;
  let ischek3 = false;
  let ischek4 = false;
  let ischek5 = false;
  let ischek6 = false;
  let isFinish = false;
  let isZoom = false;

  // 스크롤 이벤트에 반응하여 요소 이동
  window.addEventListener("scroll", function () {
    var scrollValue = window.scrollY; // 스크롤 위치
    var currentPos;
    var stopPositions = [
      840, 840, 840, 720, 720, 720, 900, 900, 900, 900, 780, 780, 780, 660, 660,
      660, 960, 960, 960,
    ];
    var stopPositionsX = [
      -35, -35, -35, -10, -10, -10, 15, 15, 15, 15, 30, 30, 30, 10, 10, 10, 10,
      10, 10,
    ];
    var startPositionsX = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];

    const content = document.querySelector(".content"); // 콘텐츠 부분 선택
    const zoomTarget = document.getElementById("zoomTarget");
    const zoomCircleTarget = document.getElementById("zoomCircleTarget");
    const changeBack = document.getElementById("change");

    // 각 글자에 대한 참조를 가져옵니다.
    var textElements = [
      document.getElementById("scrollingTextF"),
      document.getElementById("scrollingTextF2"),
      document.getElementById("scrollingTextF3"),

      document.getElementById("scrollingTextI"),
      document.getElementById("scrollingTextI2"),
      document.getElementById("scrollingTextI3"),

      document.getElementById("scrollingTextR"),
      document.getElementById("scrollingTextR2"),
      document.getElementById("scrollingTextR3"),
      document.getElementById("scrollingTextR4"),

      document.getElementById("scrollingTextE"),
      document.getElementById("scrollingTextE2"),
      document.getElementById("scrollingTextE3"),

      document.getElementById("scrollingTextA"),
      document.getElementById("scrollingTextA2"),
      document.getElementById("scrollingTextA3"),

      document.getElementById("scrollingTextO"),
      document.getElementById("scrollingTextO2"),
      document.getElementById("scrollingTextO3"),
    ];

    if (scrollValue >= 845) {
      isFinish = true;
    } else {
      isFinish = false;
    }

    currentPos = scrollValue * 1.2;
    textElements.forEach(function (textElement, index) {
      if (textElement) {
        // null 체크
        if (currentPos < stopPositions[index]) {
          textElement.style.top = scrollValue + "px";
          //ischek = false; ischek2 = false; ischek3 = false; ischek4 = false; ischek5 = false; ischek6 = false;
          ischeck = false;
          //textElement.style.right = startPositionsX[index] + "px";
        } else {
          // textElement.style.top = stopPositions[index] + "px";
          textElement.style.top = startPositionsX[index] + "px";
          //ischek = true; ischek2 = true; ischek3 = true; ischek4 = true; ischek5 = true; ischek6 = true;
          ischeck = true;
          // textElement.style.right = stopPositionsX[index] + "px";
        }
      }
    });

    const startZoomScrollPosition = 900; // 확대가 시작되는 스크롤 위치
    const maxScale = 1000; // 최대 확대 배율

    let scale = 1;

    if (scrollY > startZoomScrollPosition) {
      if (this.scrollY > startZoomScrollPosition + 45) {
        isZoom = true;
      }
      scale += (scrollY - startZoomScrollPosition) / 100; // 스크롤에 따라 scale이 증가
      scale = Math.min(scale, maxScale); // scale 값을 maxScale로 제한
    } else if (scrollY > startZoomScrollPosition + 50) {
      zoomCircleTarget.style.transform = `scale(200)`;
    } else {
      isZoom = false;
      zoomCircleTarget.style.transform = "scale(0)";
      zoomTarget.style.transform = "scale(0)";
    }

    zoomTarget.style.transform = `scale(${scale})`;

    let isDarkMode = false;
    darkMode.subscribe((value) => {
      isDarkMode = value;
      if (isDarkMode === true) {
        if (scrollY > 1000) {
          changeBack.style.backgroundColor = "#FF4A3F";
        } else {
          changeBack.style.backgroundColor = "";
        }
      } else {
        if (scrollY > 1000) {
          changeBack.style.backgroundColor = "#684DEF";
        } else {
          changeBack.style.backgroundColor = "";
        }
      }
    });
  });
  // 페이지 로드 후 ScrollOut 초기화
  // document.addEventListener('DOMContentLoaded', function() {
  //     // ScrollOut 라이브러리를 사용하여 스크롤 이벤트 처리
  //     ScrollOut({
  //         targets: '#scrollElement', // 스크롤 이벤트를 적용할 요소 선택자
  //         onShown: function(element) {
  //             element.classList.add('opacity-100', 'translate-y-0', 'scale-100'); // 화면에 나타날 때 추가할 테일윈드 클래스
  //             element.classList.remove('opacity-0', 'translate-y-full', 'scale-90'); // 화면에 나타날 때 제거할 테일윈드 클래스
  //         },
  //         onHidden: function(element) {
  //             element.classList.remove('opacity-100', 'translate-y-0', 'scale-100'); // 화면에서 사라질 때 제거할 테일윈드 클래스
  //             element.classList.add('opacity-0', 'translate-y-full', 'scale-90'); // 화면에서 사라질 때 추가할 테일윈드 클래스
  //         }
  //     });
  // });
  ScrollOut({});
</script>

<div class="flex-col">
  <div class="flex justify-center items-center whitespace-nowrap w-screen">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee'} whitespace-nowrap w-[100%]"
    >
      <p
        id="first"
        class=" text-[40px] font-['5MAL6LAMPEN'] mr-4 text-left text-black dark:text-white"
      >
        &lt;PROGRAMMING C<span
          id="scrollingTextO"
          class="transition duration-150 ease-in-out relative text-[#684DFF] dark:text-[#FF4A3F]"
          >O</span
        >DE
      </p>
      <p
        id="second"
        class=" text-[40px] font-['5MAL6LAMPEN'] mr-4 text-left text-black dark:text-white"
      >
        &lt;PROGRAMMING C<span
          id="scrollingTextO2"
          class="transition duration-150 ease-in-out relative text-[#684DFF] dark:text-[#FF4A3F]"
          >O</span
        >DE
      </p>
      <p
        id="third"
        class=" text-[40px] font-['5MAL6LAMPEN'] mr-4 text-left text-black dark:text-white"
      >
        &lt;PROGRAMMING C<span
          id="scrollingTextO3"
          class="transition duration-150 ease-in-out relative text-[#684DFF] dark:text-[#FF4A3F]"
          >O</span
        >DE
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee2'} whitespace-nowrap w-[100%]"
    >
      <p
        class="text-[40px] mr-4 font-['5MAL6LAMPEN'] text-left text-black dark:text-white whitespace-nowrap"
      >
        BACKEND
        <span
          id="scrollingTextR"
          class=" relative text-[#684DFF] dark:text-[#FF4A3F]">R</span
        >UNNING DEV
      </p>
      <p
        class="text-[40px] mr-4 font-['5MAL6LAMPEN'] text-left text-black dark:text-white whitespace-nowrap"
      >
        BACKEND
        <span
          id="scrollingTextR2"
          class=" relative text-[#684DFF] dark:text-[#FF4A3F]">R</span
        >UNNING DEV
      </p>
      <p
        class="text-[40px] mr-4 font-['5MAL6LAMPEN'] text-left text-black dark:text-white whitespace-nowrap"
      >
        BACKEND
        <span
          id="scrollingTextR3"
          class=" relative text-[#684DFF] dark:text-[#FF4A3F]">R</span
        >UNNING DEV
      </p>
      <p
        class="text-[40px] mr-4 font-['5MAL6LAMPEN'] text-left text-black dark:text-white whitespace-nowrap"
      >
        BACKEND
        <span
          id="scrollingTextR4"
          class=" relative text-[#684DFF] dark:text-[#FF4A3F]">R</span
        >UNNING DEV
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee3'} whitespace-nowrap w-[100%]"
    >
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white mr-4"
      >
        AO
        <span
          id="scrollingTextF"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">F</span
        >RONTEND'CLASS'
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white mr-4"
      >
        AO
        <span
          id="scrollingTextF2"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">F</span
        >RONTEND'CLASS'
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white mr-4"
      >
        AO
        <span
          id="scrollingTextF3"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">F</span
        >RONTEND'CLASS'
      </p>
    </div>
  </div>
  <div class="flex justify-center items-center whitespace-nowrap">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee4'} whitespace-nowrap w-[100%]"
    >
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[20px] mr-[12.77px]"
      >
        CREATING D<span
          id="scrollingTextE"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">E</span
        >VELOPING
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[20px] mr-[12.77px]"
      >
        CREATING D<span
          id="scrollingTextE2"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">E</span
        >VELOPING
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[20px] mr-[12.77px]"
      >
        CREATING D<span
          id="scrollingTextE3"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">E</span
        >VELOPING
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee5'} whitespace-nowrap w-[100%]"
    >
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[30.97px] mr-[13.98px]"
      >
        WEB
        <span
          id="scrollingTextI"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">I</span
        >NTERACTION/&gt;
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[30.97px] mr-[13.98px]"
      >
        WEB
        <span
          id="scrollingTextI2"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">I</span
        >NTERACTION/&gt;
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[30.97px] mr-[13.98px]"
      >
        WEB
        <span
          id="scrollingTextI3"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">I</span
        >NTERACTION/&gt;
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee6'} whitespace-nowrap w-[100%]"
    >
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[25px] mr-[15.77px]"
      >
        MJUSTUDY LE<span
          id="scrollingTextA"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">A</span
        >RNING
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[25px] mr-[15.77px]"
      >
        MJUSTUDY LE<span
          id="scrollingTextA2"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">A</span
        >RNING
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[25px] mr-[15.77px]"
      >
        MJUSTUDY LE<span
          id="scrollingTextA3"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">A</span
        >RNING
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center ml-[15px] whitespace-nowrap">
    <div
      class="flex {ischeck
        ? ' '
        : 'animate-marquee7'} whitespace-nowrap w-[100%] gap-4"
    >
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] ml-[4px] text-left text-black dark:text-white"
      >
        COME AND JOINUS..
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] ml-[4px] text-left text-black dark:text-white"
      >
        COME AND JOINUS..
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] ml-[4px] text-left text-black dark:text-white"
      >
        COME AND JOINUS..
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] ml-[4px] text-left text-black dark:text-white"
      >
        COME AND JOINUS..
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] ml-[4px] text-left text-black dark:text-white"
      >
        COME AND JOINUS..
      </p>
    </div>
  </div>
</div>

<div class="mb-[600px]"></div>
<div id="zoomTarget">
  <div
    class=" transition-transform ease origin-center sticky flex font-['5MAL6LAMPEN'] justify-center items-center text-[#684DEF] dark:text-[#FF4A3F] text-[40px] data-scroll {isFinish
      ? 'data-scroll in'
      : 'data-scroll out'}"
  >
    F I R E A O
  </div>
</div>
<div
  id="zoomCircleTarget"
  class="{isZoom
    ? ''
    : 'invisible'} absolute transition-transform origin-center ease left-[50%] w-1 h-1 bg-[#684DEF] dark:bg-[#FF4A3F] rounded-full m-0 {isZoom
    ? 'data-scroll in'
    : 'data-scroll out'}"
></div>

<!-- 밑에 내용들 -->
<div
  id="change"
  class=" pb-[400px] {isZoom ? 'data-scroll in' : 'data-scroll out'}"
></div>

<div
  class="content flex flex-col bg-[#684DEF] dark:bg-[#FF4A3F] w-full h-auto text-white dark:text-black mx-auto"
>
  <div class="pl-[46px] mb-[100px]">
    <span
      class="font-['PRETENDARD-BLACK'] text-3xl text-left text-white dark:text-black"
      >Welcome to</span
    ><br /><span
      class="font-['PRETENDARD-BLACK'] text-3xl text-left text-white dark:text-black"
      >Fire AO!</span
    >

    <p class="mt-[14px] flex-grow-0 flex-shrink-0 text-xl text-left">
      <span
        class="font-['PRETENDARD-BLACK'] flex-grow-0 flex-shrink-0 text-xl text-center text-white dark:text-black"
        >Alpha</span
      ><span
        class="font-['PRETENDARD-BOLD'] flex-grow-0 flex-shrink-0 text-xl text-center text-white dark:text-black"
        >부터
      </span><span
        class="font-['PRETENDARD-BLACK'] flex-grow-0 flex-shrink-0 text-xl text-center text-white dark:text-black"
        >Omega</span
      ><span
        class="font-['PRETENDARD-BOLD'] flex-grow-0 flex-shrink-0 text-xl text-center text-white dark:text-black"
        >까지!</span
      >
    </p>
    <span
      class="font-['PRETENDARD-SEMIBOLD'] text-[13px] text-left text-white dark:text-black"
    >
      대학 생활의 처음부터 끝까지 함께해 줄 Fire AO입니다.
    </span>
  </div>

  <!-- 로고부터 위에 소개글 -->
  <div class="flex flex-col justify-center items-center mb-[59px]">
    <img
      src={Aosimbol}
      alt="AO 심볼로고"
      class="w-[45px] h-[45px] object-cover mb-[10px]"
    />
    <p
      class="font-['Montserrat'] font-black text-[30px] mb-[10px] text-center text-white dark:text-black"
    >
      Fire AO
    </p>
    <span
      class="font-['PRETENDARD-MEDIUM'] text-[13px] text-center text-white dark:text-black"
      >AO는 Alpha의 A, Omega의 O를 합친 것으로<br /></span
    ><span
      class="font-['PRETENDARD-MEDIUM'] text-[13px] text-center text-white dark:text-black"
      >처음부터 끝까지 함께하겠다는 의미를 담고 있습니다.</span
    >
  </div>

  <!-- 주요활동 내용 -->
  <div class="ml-[24px] px-[8px]">
    <span
      class="font-['Montserrat'] font-black text-[30px] mb-[10px] text-lfet text-white dark:text-black"
    >
      Fire AO<br />
    </span>
    <span
      class="font-['PRETENDARD-BOLD'] text-[18px] text-left text-white dark:text-black"
      >주요 활동 내용</span
    >
  </div>

  <div class="ml-[24px] px-[8px] mt-[46px]">
    <p
      class="font-['PRETENDARD-BOLD'] text-[20px] text-left text-white dark:text-black"
    >
      1. 스터디 활동
    </p>
    <p
      class="ml-[20px] font-['PRETENDARD-LIGHT'] mb-[17px] text-[14px] text-left"
    >
      알고리즘, 책 스터디등
    </p>
  </div>
  <p
    class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
  ></p>

  <div class="ml-[24px] px-[8px] mt-[17px]">
    <p
      class="font-['PRETENDARD-BOLD'] text-[20px] text-left text-white dark:text-black"
    >
      2. 세미나
    </p>
    <p
      class="ml-[20px] font-['PRETENDARD-LIGHT'] mb-[17px] text-[14px] text-left"
    >
      개발 관련 주제 선정 후 발표 (2주에 한 번)
    </p>
  </div>
  <p
    class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
  ></p>

  <div class="ml-[24px] px-[8px] mt-[17px]">
    <p
      class="font-['PRETENDARD-BOLD'] text-[20px] text-left text-white dark:text-black"
    >
      3. 프로젝트
    </p>
    <p
      class="ml-[20px] font-['PRETENDARD-LIGHT'] mb-[17px] text-[14px] text-left"
    >
      직접 앱이나 웹을 멘토링 받으면서 만들어보기<br />(2학기)
    </p>
  </div>
  <p
    class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
  ></p>

  <div class="ml-[24px] px-[8px] mt-[17px] mb-[17px]">
    <p
      class="font-['PRETENDARD-BOLD'] text-[20px] text-left text-white dark:text-black"
    >
      4. 학기 별 개강 파티 및 종강 파티
    </p>
  </div>
  <p
    class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
  ></p>

  <div class="ml-[24px] px-[8px] mt-[17px]">
    <p
      class="font-['PRETENDARD-BOLD'] text-[20px] text-left text-white dark:text-black"
    >
      5. MT
    </p>
    <p
      class="ml-[20px] font-['PRETENDARD-LIGHT'] mb-[17px] text-[14px] text-left"
    >
      4월 중순 쯤 AO 전체 MT 진행
    </p>
  </div>
  <p
    class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
  ></p>

  <div class="ml-[24px] px-[8px] mt-[17px]">
    <p
      class="font-['PRETENDARD-BOLD'] text-[20px] text-left text-white dark:text-black"
    >
      6. 총회
    </p>
    <p
      class="ml-[20px] font-['PRETENDARD-LIGHT'] mb-[17px] text-[14px] text-left"
    >
      11월 말 쯤 AO 선배님들과의 총회 진행
    </p>
  </div>
  <p
    class="mx-[16px] mb-[66px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
  ></p>

  <!-- 지원하러가기 버튼 -->
  <Link to="/apply" class="flex justify-center items-center mb-[149px]">
    <div
      class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[200px] gap-1 p-2.5 rounded-[100px] active:scale-95 bg-white dark:bg-black"
    >
      <p
        class="flex-grow-0 flex-shrink-0 text-[13px] text-center text-[#684dff] dark:text-[#FF4A3F]"
      >
        <span
          class="font-['Montserrat'] font-black flex-grow-0 flex-shrink-0 text-[13px] text-center text-[#684dff] dark:text-[#FF4A3F]"
          >FIRE AO
        </span>
        <span
          class="font-['PRETENDARD-BOLD'] flex-grow-0 flex-shrink-0 text-[13px] text-center text-[#684dff] dark:text-[#FF4A3F]"
          >지원하러 가기</span
        >
      </p>
      {#if $darkMode}
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path
            d="M7.15643 1.6792L11.9377 6.00022L7.15643 10.3212M11.2736 6.00022L1.57831 6.00022"
            stroke="#FF4A3F"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      {:else}
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path
            d="M7.15643 1.6792L11.9377 6.00022L7.15643 10.3212M11.2736 6.00022L1.57831 6.00022"
            stroke="#684DFF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      {/if}
    </div>
  </Link>
</div>

<style>
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-90.33333%);
    }
  }

  @keyframes marquee2 {
    0% {
      transform: translateX(-100.33333%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  .animate-marquee {
    animation: marquee 10s linear infinite;
  }

  .animate-marquee2 {
    animation: marquee2 20s linear infinite;
  }

  .animate-marquee3 {
    animation: marquee 7s linear infinite;
  }

  .animate-marquee4 {
    animation: marquee2 10s linear infinite;
  }

  .animate-marquee5 {
    animation: marquee 10s linear infinite;
  }

  .animate-marquee6 {
    animation: marquee2 25s linear infinite;
  }

  .animate-marquee7 {
    animation: marquee 40s linear infinite;
  }

  .data-scroll {
    opacity: 0;
    will-change: transform, scale, opacity;
    transform: translateY(6rem) scale(0.93);
    transition: all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .data-scroll.in {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .data-scroll.out {
    opacity: 0;
  }
</style>
