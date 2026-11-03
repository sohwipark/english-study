// 사이트 설정 파일
window.SITE_CONFIG = {
  // 수정모드 비밀번호의 SHA-256 해시값입니다. (비밀번호 원문이 아니라 해시를 넣어야 해요)
  // 수정모드 > "비밀번호 바꾸기"에서 새 해시를 만들어 아래 값을 바꿔 주세요.
  passwordHash: 'cfb789f892fdf2a45ab1bc1f046932df431a7708165393e0f13fab2c9267c0eb',

  // 수정모드에서 "GitHub에 반영하기"를 누를 때 data.js를 저장할 저장소입니다.
  // 비워 두면 *.github.io 주소에서 자동으로 알아냅니다.
  github: {
    owner: '',      // 예: 'my-github-id'
    repo: '',       // 예: 'english-study'
    branch: 'main',
    path: 'data.js'
  }
};
