const modal = document.getElementById('form-modal');
const applicationForm = document.getElementById('application-form');
const applicationSuccess = document.getElementById('application-success');
const successName = document.getElementById('success-name');
const modalClose = document.getElementById('modal-close');
const successClose = document.getElementById('success-close');
const firstField = document.getElementById('applicant-name');

let lastFocusedElement = null;


// ================================
// 신청 모달 초기화
// ================================
function resetApplicationModal() {
    applicationForm.reset();

    applicationForm.hidden = false;
    applicationSuccess.hidden = true;

    successName.textContent = '';

    applicationForm
        .querySelectorAll('.invalid')
        .forEach((el) => {
            el.classList.remove('invalid');
        });

    applicationForm
        .querySelectorAll('.field-error')
        .forEach((el) => {
            el.textContent = '';
        });
}


// ================================
// 신청 모달 열기
// ================================
function openModal(e) {
    if (e) {
        e.preventDefault();
    }

    lastFocusedElement = document.activeElement;

    resetApplicationModal();

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');

    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        firstField.focus();
    }, 80);
}


// ================================
// 신청 모달 닫기
// ================================
function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');

    document.body.style.overflow = '';

    if (
        lastFocusedElement &&
        typeof lastFocusedElement.focus === 'function'
    ) {
        lastFocusedElement.focus();
    }
}


// ================================
// 신청 관련 버튼 클릭
// ================================
document
    .querySelectorAll('[data-application-modal]')
    .forEach((button) => {
        button.addEventListener('click', openModal);
    });


// X 버튼
modalClose.addEventListener('click', closeModal);


// 신청 완료 후 닫기 버튼
successClose.addEventListener('click', closeModal);


// 모달 바깥 영역 클릭
document
    .getElementById('modal-backdrop')
    .addEventListener('click', closeModal);


// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (
        e.key === 'Escape' &&
        modal.classList.contains('open')
    ) {
        closeModal();
    }
});


// ================================
// 연락처 자동 하이픈 처리
// ================================
const phoneInput =
    document.getElementById('applicant-phone');

