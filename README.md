# 백설산장의 밀실

한국어 텍스트 추리 어드벤처의 플레이 가능한 프로토타입입니다. 인물 간 대화로 시작하는 프롤로그 뒤에 장소를 자유롭게 조사해 강태오 살인사건을 해결하고, 새로운 조난자 백진우의 등장과 박준혁 살인사건까지 이어집니다.

## 실행 방법

1. `index.html` 파일을 더블클릭해 Chrome, Edge 등 최신 브라우저에서 엽니다.
2. 처음 안내 창의 설명을 확인한 뒤 장소를 이동하며 조사합니다.
3. 정적 HTML 프로토타입이므로 별도의 설치나 빌드 과정은 필요하지 않습니다.

인터넷 연결 없이도 게임은 실행되지만, 웹 폰트는 기본 시스템 글꼴로 대체됩니다.

## 조작 방법

- 왼쪽 장소 목록에서 식당, 복도, 서재, 전기실로 이동합니다.
- 가운데 조사 항목을 클릭해 진술과 단서를 확인합니다.
- 오른쪽 메뉴의 인벤토리 아이콘을 누르면 시작 소지품과 발견한 단서를 확인할 수 있습니다. 단서를 고른 뒤 가운데 패널에서 인물에게 제시합니다.
- 인물 기록 아이콘은 프로필과 첫인상을, 수사 기록 아이콘은 조사·대화 로그를 엽니다.
- 산장 체크인 뒤 인물을 한 명씩 소개하는 프로필 장면을 거칩니다. 본게임에서도 인물 기록 창에서 프로필을 다시 볼 수 있습니다.
- 단서 설명과 증거 사진은 각 단서를 처음 열 때 한 번 표시됩니다. 이후에는 인벤토리에서 단서를 바로 선택해 제시할 수 있습니다.
- 단서를 모은 뒤 `최종 추리`에서 범인, 동기, 범행 트릭을 선택합니다.
- 프롤로그 선택지 하나를 고른 뒤 사건을 시작합니다.
- 조사 행동이나 시간대 제한 없이 장소와 인물을 자유롭게 다시 살펴볼 수 있습니다.
- 단서 6개 이상을 모으면 최종 추리를 제출할 수 있습니다.
- 첫 번째 사건을 해결하면 `다음 사건`을 눌러 제2장으로 진행합니다. 자료 보관실과 현관 홀을 조사해 두 번째 사건의 범인·동기·결정적 증거를 추리합니다.
- 우측 상단 `?` 버튼에서 조작 안내를 다시 볼 수 있습니다.
- 우측 상단의 `소리 켜짐/꺼짐` 버튼과 음량 슬라이더로 배경음·효과음을 조절합니다. 브라우저 정책상 첫 화면에서는 첫 클릭 이후 소리가 시작됩니다.

## 현재 구현

- 장소 이동과 장소별 조사 항목
- 조사한 항목 및 획득한 단서의 수첩 기록
- 단서 선택 및 인물에게 제시, 상황별 반응
- 조사 대상을 열 때마다 공간·인물·단서 상세를 보여주는 현장 컷신
- 대화와 진술 기록, 조사 진행 표시
- 컷신에서 인물 대화와 기록 나레이션을 별도 영역으로 구분
- 인벤토리·인물 기록·수사 기록을 각각 독립 아이콘과 창으로 여는 수사 메뉴
- 서진의 가족사진과 산장 객실 열쇠를 시작 소지품으로 표시
- 조사 대상에 맞춰 실제 음원을 배정했습니다. 문·빗장은 잠금 소리, 문서와 사진은 페이지 넘김, 전기실은 스위치, 영상은 카메라 셔터, 시계는 째깍임을 재생합니다.
- 장면 전환의 효과음은 Web Audio 합성을 쓰지 않고 Pixabay의 녹음 음원을 사용합니다. 눈보라는 반복 재생하고, 체크인에는 나무 계단, 태오의 선언에는 식기, 정전에는 나무 바닥 발걸음과 충돌, 서재 발견에는 문 충돌음과 사람의 비명을 배치했습니다.
- 인물별 대화 상황에 맞춘 별도 기록 나레이션
- Web Audio로 만든 낮은 분위기 음악, 장면·단서별 MP3 재생과 음량 조절
- 범인·동기·밀실 트릭을 고르는 최종 추리와 해결 화면
- 좁은 화면에 맞춘 반응형 배치
- 산장 체크인까지의 프롤로그 3장면과 입장 후 별도 컷신 7장면
- 체크인 직후 주요 인물의 개별 프로필 소개(강태오 포함), 본게임 인물 탭의 상세 프로필 창
- 1차 사건 정답 뒤 미란의 자백, 18년 전 거짓 기록의 동기, 사망 시각 조작과 자동잠금을 밝히는 3장면 후일담
- 백진우의 가짜 현관 도착, 박준혁의 과거 거짓 증언 고백, 자료 보관실 사망 장면을 잇는 제2장 컷신
- 인물끼리 주고받는 대화, 태오의 선언과 초상화, 정전, 시신 발견, 생존자들의 현장 반응
- 제한 없는 장소 조사와 단서 6개 기반 최종 추리 해금
- 대화 장면에 인물 초상화 파일을 연결할 수 있는 UI
- 2차 사건: 백진우의 직원 통로 선입장·현관 재등장, 준혁 살해 시각과 비명 시각을 분리하는 단서, 별도 최종 추리
- 1차 사건의 새 단서: 11시 32분에 멈춘 손목시계, 정전 전 서재를 나가는 영상, 사라진 청동 문진
- 2차 사건의 새 단서: 눈 없는 부츠, 직원 통로 빗장, 보관실 은신 흔적, 보정 가능한 멈춘 시계
- 장면별 CSS 배경 일러스트(식당, 복도, 서재, 전기실, 현관, 자료 보관실)
- `assets` 폴더에 장면 배경 이미지를 아래 이름으로 추가하면 자동 표시됩니다. 가로형 16:9 이미지를 권장합니다.
  - 본편: `bg-dining.png`(식당), `bg-hallway.png`(복도), `bg-study-crime-scene.png`(서재), `bg-power-room.png`(전기실), `bg-archive-crime-scene.png`(자료 보관실), `bg-foyer-storm.png`(현관)
  - 시계·기록·잠금장치 단서는 기존 증거 이미지(`evidence-records.png`, `evidence-camera.png`, `evidence-lock.png`)를 재사용
  - 프롤로그·컷신: `bg-prologue-memory.png`(18년 전 사건의 산장), `bg-prologue-road.png`(눈 덮인 산길), `bg-prologue-lodge.png`(산장 체크인), `bg-prologue-archive.png`(오래된 봉투와 기록), `bg-prologue-dining.png`(저녁 식탁), `bg-prologue-blackout.png`(정전 직후 복도), `bg-taeo-death-scene.png`(태오의 시신을 발견한 순간과 놀라 비명을 지르는 사람들)
