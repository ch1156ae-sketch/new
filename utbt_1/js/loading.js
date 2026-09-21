              "use strict";

            const loadingBar = document.querySelector(".loading");
            const loadingFill = document.querySelector(".loading__fill");
            const LOADING_DURATION = 3000;
            // 로딩 완료 후 이동할 파일 또는 URL입니다.
            const NEXT_PAGE_URL = "splash.html";
            let startTime = null;

            function updateLoading(currentTime) {
                if (startTime === null) startTime = currentTime;

                const elapsedTime = currentTime - startTime;
                const progress = Math.min(
                    (elapsedTime / LOADING_DURATION) * 100,
                    100,
                );

                loadingFill.style.width = `${progress}%`;
                loadingBar.setAttribute(
                    "aria-valuenow",
                    String(Math.round(progress)),
                );

                if (progress < 100) {
                    window.requestAnimationFrame(updateLoading);
                } else if (NEXT_PAGE_URL) {
                    window.location.href = NEXT_PAGE_URL;
                }
            }

            window.requestAnimationFrame(updateLoading);