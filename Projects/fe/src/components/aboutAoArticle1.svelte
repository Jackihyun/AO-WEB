<script>
    import Image1 from "../images/1.png"
    import Image2 from "../images/2.png"
    import Image3 from "../images/3.png"
    import emblaCarouselSvelte from 'embla-carousel-svelte'
    import Autoplay from 'embla-carousel-autoplay'

    let options = {
        loop: false
    }
    function onInit(event) {
    emblaApi = event.detail
    console.log(emblaApi.slideNodes()) // Access API
  }

    let plugins = [Autoplay()]
</script>

<p class="absolute text-lg font-semibold  text-black w-screen ml-[44px]">깃허브로 관리되는 체계적인 스터디!</p>
<br>
<br>
<div
    class="embla overflow-hidden"
    use:emblaCarouselSvelte="{{ options, plugins }}"
    on:emblaInit="{onInit}">
    <div
        class="embla_container flex gap-[5px] whitespace-nowrap ml-[44px]">
        <div class="embla_slide flex-grow-0 flex-shrink-0 w-[218.83px] h-[198px] min-w-0 ">
            <img
                src="{Image1}"
                alt="깃허브1"
                class="object-cover"
                /></div>

        <div class="embla_slide flex-grow-0 flex-shrink-0 w-[322.58px]  h-[198px] min-w-0 ">
            <img
                src="{Image2}"
                alt="깃허브2"
                class="object-cover"
                /></div>

        <div class="embla_slide flex-grow-0 flex-shrink-0 w-[262.94px] h-[198px] min-w-0 mr-[44px]">
            <img
                src="{Image3}"
                alt="깃허브3"
                class="object-cover"
                /></div>

    </div>
</div>