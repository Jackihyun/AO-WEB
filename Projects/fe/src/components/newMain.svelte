<script>
  import { Link } from "svelte-routing";
  import { darkMode } from "../store";
  import Aosimbol from "../images/AO simbol.png";
  // 스크롤 이벤트에 반응하여 요소 이동
  window.addEventListener("scroll", function () {
    var scrollValue = window.scrollY; // 스크롤 위치

    var stopPositions = [480, 360, 540, 420, 300, 600];
    var stopPositionsX = [-35, -10, 15, 30, 10, 30];
    var startPositionsX = [0, 0, 0, 0, 0, 0];

    var content = document.querySelector(".content"); // 콘텐츠 부분 선택

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

    var fireaoWrapper = document.getElementById("zoomTarget");
    var threshold = 600; // 원 확장 시작 스크롤 위치

    // if (scrollValue > threshold) {
    //   var scaleValue = Math.min(1 + (scrollValue - threshold) / 500, 5); // 5배까지 확대 예시
    //   fireaoWrapper.style.transform = `scale(${scaleValue})`;
    //   fireaoWrapper.style.backgroundColor = `rgba(0, 0, 255, ${Math.min(
    //     (scrollValue - threshold) / 500,
    //     1,
    //   )})`; // 배경색 점차 파란색으로
    // } else {
    //   fireaoWrapper.style.transform = "scale(1)";
    //   fireaoWrapper.style.backgroundColor = "rgba(0, 0, 255, 0)";
    // }

    if (scrollValue > threshold) {
      content.style.transform = "translateY(80)"; // 콘텐츠 올라오기
    } else {
      content.style.transform = "translateY(100%)"; // 원래 위치
    }
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

<div class="flex-col justify-center">
  <div
    id="zoomTarget"
    class="relative inline-block w-1 h-1 bg-[#684DEF] dark:bg-[#FF4A3F] rounded-full"
  ></div>
</div>

<div class="mb-[600px]"></div>
<!-- 밑에 내용들 -->
<div
  class="content flex flex-col bg-[#684DEF] dark:bg-[#FF4A3F] w-full h-auto text-white dark:text-black mt-96 mx-auto"
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
