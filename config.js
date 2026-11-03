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

window.SITE_DATA = {
  "updatedAt": 1,
  "passages": [
    {
      "id": "p_sample1",
      "title": "예시 지문 1",
      "sentences": [
        { "id": "s_sample1a", "en": "Many people believe that talent is the key to success.", "ko": "많은 사람들은 재능이 성공의 열쇠라고 믿는다." },
        { "id": "s_sample1b", "en": "However, research shows that steady practice matters more.", "ko": "그러나 연구는 꾸준한 연습이 더 중요하다는 것을 보여준다." },
        { "id": "s_sample1c", "en": "Small efforts repeated every day can lead to big changes.", "ko": "매일 반복되는 작은 노력이 큰 변화로 이어질 수 있다." },
        { "id": "s_sample1d", "en": "So, don't give up even when progress seems slow.", "ko": "그러니 발전이 느려 보일 때에도 포기하지 마라." }
      ]
    },
    {
      "id": "p_sample2",
      "title": "예시 지문 2",
      "sentences": [
        { "id": "s_sample2a", "en": "Reading regularly helps us understand the world better.", "ko": "규칙적으로 책을 읽는 것은 우리가 세상을 더 잘 이해하도록 돕는다." },
        { "id": "s_sample2b", "en": "Through books, we can experience lives different from our own.", "ko": "책을 통해 우리는 우리 자신과 다른 삶을 경험할 수 있다." },
        { "id": "s_sample2c", "en": "This experience makes us more open to other people's ideas.", "ko": "이러한 경험은 우리를 다른 사람들의 생각에 더 열린 사람으로 만든다." }
      ]
    }
  ]
};

<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>영어 문장 학습</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Jua&family=Noto+Sans+KR:wght@400;500;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body data-theme="blue">
  <div id="app"></div>
  <script src="config.js"></script>
  <script src="app.js"></script>
</body>
</html>

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

:root {
  --blue: #c8d0db;
  --accent: #9dbccd;
  --accent-strong: #5f8aa3;
  --chip: #d9d9d9;
  --panel: #ececec;
  --white: #ffffff;
  --ink: #111111;
  --muted: #5b6472;
  --good: #1f8a5b;
  --good-bg: #dcf2e6;
  --bad: #c9403b;
  --bad-bg: #fbe1df;
}

* { box-sizing: border-box; }
html, body { margin: 0; }
body {
  font-family: 'Noto Sans KR', system-ui, sans-serif;
  color: var(--ink);
  background: var(--white);
  min-height: 100vh;
  -webkit-tap-highlight-color: transparent;
}
body[data-theme="blue"] { background: var(--blue); }
#app { min-height: 100vh; display: flex; flex-direction: column; }
button { font-family: inherit; color: inherit; }

/* ---------- 상단 바 ---------- */
.topbar {
  display: flex; justify-content: space-between; align-items: center;
  gap: 10px; padding: 10px 14px; flex-wrap: wrap;
}
.topbar-left, .topbar-right { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.topbar-right { margin-left: auto; }
.pill {
  background: var(--accent); border-radius: 10px; padding: 8px 18px;
  font-family: 'Jua', sans-serif; font-size: 22px; line-height: 1.2;
}
.icon-btn {
  width: 40px; height: 40px; border-radius: 10px; background: var(--white);
  display: grid; place-items: center; text-decoration: none; color: var(--ink);
  font-size: 20px; font-weight: 800; border: 0; cursor: pointer;
}
body[data-theme="white"] .icon-btn { background: var(--panel); }
.progress { font-family: 'Jua', sans-serif; font-size: 20px; padding: 0 6px; }

.btn {
  font-family: 'Jua', sans-serif; font-size: 18px; line-height: 1.2;
  background: var(--accent); border: 0; border-radius: 10px;
  padding: 9px 16px; cursor: pointer; text-decoration: none; color: var(--ink);
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  transition: filter .15s, transform .1s;
}
.btn:hover { filter: brightness(.95); }
.btn:active { transform: translateY(1px); }
.btn.ghost { background: var(--white); }
body[data-theme="white"] .btn.ghost { background: var(--panel); }
.btn.on { background: var(--accent-strong); color: #fff; }
.btn:disabled, .btn.disabled { opacity: .45; cursor: not-allowed; pointer-events: none; }
.btn.big { font-size: 24px; padding: 14px 30px; border-radius: 18px; }
.btn.danger { background: var(--bad-bg); color: var(--bad); }

.wrap { width: 100%; max-width: 1160px; margin: 0 auto; padding: 8px 16px 40px; }
.empty { text-align: center; color: var(--muted); padding: 60px 16px; font-size: 18px; line-height: 1.6; }
.num {
  display: inline-grid; place-items: center; min-width: 30px; height: 30px; padding: 0 6px;
  border-radius: 99px; background: rgba(255,255,255,.7); font-size: 14px; font-weight: 800;
  color: var(--muted); margin-right: 10px; vertical-align: middle;
}
.badge {
  display: inline-block; font-family: 'Noto Sans KR', sans-serif; font-size: 13px; font-weight: 700;
  background: #fff; color: var(--bad); border-radius: 99px; padding: 3px 10px; margin-left: 8px;
  vertical-align: middle;
}
.badge.zero { color: var(--muted); }

/* ---------- 첫 화면 ---------- */
.home {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: clamp(18px, 3.5vh, 32px); padding: 8px 16px 48px;
}
.home-btn {
  width: min(520px, 100%); height: clamp(92px, 18vh, 156px); background: var(--white);
  border-radius: 40px; display: flex; align-items: center; justify-content: center;
  font-family: 'Jua', sans-serif; font-size: clamp(30px, 5vw, 46px); color: var(--ink);
  text-decoration: none; transition: transform .15s, box-shadow .15s;
}
.home-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(40, 60, 90, .12); }

/* ---------- 지문 선택 ---------- */
.grid {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px 24px; max-width: 1080px; padding: 8px 16px 40px 16px; width: 100%;
  margin: 0 auto;
}
.card-btn {
  background: var(--blue); border-radius: 32px; min-height: 130px; padding: 16px;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
  font-family: 'Jua', sans-serif; font-size: clamp(22px, 3vw, 36px); text-align: center;
  color: var(--ink); text-decoration: none; transition: transform .15s, box-shadow .15s;
}
.card-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(40, 60, 90, .12); }
.card-btn .badge { margin-left: 0; }

/* ---------- 학습하기 / 다시보기 카드 ---------- */
.pair {
  background: var(--panel); border-radius: 34px; padding: 12px;
  display: flex; flex-direction: column; gap: 12px; margin-bottom: 12px;
}
.box-en, .box-ko {
  background: var(--blue); border-radius: 30px; padding: 26px 32px; min-height: 100px;
  display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
  text-align: center; line-height: 1.6;
}
.box-en { font-size: 22px; font-weight: 700; }
.box-ko { font-size: 19px; font-weight: 500; }
.box-ko.covered { cursor: pointer; position: relative; }
.box-ko.covered span { filter: blur(8px); user-select: none; }
.box-ko.covered::after {
  content: '눌러서 해석 보기'; position: absolute; font-family: 'Jua', sans-serif; font-size: 18px;
  background: rgba(255,255,255,.85); border-radius: 99px; padding: 6px 14px;
}
.review-meta {
  display: flex; flex-wrap: wrap; gap: 8px; align-items: center; justify-content: space-between;
  padding: 0 10px 4px; font-size: 14px; color: var(--muted);
}
.review-meta .last { flex-basis: 100%; }
.review-meta .last b { color: var(--bad); font-weight: 700; }

