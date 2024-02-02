<script>
  import { createEventDispatcher } from "svelte";

  // 부모 컴포넌트로 이벤트를 보내기 위한 디스패쳐 생성
  const dispatch = createEventDispatcher();

  // 버튼 클릭시에 apply 이벤트 디스패치
  function handleClick() {
    dispatch("apply");
  }
</script>

<div
  class="flex justify-center items-center relative overflow-hidden gap-2.5 px-[136px] py-3.5 rounded-lg bg-[#333]"
>
  <button
    onclick={handleClick}
    class="flex-grow-0 flex-shrink-0 text-lg font-medium text-center text-neutral-200"
  >
    지원하기
  </button>
</div>
