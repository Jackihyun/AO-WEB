<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    const ids = [
      "scrollingTextO",
      "scrollingTextR",
      "scrollingTextF",
      "scrollingTextE",
      "scrollingTextI",
      "scrollingTextA",
    ];
    let elements = ids.map((id) => document.getElementById(id));
    let startPositions = [];
    const finalPosition = 660; // 최종 목표 위치까지의 Y 위치

    // 페이지 로드 시 각 요소의 초기 위치를 기록
    startPositions = elements.map((element) => {
      const rect = element.getBoundingClientRect();
      return rect.top + document.documentElement.scrollTop;
    });

    const moveElements = () => {
      const scrolledDistance = document.documentElement.scrollTop; // 현재 스크롤된 거리

      elements.forEach((element, index) => {
        if (scrolledDistance + window.innerHeight > startPositions[index]) {
          const moveDistance = Math.min(
            scrolledDistance - (startPositions[index] - finalPosition),
            finalPosition - startPositions[index],
          );
          element.style.transform = `translateY(${moveDistance}px)`;
        }
      });
    };

    // 스크롤 이벤트에 반응하여 요소 이동
    window.addEventListener("scroll", moveElements);
  });

  // window.addEventListener("scroll", function () {
  //   var scrollValue = window.scrollY; // 스크롤 위치
  //   var targetPosition = 800; // 글자들이 멈출 위치

  //   // 각 글자에 대한 참조를 가져옵니다.
  //   var textElements = [
  //     document.getElementById("scrollingTextF"),
  //     document.getElementById("scrollingTextI"),
  //     document.getElementById("scrollingTextR"),
  //     document.getElementById("scrollingTextE"),
  //     document.getElementById("scrollingTextA"),
  //     document.getElementById("scrollingTextO"),
  //   ];

  //   textElements.forEach(function (textElement) {
  //     var currentPosition = parseInt(
  //       window.getComputedStyle(textElement).getPropertyValue("top"),
  //       10,
  //     );
  //     var newPosition = scrollValue * 1.2; // 이동할 새 위치

  //     if (currentPosition + newPosition < targetPosition) {
  //       textElement.style.top = newPosition + "px";
  //     } else {
  //       textElement.style.top = targetPosition - currentPosition + "px";
  //     }
  //   });
  // });
</script>

<div class="flex-col">
  <div class="flex justify-center items-center whitespace-nowrap">
    <p
      class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black dark:text-white mr-[10.67px]"
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
      class="text-[40px] mr-[11.29px] font-['5MAL6LAMPEN'] text-left text-black whitespace-nowrap"
    >
      BACKEND
    </p>
    <div class="flex justify-center items-center">
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left mr-[10.29px] text-black"
      >
        <span id="scrollingTextR" class=" relative text-[#684DFF]">R</span
        >UNNING
      </p>
      <p class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black">DEV</p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <p
      class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black mr-[7.97px]"
    >
      AO
    </p>
    <div class="flex justify-center items-center">
      <p
        class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black mr-[3.36px]"
      >
        <span id="scrollingTextF" class=" text-[#684DFF] relative">F</span
        >RONTEND
      </p>
      <p class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black">
        'CLASS'
      </p>
    </div>
  </div>
  <div class="flex justify-center items-center whitespace-nowrap">
    <p
      class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black ml-[20px] mr-[12.77px]"
    >
      CREATING
    </p>
    <div class="flex justify-center items-center">
      <p class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black">
        D<span id="scrollingTextE" class=" text-[#684DFF] relative">E</span
        >VELOPING
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <p
      class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black ml-[30.97px] mr-[13.98px]"
    >
      WEB
    </p>
    <div class="flex justify-center items-center">
      <p class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black">
        <span id="scrollingTextI" class=" text-[#684DFF] relative">I</span
        >NTERACTION/&gt;
      </p>
    </div>
  </div>

  <div class="flex justify-center items-center whitespace-nowrap">
    <p
      class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black ml-[25px] mr-[15.77px]"
    >
      MJUSTUDY
    </p>
    <div class="flex justify-center items-center">
      <p class="text-[40px] font-['5MAL6LAMPEN'] text-left text-black">
        LE<span id="scrollingTextA" class=" text-[#684DFF] relative">A</span
        >RNING
      </p>
    </div>
  </div>

  <div
    class="flex justify-center items-center ml-[15px] mr-[200px] whitespace-nowrap"
  >
    <p class="text-[40px] font-['5MAL6LAMPEN'] ml-[4px] text-left text-black">
      JOINUS..
    </p>
  </div>
</div>