/* ---------- 문장 선택 ---------- */
.sel-list { display: flex; flex-direction: column; gap: 18px; }
.sel-row {
  background: var(--chip); border-radius: 34px; padding: 14px 24px; min-height: 68px;
  display: flex; align-items: center; gap: 18px; cursor: pointer; position: relative;
}
.sel-row input { position: absolute; opacity: 0; pointer-events: none; }
.check {
  width: 40px; height: 40px; flex: none; background: var(--accent); border-radius: 8px;
  display: grid; place-items: center;
}
.check svg { opacity: 0; transition: opacity .1s; }
.sel-row input:checked + .check svg { opacity: 1; }
.sel-row input:focus-visible + .check { outline: 3px solid var(--accent-strong); }
.sel-text { font-size: 17px; line-height: 1.5; font-weight: 500; }
.bottom-bar {
  position: sticky; bottom: 0; padding: 20px 16px 18px; display: flex; justify-content: center;
  background: linear-gradient(rgba(200,208,219,0), var(--blue) 45%); margin-top: auto;
}

/* ---------- 퀴즈 공통 ---------- */
.quiz-top { background: var(--blue); padding-bottom: 30px; }
.quiz-bottom { flex: 1; background: var(--white); padding: 30px 16px 40px; }
.ko-card {
  background: var(--white); border-radius: 22px; width: calc(100% - 32px); max-width: 1180px;
  margin: 0 auto; padding: 28px 24px; text-align: center;
  font-family: 'Jua', sans-serif; font-size: clamp(22px, 2.8vw, 34px); line-height: 1.45;
}
.quiz-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
.hint { text-align: center; color: var(--muted); margin: 14px 0 0; font-size: 14px; }
.verdict { font-family: 'Jua', sans-serif; font-size: 28px; text-align: center; }
.verdict.ok { color: var(--good); }
.verdict.no { color: var(--bad); }

