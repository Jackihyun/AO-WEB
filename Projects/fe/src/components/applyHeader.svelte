<script>
  import "../App.css";
  import { Link } from "svelte-routing";
</script>

<div
  class="w-[375px] h-[60px] relative overflow-hidden bg-black border-t-0 border-r-0 border-b border-l-0 border-[#191919]"
>
  <p class="font-['Paytone_One'] absolute left-[0px] top-[9px] text-3xl">
    <Link to="mainPage">
      <span class="text-[#f2f2f2]">Fire</span>
      <span class="text-[#e45454]">A<span class="text-[#8672f3]">O</span></span>
    </Link>
  </p>
</div>
