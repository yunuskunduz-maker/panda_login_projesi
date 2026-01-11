let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

// Gözleri normale çeviren fonksiyon
let normalEyeStyle = () => {
    eyeL.style.cssText = "left: 12px; top: 10px;";
    eyeR.style.cssText = "left: 12px; top: 10px;";
};

// Elleri normale (formun kenarına) çeviren fonksiyon
let normalHandStyle = () => {
    handL.style.cssText = "height: 50px; top: 165px; left: 90px; transform: rotate(0deg);";
    handR.style.cssText = "height: 50px; top: 165px; right: 90px; transform: rotate(0deg);";
};

// Kullanıcı adı alanına tıklandığında: Panda aşağı bakar
usernameRef.addEventListener("focus", () => {
    eyeL.style.cssText = "left: 15px; top: 20px;";
    eyeR.style.cssText = "left: 15px; top: 20px;";
    normalHandStyle();
});

// Şifre alanına tıklandığında: Panda elleriyle gözlerini kapatır!
passwordRef.addEventListener("focus", () => {
    handL.style.cssText = "height: 90px; top: 100px; left: 125px; transform: rotate(-155deg);";
    handR.style.cssText = "height: 90px; top: 100px; right: 125px; transform: rotate(155deg);";
    normalEyeStyle();
});

// Başka bir yere tıklandığında: Her şey eski haline döner
document.addEventListener("click", (e) => {
    let clickedElem = e.target;
    if (clickedElem != usernameRef && clickedElem != passwordRef) {
        normalEyeStyle();
        normalHandStyle();
    }
});