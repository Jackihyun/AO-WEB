<!-- SupportForm.svelte -->

<script>
  import { createEventDispatcher } from "svelte";
  import { showModal } from "../store";

  const dispatch = createEventDispatcher();

  let studentId = "";
  let name = "";
  let phoneNumber = "";
  let message = "";

  function handleSubmit() {
    if (
      studentId.trim() === "" ||
      name.trim() === "" ||
      phoneNumber.trim() === "" ||
      message.trim() === ""
    ) {
      alert("모든 항목을 작성해주세요!");
      return false;
    }
    // 여기에서 폼 데이터를 사용하여 필요한 작업 수행
    console.log("학번:", studentId);
    console.log("이름:", name);
    console.log("전화번호:", phoneNumber);
    console.log("한 마디:", message);

    // 폼 제출 후 초기화 또는 다른 작업을 수행할 수 있음
    resetForm();

    showModal.set(true);

    return false;
  }

  function resetForm() {
    studentId = "";
    name = "";
    phoneNumber = "";
    message = "";
  }

  function handleClick() {
    dispatch("click");
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <!-- 학번 입력 -->
  <label
    class="w-[32px] text-base font-medium text-left text-[#ccc]"
    for="studentId">학번</label
  >
  <div
    class="mt-[8px] mb-[20px] flex justify-start items-center w-[339px] h-[47px] relative overflow-hidden gap-2.5 px-3.5 py-3 rounded-lg bg-[#0d0d0d]"
  >
    <input
      type="text"
      id="studentId"
      bind:value={studentId}
      class="flex-grow-0 flex-shrink-0 text-base text-left text-[#7f7f7f] bg-transparent border-none focus:outline-none"
      placeholder="학번을 입력해주세요."
    />
  </div>

  <label class="w-[32px] text-base font-medium text-left text-[#ccc]" for="name"
    >이름</label
  >
  <div
    class="mt-[8px] mb-[20px] flex justify-start items-center w-[339px] h-[47px] [relative overflow-hidden gap-2.5 px-3.5 py-3 rounded-lg bg-[#0d0d0d]"
  >
    <input
      type="text"
      id="name"
      bind:value={name}
      class="flex-grow-0 flex-shrink-0 text-base text-left text-[#7f7f7f] bg-transparent border-none focus:outline-none"
      placeholder="이름을 입력해주세요."
    />
  </div>

  <label
    class="w-[64px] text-base font-medium text-left text-[#ccc]"
    for="phoneNumber">전화번호</label
  >
  <div
    class="mt-[8px] mb-[20px] flex justify-start items-center w-[339px] h-[47px] relative overflow-hidden gap-2.5 px-3.5 py-3 rounded-lg bg-[#0d0d0d]"
  >
    <input
      type="tel"
      id="phoneNumber"
      bind:value={phoneNumber}
      class="w-full flex-grow-0 flex-shrink-0 text-base text-left text-[#7f7f7f] bg-transparent border-none focus:outline-none"
      placeholder="전화번호를 입력해주세요."
    />
  </div>

  <label
    class="w-[127px] text-base font-medium text-left text-[#ccc]"
    for="message">한 마디 남기기</label
  >
  <div
    class="mt-[8px] mb-[63px] flex justify-start items-start w-[339px] h-24 relative overflow-hidden gap-2.5 px-3.5 py-3 rounded-lg bg-[#0d0d0d]"
  >
    <textarea
      id="message"
      bind:value={message}
      class="w-full flex-grow-0 flex-shrink-0 text-base text-left text-[#7f7f7f] bg-transparent border-none focus:outline-none resize-none"
      placeholder="자유롭게 한 마디를 남겨주세요."
    ></textarea>
  </div>

  <!-- "지원하기" 버튼 -->
  <button
    type="submit"
    on:click={handleClick}
    class="flex justify-center items-center relative overflow-hidden gap-2.5 px-[126px] py-3.5 rounded-lg bg-[#333] flex-grow-0 flex-shrink-0 text-lg font-medium text-center text-neutral-200"
    >지원하기</button
  >
</form>
