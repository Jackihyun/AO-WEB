<!-- SupportForm.svelte -->

<script>
  import { createEventDispatcher } from "svelte";
  import { showModal } from "../store";

  const dispatch = createEventDispatcher();

  let stuIdErrorMessage = "";
  let nameErrorMessage = "";
  let phoneErrorMessage = "";

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
      return false;
    }
    // 여기에서 폼 데이터를 사용하여 필요한 작업 수행
    console.log("학번:", studentId);
    console.log("이름:", name);
    console.log("전화번호:", phoneNumber);
    console.log("한 마디:", message);

    // 폼 제출 후 초기화 또는 다른 작업을 수행할 수 있음
    resetForm();

    return false;
  }

  function resetForm() {
    studentId = "";
    name = "";
    phoneNumber = "";
    message = "";
  }

  function handleClick() {
    console.log("");
    fetch("/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: studentId,
        name: name,
        phoneNum: phoneNumber,
        aWord: message,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 400) {
          return res.json(); //body에 있는 것을 js 객체로 바꿔서 반환. 반환값은 프로미스객체라 다시 받을수 있음.
        } else if (res.ok) {
          showModal.set(true);
        }
      })
      .then((json) => {
        if (json !== undefined && json !== null) {
          if (
            json.stuIdErrorMessage !== undefined &&
            json.stuIdErrorMessage !== null &&
            json.stuIdErrorMessage !== ""
          ) {
            stuIdErrorMessage = json.stuIdErrorMessage;
          }
          if (
            json.nameErrorMessage !== undefined &&
            json.nameErrorMessage !== null &&
            json.nameErrorMessage !== ""
          ) {
            nameErrorMessage = json.nameErrorMessage;
          }
          if (
            json.phoneNumErrorMessage !== undefined &&
            json.phoneNumErrorMessage !== null &&
            json.phoneNumErrorMessage !== ""
          ) {
            phoneErrorMessage = json.phoneNumErrorMessage;
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });

    dispatch("click");
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <!-- 학번 입력 -->
  <label
    class="w-[32px] text-base font-medium text-left text-[#000] dark:text-[#CCC]"
    for="studentId">학번</label
  >
  <div
    class="mt-[8px] mb-[20px] flex justify-start items-center w-[339px] h-[47px] relative overflow-hidden gap-2.5 px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0d0d0d]"
  >
    <input
      type="text"
      id="studentId"
      bind:value={studentId}
      class="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-500 dark:[#7f7f7f] bg-transparent border-none focus:outline-none"
      placeholder="학번을 입력해주세요."
    />
    <p class="text-red-400">{stuIdErrorMessage}</p>
  </div>

  <label
    class="w-[32px] text-base font-medium text-left text-[#000] dark:text-[#CCC]"
    for="name">이름</label
  >
  <div
    class="mt-[8px] mb-[20px] flex justify-start items-center w-[339px] h-[47px] [relative overflow-hidden gap-2.5 px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0D0D0D]"
  >
    <input
      type="text"
      id="name"
      bind:value={name}
      class="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-500 dark:[#7f7f7f] bg-transparent border-none focus:outline-none"
      placeholder="이름을 입력해주세요."
    />
    <p class="text-red-400">{nameErrorMessage}</p>
  </div>

  <label
    class="w-[64px] text-base font-medium text-left text-[#000] dark:text-[#CCC]"
    for="phoneNumber">전화번호</label
  >
  <div
    class="mt-[8px] mb-[20px] flex justify-start items-center w-[339px] h-[47px] relative overflow-hidden gap-2.5 px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0D0D0D]"
  >
    <input
      type="tel"
      id="phoneNumber"
      bind:value={phoneNumber}
      class="w-full flex-grow-0 flex-shrink-0 text-base text-left text-[#7f7f7f] dark:[#7f7f7f] bg-transparent border-none focus:outline-none"
      placeholder="전화번호를 입력해주세요."
    />
    <p class="text-red-400">{phoneErrorMessage}</p>
  </div>

  <label
    class="w-[127px] text-base font-medium text-left text-[#000] dark:text-[#CCC]"
    for="message">한 마디 남기기</label
  >
  <div
    class="mt-[8px] mb-[63px] flex justify-start items-start w-[339px] h-24 relative overflow-hidden gap-2.5 px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0D0D0D]"
  >
    <textarea
      id="message"
      bind:value={message}
      class="w-full flex-grow-0 flex-shrink-0 text-base text-left text-[#7f7f7f] dark:[#7f7f7f] bg-transparent border-none focus:outline-none resize-none"
      placeholder="자유롭게 한 마디를 남겨주세요."
    ></textarea>
  </div>

  <!-- "지원하기" 버튼 -->
  <button
    type="submit"
    on:click={handleClick}
    class="flex justify-center items-center relative overflow-hidden px-[126px] py-3.5 rounded-3xl bg-[#333] flex-grow-0 flex-shrink-0 text-lg font-medium text-center text-neutral-200"
    >지원하기</button
  >
</form>
