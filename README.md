# 영어 문장 학습 사이트

학습하기 · 배열하기 · 영작하기 · 틀린 문장 다시 보기 기능이 있는 정적 웹사이트입니다.
서버 없이 GitHub Pages에 올려서 사용할 수 있어요.

## 파일 구성

| 파일 | 내용 |
| --- | --- |
| `index.html` | 페이지 뼈대 |
| `style.css` | 디자인 |
| `app.js` | 모든 기능 |
| `data.js` | 지문 데이터 (수정모드에서 바뀌는 파일) |
| `config.js` | 비밀번호 해시, GitHub 저장소 설정 |

## GitHub Pages에 올리기

1. GitHub에서 새 저장소(예: `english-study`)를 만듭니다.
2. 이 폴더의 파일 5개를 저장소에 올립니다.
3. 저장소 **Settings → Pages → Branch**에서 `main` / `(root)`를 고르고 저장합니다.
4. 잠시 뒤 `https://<아이디>.github.io/english-study/` 주소로 접속할 수 있어요.

## 수정모드

- 첫 화면 오른쪽 위 **수정하기** → 비밀번호 입력 (기본 비밀번호: `1234`)
- 지문 추가/수정/삭제/순서 바꾸기, 지문 전체를 붙여 넣어 문장별로 나누기가 가능합니다.
- 수정한 내용은 먼저 **이 브라우저**에 저장됩니다. 모든 사람에게 적용하려면 둘 중 하나를 하세요.
  - **GitHub에 반영하기** 버튼 (아래 토큰이 필요해요)
  - **data.js 내려받기** 후 저장소의 `data.js`를 그 파일로 바꿔 올리기

### GitHub 토큰 만들기 (한 번만)

1. GitHub → 오른쪽 위 프로필 → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**
2. **Repository access**: Only select repositories → 이 사이트 저장소만 선택
3. **Permissions → Repository permissions → Contents: Read and write**
4. 만들어진 토큰(`github_pat_...`)을 수정모드의 토큰 칸에 붙여 넣습니다. 토큰은 그 브라우저에만 저장됩니다.

반영 후 사이트에 적용되기까지 1~10분 정도 걸릴 수 있어요.

### 비밀번호 바꾸기

수정모드 → **비밀번호 바꾸기**에서 새 비밀번호의 해시를 만들고, `config.js`의 `passwordHash` 값을 바꿔 올립니다.

> 참고: 정적 사이트라 비밀번호 확인은 브라우저에서 이루어집니다. 실제로 저장소를 고칠 수 있는 권한은 **토큰**에 있으니 토큰은 다른 사람에게 알려 주지 마세요.

## 틀린 문장 기록

틀린 문장은 각자의 브라우저(기기)에 저장됩니다. 재시험에서 맞히거나 **다 외웠어요 ✓**를 누르면 목록에서 빠집니다.

## 내 컴퓨터에서 미리 보기

`index.html`을 더블클릭해서 브라우저로 열면 됩니다.