/* ---------- 배열하기 ---------- */
.pool {
  display: flex; flex-wrap: wrap; justify-content: center; align-content: center; gap: 14px 16px;
  padding: 22px 16px 26px; min-height: 120px; max-width: 1160px; margin: 0 auto;
}
.chip {
  background: var(--chip); border-radius: 99px; padding: 11px 22px; min-width: 56px;
  font-size: 20px; font-weight: 700; text-align: center; line-height: 1.3;
  cursor: grab; touch-action: none; user-select: none; -webkit-user-select: none;
  transition: transform .1s, box-shadow .1s, background .1s;
}
.chip:hover { box-shadow: 0 3px 10px rgba(0,0,0,.08); }
.chip.selected { background: var(--white); outline: 3px solid var(--accent-strong); transform: translateY(-2px); }
.chip.dragging { opacity: .3; }
.ghost {
  position: fixed; pointer-events: none; z-index: 1000; margin: 0;
  transform: translate(-50%, -50%) scale(1.06); box-shadow: 0 10px 24px rgba(0,0,0,.2); cursor: grabbing;
}
.slot-line {
  display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 12px 14px;
  max-width: 1160px; margin: 0 auto;
}
.slot {
  min-width: 90px; min-height: 50px; border-radius: 99px; background: var(--chip);
  display: flex; align-items: center; justify-content: center; transition: outline-color .1s;
  outline: 3px dashed transparent; outline-offset: 2px;
}
.slot:has(.chip) { background: transparent; min-width: 0; }
.slot .chip { background: #eef3f7; box-shadow: inset 0 0 0 2px var(--accent); }
.slot-line.targeting .slot:not(:has(.chip)) { outline-color: var(--accent); cursor: pointer; }
.slot.over { outline-color: var(--accent-strong) !important; }
.slot.good .chip { background: var(--good-bg); box-shadow: inset 0 0 0 2px var(--good); }
.slot.bad .chip { background: var(--bad-bg); box-shadow: inset 0 0 0 2px var(--bad); }
.slot.bad:not(:has(.chip)) { background: var(--bad-bg); }
.answered .chip { cursor: default; }
.tail { font-size: 30px; font-weight: 800; }
.feedback {
  max-width: 920px; margin: 26px auto 0; border-radius: 22px; padding: 18px 22px; text-align: center;
}
.feedback.ok { background: var(--good-bg); }
.feedback.no { background: var(--bad-bg); }
.correct-en { font-size: 20px; font-weight: 700; margin-top: 8px; line-height: 1.6; }

/* ---------- 영작하기 ---------- */
.answer-input {
  display: block; width: min(920px, 100%); margin: 0 auto; min-height: 130px;
  background: var(--chip); border: 0; border-radius: 40px; padding: 34px 36px; outline: none;
  font: 600 22px/1.5 'Noto Sans KR', sans-serif; text-align: center; resize: none; color: var(--ink);
}
.answer-input:focus { box-shadow: 0 0 0 3px var(--accent); }
.answer-input::placeholder { font-family: 'Jua', sans-serif; color: var(--ink); font-size: 34px; font-weight: 400; }
.result { width: 100%; max-width: 1180px; margin: 0 auto; padding: 16px 16px 40px; display: flex; flex-direction: column; gap: 18px; }
.res-box { background: var(--white); border-radius: 22px; padding: 18px 28px 24px; text-align: center; }
.res-box.grey { background: var(--chip); border-radius: 40px; }
.res-label { font-family: 'Jua', sans-serif; font-size: 22px; color: var(--muted); margin-bottom: 8px; }
.res-text { font-size: 22px; font-weight: 700; line-height: 1.8; word-break: break-word; }
.w-del { color: var(--bad); text-decoration: line-through; background: var(--bad-bg); border-radius: 6px; padding: 0 4px; }
.w-ins { color: var(--good); background: var(--good-bg); border-radius: 6px; padding: 0 4px; font-weight: 800; }
.err-list { list-style: none; padding: 0; margin: 0 auto; display: flex; flex-direction: column; gap: 10px; text-align: left; max-width: 760px; }
.err-list li { background: var(--panel); border-radius: 14px; padding: 10px 16px; font-size: 17px; line-height: 1.6; }
.err-list .k { font-weight: 800; margin-right: 6px; }

/* ---------- 결과 ---------- */
.score { text-align: center; font-family: 'Jua', sans-serif; font-size: 44px; margin: 10px 0 4px; }
.score-sub { text-align: center; color: var(--muted); margin-bottom: 24px; }
.sum-item { background: var(--panel); border-radius: 22px; padding: 16px 22px; margin-bottom: 12px; line-height: 1.6; }
.sum-item .en { font-size: 19px; font-weight: 700; }
.sum-item .ko { color: var(--muted); }
.sum-item .mine { font-size: 15px; color: var(--bad); margin-top: 4px; }

/* ---------- 재시험 선택 ---------- */
.choose { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 32px; padding: 16px 16px 15vh; }
.choose .card-btn { width: min(560px, 100%); min-height: 156px; font-size: clamp(30px, 5vw, 42px); border: 0; cursor: pointer; }

/* ---------- 수정모드 ---------- */
.login { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px; padding: 16px 16px 22vh; }
.login .pill { font-size: 28px; padding: 10px 40px; }
.pw-input {
  width: min(540px, 100%); background: var(--panel); border: 0; padding: 14px 18px; outline: none;
  font: 24px 'Noto Sans KR', sans-serif; text-align: center; color: var(--ink);
}
.pw-input:focus { box-shadow: 0 0 0 3px var(--accent); }
.err { color: var(--bad); min-height: 1.4em; font-weight: 700; }
.admin-row {
  display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
  background: var(--blue); border-radius: 20px; padding: 12px 16px; margin-bottom: 10px;
}
.admin-row .t { flex: 1; min-width: 160px; font-family: 'Jua', sans-serif; font-size: 22px; }
.admin-row .meta { color: var(--muted); font-size: 14px; margin-right: 6px; }
.small-btn {
  border: 0; background: var(--white); border-radius: 8px; padding: 7px 11px;
  cursor: pointer; font-size: 14px; font-weight: 700;
}
.small-btn:disabled { opacity: .4; cursor: default; }
.small-btn.danger { color: var(--bad); }
.section { background: var(--panel); border-radius: 20px; padding: 18px; margin-top: 22px; }
.section h3 { font-family: 'Jua', sans-serif; font-weight: 400; font-size: 22px; margin: 0 0 6px; }
.section p { margin: 0 0 12px; color: var(--muted); font-size: 14px; line-height: 1.6; }
.fields { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 12px; }
.field { display: flex; flex-direction: column; gap: 4px; font-size: 13px; font-weight: 700; color: var(--muted); }
.field input, .field textarea {
  font: 15px 'Noto Sans KR', sans-serif; padding: 10px 12px; border: 1px solid #cfd6df;
  border-radius: 10px; background: var(--white); color: var(--ink); width: 100%;
}
.row-btns { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.status { font-size: 14px; color: var(--muted); }
.banner { background: #fff4d6; border-radius: 14px; padding: 12px 16px; margin-bottom: 14px; font-size: 15px; line-height: 1.6; }
.title-input {
  background: var(--blue); border: 0; border-radius: 6px; outline: none; color: var(--ink);
  font-family: 'Jua', sans-serif; font-size: 30px; padding: 6px 20px; width: min(560px, 70vw); text-align: center;
}
.title-input:focus { box-shadow: 0 0 0 3px var(--accent); }
textarea.edit { width: 100%; border: 0; resize: none; font-family: inherit; color: var(--ink); outline: none; overflow: hidden; display: block; }
textarea.edit:focus { box-shadow: 0 0 0 3px var(--accent); }
textarea.box-en.edit { font-size: 20px; }
.pair-tools { display: flex; justify-content: space-between; align-items: center; padding: 0 8px; }
.add-row { display: flex; justify-content: center; gap: 10px; margin: 6px 0 10px; flex-wrap: wrap; }

.toast {
  position: fixed; left: 50%; bottom: 24px; transform: translateX(-50%); z-index: 2000;
  background: #22303c; color: #fff; padding: 12px 20px; border-radius: 12px; font-size: 15px;
  opacity: 0; transition: opacity .2s; pointer-events: none; max-width: calc(100% - 32px); text-align: center;
}
.toast.show { opacity: 1; }

@media (max-width: 640px) {
  .grid { grid-template-columns: 1fr; }
  .card-btn { min-height: 96px; border-radius: 26px; }
  .pill { font-size: 18px; padding: 7px 14px; }
  .btn { font-size: 16px; padding: 8px 12px; }
  .btn.big { font-size: 20px; padding: 12px 22px; }
  .pair { border-radius: 26px; padding: 8px; }
  .box-en, .box-ko { padding: 18px; border-radius: 22px; min-height: 80px; }
  .box-en { font-size: 18px; }
  .box-ko { font-size: 16px; }
  .sel-row { padding: 12px 16px; gap: 12px; border-radius: 24px; }
  .check { width: 32px; height: 32px; }
  .sel-text { font-size: 15px; }
  .chip { font-size: 17px; padding: 9px 16px; }
  .slot { min-width: 64px; min-height: 44px; }
  .answer-input { padding: 24px 20px; border-radius: 28px; font-size: 18px; }
  .answer-input::placeholder { font-size: 26px; }
  .res-text { font-size: 18px; }
  .title-input { font-size: 22px; }
}

'use strict';
(function () {
  const CFG = window.SITE_CONFIG || {};
  const LS_DATA = 'es_data_v1';      // 수정모드에서 바꾼 지문 (이 브라우저)
  const LS_WRONG = 'es_wrong_v1';    // 틀린 문장 기록 (이 브라우저)
  const LS_GH = 'es_github_v1';      // GitHub 설정 + 토큰
  const LS_DIRTY = 'es_dirty_v1';    // GitHub에 아직 반영 안 된 수정이 있는지
  const SS_AUTH = 'es_auth';

  const LABEL = { study: '학습하기', arrange: '단어 배열하기', write: '문장 영작하기', review: '틀린 문제 다시 보기' };
  const HOME_LABEL = { study: '학습하기', arrange: '배열하기', write: '영작하기', review: '틀린문장 다시보기' };
  const CHECK_SVG = '<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const $app = document.getElementById('app');
  let DB = { updatedAt: 0, passages: [] };
  let QUIZ = null;
  let onKey = null;
  document.addEventListener('keydown', e => { if (onKey) onKey(e); });

  // ---------- 저장소 ----------
  function lsGet(k, fb) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch (e) { return fb; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 저장 불가 환경 */ } }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) { /* noop */ } }
  function isAuthed() { try { return sessionStorage.getItem(SS_AUTH) === '1'; } catch (e) { return false; } }
  function setAuthed(v) { try { v ? sessionStorage.setItem(SS_AUTH, '1') : sessionStorage.removeItem(SS_AUTH); } catch (e) { /* noop */ } }

  function loadData() {
    const base = window.SITE_DATA || { updatedAt: 0, passages: [] };
    const local = lsGet(LS_DATA, null);
    if (local && Array.isArray(local.passages) && (local.updatedAt || 0) > (base.updatedAt || 0)) return local;
    return JSON.parse(JSON.stringify(base));
  }
  function saveDB() {
    DB.updatedAt = Date.now();
    lsSet(LS_DATA, DB);
    lsSet(LS_DIRTY, true);
  }
  function findP(pid) { return DB.passages.find(p => p.id === pid); }

  function getWrong() { return lsGet(LS_WRONG, {}); }
  function addWrong(s, pid, mode, answer) {
    const w = getWrong();
    const r = w[s.id] || { pid, arrange: 0, write: 0 };
    r[mode] = (r[mode] || 0) + 1;
    r.at = Date.now();
    if (mode === 'write') r.lastAnswer = answer;
    w[s.id] = r;
    lsSet(LS_WRONG, w);
  }
  function removeWrong(sid) { const w = getWrong(); delete w[sid]; lsSet(LS_WRONG, w); }
  function wrongIn(p, w) { w = w || getWrong(); return p.sentences.filter(s => w[s.id]); }

  // ---------- 유틸 ----------
  function el(tag, props, ...kids) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (v == null || v === false) continue;
      if (k === 'class') e.className = v;
      else if (k === 'html') e.innerHTML = v;
      else if (k === 'value') e.value = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
      else e.setAttribute(k, v === true ? '' : v);
    }
    for (const c of kids.flat(Infinity)) {
      if (c == null || c === false) continue;
      e.append(c.nodeType ? c : document.createTextNode(String(c)));
    }
    return e;
  }
  function uid(prefix) { return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function setTheme(t) { document.body.dataset.theme = t; }
  function go(hash) { location.hash = hash; return null; }
  function joinWords(arr) { const out = []; arr.forEach((x, i) => { if (i) out.push(' '); out.push(x); }); return out; }
  function autosize(t) { t.style.height = 'auto'; t.style.height = t.scrollHeight + 'px'; }

  let toastTimer = null;
  function toast(msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = el('div', { class: 'toast' }); document.body.append(t); }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
  }

  async function sha256(text) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  // 문장 끝 문장부호(. ? !)는 칸 밖에 고정으로 보여 준다.
  function tokenize(en) {
    let s = en.trim().replace(/\s+/g, ' ');
    let tail = '';
    const m = s.match(/[.!?]+["”’']?$/);
    if (m) { tail = m[0]; s = s.slice(0, -tail.length).trim(); }
    return { tokens: s ? s.split(' ') : [], tail };
  }

  // 영작 채점: 대소문자와 단어 앞뒤 문장부호는 무시하고 단어 단위로 비교
  function normTok(w) {
    return w.toLowerCase().replace(/[’‘`]/g, "'").replace(/[“”]/g, '"')
      .replace(/^[^a-z0-9']+|[^a-z0-9']+$/g, '');
  }
  function diffWords(userStr, ansStr) {
    const a = userStr.trim().split(/\s+/).filter(Boolean);
    const b = ansStr.trim().split(/\s+/).filter(Boolean);
    const A = a.map(normTok), B = b.map(normTok);
    const n = a.length, m = b.length;
    const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
    for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
    const ops = []; let i = 0, j = 0;
    while (i < n && j < m) {
      if (A[i] === B[j]) { ops.push({ t: 'eq', a: a[i++], b: b[j++] }); }
      else if (dp[i + 1][j] >= dp[i][j + 1]) ops.push({ t: 'del', a: a[i++] });
      else ops.push({ t: 'ins', b: b[j++] });
    }
    while (i < n) ops.push({ t: 'del', a: a[i++] });
    while (j < m) ops.push({ t: 'ins', b: b[j++] });
    return ops;
  }
  function errorGroups(ops) {
    const g = []; let cur = null;
    for (const o of ops) {
      if (o.t === 'eq') { cur = null; continue; }
      if (!cur) { cur = { del: [], ins: [] }; g.push(cur); }
      if (o.t === 'del') cur.del.push(o.a); else cur.ins.push(o.b);
    }
    return g;
  }

  function splitSentences(text) {
    const t = text.trim();
    if (!t) return [];
    if (/\n/.test(t)) return t.split(/\n+/).map(x => x.trim()).filter(Boolean);
    return t.replace(/\s+/g, ' ').split(/(?<=[.!?]["”’')]*)\s+/).map(x => x.trim()).filter(Boolean);
  }

  // ---------- 공통 화면 조각 ----------
  function header(label, opts) {
    const { back = '#/', right = null } = opts || {};
    return el('header', { class: 'topbar' },
      el('div', { class: 'topbar-left' },
        back && el('a', { class: 'icon-btn', href: back, 'aria-label': '뒤로' }, '←'),
        label && el('div', { class: 'pill' }, label)),
      right && el('div', { class: 'topbar-right' }, right));
  }

  function pairCard(s, n, hideKo, wrongBadge) {
    const ko = el('div', {
      class: 'box-ko' + (hideKo ? ' covered' : ''),
      onclick: e => e.currentTarget.classList.remove('covered')
    }, el('span', {}, s.ko || '(해석 없음)'));
    return el('div', { class: 'pair' },
      el('div', { class: 'box-en' }, el('span', { class: 'num' }, n), el('span', {}, s.en),
        wrongBadge && el('span', { class: 'badge' }, '틀린 적 있음')),
      ko);
  }

  // ---------- 첫 화면 ----------
  function home() {
    setTheme('blue');
    return [
      header(null, { back: null, right: el('a', { class: 'btn', href: '#/admin' }, '수정하기') }),
      el('main', { class: 'home' },
        ['study', 'arrange', 'write', 'review'].map(m => el('a', { class: 'home-btn', href: '#/' + m }, HOME_LABEL[m])))
    ];
  }

  // ---------- 지문 선택 ----------
  function passageList(mode) {
    setTheme('white');
    const w = getWrong();
    const body = DB.passages.length
      ? el('div', { class: 'grid' }, DB.passages.map(p => {
        const n = wrongIn(p, w).length;
        return el('a', { class: 'card-btn', href: `#/${mode}/${p.id}` },
          el('span', {}, p.title),
          mode === 'review'
            ? el('span', { class: 'badge' + (n ? '' : ' zero') }, n ? `틀린 문장 ${n}개` : '틀린 문장 없음')
            : (n ? el('span', { class: 'badge' }, `틀린 문장 ${n}개`) : null));
      }))
      : el('div', { class: 'empty' }, '아직 등록된 지문이 없어요.', el('br'), '첫 화면 오른쪽 위 "수정하기"에서 지문을 추가해 주세요.');
    return [header(LABEL[mode]), body];
  }

  // ---------- 1. 학습하기 ----------
  function studyView(pid) {
    const p = findP(pid);
    if (!p) return go('#/study');
    setTheme('white');
    let onlyWrong = false, hideKo = false;
    const list = el('div', { class: 'wrap' });
    const bKo = el('button', { class: 'btn ghost', onclick: () => { hideKo = !hideKo; bKo.classList.toggle('on', hideKo); draw(); } }, '해석 가리기');
    const bWrong = el('button', { class: 'btn', onclick: () => { onlyWrong = !onlyWrong; bWrong.classList.toggle('on', onlyWrong); draw(); } }, '틀린 것만 보기');
    function draw() {
      const w = getWrong();
      const ss = p.sentences.filter(s => !onlyWrong || w[s.id]);
      list.replaceChildren(...(ss.length
        ? ss.map(s => pairCard(s, p.sentences.indexOf(s) + 1, hideKo, !onlyWrong && w[s.id]))
        : [el('div', { class: 'empty' }, onlyWrong ? '이 지문에서 틀린 문장이 없어요 👏' : '문장이 없어요.')]));
    }
    draw();
    return [header(`${LABEL.study} - ${p.title}`, { back: '#/study', right: [bKo, bWrong] }), list];
  }

  // ---------- 2·3. 문장 선택 ----------
  function sentenceSelect(mode, pid) {
    const p = findP(pid);
    if (!p) return go('#/' + mode);
    setTheme('blue');
    const w = getWrong();
    const boxes = [];
    const startBtn = el('button', { class: 'btn big', onclick: start });
    const rows = p.sentences.map((s, i) => {
      const cb = el('input', { type: 'checkbox' });
      cb.checked = true;
      cb.addEventListener('change', upd);
      boxes.push(cb);
      return el('label', { class: 'sel-row' }, cb, el('span', { class: 'check', html: CHECK_SVG }),
        el('div', { class: 'sel-text' }, el('span', { class: 'num' }, i + 1),
          // 영작하기는 영어 문장을 미리 보면 안 되므로 해석을 보여 준다
          mode === 'write' ? (s.ko || s.en) : s.en,
          w[s.id] && el('span', { class: 'badge' }, '틀림')));
    });
    const hasWrong = p.sentences.some(s => w[s.id]);
    const wrongBtn = el('button', {
      class: 'btn', disabled: !hasWrong,
      onclick: () => { boxes.forEach((b, i) => { b.checked = !!w[p.sentences[i].id]; }); upd(); }
    }, '틀린 것만 선택');
    const allBtn = el('button', {
      class: 'btn ghost',
      onclick: () => { const all = boxes.every(b => b.checked); boxes.forEach(b => { b.checked = !all; }); upd(); }
    });
    function upd() {
      const n = boxes.filter(b => b.checked).length;
      startBtn.textContent = n ? `선택한 ${n}문장 학습하기` : '문장을 선택하세요';
      startBtn.disabled = !n;
      allBtn.textContent = boxes.length && boxes.every(b => b.checked) ? '전체 해제' : '전체 선택';
    }
    function start() {
      const sel = p.sentences.filter((s, i) => boxes[i].checked);
      if (sel.length) startQuiz(mode, p.id, sel, false);
    }
    upd();
    return [
      header(`${LABEL[mode]} - ${p.title}`, { back: '#/' + mode, right: [wrongBtn, allBtn] }),
      el('div', { class: 'wrap' }, p.sentences.length ? el('div', { class: 'sel-list' }, rows) : el('div', { class: 'empty' }, '문장이 없어요.')),
      p.sentences.length ? el('div', { class: 'bottom-bar' }, startBtn) : null
    ];
  }

  // ---------- 퀴즈 진행 ----------
  function startQuiz(mode, pid, sentences, retest) {
    QUIZ = {
      mode, pid, retest: !!retest,
      items: shuffle(sentences), idx: 0, results: [],
      back: retest ? `#/review/${pid}` : `#/${mode}`
    };
    if (location.hash === '#/quiz') render(); else location.hash = '#/quiz';
  }
  function quizView() {
    if (!QUIZ) return go('#/');
    if (QUIZ.idx >= QUIZ.items.length) return quizSummary();
    return QUIZ.mode === 'arrange' ? arrangeQ() : writeQ();
  }
  function quizHeader() {
    const p = findP(QUIZ.pid);
    const label = (QUIZ.retest ? '재시험 · ' : '') + LABEL[QUIZ.mode] + (p ? ` - ${p.title}` : '');
    return header(label, { back: QUIZ.back, right: el('span', { class: 'progress' }, `${Math.min(QUIZ.idx + 1, QUIZ.items.length)} / ${QUIZ.items.length}`) });
  }
  function isLast() { return QUIZ.idx >= QUIZ.items.length - 1; }
  function record(ok, answer) {
    const s = QUIZ.items[QUIZ.idx];
    QUIZ.results.push({ s, ok, answer });
    if (!ok) addWrong(s, QUIZ.pid, QUIZ.mode, answer);
    else if (QUIZ.retest) removeWrong(s.id); // 재시험에서 맞히면 틀린 목록에서 빠진다
  }
  function next() { QUIZ.idx++; render(); }

  // ---------- 2. 배열하기 문제 ----------
  function arrangeQ() {
    const s = QUIZ.items[QUIZ.idx];
    setTheme('white');
    const { tokens, tail } = tokenize(s.en);
    let order = tokens.map((_, i) => i);
    if (tokens.length > 1) {
      for (let k = 0; k < 10; k++) { order = shuffle(order); if (order.some((v, i) => tokens[v] !== tokens[i])) break; }
    }
    let selected = null, answered = false, overEl = null;

    const pool = el('div', { class: 'pool' });
    const slots = tokens.map(() => el('div', { class: 'slot' }));
    const line = el('div', { class: 'slot-line' }, slots, tail && el('span', { class: 'tail' }, tail));
    const checkBtn = el('button', { class: 'btn big', disabled: true, onclick: () => check() }, '확인');
    const actions = el('div', { class: 'quiz-actions' },
      el('button', { class: 'btn ghost', onclick: reset }, '초기화'),
      el('button', { class: 'btn ghost', onclick: () => check() }, '정답 보기'),
      checkBtn);
    const feedback = el('div');
    const bottom = el('section', { class: 'quiz-bottom' }, line, feedback, actions,
      el('p', { class: 'hint' }, '단어를 끌어다 칸에 놓거나, 단어를 누른 뒤 놓을 칸을 누르세요. 칸에 놓인 단어를 누르면 되돌아가요.'));

    order.forEach((ti, k) => {
      const c = el('div', { class: 'chip' }, tokens[ti]);
      c.dataset.i = ti;
      c.dataset.k = k;
      attachDrag(c);
      pool.append(c);
    });

    function select(c) {
      if (selected) selected.classList.remove('selected');
      selected = c;
      if (c) c.classList.add('selected');
      line.classList.toggle('targeting', !!c);
    }
    function toPool(c) {
      const k = +c.dataset.k;
      const after = [...pool.children].find(x => +x.dataset.k > k);
      pool.insertBefore(c, after || null);
    }
    function update() { checkBtn.disabled = !slots.every(sl => sl.firstChild); }
    function placeInSlot(c, slot) {
      const from = c.parentElement;
      const occupant = slot.firstChild;
      if (occupant === c) return;
      slot.append(c);
      if (occupant) { if (from.classList.contains('slot')) from.append(occupant); else toPool(occupant); }
      update();
    }
    function onTap(c) {
      const inSlot = c.parentElement.classList.contains('slot');
      if (!inSlot) { select(selected === c ? null : c); return; }
      if (selected && selected !== c) { const sel = selected; select(null); placeInSlot(sel, c.parentElement); }
      else { select(null); toPool(c); update(); }
    }
    slots.forEach(sl => sl.addEventListener('click', e => {
      if (answered || e.target.closest('.chip') || !selected) return;
      const sel = selected; select(null); placeInSlot(sel, sl);
    }));

    function attachDrag(c) {
      c.addEventListener('pointerdown', e => {
        if (answered || e.button > 0) return;
        e.preventDefault();
        const sx = e.clientX, sy = e.clientY;
        let ghost = null;
        try { c.setPointerCapture(e.pointerId); } catch (err) { /* noop */ }
        const setOver = t => {
          const sl = t && t.closest('.slot');
          const target = sl && slots.includes(sl) ? sl : null;
          if (target !== overEl) { if (overEl) overEl.classList.remove('over'); overEl = target; if (target) target.classList.add('over'); }
        };
        const move = ev => {
          if (!ghost) {
            if (Math.hypot(ev.clientX - sx, ev.clientY - sy) < 6) return;
            select(null);
            ghost = c.cloneNode(true);
            ghost.classList.add('ghost');
            document.body.append(ghost);
            c.classList.add('dragging');
          }
          ghost.style.left = ev.clientX + 'px';
          ghost.style.top = ev.clientY + 'px';
          setOver(document.elementFromPoint(ev.clientX, ev.clientY));
        };
        const up = ev => {
          c.removeEventListener('pointermove', move);
          c.removeEventListener('pointerup', up);
          c.removeEventListener('pointercancel', up);
          if (ghost) {
            ghost.remove();
            c.classList.remove('dragging');
            setOver(null);
            if (ev.type !== 'pointerup') return;
            const t = document.elementFromPoint(ev.clientX, ev.clientY);
            const sl = t && t.closest('.slot');
            if (sl && slots.includes(sl)) placeInSlot(c, sl);
            else if (t && t.closest('.quiz-top')) { toPool(c); update(); }
          } else if (ev.type === 'pointerup') onTap(c);
        };
        c.addEventListener('pointermove', move);
        c.addEventListener('pointerup', up);
        c.addEventListener('pointercancel', up);
      });
    }

    function reset() {
      if (answered) return;
      select(null);
      slots.forEach(sl => { if (sl.firstChild) toPool(sl.firstChild); });
      update();
    }
    function check() {
      if (answered) return;
      answered = true;
      select(null);
      bottom.classList.add('answered');
      pool.classList.add('answered');
      let ok = true;
      slots.forEach((sl, i) => {
        const c = sl.firstChild;
        const good = !!c && tokens[+c.dataset.i] === tokens[i];
        sl.classList.add(good ? 'good' : 'bad');
        if (!good) ok = false;
      });
      const answer = slots.map(sl => sl.firstChild ? sl.firstChild.textContent : '___').join(' ') + tail;
      record(ok, answer);
      feedback.replaceChildren(el('div', { class: 'feedback ' + (ok ? 'ok' : 'no') },
        el('div', { class: 'verdict ' + (ok ? 'ok' : 'no') }, ok ? '정답이에요! 🎉' : '아쉬워요, 틀렸어요'),
        !ok && el('div', { class: 'correct-en' }, s.en)));
      actions.replaceChildren(el('button', { class: 'btn big', onclick: next }, isLast() ? '결과 보기' : '다음 문제 →'));
    }

    onKey = e => {
      if (e.key === 'Enter' && !e.repeat) {
        e.preventDefault();
        if (answered) next(); else if (!checkBtn.disabled) check();
      } else if (e.key === 'Escape') select(null);
    };

    return [
      el('section', { class: 'quiz-top' }, quizHeader(), pool, el('div', { class: 'ko-card' }, s.ko || '(해석 없음)')),
      bottom
    ];
  }

  // ---------- 3. 영작하기 문제 ----------
  function writeQ() {
    const s = QUIZ.items[QUIZ.idx];
    setTheme('white');
    const ta = el('textarea', {
      class: 'answer-input', placeholder: '나의 답 입력', rows: 2,
      autocomplete: 'off', autocapitalize: 'off', autocorrect: 'off', spellcheck: 'false'
    });
    const submit = given => {
      const v = given !== undefined ? given : ta.value.trim();
      if (given === undefined && !v) { ta.focus(); return; }
      const ops = diffWords(v, s.en);
      const ok = !!v && ops.every(o => o.t === 'eq');
      record(ok, v);
      $app.replaceChildren(...writeResult(s, v, ops, ok));
      window.scrollTo(0, 0);
    };
    ta.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
        e.preventDefault();
        e.stopPropagation(); // 같은 Enter로 다음 문제로 넘어가지 않도록
        submit();
      }
    });
    ta.addEventListener('input', () => autosize(ta));
    setTimeout(() => ta.focus(), 0);
    return [
      el('section', { class: 'quiz-top', style: 'padding-bottom: 64px' }, quizHeader(),
        el('div', { style: 'height: clamp(16px, 8vh, 90px)' }),
        el('div', { class: 'ko-card' }, s.ko || '(해석 없음)')),
      el('section', { class: 'quiz-bottom' }, ta,
        el('p', { class: 'hint' }, '답을 다 입력한 뒤 Enter를 누르면 제출돼요 · 대소문자와 문장부호는 채점하지 않아요'),
        el('div', { class: 'quiz-actions' },
          el('button', { class: 'btn ghost', onclick: () => submit('') }, '모르겠어요'),
          el('button', { class: 'btn big', onclick: () => submit() }, '제출')))
    ];
  }

  function writeResult(s, v, ops, ok) {
    setTheme('blue');
    const mine = v
      ? joinWords(ops.filter(o => o.t !== 'ins').map(o => o.t === 'eq' ? o.a : el('span', { class: 'w-del' }, o.a)))
      : ['(입력 없음)'];
    const ans = joinWords(ops.filter(o => o.t !== 'del').map(o => o.t === 'eq' ? o.b : el('span', { class: 'w-ins' }, o.b)));
    const errs = errorGroups(ops).map(g => {
      const d = g.del.join(' '), i = g.ins.join(' ');
      if (d && i) return el('li', {}, el('span', { class: 'k' }, '바꿔야 할 부분'), el('span', { class: 'w-del' }, d), ' → ', el('span', { class: 'w-ins' }, i));
      if (i) return el('li', {}, el('span', { class: 'k' }, '빠진 단어'), el('span', { class: 'w-ins' }, i));
      return el('li', {}, el('span', { class: 'k' }, '필요 없는 단어'), el('span', { class: 'w-del' }, d));
    });
    const box = (label, content, cls) => el('div', { class: 'res-box' + (cls ? ' ' + cls : '') },
      el('div', { class: 'res-label' }, label), content);

    onKey = e => { if (e.key === 'Enter' && !e.repeat) { e.preventDefault(); next(); } };
    return [
      quizHeader(),
      el('div', { class: 'result' },
        el('div', { class: 'verdict ' + (ok ? 'ok' : 'no') }, ok ? '정답이에요! 🎉' : '아쉬워요, 틀렸어요'),
        box('나의 답', el('div', { class: 'res-text' }, mine)),
        box('정답', el('div', { class: 'res-text' }, ans), 'grey'),
        !ok && box('틀린 부분', v ? el('ul', { class: 'err-list' }, errs) : el('div', { class: 'res-text' }, '답을 입력하지 않았어요')),
        el('div', { class: 'quiz-actions' }, el('button', { class: 'btn big', onclick: next }, isLast() ? '결과 보기' : '다음 문제 →')),
        el('p', { class: 'hint' }, 'Enter를 누르면 다음으로 넘어가요'))
    ];
  }

  // ---------- 결과 ----------
  function quizSummary() {
    setTheme('white');
    const q = QUIZ;
    const wrong = q.results.filter(x => !x.ok);
    const total = q.results.length;
    return [
      header((q.retest ? '재시험 · ' : '') + LABEL[q.mode] + ' 결과', { back: q.back }),
      el('div', { class: 'wrap', style: 'max-width: 900px' },
        el('div', { class: 'score' }, `${total - wrong.length} / ${total}`),
        el('div', { class: 'score-sub' }, wrong.length ? `틀린 문장 ${wrong.length}개는 "틀린 문제 다시 보기"에 저장됐어요.` : '모두 맞혔어요! 🎉'),
        wrong.map(x => el('div', { class: 'sum-item' },
          el('div', { class: 'en' }, x.s.en),
          el('div', { class: 'ko' }, x.s.ko),
          el('div', { class: 'mine' }, '나의 답: ', x.answer || '(입력 없음)'))),
        el('div', { class: 'quiz-actions' },
          wrong.length > 0 && el('button', { class: 'btn big ghost', onclick: () => startQuiz(q.mode, q.pid, wrong.map(x => x.s), q.retest) }, '틀린 문장 다시 풀기'),
          el('a', { class: 'btn big', href: q.back }, '처음으로')))
    ];
  }

  // ---------- 4. 틀린 문제 다시 보기 ----------
  function reviewView(pid) {
    const p = findP(pid);
    if (!p) return go('#/review');
    setTheme('white');
    const list = el('div', { class: 'wrap' });
    const retestBtn = el('a', { class: 'btn', href: `#/review/${pid}/retest` }, '재시험 보기');
    function draw() {
      const w = getWrong();
      const ss = wrongIn(p, w);
      retestBtn.classList.toggle('disabled', !ss.length);
      list.replaceChildren(...(ss.length ? ss.map(s => {
        const r = w[s.id];
        const card = pairCard(s, p.sentences.indexOf(s) + 1, false, false);
        const tags = [r.arrange ? `배열 ${r.arrange}회` : '', r.write ? `영작 ${r.write}회` : ''].filter(Boolean).join(' · ');
        card.append(el('div', { class: 'review-meta' },
          el('span', {}, `틀린 횟수: ${tags}`),
          el('button', { class: 'small-btn', onclick: () => { removeWrong(s.id); draw(); toast('목록에서 뺐어요'); } }, '다 외웠어요 ✓'),
          r.lastAnswer && el('span', { class: 'last' }, '마지막 영작 답: ', el('b', {}, r.lastAnswer))));
        return card;
      }) : [el('div', { class: 'empty' }, '이 지문에서 틀린 문장이 없어요 👏')]));
    }
    draw();
    return [header(`${LABEL.review} - ${p.title}`, { back: '#/review', right: retestBtn }), list];
  }

  function retestChoose(pid) {
    const p = findP(pid);
    if (!p) return go('#/review');
    const ss = wrongIn(p);
    if (!ss.length) return go(`#/review/${pid}`);
    setTheme('white');
    return [
      header(`재시험 - ${p.title} (${ss.length}문장)`, { back: `#/review/${pid}` }),
      el('main', { class: 'choose' },
        el('button', { class: 'card-btn', onclick: () => startQuiz('arrange', pid, ss, true) }, '단어 배열하기'),
        el('button', { class: 'card-btn', onclick: () => startQuiz('write', pid, ss, true) }, '문장 영작하기'))
    ];
  }

  // ---------- 수정모드 ----------
  function adminLogin() {
    if (isAuthed()) return go('#/admin/list');
    setTheme('white');
    const inp = el('input', { class: 'pw-input', type: 'password', placeholder: '비밀번호를 입력해 주세요.', autocomplete: 'current-password' });
    const msg = el('div', { class: 'err' });
    const tryLogin = async () => {
      if (!inp.value) { inp.focus(); return; }
      let h;
      try { h = await sha256(inp.value); } catch (e) { msg.textContent = '이 환경에서는 비밀번호 확인을 할 수 없어요. (https 주소에서 열어 주세요)'; return; }
      if (h === String(CFG.passwordHash || '').toLowerCase()) { setAuthed(true); location.hash = '#/admin/list'; }
      else { msg.textContent = '비밀번호가 틀렸어요.'; inp.value = ''; inp.focus(); }
    };
    inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); tryLogin(); } });
    setTimeout(() => inp.focus(), 0);
    return [
      header(null, { back: '#/' }),
      el('main', { class: 'login' }, el('div', { class: 'pill' }, '수정모드'), inp, el('button', { class: 'btn', onclick: tryLogin }, '확인'), msg)
    ];
  }

  function ghConfig() {
    const base = Object.assign({ owner: '', repo: '', branch: 'main', path: 'data.js' }, CFG.github || {});
    if (location.hostname.endsWith('.github.io')) {
      const owner = location.hostname.split('.')[0];
      if (!base.owner) base.owner = owner;
      if (!base.repo) base.repo = location.pathname.split('/')[1] || `${owner}.github.io`;
    }
    const saved = lsGet(LS_GH, {});
    return Object.assign(base, Object.fromEntries(Object.entries(saved).filter(([, v]) => v)));
  }
  function dataFileText() { return 'window.SITE_DATA = ' + JSON.stringify(DB, null, 2) + ';\n'; }
  function b64utf8(str) {
    const bytes = new TextEncoder().encode(str);
    let bin = '';
    for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(bin);
  }
  async function publishToGitHub() {
    const g = ghConfig();
    if (!g.owner || !g.repo || !g.token) throw new Error('GitHub 아이디, 저장소 이름, 토큰을 먼저 입력해 주세요.');
    const api = `https://api.github.com/repos/${encodeURIComponent(g.owner)}/${encodeURIComponent(g.repo)}/contents/${g.path.split('/').map(encodeURIComponent).join('/')}`;
    const headers = { Authorization: `Bearer ${g.token}`, Accept: 'application/vnd.github+json' };
    let sha;
    const cur = await fetch(`${api}?ref=${encodeURIComponent(g.branch)}`, { headers, cache: 'no-store' });
    if (cur.ok) sha = (await cur.json()).sha;
    else if (cur.status !== 404) throw new Error(`파일 정보를 불러오지 못했어요 (${cur.status}). 토큰 권한을 확인해 주세요.`);
    const res = await fetch(api, {
      method: 'PUT',
      headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
      body: JSON.stringify({ message: '지문 데이터 수정 (수정모드)', content: b64utf8(dataFileText()), sha, branch: g.branch })
    });
    if (!res.ok) {
      let m = '';
      try { m = (await res.json()).message; } catch (e) { /* noop */ }
      throw new Error(`저장 실패 (${res.status}) ${m}`);
    }
  }
  function download(name, text) {
    const a = el('a', { href: URL.createObjectURL(new Blob([text], { type: 'text/javascript' })), download: name });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  function adminList() {
    if (!isAuthed()) return go('#/admin');
    setTheme('white');
    const dirty = lsGet(LS_DIRTY, false);

    const rows = DB.passages.map((p, i) => el('div', { class: 'admin-row' },
      el('div', { class: 't' }, p.title),
      el('span', { class: 'meta' }, `${p.sentences.length}문장`),
      el('button', { class: 'small-btn', disabled: i === 0, onclick: () => movePassage(i, -1), 'aria-label': '위로' }, '↑'),
      el('button', { class: 'small-btn', disabled: i === DB.passages.length - 1, onclick: () => movePassage(i, 1), 'aria-label': '아래로' }, '↓'),
      el('a', { class: 'small-btn', href: `#/admin/edit/${p.id}`, style: 'text-decoration:none;color:inherit' }, '수정'),
      el('button', {
        class: 'small-btn danger',
        onclick: () => { if (confirm(`"${p.title}" 지문을 삭제할까요?`)) { DB.passages.splice(i, 1); saveDB(); render(); } }
      }, '삭제')));
    function movePassage(i, d) {
      const a = DB.passages;
      [a[i], a[i + d]] = [a[i + d], a[i]];
      saveDB(); render();
    }

    // GitHub 반영
    const g = ghConfig();
    const fOwner = el('input', { value: g.owner, placeholder: 'GitHub 아이디' });
    const fRepo = el('input', { value: g.repo, placeholder: '저장소 이름' });
    const fBranch = el('input', { value: g.branch, placeholder: 'main' });
    const fToken = el('input', { type: 'password', value: g.token || '', placeholder: 'github_pat_...' });
    const status = el('span', { class: 'status' });
    const saveGh = () => lsSet(LS_GH, { owner: fOwner.value.trim(), repo: fRepo.value.trim(), branch: fBranch.value.trim(), token: fToken.value.trim() });
    const pubBtn = el('button', {
      class: 'btn', onclick: async () => {
        saveGh();
        pubBtn.disabled = true; status.textContent = '저장 중...';
        try {
          await publishToGitHub();
          lsSet(LS_DIRTY, false);
          status.textContent = '반영 완료! 1~10분 뒤 사이트에 적용돼요.';
          if (banner) banner.remove();
        } catch (e) { status.textContent = e.message; }
        pubBtn.disabled = false;
      }
    }, 'GitHub에 반영하기');

    const fileInp = el('input', { type: 'file', accept: '.js,.json', style: 'display:none' });
    fileInp.addEventListener('change', async () => {
      const f = fileInp.files[0];
      if (!f) return;
      try {
        const txt = (await f.text()).trim().replace(/^window\.SITE_DATA\s*=\s*/, '').replace(/;\s*$/, '');
        const data = JSON.parse(txt);
        if (!Array.isArray(data.passages)) throw new Error();
        if (!confirm(`지문 ${data.passages.length}개를 불러와서 지금 내용을 바꿀까요?`)) return;
        DB = data; saveDB(); render(); toast('불러왔어요');
      } catch (e) { toast('파일 형식이 올바르지 않아요'); }
    });

    const pwNew = el('input', { type: 'password', placeholder: '새 비밀번호' });
    const pwOut = el('input', { readonly: true, placeholder: '여기에 해시가 나와요' });

    const banner = dirty ? el('div', { class: 'banner' },
      '수정한 내용이 지금은 이 브라우저에만 저장돼 있어요. 다른 사람도 보려면 아래 "GitHub에 반영하기"를 누르거나, data.js를 내려받아 저장소에 올려 주세요.') : null;

    return [
      header('수정모드', {
        back: '#/', right: [
          el('a', { class: 'btn', href: '#/admin/edit/new' }, '+ 지문 추가하기'),
          el('button', { class: 'btn ghost', onclick: () => { setAuthed(false); go('#/'); } }, '나가기')]
      }),
      el('div', { class: 'wrap', style: 'max-width: 960px' },
        banner,
        rows.length ? rows : el('div', { class: 'empty' }, '지문이 없어요. 오른쪽 위 "+ 지문 추가하기"를 눌러 주세요.'),

        el('div', { class: 'section' },
          el('h3', {}, 'GitHub에 반영하기'),
          el('p', {}, '저장소의 data.js 파일을 바로 고쳐서 모든 사람에게 적용해요. 토큰은 이 브라우저에만 저장돼요. (만드는 법은 README 참고)'),
          el('div', { class: 'fields' },
            el('label', { class: 'field' }, 'GitHub 아이디', fOwner),
            el('label', { class: 'field' }, '저장소 이름', fRepo),
            el('label', { class: 'field' }, '브랜치', fBranch),
            el('label', { class: 'field' }, '토큰 (Contents 읽기/쓰기)', fToken)),
          el('div', { class: 'row-btns' }, pubBtn, status)),

        el('div', { class: 'section' },
          el('h3', {}, '백업 · 파일로 옮기기'),
          el('p', {}, 'data.js를 내려받아 저장소에 직접 올려도 돼요.'),
          el('div', { class: 'row-btns' },
            el('button', { class: 'btn ghost', onclick: () => download('data.js', dataFileText()) }, 'data.js 내려받기'),
            el('button', { class: 'btn ghost', onclick: () => fileInp.click() }, '파일 불러오기'),
            el('button', {
              class: 'btn danger', onclick: () => {
                if (!confirm('이 브라우저에서 수정한 내용을 버리고 사이트에 올라가 있는 원래 data.js로 되돌릴까요?')) return;
                lsDel(LS_DATA); lsSet(LS_DIRTY, false); DB = loadData(); render(); toast('되돌렸어요');
              }
            }, '원래대로 되돌리기'),
            fileInp)),

        el('div', { class: 'section' },
          el('h3', {}, '비밀번호 바꾸기'),
          el('p', {}, '새 비밀번호의 해시를 만든 뒤 config.js의 passwordHash 값을 이것으로 바꿔 주세요.'),
          el('div', { class: 'fields' }, el('label', { class: 'field' }, '새 비밀번호', pwNew), el('label', { class: 'field' }, '해시', pwOut)),
          el('div', { class: 'row-btns' },
            el('button', { class: 'btn ghost', onclick: async () => { if (pwNew.value) { pwOut.value = await sha256(pwNew.value); pwOut.select(); } } }, '해시 만들기'))))
    ];
  }

  function adminEdit(pid) {
    if (!isAuthed()) return go('#/admin');
    const orig = pid === 'new' ? null : findP(pid);
    if (pid !== 'new' && !orig) return go('#/admin/list');
    setTheme('white');
    const draft = orig ? JSON.parse(JSON.stringify(orig)) : { id: uid('p'), title: '', sentences: [{ id: uid('s'), en: '', ko: '' }] };

    const title = el('input', { class: 'title-input', placeholder: '제목', value: draft.title, oninput: e => { draft.title = e.target.value; } });
    const list = el('div');
    const bulkEn = el('textarea', { rows: 5, placeholder: '영어 지문 전체를 붙여 넣으세요' });
    const bulkKo = el('textarea', { rows: 5, placeholder: '한글 해석 전체를 붙여 넣으세요' });

    function editPair(s, i) {
      const en = el('textarea', { class: 'box-en edit', placeholder: '영어 문장', rows: 1, value: s.en, oninput: e => { s.en = e.target.value; autosize(e.target); } });
      const ko = el('textarea', { class: 'box-ko edit', placeholder: '한글 해석', rows: 1, value: s.ko, oninput: e => { s.ko = e.target.value; autosize(e.target); } });
      const n = draft.sentences.length;
      return el('div', { class: 'pair' },
        el('div', { class: 'pair-tools' },
          el('span', { class: 'num' }, i + 1),
          el('div', { class: 'row-btns' },
            el('button', { class: 'small-btn', disabled: i === 0, onclick: () => move(i, -1) }, '↑'),
            el('button', { class: 'small-btn', disabled: i === n - 1, onclick: () => move(i, 1) }, '↓'),
            el('button', { class: 'small-btn danger', onclick: () => { if ((!s.en && !s.ko) || confirm('이 문장을 삭제할까요?')) { draft.sentences.splice(i, 1); draw(); } } }, '삭제'))),
        en, ko);
    }
    function move(i, d) { const a = draft.sentences; [a[i], a[i + d]] = [a[i + d], a[i]]; draw(); }
    function draw() {
      list.replaceChildren(...draft.sentences.map(editPair));
      requestAnimationFrame(() => list.querySelectorAll('textarea').forEach(autosize));
    }
    function addBulk() {
      const ens = splitSentences(bulkEn.value), kos = splitSentences(bulkKo.value);
      if (!ens.length && !kos.length) { toast('붙여 넣은 내용이 없어요'); return; }
      draft.sentences = draft.sentences.filter(s => s.en.trim() || s.ko.trim());
      for (let i = 0; i < Math.max(ens.length, kos.length); i++) draft.sentences.push({ id: uid('s'), en: ens[i] || '', ko: kos[i] || '' });
      bulkEn.value = ''; bulkKo.value = '';
      draw();
      toast(ens.length === kos.length ? `${ens.length}문장을 추가했어요` : `영어 ${ens.length}문장, 해석 ${kos.length}문장이에요. 짝이 맞는지 확인해 주세요`);
    }
    function save() {
      const t = draft.title.trim();
      if (!t) { toast('제목을 입력해 주세요'); title.focus(); return; }
      const sentences = draft.sentences
        .map(s => ({ id: s.id, en: s.en.trim().replace(/\s+/g, ' '), ko: s.ko.trim() }))
        .filter(s => s.en);
      if (!sentences.length) { toast('영어 문장을 하나 이상 입력해 주세요'); return; }
      const saved = { id: draft.id, title: t, sentences };
      const idx = DB.passages.findIndex(p => p.id === draft.id);
      if (idx >= 0) DB.passages[idx] = saved; else DB.passages.push(saved);
      saveDB();
      toast('저장했어요');
      location.hash = '#/admin/list';
    }
    draw();
    return [
      el('header', { class: 'topbar' },
        el('div', { class: 'topbar-left' }, el('a', { class: 'icon-btn', href: '#/admin/list', 'aria-label': '뒤로' }, '←'), title),
        el('div', { class: 'topbar-right' }, el('button', { class: 'btn', onclick: save }, orig ? '저장하기' : '지문 추가하기'))),
      el('div', { class: 'wrap' },
        list,
        el('div', { class: 'add-row' }, el('button', { class: 'btn ghost', onclick: () => { draft.sentences.push({ id: uid('s'), en: '', ko: '' }); draw(); } }, '+ 문장 추가')),
        el('div', { class: 'section' },
          el('h3', {}, '한 번에 붙여 넣기'),
          el('p', {}, '지문 전체를 붙여 넣으면 문장별로 나눠서 추가해요. 줄바꿈이 있으면 한 줄을 한 문장으로, 없으면 . ? ! 기준으로 나눠요.'),
          el('div', { class: 'fields' }, el('label', { class: 'field' }, '영어', bulkEn), el('label', { class: 'field' }, '한글 해석', bulkKo)),
          el('div', { class: 'row-btns' }, el('button', { class: 'btn', onclick: addBulk }, '문장 나눠서 추가'))))
    ];
  }

  // ---------- 라우터 ----------
  const routes = [
    [/^$/, home],
    [/^(study|arrange|write|review)$/, passageList],
    [/^study\/([^/]+)$/, studyView],
    [/^(arrange|write)\/([^/]+)$/, sentenceSelect],
    [/^quiz$/, quizView],
    [/^review\/([^/]+)$/, reviewView],
    [/^review\/([^/]+)\/retest$/, retestChoose],
    [/^admin$/, adminLogin],
    [/^admin\/list$/, adminList],
    [/^admin\/edit\/([^/]+)$/, adminEdit]
  ];
  function render() {
    const path = location.hash.replace(/^#\/?/, '');
    onKey = null;
    for (const [re, fn] of routes) {
      const m = path.match(re);
      if (!m) continue;
      const view = fn(...m.slice(1).map(decodeURIComponent));
      if (view) { $app.replaceChildren(...[].concat(view).filter(Boolean)); window.scrollTo(0, 0); }
      return;
    }
    go('#/');
  }
  window.addEventListener('hashchange', render);

  // data.js는 캐시를 피하려고 매번 새로 불러온다
  const s = document.createElement('script');
  s.src = 'data.js?t=' + Date.now();
  s.onload = s.onerror = () => { DB = loadData(); render(); };
  document.head.append(s);
})();
