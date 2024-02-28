<script>
  import { onMount } from "svelte";
  import IconPhoto from "../images/IconPhoto.png";
  import Photo from "../images/photo.png";
  import { darkMode } from "../store";
  import "../App.css";

  let currentImage = Photo;
  let isFlipped = false;

  function changeImage() {
    console.log("클릭함");
    isFlipped = !isFlipped;
    currentImage = isFlipped ? IconPhoto : Photo;
  }



  onMount(() => {
    // 페이지가 로드될 때 애니메이션 CSS를 추가

    const style = document.createElement("style");
    style.textContent = `
      @keyframes rotate {
        0% { transform:  rotateY(0deg); }
        100% { transform: rotateY(360deg);}
      }
      .flipped {
        animation: rotate 0.4s;
      }
      @keyframes bounce {
        0%, 100% {
          transform: translateY(-5%);
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        30% {
          transform: translateY(0);
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        
    `;
    document.head.appendChild(style);

    return () => {
      // 컴포넌트가 언마운트 될 때 애니메이션 CSS를 제거
      document.head.removeChild(style);
    };
  });
</script>

{#if $darkMode}
<div
  class="absolute top-[220px] flex flex-col justify-start items-center left-1/2 transform -translate-x-1/2 w-[140px] bg-gray-100 rounded-full sm:w-40 sm:h-40 md:w-48 md:h-48"
  style="width : 140px; height: 200px;" 
>
  <button on:click={changeImage}>
    <img
      src={currentImage}
      alt="종찬형님 사진"
      class="w-[145px] h-[150px] rounded-[100px]  object-cover sm:w-40 sm:h-40 md:w-48 md:h-48 animate-bounce {isFlipped
        ? 'flipped'
        : ''}"
      class:selected={isFlipped}
    />
  </button>
</div>


    <div class="flex flex-col justify-center items-center h-[60vh] gap-2.5 w-screen bg-gray-100 rounded-tl-lg rounded-tr-lg"
         style="border-top-left-radius: 30px; border-top-right-radius: 30px;">
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 343 296"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute justify-center items-center top-[320px] flex-grow-0 flex-shrink-0 w-[340px] h-[300.47px] sm:w-360 sm:h-360 md:w-400 md:h-350"
            style="filter: drop-shadow(0px 0px 15px rgba(0,0,0,0.15));"
            preserveAspectRatio="none">
            <g filter="url(#filter0_d_3496_517)">
                <rect x="15" y="49.5775" width="313" height="231.422" rx="40" fill="#FCFCFC"></rect>
                <path
                    d="M119.736 15.9304L123.92 69.9464L89.5055 60.5876L119.736 15.9304Z"
                    fill="#FCFCFC"></path>
            </g>
            <defs>
                <filter
                    id="filter0_d_3496_517"
                    x="0"
                    y="0.930389"
                    width="343"
                    height="295.07"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3496_517"></feBlend>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3496_517"
                        result="shape"></feBlend>
                </filter>
            </defs>
        </svg>
        <p
            class="absolute flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[299px] text-xs leading-[10px] font-['Pretendard'] top-[400px] font-medium text-center text-[#0d0d0d] ">
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">안녕하십니까! AO의 배종찬입니다.
            </span>
            <br/>
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">삼촌 아니고 형입니다.
            </span><br/>
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">정승처럼 공부하고 개처럼 마시는 스터디 AO!
            </span><br/>
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">군대 다녀온 복학생도 어리버리 신입생도 모두 환영합니다.
            </span><br/>
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">MT면 MT, 스터디면 스터디, 회식이면 회식!
            </span><br/>
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">뭐 하나 빠지지 않는 저희 AO 스터디에서 바라왔던</span ><br/>
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">대학생활 보내시면 좋겠습니다 🔥🔥</span >
        </p>
    </div>
    {:else}
    <div
  class="absolute top-[220px] flex flex-col justify-start items-center left-1/2 transform -translate-x-1/2 w-[140px] bg-gray-200 rounded-full sm:w-40 sm:h-40 md:w-48 md:h-48"
  style="width : 140px; height: 200px;" 
>
  <button on:click={changeImage}>
    <img
      src={currentImage}
      alt="종찬형님 사진"
      class="w-[145px] h-[150px] rounded-[100px]  object-cover sm:w-40 sm:h-40 md:w-48 md:h-48 animate-bounce {isFlipped
        ? 'flipped'
        : ''}"
      class:selected={isFlipped}
    />
  </button>
</div>


    <div class="flex flex-col justify-center items-center h-[60vh] gap-2.5 w-screen bg-gray-200 rounded-tl-lg rounded-tr-lg"
         style="border-top-left-radius: 30px; border-top-right-radius: 30px;">
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 343 296"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute justify-center items-center top-[320px] flex-grow-0 flex-shrink-0 w-[340px] h-[300.47px] sm:w-360 sm:h-360 md:w-400 md:h-350"
            style="filter: drop-shadow(0px 0px 15px rgba(0,0,0,0.15));"
            preserveAspectRatio="none">
            <g filter="url(#filter0_d_3496_517)">
                <rect x="15" y="49.5775" width="313" height="231.422" rx="40" fill="#FCFCFC"></rect>
                <path
                    d="M119.736 15.9304L123.92 69.9464L89.5055 60.5876L119.736 15.9304Z"
                    fill="#FCFCFC"></path>
            </g>
            <defs>
                <filter
                    id="filter0_d_3496_517"
                    x="0"
                    y="0.930389"
                    width="343"
                    height="295.07"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3496_517"></feBlend>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3496_517"
                        result="shape"></feBlend>
                </filter>
            </defs>
        </svg>
        <p
            class="absolute flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[299px] text-xs leading-[10px] font-['Pretendard'] top-[400px] font-medium text-center text-[#0d0d0d] ">
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">안녕하십니까! AO의 배종찬입니다.
            </span>
            <br/>
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">삼촌 아니고 형입니다.
            </span><br/>
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">정승처럼 공부하고 개처럼 마시는 스터디 AO!
            </span><br/>
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">군대 다녀온 복학생도 어리버리 신입생도 모두 환영합니다.
            </span><br/>
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">MT면 MT, 스터디면 스터디, 회식이면 회식!
            </span><br/>
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">뭐 하나 빠지지 않는 저희 AO 스터디에서 바라왔던</span ><br/>
            <span
                class="flex-grow-0 flex-shrink-0 w-[299px] text-xs font-medium text-center text-[#0d0d0d]">대학생활 보내시면 좋겠습니다 🔥🔥</span >
        </p>
    </div>
    {/if}