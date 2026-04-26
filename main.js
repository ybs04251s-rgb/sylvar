document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.main-navbar');
    const video = document.querySelector('.background-video');

    // 스크롤 시 네비게이션 스타일 변경
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.style.padding = '15px 0';
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        } else {
            navbar.style.padding = '25px 0';
            navbar.style.background = 'rgba(10, 10, 10, 0.1)';
        }
    });

    // 비디오가 뷰포트에서 벗어날 경우 정지하여 CPU 부하 감소
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(video);
});