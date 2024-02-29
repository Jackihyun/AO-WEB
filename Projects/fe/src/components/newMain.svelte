<script>
  import { Link } from "svelte-routing";
  import { darkMode } from "../store";
  import Aosimbol from "../images/AOsimbol.png";
  // 스크롤 이벤트에 반응하여 요소 이동
  window.addEventListener("scroll", function () {
    var scrollValue = window.scrollY; // 스크롤 위치

    var stopPositions = [780, 660, 840, 720, 600, 900];
    var stopPositionsX = [-35, -10, 15, 30, 10, 30];
    var startPositionsX = [0, 0, 0, 0, 0, 0];

    // 각 글자에 대한 참조를 가져옵니다.
    var textElements = [
      document.getElementById("scrollingTextF"),
      document.getElementById("scrollingTextI"),
      document.getElementById("scrollingTextR"),
      document.getElementById("scrollingTextE"),
      document.getElementById("scrollingTextA"),
      document.getElementById("scrollingTextO"),
    ];

    textElements.forEach(function (textElement, index) {
      if (textElement) {
        // null 체크
        if (scrollValue < stopPositions[index]) {
          textElement.style.top = scrollValue + "px";
          //textElement.style.right = startPositionsX[index] + "px";
        } else {
          textElement.style.top = stopPositions[index] + "px";
          //textElement.style.right = stopPositionsX[index] + "px";
        }
      }
    });
  });
</script>

<!-- // window.addEventListener("scroll", () => {
  //   const zoomTarget = document.getElementById("zoomTarget");
  //   // `window.scrollY`를 사용하여 스크롤 양 가져오기
  //   const scale = Math.min(100, 1 + window.scrollY / 1);
  //   zoomTarget.style.transform = `scale(${scale})`; // 확대 효과 적용
  // });
</scrip> -->

<div class="flex-col">
  <div class="flex justify-center items-center whitespace-nowrap">
    <p
      class=" text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white mr-[10.67px]"
    >
      &lt;PROGRAMMING
    </p>
    <div class="flex justify-center items-center">
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white"
      >
        C<span
          id="scrollingTextO"
          class="transition duration-150 ease-in-out relative text-[#684DFF] dark:text-[#FF4A3F]"
          >O</span
        >DE
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <p
      class="text-[40px] mr-[11.29px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white whitespace-nowrap"
    >
      BACKEND
    </p>
    <div class="flex justify-center items-center">
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left mr-[10.29px] text-black dark:text-white"
      >
        <span
          id="scrollingTextR"
          class=" relative text-[#684DFF] dark:text-[#FF4A3F]">R</span
        >UNNING
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white"
      >
        DEV
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <p
      class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white mr-[7.97px]"
    >
      AO
    </p>
    <div class="flex justify-center items-center">
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white mr-[3.36px]"
      >
        <span
          id="scrollingTextF"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">F</span
        >RONTEND
      </p>
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white"
      >
        'CLASS'
      </p>
    </div>
  </div>
  <div class="flex justify-center items-center whitespace-nowrap">
    <p
      class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[20px] mr-[12.77px]"
    >
      CREATING
    </p>
    <div class="flex justify-center items-center">
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white"
      >
        D<span
          id="scrollingTextE"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">E</span
        >VELOPING
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <p
      class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[30.97px] mr-[13.98px]"
    >
      WEB
    </p>
    <div class="flex justify-center items-center">
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white"
      >
        <span
          id="scrollingTextI"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">I</span
        >NTERACTION/&gt;
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <p
      class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white ml-[25px] mr-[15.77px]"
    >
      MJUSTUDY
    </p>
    <div class="flex justify-center items-center">
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white"
      >
        LE<span
          id="scrollingTextA"
          class=" text-[#684DFF] dark:text-[#FF4A3F] relative">A</span
        >RNING
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center ml-[15px] whitespace-nowrap">
    <p
      class="text-[40px] font-['5MAL6LAMPEN'] ml-[4px] text-left text-black dark:text-white"
    >
      COME AND JOINUS..
    </p>
  </div>
</div>

<div class="flex-col justify-center mt-[600px]">
  <div
    class="flex font-['5MAL6LAMPEN'] justify-center items-center text-[#684DEF] dark:text-[#FF4A3F] text-[40px]"
  >
    F I R E A O
  </div>
  <div
    id="zoomTarget"
    class="absolute top-[1140px] left-[53.5%] w-1 h-1 bg-[#684DEF] dark:bg-[#FF4A3F] rounded-full"
  ></div>
</div>

<!-- 밑에 내용들 -->
<div
  class="flex flex-col bg-[#684DEF] dark:bg-[#FF4A3F] w-full h-auto text-white dark:text-black mt-96 mx-auto"
