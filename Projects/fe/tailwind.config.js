/** @type {import('tailwindcss').Config} */
export default {
  // 테일윈드의 class이름이 포함된 파일에 대한 경로를 구성하는 부분을 추가합니다.
  // src 경로 내부에 js, html, svelte를 리턴하는 파일들을 모두 작성
  content: ["./src/**/*.{html, js, svelte}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

