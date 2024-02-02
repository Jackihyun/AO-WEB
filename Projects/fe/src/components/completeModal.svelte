<!-- CompleteModal.svelte -->

<script>
  export let showModal;
  export let closeModal;
</script>

{#if showModal}
  <div class="fixed inset-0 flex items-center justify-center">
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <div class="z-10 bg-white p-6 rounded-xl">
      <!-- 모달 컨텐츠 -->
      <div
        class="flex flex-col justify-start items-start w-[300px] gap-2.5 p-6 rounded-xl bg-[#191919] border border-[#1e1e1e]"
      >
        <!-- 모달 내용 -->
        <div
          class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[18px]"
        >
          <div
            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3"
          >
            <p
              class="flex-grow-0 flex-shrink-0 text-lg font-medium text-center text-[#f2f2f2]"
            >
              성공적으로 지원되었습니다!
            </p>
          </div>
          <div
            class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[252px] gap-2.5"
          >
            <!-- "확인" 버튼을 클릭하면 closeModal 함수를 호출하여 모달을 닫음 -->
            <button
              type="button"
              class="flex justify-center items-center flex-grow relative overflow-hidden gap-2.5 px-5 py-3.5 rounded-lg bg-[#e45454]"
              on:click={closeModal}
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white cursor-pointer"
              >
                확인
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
