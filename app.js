
const msg = document.getElementById("message");
const btn = document.getElementById("changeBtn");

const messages = [
  "今日もがんばりましょう！💪",
  "GitHub Pages で公開できました 🎉",
  "小さく作って、少しずつ良くするのがコツです。",
  "日本語の勉強、応援しています！📚"
];

btn.addEventListener("click", () => {
  const i = Math.floor(Math.random() * messages.length);
  msg.textContent = messages[i];
});
