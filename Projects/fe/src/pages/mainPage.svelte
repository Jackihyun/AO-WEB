<script>
  import Header from "../components/header.svelte";
  import Main from "../components/main.svelte";
  import Footer from "../components/footer.svelte";
</script>

<!-- <div class="w-[375px] h-[801px] relative  pr-6 pl-6 bg-black">
    <Header />
    <Main/>
    <Footer/>
</div> -->

<div class="bg-black vw-full vh-full relative overflow-hidden ">
  <div class="vh-[44px]"></div>
  <Header />
  <div class="mt-[50vh]">
    <Main />
  </div>
  <div class="mt-[30vh]">
    <Footer />
  </div>
</div>





