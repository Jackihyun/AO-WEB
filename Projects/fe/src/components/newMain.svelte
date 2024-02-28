<script>
    window.addEventListener("scroll", function () {
        var scrollValue = window.scrollY; // 스크롤 위치

        var stopPositions = [780,660,840,720,600,900];
        var stopPositionsX = [-35,-10,15,30,10,30];
        var startPositionsX = [0,0,0,0,0,0];

        // 각 글자에 대한 참조를 가져옵니다.
        var textElements = [
            document.getElementById("scrollingTextF"),
            document.getElementById("scrollingTextI"),
            document.getElementById("scrollingTextR"),
            document.getElementById("scrollingTextE"),
            document.getElementById("scrollingTextA"),
            document.getElementById("scrollingTextO")
        ];

        textElements.forEach(function (textElement, index) {

            if (scrollValue < stopPositions[index]) {
                textElement.style.top = scrollValue + "px";
                //textElement.style.right = startPositionsX[index] + "px";
            } else {
                textElement.style.top = stopPositions[index] + "px";
                //textElement.style.right = stopPositionsX[index] + "px";
            }
        });

    });
</script>



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
          class=" transition duration-150 ease-in-out relative text-[#684DFF] dark:text-[#FF4A3F]"
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