/* 외부 링크는 새 탭에서 열기 (YouTube, GitHub 등).
   문서 읽는 흐름이 끊기지 않도록, 같은 호스트가 아닌 모든 http/https 링크에 target=_blank 적용. */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach((a) => {
    if (a.host && a.host !== location.host && a.protocol.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });
});
