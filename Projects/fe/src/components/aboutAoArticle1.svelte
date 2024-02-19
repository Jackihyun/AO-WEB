<script>
  import Image11 from "../images/image 11.png"
  import Image12 from "../images/image 12.png"
  import Image13 from "../images/image 13.png"
  import emblaCarouselSvelte from 'embla-carousel-svelte' 
</script>

<p class="absolute text-lg font-semibold  text-black w-screen ml-8">깃허브로 관리되는 체계적인 스터디!</p>
<br>
<br>
<div class="embla" use:emblaCarouselSvelte>
  
  <div class="embla_container">
<div class="flex justify-start items-center relative gap-[19px] w-screen ml-8 overflow-y-auto">
  <div class="embla_slide">
    <img
        src="{Image11}"
        alt="깃허브1"
      class="flex-grow-0 flex-shrink-0 w-[218.83px] h-[198px] rounded-[10px] object-cover"
      style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.15);"
    /></div>
    <div class="embla_slide">
    <img
    src="{Image12}"
    alt="깃허브2"
      class="flex-grow-0 flex-shrink-0 w-[322.58px] h-[198px] rounded-[10px] object-cover"
      style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.15);"
    /></div>
    <div class="embla_slide">
    <img
    src="{Image13}"
    alt="깃허브3"
      class="flex-grow-0 flex-shrink-0 w-[262.94px] h-[198px] rounded-[10px] object-cover"
      style="box-shadow: 0px 0px 15px 0.20000000298023224px rgba(0,0,0,0.15);"
    /></div>
  </div>
</div>
</div>