>
  <div class="pl-[46px] mb-[100px]">
    <span
      class="font-['PRETENDARD'] text-3xl font-black text-left text-white dark:text-black"
      >Welcome to</span
    ><br /><span
      class="font-['PRETENDARD'] text-3xl font-black text-left text-white dark:text-black"
      >Fire AO!</span
    >

    <p class="mt-[14px] flex-grow-0 flex-shrink-0 text-xl text-left">
      <span
        class="font-['PRETENDARD'] flex-grow-0 flex-shrink-0 text-xl font-black text-center text-white dark:text-black"
        >Alpha</span
      ><span
        class="font-['PRETENDARD'] flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-white dark:text-black"
        >부터
      </span><span
        class="font-['PRETENDARD'] flex-grow-0 flex-shrink-0 text-xl font-black text-center text-white dark:text-black"
        >Omega</span
      ><span
        class="font-['PRETENDARD'] flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-white dark:text-black"
        >까지!</span
      >
    </p>
    <span
      class="font-['PRETENDARD'] text-[13px] font-semibold text-left text-white dark:text-black"
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
      class="font-['Helvetica95_Black'] text-[30px] mb-[10px] text-center text-white dark:text-black"
    >
      Fire AO
    </p>
    <span
      class="font-['PRETENDARD'] text-[13px] font-medium text-center text-white dark:text-black"
      >AO는 Alpha의 A, Omega의 O를 합친 것으로<br /></span
    ><span
      class="font-['PRETENDARD'] text-[13px] font-medium text-center text-white dark:text-black"
      >처음부터 끝까지 함께하겠다는 의미를 담고 있습니다.</span
    >
  </div>

  <!-- 주요활동 내용 -->
  <div class="ml-[24px] px-[8px]">
    <span
      class="font-['Helvetica95_Black'] text-[30px] mb-[10px] text-lfet text-white dark:text-black"
    >
      Fire AO<br />
    </span>
    <span
      class="font-['PRETENDARD'] text-[18px] font-bold text-left text-white dark:text-black"
      >주요 활동 내용</span
    >
  </div>

  <div class="ml-[24px] px-[8px] mt-[46px]">
    <p
      class="font-['PRETENDARD'] text-[20px] font-bold text-left text-white dark:text-black"
    >
      1. 스터디 활동
    </p>
    <p
      class="ml-[20px] font-['NOTO SANS KR'] mb-[17px] text-[14px] text-left font-normal"
    >
      알고리즘, 책 스터디등
    </p>
  </div>
  <p
    class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
  ></p>

  <div class="ml-[24px] px-[8px] mt-[17px]">
    <p
      class="font-['PRETENDARD'] text-[20px] font-bold text-left text-white dark:text-black"
    >
      2. 세미나
    </p>
    <p
      class="ml-[20px] font-['NOTO SANS KR'] mb-[17px] text-[14px] text-left font-normal"
    >
      개발 관련 주제 선정 후 발표 (2주에 한 번)
    </p>
  </div>
  <p
    class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
  ></p>

  <div class="ml-[24px] px-[8px] mt-[17px]">
    <p
      class="font-['PRETENDARD'] text-[20px] font-bold text-left text-white dark:text-black"
    >
      3. 프로젝트
    </p>
    <p
      class="ml-[20px] font-['NOTO SANS KR'] mb-[17px] text-[14px] text-left font-normal"
    >
      직접 앱이나 웹을 멘토링 받으면서 만들어보기<br />(2학기)
    </p>
  </div>
  <p
    class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
  ></p>

  <div class="ml-[24px] px-[8px] mt-[17px] mb-[17px]">
    <p
      class="font-['PRETENDARD'] text-[20px] font-bold text-left text-white dark:text-black"
    >
      4. 학기 별 개강 파티 및 종강 파티
    </p>
  </div>
  <p
    class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
  ></p>

  <div class="ml-[24px] px-[8px] mt-[17px]">
    <p
      class="font-['PRETENDARD'] text-[20px] font-bold text-left text-white dark:text-black"
    >
      5. MT
    </p>
    <p
      class="ml-[20px] font-['NOTO SANS KR'] mb-[17px] text-[14px] text-left font-normal"
    >
      4월 중순 쯤 AO 전체 MT 진행
    </p>
  </div>
  <p
    class="mx-[16px] h-[0.7px] border border-[#FFF] dark:border-[#000] border-solid rounded-sm"
  ></p>

  <div class="ml-[24px] px-[8px] mt-[17px]">
    <p
      class="font-['PRETENDARD'] text-[20px] font-bold text-left text-white dark:text-black"
    >
      6. 총회
    </p>
    <p
      class="ml-[20px] font-['NOTO SANS KR'] mb-[17px] text-[14px] text-left font-normal"
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
          class="font-['HELVETICA95_Black'] font-bold flex-grow-0 flex-shrink-0 text-[13px] text-center text-[#684dff] dark:text-[#FF4A3F]"
          >FIRE AO
        </span>
        <span
          class="font-['PRETENDARD'] flex-grow-0 flex-shrink-0 text-[13px] font-bold text-center text-[#684dff] dark:text-[#FF4A3F]"
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