phoneInput.addEventListener('input', () => {

    const digits = phoneInput.value
        .replace(/\D/g, '')
        .slice(0, 11);

    if (digits.length <= 3) {

        phoneInput.value = digits;

    } else if (digits.length <= 7) {

        phoneInput.value =
            `${digits.slice(0, 3)}-${digits.slice(3)}`;

    } else {

        phoneInput.value =
            `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
    }
});


// ================================
// 입력 오류 표시
// ================================
function setFieldError(input, message) {

    const error = applicationForm.querySelector(
        `[data-error-for="${input.id}"]`
    );

    input.classList.toggle(
        'invalid',
        Boolean(message)
    );

    if (error) {
        error.textContent = message;
    }
}


// ================================
// 신청 폼 제출
// ================================
applicationForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const nameInput =
        document.getElementById('applicant-name');

    const emailInput =
        document.getElementById('applicant-email');

    const phoneDigits =
        phoneInput.value.replace(/\D/g, '');

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;


    // 이름 검사
    if (!nameInput.value.trim()) {

        setFieldError(
            nameInput,
            '이름을 입력해주세요.'
        );

        valid = false;

    } else {

        setFieldError(
            nameInput,
            ''
        );
    }


    // 연락처 검사
    if (
        phoneDigits.length < 10 ||
        phoneDigits.length > 11
    ) {

        setFieldError(
            phoneInput,
            '연락처를 정확하게 입력해주세요.'
        );

        valid = false;

    } else {

        setFieldError(
            phoneInput,
            ''
        );
    }


    // 이메일 검사
    if (
        !emailPattern.test(
            emailInput.value.trim()
        )
    ) {

        setFieldError(
            emailInput,
            '이메일 주소를 정확하게 입력해주세요.'
        );

        valid = false;

    } else {

        setFieldError(
            emailInput,
            ''
        );
    }


    // 오류가 있을 경우
    if (!valid) {

        applicationForm
            .querySelector('.invalid')
            ?.focus();

        return;
    }


    // ================================
    // 신청 완료 화면
    // ================================

    successName.textContent =
        nameInput.value.trim();

    applicationForm.hidden = true;
    applicationSuccess.hidden = false;

    successClose.focus();
});


// ================================
// 네비게이션 / 스크롤 UI
// ================================
const nav =
    document.getElementById('nav');

const progressBar =
    document.getElementById('scroll-progress');

const topButton =
    document.getElementById('top-button');


function updateScrollUI() {

    // 스크롤하면 네비게이션 효과
    nav.classList.toggle(
        'scrolled',
        window.scrollY > 20
    );


    // 전체 스크롤 진행률
    const scrollable =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        scrollable > 0
            ? (window.scrollY / scrollable) * 100
            : 0;

    progressBar.style.width =
        `${Math.min(
            100,
            Math.max(0, progress)
        )}%`;


    // 위로가기 버튼 표시
    topButton.classList.toggle(
        'show',
        window.scrollY > 420
    );
}


// 스크롤 이벤트
window.addEventListener(
    'scroll',
    updateScrollUI,
    {
        passive: true
    }
);


// 화면 크기 변경
window.addEventListener(
    'resize',
    updateScrollUI
);


// 처음 실행
updateScrollUI();


// ================================
// 위로가기 버튼
// ================================
topButton.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});


// ================================
// 스크롤 등장 애니메이션
// 위 / 아래 스크롤 모두 적용
// ================================
const reveals =
    document.querySelectorAll('.reveal');


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add('visible');

                } else {

                    const rect =
                        entry.target
                            .getBoundingClientRect();

                    const farOutsideViewport =
                        rect.bottom < -120 ||
                        rect.top >
                            window.innerHeight + 120;

                    if (farOutsideViewport) {

                        entry.target
                            .classList
                            .remove('visible');

                    }
                }
            });

        },
        {
            threshold: 0.10,
            rootMargin:
                '80px 0px 80px 0px'
        }
    );


reveals.forEach((el) => {
    observer.observe(el);
});


// ================================
// 현재 섹션 네비게이션 활성화
// ================================
const navSectionLinks = [
    ...document.querySelectorAll(
        '.nav-links a[href^="#"]'
    )
];


const sectionTargets =
    navSectionLinks

        .map((link) => {

            return document.querySelector(
                link.getAttribute('href')
            );

        })

        .filter(Boolean);


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            const visibleEntries =
                entries

                    .filter(
                        (entry) =>
                            entry.isIntersecting
                    )

                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    );


            if (!visibleEntries.length) {
                return;
            }


            const currentId =
                `#${visibleEntries[0].target.id}`;


            navSectionLinks.forEach(
                (link) => {

                    link.classList.toggle(
                        'active',

                        link.getAttribute('href') ===
                            currentId
                    );

                }
            );

        },
        {
            rootMargin:
                '-30% 0px -55% 0px',

            threshold:
                [0, 0.15, 0.35, 0.6]
        }
    );


sectionTargets.forEach(
    (section) => {

        sectionObserver.observe(section);

    }
);


// ================================
// Hero 첫 진입 애니메이션
// ================================

// Hero Badge
setTimeout(() => {

    document
        .querySelector('.hero-badge')
        ?.classList
        .add('visible');

}, 100);


// Hero 왼쪽 콘텐츠
document
    .querySelectorAll('.hero-left > *')
    .forEach((el, i) => {

        el.classList.add('reveal');

        setTimeout(() => {

            el.classList.add('visible');

        }, 200 + i * 120);

    });


// Hero 오른쪽 카드
setTimeout(() => {

    document
        .querySelector('.hero-visual')
        ?.classList
        .add(
            'reveal',
            'visible'
        );

}, 400);