- 강태오 초상화는 `assets/portrait-kang-taeo.png`로 넣으면 컷신 대화에 표시됩니다. 정사각형 인물 초상화를 권장합니다.
- 가운데 단서 제시 패널, 확대된 글자와 수사 아이콘 UI

## 아직 구현하지 않은 내용

- 18년 전 김수아 사건의 전체 조사와 결말 선택
- 실제 인물 초상화 및 증거·장면 이미지 파일. UI에는 이미지 슬롯과 CSS 대체 장면을 준비했습니다. 이미지 생성 API는 크레딧 잔액 부족 응답으로 중단됐습니다.
- 저장/불러오기와 추가 접근성 옵션
- 인물별 AI 더빙 음원. 현재 대사는 텍스트로 표시되며, 생성한 음성 파일을 연결하는 기능은 아직 추가되지 않았습니다.
- 단서 조합에 따라 달라지는 분기 대화와 복수 엔딩

## 파일 구성

- `index.html` — 화면 구조
- `style.css` — 색상, 레이아웃, 반응형 스타일
- `progression.css` — 프롤로그와 장면 일러스트 스타일
- `ui-scale.css` — 글자 크기와 주요 패널 크기
- `polish.css` — 화면 배치, 대형 초상화, 장면 이미지, 프롤로그 디자인
- `audio-narration.css` — 컷신 나레이션 구분과 오디오 조절 UI
- `game.js` — 두 사건의 장소, 조사, 단서, 대화, 추리 진행 로직
- `assets/audio/` — 장면에 연결한 Pixabay 효과음 MP3
- `tmp/imagegen-prompts.jsonl` — 준비한 초상화·장면·증거 이미지 생성 프롬프트

## 오디오 출처

장면·단서 효과음은 Pixabay Content License의 무료 사용 음원을 내려받아 로컬 파일로 포함했습니다.

- 눈보라 — [DRAGON-STUDIO](https://pixabay.com/sound-effects/nature-blizzard-wind-463217/)
- 나무 계단 — [VMan533](https://pixabay.com/sound-effects/household-2-wood-staircase-old-creaking-footsteps-25941/)
- 식기 — [Soul_Serenity_Sounds](https://pixabay.com/sound-effects/household-cutlery-clinking-243573/)
- 나무 바닥 발걸음 — [spinopel](https://pixabay.com/sound-effects/film-special-effects-run-on-wooden-floor-381885/)
- 무거운 충돌 — [DRAGON-STUDIO](https://pixabay.com/sound-effects/film-special-effects-heavy-object-falling-515261/)
- 문 충돌 — [SoundReality](https://pixabay.com/sound-effects/film-special-effects-door-slam-172171/)
- 비명 — [WakanaTsukiko](https://pixabay.com/sound-effects/people-female-scream-short-251067/)
- 페이지 넘김 — [XpMonster](https://pixabay.com/sound-effects/film-special-effects-turning-page-in-a-book-419580/)
- 전등 스위치 — [DRAGON-STUDIO](https://pixabay.com/sound-effects/household-light-switch-382712/)
- 잠금장치 — [DRAGON-STUDIO](https://pixabay.com/sound-effects/film-special-effects-heavy-door-unlocking-515258/)
- 카메라 셔터 — [SoundReality](https://pixabay.com/sound-effects/film-special-effects-camera-shutter-171782/)
- 시계 — [Virtual_Vibes](https://pixabay.com/sound-effects/film-special-effects-real-clock-ticking-379469/)

음원은 게임 폴더의 `assets/audio/`에 포함되어 있어 별도 API 키나 설치가 필요하지 않습니다. 첫 화면에서 프롤로그 진행 버튼 등 게임 영역을 한 번 클릭하면 브라우저의 자동 재생 제한이 풀리고, 그 뒤 배경음과 효과음이 재생됩니다. 재생 실패나 파일 누락은 개발자 도구 콘솔에 오류로 표시됩니다.
