<script>
    import Header from "../components/header.svelte";
    import AboutAoIntro1 from "../components/aboutAoIntro1.svelte";
    import AboutAoIntro2 from "../components/aboutAoIntro2.svelte";
    import AboutAoIntro3 from "../components/aboutAoIntro3.svelte";
    import AboutAoArticle1 from "../components/aboutAoArticle1.svelte";
    import AboutAoActivity from "../components/aboutAoActivity.svelte";
    import NewApplyButton from "../components/newApplyButton.svelte";
  </script>
  
  <div class="bg-white relative overflow-hidden">
    <Header />
    <div class="mt-[89px]">
        <AboutAoIntro1 />
    </div>
    <svg    
  width="screen"
  height="screen"
  viewBox="0 -190 375 1472"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
  class="absolute inset-0 w-full h-full"
  
>
  <g filter="url(#filter0_d_3496_1015)">
    <path
      d="M0 30C0 13.4315 13.4315 0 30 0H345C361.569 0 375 13.4315 375 30V1472H0V30Z"
      fill="#E4E4E4"
    ></path>
  </g>
  <defs>
    <filter
      id="filter0_d_3496_1015"
      x="-4"
      y="0"
      width="383"
      height="1480"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      ></feColorMatrix>
      <feOffset dy="4"></feOffset>
      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
      <feComposite in2="hardAlpha" operator="out"></feComposite>
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      ></feColorMatrix>
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_3496_1015"
      ></feBlend>
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_3496_1015"
        result="shape"
      ></feBlend>
    </filter>
  </defs>
</svg>
    
    <div class="mt-[51px]">
        <AboutAoIntro2 />
    </div>
    <div class="mt-[43px]">
        <AboutAoIntro3 />
    </div>
    <div class="mt-[287px]">
        <AboutAoArticle1/>
    </div>
    <div class="mt-[51px] ">
        <AboutAoActivity/>
    </div>
    <div class="mt-[51px]">
        <NewApplyButton />
    </div>
    <div class="mt-[61px]"></div>
  </div>
  
  
  
  
  
  