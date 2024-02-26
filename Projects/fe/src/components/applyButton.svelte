
<script>
  import { Link } from "svelte-routing";
</script>

<Link
  to="/apply"
  class="flex justify-center items-center w-[337px] mx-auto gap-2.5"
>
  <div
    class="active:bg-blue-700 active:scale-95 transition duration-100 ease-in-out flex flex-grow relative overflow-hidden gap-2.5 px-5 py-3.5 rounded-[50px] bg-[#191919]"
  >
    <p
      class="flex-grow-0 flex-shrink-0 text-base text-center text-[#f2f2f2] mx-auto"
    >
      <span
        class="font-['Paytone_One'] flex-grow-0 flex-shrink-0 text-base text-center text-[#f2f2f2]"
        >Fire AO
      </span>
      <span
        class="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#f2f2f2]"
        >지원하러 가기</span
      >
    </p>
  </div>
</Link>
