         "use strict";

            const slides = Array.from(document.querySelectorAll(".slide"));
            const skipButtons = document.querySelectorAll(".skip-button");
            const dotButtons = document.querySelectorAll(".dot");
            const splash = document.querySelector(".splash");
            const AUTO_PLAY_DELAY = 3000;
            const SWIPE_DISTANCE = 45;
            let activeIndex = 0;
            let autoPlayTimer = null;
            let touchStartX = 0;

            function showSlide(nextIndex) {
                if (nextIndex < 0 || nextIndex >= slides.length || nextIndex === activeIndex) return;

                const currentSlide = slides[activeIndex];
                const nextSlide = slides[nextIndex];
                currentSlide.classList.add("is-leaving");
                currentSlide.classList.remove("is-active");
                currentSlide.setAttribute("aria-hidden", "true");
                nextSlide.classList.remove("is-leaving");
                nextSlide.classList.add("is-active");
                nextSlide.removeAttribute("aria-hidden");
                window.setTimeout(() => currentSlide.classList.remove("is-leaving"), 560);
                activeIndex = nextIndex;
                restartAutoPlay();
            }

            function restartAutoPlay() {
                window.clearTimeout(autoPlayTimer);
                if (activeIndex >= slides.length - 1) return;
                autoPlayTimer = window.setTimeout(() => showSlide(activeIndex + 1), AUTO_PLAY_DELAY);
            }

            skipButtons.forEach((button) => button.addEventListener("click", () => showSlide(Math.min(activeIndex + 1, slides.length - 1))));
            dotButtons.forEach((button) => button.addEventListener("click", () => showSlide(Number(button.dataset.index))));

            splash.addEventListener("touchstart", (event) => {
                touchStartX = event.changedTouches[0].clientX;
            }, { passive: true });

            splash.addEventListener("touchend", (event) => {
                const distance = event.changedTouches[0].clientX - touchStartX;
                if (Math.abs(distance) < SWIPE_DISTANCE) return;
                showSlide(distance < 0 ? Math.min(activeIndex + 1, slides.length - 1) : Math.max(activeIndex - 1, 0));
            }, { passive: true });

            document.addEventListener("visibilitychange", () => {
                if (document.hidden) window.clearTimeout(autoPlayTimer);
                else restartAutoPlay();
            });

            restartAutoPlay();