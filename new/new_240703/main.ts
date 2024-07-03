// 모든 탭 요소 가져오기
const tabs = document.querySelectorAll('.tab');
    
// 현재 해시 값에 따라 활성화할 탭을 설정하는 함수
function showTab() {
    const hash = window.location.hash || '#home'; // 기본값으로 '#home' 설정
    tabs.forEach(tab => {
        if ('#' + tab.id === hash) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// 초기화 시 한 번 호출하여 초기 탭 설정
showTab();

// 해시 값 변경 시 탭 업데이트
window.addEventListener('hashchange', showTab);