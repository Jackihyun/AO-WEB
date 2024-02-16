<script>
  import ApplyHeader from "../components/applyHeader.svelte";
  import ApplyMain from "../components/applyMain.svelte";
  import ApplyForm from "../components/applyForm.svelte";
  import { onMount } from "svelte";
  import CompleteModal from "../components/completeModal.svelte";

  // 모달 상태를 관리하는 변수
  let showModal = false;

  // "지원하기 버튼을 눌렀을 때 모달을 열기"
  function openModal() {
    showModal = true;
  }

  // 모달 닫기
  function closeModal() {
    showModal = false;
  }

  // 페이지가 로드될 때 실행되는 함수
  onMount(() => {});
</script>

<div class="w-full h-full relative overflow-hidden pr-6 pl-6 bg-black mx-auto">
  <div class="mt-[44px] mb-[52px]">
    <ApplyHeader />
  </div>
  <div class="mb-[42px]">
    <ApplyMain />
  </div>
  <div class="mb-[34px]">
    <ApplyForm />
  </div>
  <CompleteModal />
</div>
