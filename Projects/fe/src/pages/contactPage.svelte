<script>
    import Header from "../components/header.svelte";
    import ContactIntro from "../components/contactIntro.svelte";
    import ContactMain from "../components/contactMain.svelte";
    import Footer from "../components/footer.svelte";
  </script>

<div class="bg-white relative overflow-hidden">
    <Header/>
    <div class="mt-[77px]">
        <ContactIntro/>
    </div>
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 375 467"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="inset-0 w-full h-full mt-[29px]"
        preserveAspectRatio="none">
        <g filter="url(#filter0_d_3496_513)">
            <path
                d="M0 90C0 73.4315 13.4315 60 30 60H345C361.569 60 375 73.4315 375 90V459H0V90Z"
                fill="#E4E4E4"></path>
        </g>
        <circle cx="187" cy="65" r="65" fill="#E4E4E4"></circle>
        <defs>
            <filter
                id="filter0_d_3496_513"
                x="-4"
                y="60"
                width="383"
                height="407"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3496_513"></feBlend>
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3496_513"
                    result="shape"></feBlend>
            </filter>
        </defs>
    </svg>
    <div class="flex-grow">
        <ContactMain/>
    </div>
    <div>
        <Footer/>
    </div>
</div>