<!-- SupportForm.svelte -->

<script>
  import ApplyButton from "./applyButton.svelte";

  let studentId = "";
  let name = "";
  let phoneNumber = "";
  let message = "";

  function handleSubmit() {
    // 여기에서 폼 데이터를 사용하여 필요한 작업 수행
    console.log("학번:", studentId);
    console.log("이름:", name);
    console.log("전화번호:", phoneNumber);
    console.log("한 마디:", message);

    // 폼 제출 후 초기화 또는 다른 작업을 수행할 수 있음
    resetForm();
  }

  function resetForm() {
    studentId = "";
    name = "";
    phoneNumber = "";
    message = "";
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <!-- 학번 입력 -->
  <label
    class="w-[32px] text-base font-medium text-left text-[#ccc]"
    for="studentId">학번</label
  >
  <div
    class="mb-3 flex justify-start items-center w-[339px] relative overflow-hidden gap-2.5 px-3.5 py-3 rounded-lg bg-[#0d0d0d]"
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
    class="mb-3 flex justify-start items-center w-[339px] relative overflow-hidden gap-2.5 px-3.5 py-3 rounded-lg bg-[#0d0d0d]"
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
    class="mb-3 flex justify-start items-center w-[339px] relative overflow-hidden gap-2.5 px-3.5 py-3 rounded-lg bg-[#0d0d0d]"
  >
    <input
      type="tel"
      id="phoneNumber"
      bind:value={phoneNumber}
      class="flex-grow-0 flex-shrink-0 text-base text-left text-[#7f7f7f] bg-transparent border-none focus:outline-none"
      placeholder="전화번호를 입력해주세요."
    />
  </div>

  <label
    class="w-[127px] text-base font-medium text-left text-[#ccc]"
    for="message">한 마디 남기기</label
  >
  <div
    class="flex justify-start items-start w-[339px] h-24 relative overflow-hidden gap-2.5 px-3.5 py-3 rounded-lg bg-[#0d0d0d]"
  >
    <textarea
      id="message"
      bind:value={message}
      class="flex-grow-0 flex-shrink-0 text-base text-left text-[#7f7f7f] bg-transparent border-none focus:outline-none resize-none"
      placeholder="자유롭게 한 마디를 남겨주세요."
    ></textarea>
  </div>

  <!-- "지원하기" 버튼 -->
  <ApplyButton on:apply={handleSubmit} />
</form>
