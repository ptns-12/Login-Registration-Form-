const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"))
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));


pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        }else{
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

let loginForm = document.querySelector("#loginForm");
let usernameInput = document.querySelector("#tk");
let passwordInput = document.querySelector("#mk");

let signupForm = document.querySelector('#signupForm');
let tk = document.getElementById('tk');
let email = document.getElementById('email');
let mk = document.getElementById('mk');
let r_mk = document.getElementById('r-mk'); 


loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let username = usernameInput.value;
    let password = passwordInput.value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Vui lòng nhập tên đăng nhập và mật khẩu");
        return;
    }

    alert("Đăng nhập thành công!");
});

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let tkValue = signupForm.querySelector("#tk").value.trim();
    let emailValue = signupForm.querySelector("#email").value.trim();
    let mkValue = signupForm.querySelector("#mk").value.trim();
    let rmkValue = signupForm.querySelector("#r-mk").value.trim();

    if (!tkValue || !emailValue || !mkValue || !rmkValue) {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }

    if (tkValue.length < 4) {
        alert('Tên đăng nhập phải có ít nhất 4 ký tự');
        return;
    }

    let emailsyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailsyntax.test(emailValue)) {
        alert('Email không hợp lệ');
        return;
    }

    if (mkValue.length < 8) {
        alert('Mật khẩu phải có ít nhất 8 ký tự');
        return;
    }

    if (mkValue !== rmkValue) {
        alert('Mật khẩu nhập lại không trùng khớp');
        return;
    }
        alert('Đăng ký thành công! Hãy quay lại trang đăng nhập!');
});
