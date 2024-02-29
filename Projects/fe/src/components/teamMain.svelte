<script>
  import { onMount } from "svelte";
  import IconPhoto from "../images/IconPhoto.png";
  import Photo from "../images/photo.png";
  import AoJc from "../images/new종찬형님.png";
  import Aosj from "../images/ao 세진형님.jpg";
  import Aojh from "../images/ao 제희형님.jpg";
  import Aoce from "../images/ao신초은.jpg";
  import Aoyn from "../images/ao최윤아.jpg";
  import SjIcon from "../images/임시.jpg";
  import JhIcon from "../images/임시2.png";
  import CeIcon from "../images/임시3.png";
  import YnIcon from "../images/임시4.jpg";
  import { darkMode } from "../store";
  //import { checkNum , changeValue, changeValue2, changeValue3, changeValue4, changeValue5} from "../store";
  import { checkNum} from "../store";

  import "../App.css";


  let isFlipped = false;
  let showImg = AoJc;
  let isclick = true;

  function showChange(){
    isFlipped = !isFlipped;
    if(showImg == AoJc){
      showImg = IconPhoto;
    } else if(showImg == IconPhoto) {
      showImg = AoJc;
    } else if(showImg == Aosj){
      showImg = SjIcon;
    } else if(showImg == SjIcon){
      showImg = Aosj;
    } else if(showImg == Aojh){
      showImg = JhIcon;
    } else if(showImg == JhIcon){
      showImg = Aojh;
    } else if(showImg == Aoce){
      showImg = CeIcon;
    } else if(showImg == CeIcon){
      showImg = Aoce;
    } else if(showImg == Aoyn){
      showImg  = YnIcon;
    } else if(showImg == YnIcon){
      showImg = Aoyn;
    }


    //showImg = isFlipped ? IconPhoto : ImgChange();
  }


  function JcChangeImg() {
    showImg = AoJc;
    checkNum.set(1);
    isFlipped = false;
  }

  function SjchangeImage() {
    showImg = Aosj;
    checkNum.set(2);
    isclick = false;
    isFlipped = false;
  }

  function JhchangeImage() {
    showImg = Aojh;
    checkNum.set(3);
    isFlipped = false;
  }

  function CechangeImage() {
    showImg = Aoce;
    checkNum.set(4);
    isFlipped = false;
  }

  function YnchangeImage() {
    showImg = Aoyn;
    checkNum.set(5);
    isFlipped = false;
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
    class="flex flex-col justify-center items-center h-[338px] gap-2.5 w-screen bg-gray-100 rounded-tl-lg rounded-tr-lg"
    style="border-top-left-radius: 30px; border-top-right-radius: 30px;">
    <div class="w-[131px] h-[129px] absolute top-[220px] mr-[180px]">
      <svg
        width="86"
        height="86"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-[86px] h-[86px] absolute left-[45px] top-0"
        preserveAspectRatio="none"
      >
        <g clip-path="url(#clip0_5742_1324)">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
        </g>
        <defs>
          <clipPath id="clip0_5742_1324"><rect width="86" height="86" fill="white"></rect></clipPath>
        </defs>
      </svg>
      <div
        class="w-[105px] h-[105px] absolute left-[-1px] top-[23px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] bg-[#c6c6c6]"
      ></div>
      <button on:click={showChange}>
      <img
        src={showImg}
        alt="메인 사진"
        class="w-[99px] h-[99px] absolute left-[2px] top-[26px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover animate-bounce 
        {isFlipped ? 'flipped' : ''}"
        class:selected={isFlipped}
      />
    </button>
    </div>
    
    {#if $checkNum == 1}
    <div class="flex flex-col justify-center items-start relative gap-[18px] top-[10px] mr-[-80px]">
      <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[13px] font-bold text-left text-black">
          배종찬
        </p>
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
          AO 스터디 회장
        </p>
      </div>
      <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
        010-4939-1971
      </p>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[330px] relative overflow-hidden gap-2.5 px-[15px] py-2 rounded-[20px] font-['Pretendard'] bg-white top-[40px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center mb-[10px] text-black">
        <span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black "
          >“안녕하십니까! AO의 배종찬입니다. 삼촌 아니고 형입니다. </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >정승처럼 공부하고 개처럼 마시는 스터디 AO! </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >군대 다녀온 복학생도 어리버리 신입생도 모두 환영합니다. </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >MT면 MT, 스터디면 스터디, 회식이면 회식! 뭐 하나 빠지지 않는</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >저희 AO 스터디에서 바라왔던 대학생활 보내시면 좋겠습니다 🔥🔥”</span
        >
      </p>
    </div>
    {:else if $checkNum == 2}
    <div class="flex flex-col justify-center items-start relative gap-[18px] top-[10px] mr-[-80px]">
      <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[13px] font-bold text-left text-black">
          박세진
        </p>
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
          (전) AO 스터디 회장
        </p>
      </div>
      <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
        010-3023-9006
      </p>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[330px] relative overflow-hidden gap-2.5 px-[15px] py-2 rounded-[20px] font-['Pretendard'] bg-white top-[40px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center mb-[10px] text-black">
        <span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black "
          >안녕하세요~~ 19학번 석유 박세진입니다! </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >A(lcohol)O(nly)는  </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >여러분 인생에서 처음일 수 있는 신입생 생활을 책임져 드립니다!!</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          > 또한 컴공 관련 정보도 많이 얻을 수 있어요. 안 올 이유가 없다고 볼 수 있죠.</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >스터디 AO에서 같이 성장해 보아요!</span
        >
      </p>
    </div>

    {:else if $checkNum == 3}
    <div class="flex flex-col justify-center items-start relative gap-[18px] top-[-20px] mr-[-80px]">
      <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[13px] font-bold text-left text-black">
          천제희
        </p>
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
          AO 스터디 회장 오른팔
        </p>
      </div>
      <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
        010-????-????
      </p>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[330px] relative overflow-hidden gap-2.5 px-[15px] py-2 rounded-[20px] font-['Pretendard'] bg-white top-[40px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center mb-[10px] text-black">
        <span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black "
          >안녕하십니까! Fire🔥 AO 18학번 천제희입니다.</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >AO만큼 활발한 스터디! 여기 말고 절대 없어요</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >같이 능력있는 선배들 피만🩸 쪽쪽🦟 빨아 보아요</span
        >
      </p>
    </div>
    
    {:else if $checkNum == 4}
    <div class="flex flex-col justify-center items-start relative gap-[18px] top-[-20px] mr-[-80px]">
      <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[13px] font-bold text-left text-black">
          신초은
        </p>
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
          부원1
        </p>
      </div>
      <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
        010-????-????
      </p>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[330px] relative overflow-hidden gap-2.5 px-[15px] py-2 rounded-[20px] font-['Pretendard'] bg-white top-[40px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center mb-[10px] text-black">
        <span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black "
          >안녕하세요 FIRE AO 20학번 신초은입니다☺</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >족보, 인맥, 정보, 각종 스터디 등 생각보다 얻어갈 수 있는게 정말 많아요! </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >밥 잘 사주는 스터디 AO에서 슬기로운 대학생활 해보아요</span
        >
      </p>
    </div>

    {:else if $checkNum == 5}
    <div class="flex flex-col justify-center items-start relative gap-[18px] top-[10px] mr-[-80px]">
      <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[13px] font-bold text-left text-black">
          최윤아
        </p>
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
          부원2
        </p>
      </div>
      <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
        010-????-????
      </p>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[330px] relative overflow-hidden gap-2.5 px-[15px] py-2 rounded-[20px] font-['Pretendard'] bg-white top-[40px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center mb-[10px] text-black">
        <span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black "
          >안녕하세요 스터디 AO 21학번 최윤아입니다!!</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >학과 생활 하면서 필요한 정보들과 족보, 인맥</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >또한 행복하고 즐겁게 얻어갈 수 있습니다🫶 </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >좋은 사람들을 많이 사귀고, </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >성적을 잘 받고 싶은 학우들이라면 함께 해요!🍀</span
        >
      </p>
    </div>

    {/if}
</div>
    {:else}
  <div
    class="flex flex-col justify-center items-center h-[338px] gap-2.5 w-screen bg-gray-200 rounded-tl-lg rounded-tr-lg"
    style="border-top-left-radius: 30px; border-top-right-radius: 30px;">
    <div class="w-[131px] h-[129px] absolute top-[220px] mr-[180px]">
      <svg
        width="86"
        height="86"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-[86px] h-[86px] absolute left-[45px] top-0"
        preserveAspectRatio="none"
      >
        <g clip-path="url(#clip0_5742_1324)">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="1.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="10.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="19.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="28.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="37.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="46.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="55.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="64.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="73.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="1.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="10.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="19.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="28.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="37.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="46.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="55.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="64.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="73.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
          <circle cx="82.5" cy="82.5" r="1.5" fill="#C9C9C9"></circle>
        </g>
        <defs>
          <clipPath id="clip0_5742_1324"><rect width="86" height="86" fill="white"></rect></clipPath>
        </defs>
      </svg>
      <div
        class="w-[105px] h-[105px] absolute left-[-1px] top-[23px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] bg-[#c6c6c6]"
      ></div>
      <button on:click={showChange}>
      <img
        src={showImg}
        alt="메인 사진"
        class="w-[99px] h-[99px] absolute left-[2px] top-[26px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover animate-bounce 
        {isFlipped ? 'flipped' : ''}"
        class:selected={isFlipped}
      />
    </button>
    </div>
    
    {#if $checkNum == 1}
    <div class="flex flex-col justify-center items-start relative gap-[18px] top-[10px] mr-[-80px]">
      <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[13px] font-bold text-left text-black">
          배종찬
        </p>
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
          AO 스터디 회장
        </p>
      </div>
      <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
        010-4939-1971
      </p>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[330px] relative overflow-hidden gap-2.5 px-[15px] py-2 rounded-[20px] font-['Pretendard'] bg-white top-[40px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center mb-[10px] text-black">
        <span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black "
          >“안녕하십니까! AO의 배종찬입니다. 삼촌 아니고 형입니다. </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >정승처럼 공부하고 개처럼 마시는 스터디 AO! </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >군대 다녀온 복학생도 어리버리 신입생도 모두 환영합니다. </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >MT면 MT, 스터디면 스터디, 회식이면 회식! 뭐 하나 빠지지 않는</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >저희 AO 스터디에서 바라왔던 대학생활 보내시면 좋겠습니다 🔥🔥”</span
        >
      </p>
    </div>
    {:else if $checkNum == 2}
    <div class="flex flex-col justify-center items-start relative gap-[18px] top-[10px] mr-[-80px]">
      <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[13px] font-bold text-left text-black">
          박세진
        </p>
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
          (전) AO 스터디 회장
        </p>
      </div>
      <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
        010-3023-9006
      </p>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[330px] relative overflow-hidden gap-2.5 px-[15px] py-2 rounded-[20px] font-['Pretendard'] bg-white top-[40px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center mb-[10px] text-black">
        <span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black "
          >안녕하세요~~ 19학번 석유 박세진입니다! </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >A(lcohol)O(nly)는  </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >여러분 인생에서 처음일 수 있는 신입생 생활을 책임져 드립니다!!</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          > 또한 컴공 관련 정보도 많이 얻을 수 있어요. 안 올 이유가 없다고 볼 수 있죠.</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >스터디 AO에서 같이 성장해 보아요!</span
        >
      </p>
    </div>

    {:else if $checkNum == 3}
    <div class="flex flex-col justify-center items-start relative gap-[18px] top-[-20px] mr-[-80px]">
      <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[13px] font-bold text-left text-black">
          천제희
        </p>
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
          AO 스터디 회장 오른팔
        </p>
      </div>
      <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
        010-????-????
      </p>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[330px] relative overflow-hidden gap-2.5 px-[15px] py-2 rounded-[20px] font-['Pretendard'] bg-white top-[40px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center mb-[10px] text-black">
        <span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black "
          >안녕하십니까! Fire🔥 AO 18학번 천제희입니다.</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >AO만큼 활발한 스터디! 여기 말고 절대 없어요</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >같이 능력있는 선배들 피만🩸 쪽쪽🦟 빨아 보아요</span
        >
      </p>
    </div>
    
    {:else if $checkNum == 4}
    <div class="flex flex-col justify-center items-start relative gap-[18px] top-[-20px] mr-[-80px]">
      <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[13px] font-bold text-left text-black">
          신초은
        </p>
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
          부원1
        </p>
      </div>
      <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
        010-????-????
      </p>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[330px] relative overflow-hidden gap-2.5 px-[15px] py-2 rounded-[20px] font-['Pretendard'] bg-white top-[40px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center mb-[10px] text-black">
        <span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black "
          >안녕하세요 FIRE AO 20학번 신초은입니다☺</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >족보, 인맥, 정보, 각종 스터디 등 생각보다 얻어갈 수 있는게 정말 많아요! </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >밥 잘 사주는 스터디 AO에서 슬기로운 대학생활 해보아요</span
        >
      </p>
    </div>

    {:else if $checkNum == 5}
    <div class="flex flex-col justify-center items-start relative gap-[18px] top-[10px] mr-[-80px]">
      <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[13px] font-bold text-left text-black">
          최윤아
        </p>
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
          부원2
        </p>
      </div>
      <p class="flex-grow-0 flex-shrink-0 w-[109px] text-[10px] font-medium text-left text-[#747474]">
        010-????-????
      </p>
    </div>

    <div
      class="flex flex-col justify-center items-center w-[330px] relative overflow-hidden gap-2.5 px-[15px] py-2 rounded-[20px] font-['Pretendard'] bg-white top-[40px]"
      style="box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);"
    >
      <p class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center mb-[10px] text-black">
        <span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black "
          >안녕하세요 스터디 AO 21학번 최윤아입니다!!</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >학과 생활 하면서 필요한 정보들과 족보, 인맥</span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >또한 행복하고 즐겁게 얻어갈 수 있습니다🫶 </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >좋은 사람들을 많이 사귀고, </span
        ><br /><br /><span class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-center text-black"
          >성적을 잘 받고 싶은 학우들이라면 함께 해요!🍀</span
        >
      </p>
    </div>

    {/if}
</div>
    {/if}

  <div class="flex mt-[23px]">
    <p class="w-[159px] h-[22px] text-base font-semibold absolute text-left text-black left-[31px] dark:text-neutral-50">
      AO Team Members
    </p>
  </div>

  <div class="flex justify-center items-center relative mt-10">

    <div class="flex-grow-0 flex-shrink-0 w-[109px] h-[119px] relative">
      <div class="w-[79px] h-[75px] absolute left-[15px] top-0">
        <div
          class="w-[75px] h-[75px] absolute left-[-1px] top-[-1px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] bg-[#eee]"
        ></div>
        <button on:click={SjchangeImage}>
        <img
        src={Aosj}
        alt="세진형님 사진"
          class="w-[71px] h-[71px] absolute left-[1.44px] top-[1.44px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover 
           {isclick ? 'animate-bounce' : ' '} " 
          style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
        />
      </button>
      </div>
      <div class="flex flex-col justify-center items-center absolute left-0 top-[87px] gap-px">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-xs font-bold text-center text-black dark:text-neutral-50">
          박세진
        </p>
        <p
          class="flex-grow-0 flex-shrink-0 w-[109px] text-[9px] font-medium text-center text-[#8a8a8a] dark:text-neutral-200"
        >
          (전) AO 스터디 회장
        </p>
      </div>
    </div>

    <div class="flex-grow-0 flex-shrink-0 w-[109px] h-[119px] relative">
      <div class="w-[79px] h-[75px] absolute left-[15px] top-0">
        <div
          class="w-[75px] h-[75px] absolute left-[-1px] top-[-1px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] bg-[#eee]"
        ></div>
        <button on:click={JhchangeImage}>
        <img
        src={Aojh}
        alt="제희형님 사진"
          class="w-[71px] h-[71px] absolute left-[1.44px] top-[1.44px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover"
          style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
        />
      </button>
      </div>
      <div class="flex flex-col justify-center items-center absolute left-0 top-[87px] gap-px">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-xs font-bold text-center text-black dark:text-neutral-50">
          천제희
        </p>
        <p
          class="flex-grow-0 flex-shrink-0 w-[109px] text-[9px] font-medium text-center text-[#8a8a8a] dark:text-neutral-200"
        >
          AO 스터디 회장 오른팔
        </p>
      </div>
    </div>
    <div class="flex-grow-0 flex-shrink-0 w-[109px] h-[119px] relative">
      <div class="w-[79px] h-[75px] absolute left-[15px] top-0">
        <div
          class="w-[75px] h-[75px] absolute left-[-1px] top-[-1px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] bg-[#eee]"
        ></div>
        <button on:click={JcChangeImg}>
        <img
        src={AoJc}
        alt="종찬형님 사진"
          class="w-[71px] h-[71px] absolute left-[1.44px] top-[1.44px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover"
          style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
        />
      </button>
      </div>
      <div class="flex flex-col justify-center items-center absolute left-0 top-[87px] gap-px">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-xs font-bold text-center text-black dark:text-neutral-50">
          배종찬
        </p>
        <p
          class="flex-grow-0 flex-shrink-0 w-[109px] text-[9px] font-medium text-center text-[#8a8a8a] dark:text-neutral-200"
        >
          AO 스터디 회장
        </p>
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center relative  mt-5">
    <div class="flex-grow-0 flex-shrink-0 w-[109px] h-[119px] relative">
      <div class="w-[79px] h-[75px] absolute left-[15px] top-0">
        <div
          class="w-[75px] h-[75px] absolute left-[-1px] top-[-1px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] bg-[#eee]"
        ></div>
        <button on:click={CechangeImage}>
        <img
        src={Aoce}
        alt="초은 사진"
          class="w-[71px] h-[71px] absolute left-[1.44px] top-[1.44px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover"
          style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
        />
      </button>
      </div>
      <div class="flex flex-col justify-center items-center absolute left-0 top-[87px] gap-px">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-xs font-bold text-center text-black dark:text-neutral-50">
          신초은
        </p>
        <p
          class="flex-grow-0 flex-shrink-0 w-[109px] text-[9px] font-medium text-center text-[#8a8a8a] dark:text-neutral-200"
        >
          부원1
        </p>
      </div>
    </div>
    <div class="flex-grow-0 flex-shrink-0 w-[109px] h-[119px] relative">
      <div class="w-[79px] h-[75px] absolute left-[15px] top-0">
        <div
          class="w-[75px] h-[75px] absolute left-[-1px] top-[-1px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] bg-[#eee]"
        ></div>
        <button on:click={YnchangeImage}>
        <img
        src={Aoyn}
        alt="윤아 사진"
          class="w-[71px] h-[71px] absolute left-[1.44px] top-[1.44px] rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[100px] rounded-br-[100px] object-cover"
          style="box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.2);"
        />
      </button>
      </div>
      <div class="flex flex-col justify-center items-center absolute left-0 top-[87px] gap-px">
        <p class="flex-grow-0 flex-shrink-0 w-[109px] text-xs font-bold text-center text-black dark:text-neutral-50">
          최윤아
        </p>
        <p
          class="flex-grow-0 flex-shrink-0 w-[109px] text-[9px] font-medium text-center text-[#8a8a8a] dark:text-neutral-200"
        >
          부원2
        </p>
      </div>
    </div>
  </div>

  <p class="w-[159px] h-[22px] text-base font-semibold text-left text-black mt-[50px] ml-[31px] dark:text-neutral-50">AO Web Developers</p>

  <div class="w-64 h-[106px] relative ml-[60px] mt-[29px]">
    <div class="w-64 h-[25px] absolute left-0 top-0">
      <p
        class="w-[102px] h-[22px] absolute left-0 top-0 text-[13px] font-medium text-left text-black dark:text-neutral-50"
      >
        Mentor &#x26; infra.
      </p>
      <p
        class="w-[135px] h-[22px] absolute left-[159px] top-[3px] text-[10px] font-light text-left text-black dark:text-neutral-200"
      >
        천제희 Cheon Jehee
      </p>
    </div>
    <div class="w-64 h-[35px] absolute left-0 top-7">
      <p class="w-[81px] h-[22px] absolute left-0 top-0 text-[13px] font-medium text-left text-black dark:text-neutral-50">
        Frontend.
      </p>
      <p
        class="w-[135px] h-[22px] absolute left-[159px] top-[3px] text-[10px] font-light text-left text-black"
      >
        <span class="w-[135px] h-[22px] text-[10px] font-light text-left text-black dark:text-neutral-200"
          >박기현 Park Kihyun</span
        ><br /><span class="w-[135px] h-[22px] text-[10px] font-light text-left text-black dark:text-neutral-200"
          >유용석 Yoo Yongseok</span
        >
      </p>
    </div>
    <div class="w-64 h-9 absolute left-0 top-[70px]">
      <p class="w-[81px] h-[22px] absolute left-0 top-0 text-[13px] font-medium text-left text-black dark:text-neutral-50">
        Backend.
      </p>
      <p
        class="w-[135px] h-[22px] absolute left-[159px] top-[3px] text-[10px] font-light text-left text-black"
      >
        <span class="w-[135px] h-[22px] text-[10px] font-light text-left text-black dark:text-neutral-200"
          >송정민 Song Jeongmin</span
        ><br /><span class="w-[135px] h-[22px] text-[10px] font-light text-left text-black dark:text-neutral-200"
          >정익재 Jeong Ikjae</span
        >
      </p>
    </div>
  </div>