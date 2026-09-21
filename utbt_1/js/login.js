            "use strict";

            const loginForm = document.querySelector(".login-form");
            const userIdInput = document.querySelector("#user-id");
            const passwordInput = document.querySelector("#user-password");
            const autoLoginCheckbox = document.querySelector("#auto-login");
            const saveIdCheckbox = document.querySelector("#save-id");
            const loginButton = document.querySelector(".login-button");
            const formMessage = document.querySelector(".form-message");
            const LOGIN_SUCCESS_URL = "main.html";
            const SAVED_ID_KEY = "utbt-saved-id";

        function resetLoginForm() {
            loginForm.reset();
            userIdInput.value = "";
            passwordInput.value = "";
            autoLoginCheckbox.checked = false;
            saveIdCheckbox.checked = false;
            formMessage.textContent = "";
            userIdInput.removeAttribute("aria-invalid");
            passwordInput.removeAttribute("aria-invalid");
            localStorage.removeItem(SAVED_ID_KEY);
        }

            function showValidationMessage(message, target) {
                formMessage.textContent = message;
                target.setAttribute("aria-invalid", "true");
                target.focus();
                loginButton.classList.remove("is-shaking");
                void loginButton.offsetWidth;
                loginButton.classList.add("is-shaking");
            }

            function clearValidationState(event) {
                event.currentTarget.removeAttribute("aria-invalid");
                formMessage.textContent = "";
            }

            loginForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const userId = userIdInput.value.trim();
                const password = passwordInput.value.trim();

                if (!userId) return showValidationMessage("아이디 또는 이메일을 입력해주세요.", userIdInput);
                if (!password) return showValidationMessage("비밀번호를 입력해주세요.", passwordInput);

                if (saveIdCheckbox.checked) localStorage.setItem(SAVED_ID_KEY, userId);
                else localStorage.removeItem(SAVED_ID_KEY);
                window.location.href = LOGIN_SUCCESS_URL;
            });

            userIdInput.addEventListener("input", clearValidationState);
            passwordInput.addEventListener("input", clearValidationState);
            loginButton.addEventListener("animationend", () => loginButton.classList.remove("is-shaking"));
        window.addEventListener("pageshow", resetLoginForm);