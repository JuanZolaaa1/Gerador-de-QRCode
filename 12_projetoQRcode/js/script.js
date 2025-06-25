const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

//evento
function generetionQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerHTML = "Gerando codigo...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerHTML = "Codigo criado";
  });
};

qrCodeBtn.addEventListener("click", () => {
  generetionQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") generetionQrCode();
});

qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerHTML = "Gerar QR Code";
  }
});
