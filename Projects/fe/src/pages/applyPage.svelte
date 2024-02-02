<script>
  import ApplyHeader from "../components/applyHeader.svelte";
  import ApplyMain from "../components/applyMain.svelte";
  import ApplyButton from "../components/applyButton.svelte";
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

<div class="w-[375px] h-[801px] relative overflow-hidden pr-6 pl-6 bg-black">
  <ApplyHeader />
  <br />
  <ApplyMain />
  <br />
  <CompleteModal {showModal} {closeModal} />
</div>
