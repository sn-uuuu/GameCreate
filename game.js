(() => {
  const people = [
    { id: 'seojin', name: '윤서진', role: '여행객', note: '오래전 산장에서 사라진 김수아의 동생. 태오에게 할 말이 있다.', profile: '언니 김수아의 실종을 확인하기 위해 18년 만에 백설산장을 찾았다. 공식 기록에는 언니가 스스로 산을 떠났다고 적혀 있지만, 서진은 그 기록을 믿지 않는다.', firstImpression: '젖은 코트 안주머니에 오래된 가족사진을 간직하고 있다. 산장 주인의 이름을 듣자 표정이 굳는다.', icon: '尹', portrait: 'assets/portrait-yun-seojin.png', color: 'seojin' },
    { id: 'junhyuk', name: '박준혁', role: '의사', note: '출장 중 폭설로 발이 묶였다. 태오와 과거의 일을 알고 있다.', profile: '출장을 위해 산길을 지나던 의사. 폭설로 귀가가 막혀 산장에 묵게 됐다. 강태오와 과거에 몇 차례 만난 적이 있지만, 그 이유를 자세히 말하려 하지 않는다.', firstImpression: '끊긴 휴대전화를 반복해서 확인한다. 김수아라는 이름이 나오면 대화를 피하는 듯하다.', icon: '朴', portrait: 'assets/portrait-park-junhyuk.png', color: 'junhyuk' },
    { id: 'miran', name: '최미란', role: '산장 관리인', note: '산장에서 오래 일했다. 18년 전 사건을 알고 있다.', profile: '백설산장을 오래 관리해 온 직원. 18년 전 김수아가 사라졌을 당시에도 이곳에서 일했다. 손님을 능숙하게 챙기지만, 과거 사건에 관해서는 말을 아낀다.', firstImpression: '서진의 이름을 듣고 펜을 잠깐 멈춘다. 곧 아무 일도 없었다는 듯 체크인을 이어간다.', icon: '崔', portrait: 'assets/portrait-choi-miran.png', color: 'miran' },
    { id: 'doyun', name: '한도윤', role: '영상 제작자', note: '눈보라 풍경을 촬영하러 왔다. 정전 직전 카메라를 켜 두었다.', profile: '겨울 산의 풍경을 촬영하는 영상 제작자. 백설산장은 이번이 첫 방문이다. 장비를 아끼고 기록을 꼼꼼히 남기는 편이라 정전 당시에도 카메라를 켜 두었다.', firstImpression: '사람들의 얼굴 대신 창문과 눈보라를 찍겠다고 약속한다. 낯선 사람들 사이에서 먼저 긴장을 풀어 보려 한다.', icon: '韓', portrait: 'assets/portrait-han-doyun.png', color: 'doyun' },
    { id: 'taeo', name: '강태오', role: '백설산장 주인', note: '산장의 주인. 다음 날 18년 전 기록을 공개하겠다고 선언했다.', profile: '백설산장을 운영하는 주인. 18년 전 김수아가 사라졌을 때 산장에 있었고, 그날의 기록을 오랫동안 감춰 왔다. 오늘 밤 손님들에게 다음 날 진실을 밝히겠다고 선언한다.', firstImpression: '낡은 봉투를 식탁 위에 올려놓고 서진에게 먼저 말을 건다. 정중하지만 결심을 굽힐 생각은 없어 보인다.', icon: '姜', portrait: 'assets/portrait-kang-taeo.png', color: 'taeo', hidden: true, introProfile: true, profileOnly: true },
    { id: 'jinwoo', name: '백진우', role: '조난자', note: '폭설 속에서 산장에 도착했다. 김수아와 가까운 사이였다.', profile: '한밤중 폭설을 뚫고 산장에 도착한 남자. 김수아와 가까운 사이였다고 말하지만, 도착 시각과 산길에서 있었던 일에 관한 설명은 앞뒤가 맞지 않는다.', firstImpression: '젖은 외투를 입고 나타나자마자 태오의 죽음을 알아본 듯한 말을 한다.', icon: '白', portrait: 'assets/portrait-baek-jinwoo.png', color: 'jinwoo', hidden: true }
  ];

  const clues = {
    door: { title: '자동으로 잠기는 서재 문', icon: '⌑', detail: '문을 닫자 잠금쇠가 저절로 걸렸다. 안쪽에서 잠갔다는 증거는 없다.' },
    scratch: { title: '걸쇠 옆의 오래된 긁힘', icon: '⌁', detail: '최근 침입자의 흔적이 아니라 오래 사용한 잠금장치 주변의 마모처럼 보인다.' },
    note: { title: '태오의 일정 메모', icon: '▤', detail: '“미란과 먼저 이야기한 뒤 기록을 꺼낼 것.” 태오는 미란과 단둘이 만날 예정이었다.' },
    ledger: { title: '사라진 기록철', icon: '▧', detail: '18년 전 김수아 사건을 적은 기록철에서 일부 내용이 뜯겨 나갔다.' },
    switch: { title: '전기실 스위치의 흔적', icon: 'ϟ', detail: '차단기 주변의 먼지가 최근 한쪽으로 쓸렸다. 누군가 정전 직전에 만졌다.' },
    wet: { title: '전기실 바닥의 젖은 자국', icon: '❄', detail: '젖은 발자국이 전기실에서 직원 통로 쪽으로 이어진다.' },
    footage: { title: '도윤의 정전 직전 영상', icon: '▣', detail: '영상 시각은 11시 34분. 전등이 켜진 상태에서 한 사람이 서재를 나와 천에 싼 청동색 물체를 직원 통로로 가져간다. 얼굴은 보이지 않지만, 태오의 시계가 멈춘 11시 32분과 정전 시각 11시 47분 사이의 중요한 장면이다.' },
    kitchen: { title: '식지 않은 주전자', icon: '♨', detail: '미란은 정전 중 내내 주방에 있었다고 했지만, 주전자는 한동안 손대지 않은 상태였다.' },
    watch: { title: '11시 32분에 멈춘 손목시계', icon: '◷', detail: '태오의 시계는 11시 32분을 가리킨 채 깨져 있다. 충격으로 멈췄을 수 있지만, 정전 시각보다 15분 빠르다.' },
    bookend: { title: '사라진 청동 문진', icon: '◈', detail: '서재 책상 위 청동 문진 한 쌍 중 하나가 사라졌다. 무게와 모서리의 형태는 태오의 상처와 맞을 가능성이 있다.' },
    photoFiber: { title: '서재 바닥의 사진 봉투 섬유', icon: '▧', detail: '책상 아래에서 낡은 사진 봉투의 푸른 종이 섬유가 발견됐다. 서진이 지닌 가족사진 봉투와 비슷하지만, 오래된 산장 문서 봉투도 같은 종이로 만들어졌다. 누군가 서재를 뒤졌다는 단서일 뿐 범행을 증명하지는 않는다.' },
    medicalMemo: { title: '준혁의 접힌 진료 메모', icon: '✎', detail: '준혁의 수첩에 “손목시계 11:32 / 사후 경직 미확인 / 사망 시각 단정 금지”라고 적혀 있다. 그는 현장에 도착하기 전부터 시계 시각을 알고 있었거나, 시신을 남들보다 먼저 살폈을 가능성이 있다.' },
    cameraGap: { title: '카메라 기록의 13분 공백', icon: '▣', detail: '도윤은 저녁 내내 촬영했다고 했지만 메모리에는 11시 33분부터 11시 46분까지 영상이 없다. 자동 정지인지 수동 삭제인지 아직 알 수 없다. 그 공백에는 정전과 태오의 추정 사망 시각이 모두 포함된다.' },
    jinNote: { title: '준혁의 접힌 메모', icon: '▤', detail: '“태오가 수아를 죽였다는 걸 알면서도 나는 거짓 증언을 했다. 진우가 오면 원본을 보여주고 서진 씨에게도 말하겠다.”' },
    oldPhoto: { title: '수아와 진우의 사진', icon: '▧', detail: '사진 뒷면에는 18년 전 산장 날짜와 두 사람의 이름이 적혀 있다.' },
    guestBook: { title: '숙박부의 덧쓴 이름', icon: '✎', detail: '진우의 이름은 산장에 도착했다고 주장한 시각보다 앞서 적혀 있다.' },
    archiveDust: { title: '자료 보관함의 먼지 자국', icon: '▥', detail: '원본 기록철이 있던 자리만 비어 있다. 누군가는 사건 직후 그것을 찾아 가져갔다.' },
    cameraSecond: { title: '도윤 카메라의 짧은 장면', icon: '▣', detail: '준혁이 보관실로 향하기 전, 진우가 같은 통로에 들어가는 모습이 찍혔다.' },
    tornLetter: { title: '찢긴 편지 조각', icon: '▱', detail: '수아가 진우에게 보낸 편지다. “그날 밤 태오와 다시 이야기하겠다”는 문장이 남아 있다.' },
    dryBoots: { title: '눈이 묻지 않은 부츠 밑창', icon: '⌁', detail: '진우는 눈길을 걸어왔다고 했지만 밑창 홈에는 눈과 물기가 거의 없다. 외투의 눈은 현관에서 묻힌 것처럼 표면에만 남았다.' },
    serviceLatch: { title: '직원 통로의 안쪽 빗장', icon: '⌑', detail: '직원 통로 바깥문 빗장에는 안쪽에서 급히 열고 닫은 새 긁힘이 있다. 현관을 통하지 않고 드나들 수 있는 길이다.' },
    blanket: { title: '보관실 구석의 접힌 담요', icon: '▧', detail: '담요와 빈 보온병, 젖은 외투를 말린 흔적이 숨겨져 있다. 누군가 공개적으로 도착하기 전부터 산장 안에 머물렀다.' },
    clock: { title: '멈춘 벽시계와 녹음 시각', icon: '◷', detail: '보관실 벽시계는 00시 18분에 멈췄다. 도윤 카메라의 시각 보정음과 비교하면 시계는 9분 빠르다. 비명은 00시 27분, 실제 사망 시각은 그보다 앞선다.' }
  };
  const clueImages = {
    door: 'assets/evidence-lock.png', scratch: 'assets/evidence-lock.png',
    note: 'assets/evidence-records.png', ledger: 'assets/evidence-records.png', jinNote: 'assets/evidence-records.png', archiveDust: 'assets/evidence-records.png',
    switch: 'assets/evidence-power.png', wet: 'assets/evidence-power.png',
    footage: 'assets/evidence-camera.png', cameraSecond: 'assets/evidence-camera.png',
    kitchen: 'assets/evidence-teapot.png', oldPhoto: 'assets/evidence-mementos.png', guestBook: 'assets/evidence-mementos.png', tornLetter: 'assets/evidence-mementos.png',
    watch: 'assets/evidence-records.png', bookend: 'assets/evidence-records.png', photoFiber: 'assets/evidence-mementos.png', medicalMemo: 'assets/evidence-records.png', cameraGap: 'assets/evidence-camera.png', dryBoots: 'assets/evidence-mementos.png', serviceLatch: 'assets/evidence-lock.png', blanket: 'assets/evidence-records.png', clock: 'assets/evidence-camera.png'
  };
  const startingItems = [
    { icon: '▧', title: '수아와 찍은 가족사진', type: '개인 소지품', detail: '서진이 언니와 함께 찍은 오래된 사진. 뒷면에는 “그 사람에게 물어봐”라는 수아의 글씨가 남아 있다.' },
    { icon: '⌑', title: '객실 열쇠', type: '산장 지급품', detail: '체크인 때 최미란에게 받은 황동 열쇠. 작은 나무 패에 객실 번호가 새겨져 있다.' }
  ];

  const locations = [
    { id: 'dining', name: '산장의 식당', icon: '▤', time: '밤 11:47', type: '사건 현장', art: '⌂', title: '산장의 식당', description: '저녁 식사 자리는 아직 정리되지 않았다. 빈 의자와 식은 음식 사이로, 태오가 기록을 공개하겠다고 말한 뒤의 긴장이 남아 있다.', actions: [
      { id: 'dinner', title: '저녁 식사 자리', icon: '▦', text: '태오는 내일 오래된 기록을 공개하겠다고 했다. 그 말에 미란은 잠시 숟가락을 내려놓았고, 서진은 태오를 똑바로 바라봤다.', log: '저녁 식사에서 태오는 다음 날 기록을 공개하겠다고 선언했다.' },
      { id: 'kitchen', title: '주방의 주전자', icon: '♨', clue: 'kitchen', text: '주전자는 미지근하다. 미란은 정전 당시 주방에서 차를 준비하고 있었다고 했지만, 그 시간 동안 차가 나간 흔적은 없다.', log: '주방의 상태가 미란의 알리바이와 어긋난다.' },
      { id: 'seojin-talk', title: '윤서진과 대화', icon: '◌', person: 'seojin', text: '서진은 “태오 씨가 기록을 공개한다고 했을 때, 모두가 놀란 건 아니었어요. 누군가는 이미 그 내용을 알고 있었겠죠.”라고 말한다. 이어 “저는 서재에 들어간 적 없어요. 기록은 내일 듣기로 했습니다.”라고 덧붙인다.', log: '서진은 기록 공개를 기다렸다고 하면서도 서재 출입은 부인한다.' },
      { id: 'doyun-talk', title: '한도윤과 대화', icon: '◌', person: 'doyun', text: '도윤은 “눈이 너무 심해서 촬영을 접으려던 참이었어요. 저녁 내내 카메라는 켜져 있었고요.”라고 말한다.', log: '도윤은 저녁 내내 카메라를 켜 두었다고 주장한다.' },
      { id: 'camera-gap', title: '카메라 메모리 카드', icon: '▣', clue: 'cameraGap', person: 'doyun', text: '저녁 촬영분은 11시 33분에서 끊겼다가 11시 47분 정전 직후 다시 시작된다. 파일이 자동으로 나뉜 흔적은 있지만 공백이 생긴 이유는 알 수 없다.', log: '도윤의 촬영 공백은 그의 알리바이를 약하게 만들지만, 편집 여부는 확인되지 않았다.' }
    ] },
    { id: 'hall', name: '복도', icon: '⌁', time: '밤 11:49', type: '이동 구역', art: '⋯', title: '서재 앞 복도', description: '비상등이 푸른빛을 내며 복도를 비춘다. 서재 문은 열려 있고, 복도 끝에는 직원 전용 통로와 전기실 문이 보인다.', actions: [
      { id: 'door', title: '서재 문과 잠금장치', icon: '⌑', clue: 'door', text: '문을 닫자 잠금쇠가 자동으로 걸린다. 안에서 걸쇠를 돌리지 않아도 문은 잠긴다.', log: '서재 문은 닫히는 순간 자동 잠금된다. 밀실의 전제가 흔들린다.' },
      { id: 'scratch', title: '걸쇠 주변의 마모', icon: '⌁', clue: 'scratch', text: '걸쇠 옆에 오래된 긁힘이 여러 겹 있다. 최근 도구로 억지로 연 흔적은 아니다.', log: '잠금장치는 오래되어 마모됐지만 강제로 열린 흔적은 없다.' },
      { id: 'hallway', title: '직원 전용 통로', icon: '⇢', text: '통로는 주방과 전기실 뒤편으로 이어진다. 투숙객은 구조를 잘 모를 수 있다.', log: '직원 통로는 주방과 전기실에 빠르게 오갈 수 있는 길이다.' },
      { id: 'miran-hall-talk', title: '최미란과 대화', icon: '◌', person: 'miran', text: '미란은 “복도에는 계속 사람들이 오갔어요. 누가 어딜 갔는지 제가 다 볼 수는 없죠.”라고 말한다.', log: '미란은 복도에서 다른 사람을 봤을 수 없다고 선을 긋는다.' },
      { id: 'study-approach', title: '서재 문 앞의 종이 조각', icon: '▧', clue: 'photoFiber', person: 'seojin', text: '문턱 아래에 푸른 종이 섬유가 걸려 있다. 서진의 사진 봉투와 색이 비슷하지만 산장 숙박부의 오래된 봉투도 같은 재질이다.', log: '서진은 사건 전후 서재 근처에 있었을 가능성이 생겼다.' }
    ] },
    { id: 'study', name: '서재', icon: '▣', time: '밤 11:51', type: '사건 현장', art: '▤', title: '강태오의 서재', description: '책상 위에는 펼쳐진 서류와 식지 않은 찻잔이 남아 있다. 태오가 공개하려던 기록은 일부 사라졌다. 창문은 안에서 잠겨 있다.', actions: [
      { id: 'note', title: '책상 위 일정 메모', icon: '▤', clue: 'note', text: '메모에는 “미란과 먼저 이야기한 뒤 기록을 꺼낼 것”이라고 적혀 있다.', log: '태오는 살해 전 미란과 단둘이 만나려 했다.' },
      { id: 'ledger', title: '찢긴 기록철', icon: '▧', clue: 'ledger', text: '18년 전 김수아 사건에 관한 기록철이다. 일부 페이지가 통째로 사라졌다.', log: '범인은 태오가 공개하려던 과거 기록을 가져갔다.' },
      { id: 'cup', title: '태오의 찻잔', icon: '◉', text: '찻잔은 거의 비어 있지 않다. 태오는 누군가와 대화하다가 차를 마시지 못한 듯하다.', log: '태오는 차를 마시기 전에 대화를 중단한 것으로 보인다.' },
      { id: 'watch', title: '태오의 깨진 손목시계', icon: '◷', clue: 'watch', text: '시계는 11시 32분에 멈춰 있다. 정전은 11시 47분. 정전 때 살해됐다는 모두의 추정과 맞지 않는다.', log: '시계가 맞다면 태오는 정전 15분 전에 이미 공격당했다.' },
      { id: 'bookend', title: '책상 위 문진의 빈자리', icon: '◈', clue: 'bookend', text: '청동 문진 한 짝만 남았다. 무거운 책을 눌러두던 물건인데, 모서리 한 곳에 어두운 얼룩이 희미하게 남아 있다.', log: '범행 도구로 쓰였을 수 있는 청동 문진 한 짝이 사라졌다.' },
      { id: 'junhyuk-talk', title: '박준혁과 대화', icon: '◌', person: 'junhyuk', text: '준혁은 “18년 전 일은 실종으로 끝났습니다. 시계가 멈춘 시각만으로 사망 시각을 말할 수는 없어요.”라고 답한다. 아직 시계를 보여주지 않았는데도 시각을 먼저 언급했다.', log: '준혁은 시계를 확인하기 전부터 멈춘 시각을 알고 있었던 듯하다.' },
      { id: 'medical-memo', title: '준혁의 진료 수첩', icon: '✎', clue: 'medicalMemo', person: 'junhyuk', text: '수첩에는 시계 시각과 사망 시각을 단정하지 말라는 메모가 있다. 의학적 판단을 미리 준비한 것인지, 현장에서 섣부른 추측을 막으려는 것인지 불분명하다.', log: '준혁은 시신을 살폈거나 시계에 관해 사전 정보를 얻었을 수 있다.' }
    ] },
    { id: 'power', name: '전기실', icon: 'ϟ', time: '밤 11:54', type: '설비 구역', art: 'ϟ', title: '전기실', description: '차단기와 발전기 제어반이 벽을 따라 늘어서 있다. 정전은 몇 분 만에 끝났지만, 눈보라 속에서 누가 이곳을 다녀갔는지 확인할 수 있다.', actions: [
      { id: 'switch', title: '차단기 손잡이', icon: 'ϟ', clue: 'switch', text: '손잡이 주변의 먼지가 최근 쓸렸다. 전원이 자연스럽게 끊긴 것이 아니라 누군가 차단기를 내렸다.', log: '정전은 누군가 차단기를 조작해 일으켰다.' },
      { id: 'wet', title: '바닥의 젖은 자국', icon: '❄', clue: 'wet', text: '젖은 자국은 전기실 문에서 시작해 직원 통로 쪽으로 향한다. 자국만으로 주인을 특정할 수는 없다.', log: '정전 직후 누군가 전기실을 드나들었다.' },
      { id: 'miran-talk', title: '최미란과 대화', icon: '◌', person: 'miran', text: '미란은 “정전 땐 주방에 있었어요. 태오 씨가 서재에 있는 줄도 몰랐습니다.”라고 말한다. 그녀는 전기실 쪽을 보지 않는다.', log: '미란은 정전 내내 주방에 있었다고 주장한다.' },
      { id: 'panel', title: '발전기 점검표', icon: '▤', text: '점검표에는 최근 고장 기록이 없다. 정전은 설비 이상보다 수동 조작일 가능성이 커 보인다.', log: '발전기에는 정전을 일으킬 만한 고장 기록이 없다.' },
      { id: 'footage', title: '도윤의 정전 직전 영상', icon: '▣', clue: 'footage', person: 'doyun', text: '영상의 시각 표시는 11시 34분. 태오의 서재 문이 열리고 한 사람이 청동색 물체를 천으로 감싼 채 직원 통로로 나간다. 전등은 아직 켜져 있다.', log: '정전 13분 전 서재에서 누군가 나왔다. 태오의 시계가 가리킨 시각과 맞물린다.' }
    ] },
    { id: 'archive', name: '자료 보관실', icon: '▥', type: '2차 사건 현장', art: '▥', title: '자료 보관실', description: '준혁이 숨진 채 발견된 방이다. 오래된 장부와 상자들이 벽을 따라 쌓여 있다.', caseTwoOnly: true, actions: [] },
    { id: 'foyer', name: '현관 홀', icon: '⌂', type: '조사 구역', art: '❄', title: '현관 홀', description: '바깥의 눈보라가 현관문을 때린다. 진우가 도착했을 때의 흔적이 아직 남아 있다.', caseTwoOnly: true, actions: [] }
  ];

  const secondActions = {
    archive: [
      { id: 'jun-note', title: '준혁의 접힌 메모', icon: '▤', clue: 'jinNote', text: '“태오가 수아를 죽였다는 걸 알면서도 나는 거짓 증언을 했다. 진우가 오면 원본을 보여주고 서진 씨에게도 말하겠다.”', log: '준혁은 자신의 거짓 증언과 태오의 과거 살인을 알고 있었다.' },
      { id: 'empty-box', title: '비어 있는 기록 보관함', icon: '▥', clue: 'archiveDust', text: '원본 기록철이 있던 칸만 비어 있다. 주변의 먼지가 최근에 쓸려나갔다.', log: '누군가 준혁이 찾던 원본 기록을 가져갔다.' },
      { id: 'letter', title: '찢긴 편지 조각', icon: '▱', clue: 'tornLetter', text: '편지에는 김수아가 사건 당일 태오를 다시 만나겠다고 적혀 있다. 수신인 이름은 찢겨 나갔다.', log: '김수아는 사라지기 전 태오와 다시 만나려 했다.' },
      { id: 'junhyuk-body', title: '준혁의 마지막 메모', icon: '✎', text: '메모 마지막 줄은 “이제는 숨기지 않겠다”에서 끊겨 있다.', log: '준혁은 누군가에게 과거의 진실을 털어놓으려 했다.' },
      { id: 'doyun-second', title: '복도 영상 확인', icon: '▣', clue: 'cameraSecond', person: 'doyun', text: '카메라에는 진우가 공식 도착 전 직원 통로에서 나와 현관 쪽으로 걸어가는 장면, 그리고 준혁이 보관실로 향한 뒤 진우가 뒤따르는 장면이 연속으로 찍혀 있다.', log: '진우는 먼저 산장 안에 들어와 있다가 현관으로 돌아가 조난자 행세를 했다.' },
      { id: 'clock-second', title: '보관실의 멈춘 시계', icon: '◷', clue: 'clock', text: '시계는 00시 18분에 멈췄지만 카메라의 시각 보정음은 시계가 9분 빠르다고 알려준다. 실제 시각은 00시 09분. 비명이 들린 00시 27분보다 훨씬 이르다.', log: '준혁은 비명이 들리기 전에 살해됐고, 상자 소리로 발견 시각을 늦췄다.' },
      { id: 'blanket', title: '선반 뒤 접힌 담요', icon: '▧', clue: 'blanket', text: '선반 뒤에 접힌 담요와 빈 보온병이 있다. 먼지 위에 최근 사람이 오래 앉아 있던 자국이 선명하다.', log: '누군가 공개 도착 전부터 보관실에 숨어 있었다.' }
    ],
    foyer: [
      { id: 'old-photo', title: '진우의 지갑 속 사진', icon: '▧', clue: 'oldPhoto', person: 'jinwoo', text: '사진에는 수아와 진우가 함께 서 있다. 뒷면에는 18년 전 날짜와 산장 이름이 적혀 있다.', log: '진우는 수아와 가까운 사이였다.' },
      { id: 'guest-book', title: '숙박부', icon: '✎', clue: 'guestBook', text: '진우의 이름은 그가 주장한 도착 시각보다 먼저 적혀 있다. 글씨가 마른 뒤 덧쓴 흔적도 보인다.', log: '진우는 산장에 도착한 시간을 거짓으로 말했다.' },
      { id: 'coat', title: '진우의 젖은 외투', icon: '❄', clue: 'dryBoots', text: '외투는 젖어 있지만 밑창 홈에는 눈이 거의 없다. 젖은 옷은 눈보라 속에서 오래 걸었다는 증거처럼 보이도록 현관에서 문질러 놓은 듯하다.', log: '진우의 조난자 행세를 의심하게 하는 복장 흔적이다.' },
      { id: 'service-latch', title: '직원 통로의 빗장', icon: '⌑', clue: 'serviceLatch', text: '바깥문 빗장 안쪽에 방금 긁힌 흔적이 있다. 현관을 두드리기 전 내부에서 통로로 들어올 수 있었다.', log: '진우는 현관을 통해 처음 들어온 것이 아니다.' },
      { id: 'jinwoo-talk', title: '백진우와 대화', icon: '◌', person: 'jinwoo', text: '진우는 “준혁 씨가 마지막으로 무슨 말을 했는지 알고 싶었습니다.”라고 말한다. 아직 준혁이 마지막으로 한 말은 누구도 공개하지 않았다.', log: '진우는 공개되지 않은 준혁의 마지막 말을 아는 듯하다.' }
    ]
  };

  const prologue = [
    { title: '눈 속에 묻힌 이름', copy: '18년 전 겨울, 백설산장에서 김수아가 사라졌다. 산길은 며칠째 눈에 덮였고, 계곡으로 향하는 절벽길도 통제됐다. 마지막 목격 시각은 사람마다 달랐다. 산장 주인은 새벽 무렵 수아가 짐을 챙겨 혼자 떠났다고 했지만, 그 밤 근무자는 현관문이 열린 소리를 듣지 못했다고 진술했다. 며칠 뒤 작성된 숙박부에는 수아의 이름 위로 굵은 선이 그어졌다. 사건은 실종으로 종결됐고, 산장은 다시 문을 열었다. 남겨진 가족에게는 설명 대신 종결 통지서 한 장이 도착했다.', lines: [{ speaker: 'narration', text: '그날 밤의 진실은 기록되지 않았다. 대신 서로 맞지 않는 말만 남았다.' }], symbol: '雪', art: 'assets/bg-prologue-memory.png', note: '이 이야기는 18년 전의 미제 사건에서 시작된다.' },
    { title: '마지막 버스가 떠난 뒤', copy: '현재, 1월 17일 저녁. 산 아래 마을에서 백설산장으로 오르는 마지막 버스가 운행을 멈췄다. 눈은 발목을 넘어 무릎까지 쌓였다. 윤서진은 휴대전화를 꺼내 언니와 찍은 낡은 사진을 확인했다. 뒷면에는 수아의 글씨로 짧은 문장이 남아 있었다. “언젠가 산장으로 돌아가면 그 사람에게 물어봐.” 서진은 그 사람이 누구인지 아직 확신하지 못했다. 다만 산장 주인 강태오가 그 이름을 기억하리라는 것만은 알고 있었다.', lines: [{ speaker: 'seojin', text: '이번에는 그냥 돌아가지 않을 거야. 언니가 왜 떠났다고 적혔는지, 직접 들을 거야.' }], symbol: '❄', art: 'assets/bg-prologue-road.png', note: '서진은 가족의 오래된 의문을 품고 산장에 도착한다.' },
    { title: '백설산장 체크인', copy: '서진이 현관문을 열자 난로의 열기와 젖은 나무 냄새가 한꺼번에 밀려왔다. 카운터 뒤의 최미란은 숙박부를 펼쳐 놓고 있었다. 이미 체크인한 손님은 둘. 창가에는 촬영 장비를 정리하는 한도윤, 벽난로 가까이에는 통화가 끊긴 휴대전화를 쥔 박준혁이 있었다. 서진은 이름을 적으려다 숙박부의 오래된 페이지에 시선을 빼앗겼다. 18년 전 날짜 옆에 적힌 ‘김수아’ 위로 누군가 잉크를 덧칠한 흔적이 보였다.\n\n미란은 서진을 알아본 듯 펜을 잠시 멈췄지만, 곧 아무 일도 없었다는 듯 방 열쇠를 내밀었다. 준혁과 도윤은 서로 처음 보는 사이였고, 둘 다 서진의 방문 이유는 알지 못했다. 폭설 때문에 오늘 밤 이 산장을 떠날 사람은 없었다. 체크인을 마친 순간, 현관 밖의 세상은 눈보라에 지워졌다. 안쪽에서는 아직 누구도 태오가 곧 모두를 불러 모으리라는 사실을 몰랐다.', lines: [], symbol: '⌂', art: 'assets/bg-prologue-lodge.png', note: '체크인까지가 프롤로그입니다. 산장 안에서 이어지는 만남은 컷신으로 진행됩니다.' },
    { title: '이름을 기억하는 사람', copy: '미란은 서진의 이름을 듣고 잠시 손을 멈췄다. 준혁은 그 반응을 보았지만 묻지 않았다. 도윤은 촬영을 허락받기 전까지 카메라 렌즈를 아래로 향하게 했다. 그들은 같은 산장에 모였지만 같은 이유로 온 것은 아니었다. 어떤 사람은 과거를 확인하려 했고, 어떤 사람은 폭설을 피하려 했으며, 어떤 사람은 오래 묻어 둔 기록이 다시 열리는 것을 두려워했다.', lines: [{ speaker: 'miran', text: '윤서진… 수아 씨의 동생이군요.' }, { speaker: 'seojin', text: '제 이름을 기억하시네요.' }, { speaker: 'miran', text: '그때 산장에 있었으니까요. 다만 제가 아는 건 기록에 적힌 것뿐이에요.' }, { speaker: 'seojin', text: '기록은 언니가 떠났다고 하죠. 그런데 가족에게는 작별 인사 한마디 없었어요.' }, { speaker: 'junhyuk', text: '사람이 사라진 밤의 기억은 쉽게 단정할 수 없습니다. 확인된 것과 추측을 나눠야 해요.' }, { speaker: 'seojin', text: '그래서 여기 온 거예요. 확인하려고요.' }], symbol: '⌁', art: 'assets/bg-prologue-archive.png', note: '서진과 미란은 과거 사건으로 이어져 있지만, 서로의 진실은 모른다.' },
    { title: '처음 듣는 이름들', copy: '저녁 준비가 끝날 때까지 사람들은 식당에 남았다. 도윤은 산장의 낡은 구조를 촬영해도 되는지 미란에게 물었다. 준혁은 출장 목적을 간단히 설명했지만, 태오와는 오래전부터 알던 사이처럼 말을 아꼈다. 미란은 서진에게 방을 안내하면서도 수아의 이름을 다시 꺼내지 않았다. 처음 만난 사람들 사이에는 예의 바른 침묵이 흘렀고, 오래전 일을 아는 사람들 사이에는 그보다 무거운 침묵이 놓였다.', lines: [{ speaker: 'doyun', text: '복도 끝 문은 잠겨 있나요? 오래된 산장 구조를 참고하고 싶어서요.' }, { speaker: 'miran', text: '직원 구역이에요. 손님이 들어갈 곳은 아닙니다.' }, { speaker: 'doyun', text: '알겠습니다. 허락 없이 찍지 않겠습니다.' }, { speaker: 'junhyuk', text: '태오 씨는 아직 서재에 계십니까?' }, { speaker: 'miran', text: '주인께서는 손님과 식사하기 전에는 좀처럼 서재를 나오지 않으세요.' }, { speaker: 'seojin', text: '준혁 씨는 태오 씨를 알고 계세요?' }, { speaker: 'junhyuk', text: '예전에 몇 번 만났습니다. 오늘은 오래된 이야기까지 꺼내고 싶지 않군요.' }], symbol: '◌', art: 'assets/bg-prologue-lodge.png', note: '모두가 서로를 아는 것은 아니다. 침묵 역시 아직 증거가 아니다.' },
    { title: '태오의 선언', copy: '밤 9시가 조금 지나자 강태오가 식당으로 들어왔다. 그는 손님들에게 늦은 식사를 사과하고, 서재에서 가져온 봉투를 식탁 중앙에 놓았다. 봉투는 여러 번 열었다 닫은 듯 모서리가 헤져 있었다. 태오는 먼저 서진을 바라본 뒤, 나머지 사람들에게도 같은 말을 전했다. 그 순간 준혁의 손에서 숟가락이 떨어졌다. 미란은 아무 말 없이 봉투의 날짜만 바라봤다.', lines: [{ speaker: 'taeo', text: '윤서진 씨, 수아 씨가 사라진 밤을 다시 들여다보러 오셨소?' }, { speaker: 'seojin', text: '네. 언니가 산장을 떠났다는 기록이 사실인지 묻고 싶어요.' }, { speaker: 'taeo', text: '그 기록은 사실이 아니오. 내일 아침, 내가 직접 바로잡겠소.' }, { speaker: 'junhyuk', text: '태오 씨. 그 이야기는 여기서 꺼낼 일이 아닙니다.' }, { speaker: 'taeo', text: '18년 동안 미뤘소. 오늘은 더 미루지 않겠소.' }, { speaker: 'miran', text: '그 봉투를 공개하면, 다치는 사람이 생겨요.' }, { speaker: 'taeo', text: '이미 누군가는 다쳤소. 기록 속에서 이름을 지운 순간부터.' }], symbol: '▤', art: 'assets/bg-prologue-dining.png', note: '태오는 다음 날 과거 사건의 기록을 공개하겠다고 선언한다.' },
    { title: '각자의 방으로', copy: '식사가 끝나도 아무도 쉽게 일어나지 않았다. 태오는 봉투를 서재 책상에 두고 문을 잠그지 않겠다고 말했다. 필요한 사람이 있다면 아침에 함께 확인하자는 뜻이었다. 준혁은 그 제안을 거절하고 먼저 객실로 올라갔다. 도윤은 배터리를 가지러 현관 쪽으로 갔고, 서진은 복도에서 수아의 사진을 다시 꺼내 보았다. 미란은 주방 정리를 맡았다. 복도 시계가 11시 40분을 가리킬 무렵, 산장에는 난로와 바람 소리만 남았다.', lines: [{ speaker: 'doyun', text: '전 카메라를 켜 두겠습니다. 이런 날씨에는 눈이 잠잠해지는 순간이 드물어서요.' }, { speaker: 'miran', text: '손님 얼굴은 찍지 마세요.' }, { speaker: 'doyun', text: '약속하죠. 복도 쪽은 프레임에 들어오지 않게 하겠습니다.' }, { speaker: 'seojin', text: '아까 태오 씨가 한 말, 정말 기록을 공개할 생각일까요?' }, { speaker: 'miran', text: '그분은 마음먹으면 누구 말도 듣지 않아요.' }, { speaker: 'seojin', text: '미란 씨는 그 기록이 공개되면 안 되는 이유를 알고 있군요.' }, { speaker: 'miran', text: '저는 오래전 일을 잊지 못할 뿐이에요.' }], symbol: '⌛', art: 'assets/bg-prologue-dining.png', note: '사건 직전, 각자의 위치와 말은 이후 진술과 대조된다.' },
    { title: '꺼진 불', copy: '밤 11시 47분. 천장 조명이 한 번 깜박이더니 산장 전체가 어둠에 잠겼다. 도윤의 카메라 화면도 검게 변했다. 복도에서 급한 발소리가 두세 번 울리고, 금속이 바닥에 떨어지는 소리가 났다. 이어 서재 쪽에서 무거운 것이 쓰러지는 둔탁한 충격음. 누군가 짧게 숨을 삼켰다. 불은 아직 돌아오지 않았고, 아무도 서로의 위치를 확인할 수 없었다.', lines: [{ speaker: 'doyun', text: '불이 나갔어요! 다들 움직이지 마세요!' }, { speaker: 'seojin', text: '꺅—! 방금 서재 쪽에서 소리가 났어요!' }, { speaker: 'miran', text: '누구예요? 거기 누구 있어요? 제발 대답해요!' }, { speaker: 'junhyuk', text: '벽을 짚고 그대로 있어요! 제가 비상등을 확인하겠습니다!' }], symbol: 'ϟ', art: 'assets/bg-prologue-blackout.png', note: '비명과 충격음은 들렸지만, 어둠 속에서 범인을 본 사람은 없다.' },
    { title: '서재의 문이 열리다', copy: '비상등이 켜졌다. 서재 문 앞에 모인 네 사람은 서로의 얼굴을 확인한 뒤 잠시 말을 잃었다. 미란이 문을 두드렸지만 안에서는 대답이 없었다. 준혁이 어깨로 문을 밀자 잠금쇠가 풀리며 문이 안쪽으로 열렸다. 책상 모서리 아래, 태오는 옆으로 쓰러져 있었다. 한쪽 손은 바닥을 더듬듯 뻗어 있었고, 머리맡의 짙은 피가 마룻바닥 틈으로 번지고 있었다. 깨진 잔과 흩어진 종이가 그 주위에 널렸고, 태오가 내일 공개하겠다던 봉투는 사라졌다. 서진이 비명을 질렀다. 미란은 입을 가린 채 뒷걸음질했고, 도윤의 카메라는 손에서 미끄러져 바닥을 향했다. 준혁만이 떨리는 손으로 태오의 목에 손가락을 댔다가 천천히 고개를 저었다. 그때 문이 저절로 닫히며 잠금쇠가 걸렸다.', lines: [{ speaker: 'miran', text: '태오 씨? 문을 여세요! 제발 대답해요!' }, { speaker: 'junhyuk', text: '비켜요. 문을 부수겠습니다.' }, { speaker: 'seojin', text: '아아악! 태오 씨! 안 돼요…!' }, { speaker: 'miran', text: '꺅—! 이럴 수가… 누가 이런 짓을 한 거예요?' }, { speaker: 'doyun', text: '카메라가… 잠깐, 아무도 만지지 마세요. 방금 본 걸 기억해야 합니다.' }, { speaker: 'junhyuk', text: '맥박이 없습니다. 태오는 이미 숨졌어요. 문이 안에서 잠겼다고 단정하긴 아직 일러요.' }], symbol: '▧', art: 'assets/bg-taeo-death-scene.png', note: '태오의 죽음을 목격한 직후, 모두의 말과 행동이 엇갈리기 시작한다.' },
    { title: '모두의 진술', copy: '사람들은 서재 문 앞에서 서로를 바라봤다. 조금 전까지 낯선 손님이었던 이들은 이제 서로의 알리바이를 확인해야 했다. 미란은 정전 내내 주방에 있었다고 했다. 준혁은 식당에서 움직이지 않았다고 주장했다. 도윤은 카메라가 꺼지지 않았다고 했고, 서진은 그림자를 봤다고 말했다. 네 사람의 말은 이미 조금씩 어긋났다. 폭설은 산장을 고립시켰지만, 범행에 필요한 시간은 몇 분이면 충분했을지 모른다. 이제 당신은 모두의 진술과 현장을 직접 대조해야 한다.', lines: [{ speaker: 'seojin', text: '저는 복도에 그림자를 봤어요. 하지만 얼굴은 못 봤어요.' }, { speaker: 'miran', text: '저는 주방에서 한 발짝도 나오지 않았어요.' }, { speaker: 'junhyuk', text: '정전 직전까지 식당에 있었습니다. 다른 건 기억나지 않아요.' }, { speaker: 'doyun', text: '카메라는 계속 녹화 중이었어요. 영상과 소리를 확인하죠.' }, { speaker: 'seojin', text: '태오 씨가 내일 밝히려던 진실이 살인의 이유일까요?' }], symbol: '⌕', art: 'assets/bg-study-crime-scene.png', note: '첫인상으로 조사 방향을 정한 뒤, 장소와 진술을 자유롭게 살펴보세요.', choices: true }
  ];

  const confessionScenes = [
    { title: '남아 있는 모순', copy: '최미란의 진술을 다시 들려주자, 그녀는 처음에는 고개를 저었다. 차단기의 손때, 직원 통로의 발자국, 식지 않은 주전자만으로도 주방 알리바이는 무너졌다. 그런데 서재 시계와 영상은 더 큰 모순을 드러냈다. 태오는 11시 32분에 공격당했고, 11시 34분에는 누군가 이미 서재를 나왔다. 정전은 살인의 순간이 아니었다. 미란은 침묵 끝에 그날 밤 일을 털어놓기 시작했다.', symbol: '⌕', art: 'assets/bg-study-crime-scene.png', note: '시계와 영상은 모두가 믿은 사망 시각을 뒤집는다.', lines: [{ speaker: 'seojin', text: '태오 씨 시계는 11시 32분에 멈췄어요. 정전보다 15분 빨라요.' }, { speaker: 'doyun', text: '제 영상에는 11시 34분에 서재를 나오는 사람이 찍혔습니다. 정전은 11시 47분이었어요.' }, { speaker: 'junhyuk', text: '그렇다면 정전은 살인을 감추기보다, 우리가 죽음의 시각을 잘못 짚게 하려는 장치였군요.' }, { speaker: 'miran', text: '그만해요… 네. 그때 태오 씨는 이미 죽어 있었어요.' }] },
    { title: '열여덟 해 동안의 거짓말', copy: '미란은 18년 전 김수아가 태오와 다투는 장면을 보았다고 털어놓았다. 그날 밤 수아는 산장을 떠나지 않았다. 태오가 수아를 죽인 뒤, 미란은 그가 내민 거짓 숙박 기록을 그대로 옮겨 적었다. 수아가 눈보라가 그친 뒤 산을 내려갔다고 거짓말했고, 그 진술은 실종 사건을 종결시키는 데 쓰였다. 태오는 이제 원본 기록과 미란의 진술을 함께 공개해 자신이 수아를 죽였다는 사실을 밝히려 했다. 미란은 그 순간 자신도 공범으로 처벌받고 모든 것을 잃을 거라 두려워했다.', symbol: '▤', art: 'assets/bg-prologue-archive.png', note: '미란은 수아를 죽이지 않았지만, 태오의 살인을 숨기는 데 가담했다.', lines: [{ speaker: 'miran', text: '수아 씨를 죽인 건 태오 씨였어요. 저는 그가 시키는 대로 숙박부를 고쳤고, 수아 씨가 떠나는 걸 봤다고 거짓말했어요.' }, { speaker: 'seojin', text: '언니를 찾는 가족에게 18년 동안 거짓말을 한 거예요.' }, { speaker: 'miran', text: '처음엔 산장을 지키려 했어요. 그다음엔 제 거짓말이 들킬까 봐 침묵했죠. 태오 씨가 내일 모든 걸 공개한다고 했을 때… 저는 제가 감옥에 갈 거라고만 생각했어요.' }, { speaker: 'junhyuk', text: '그래서 기록을 빼앗고, 그가 입을 열지 못하게 하려 했습니까?' }, { speaker: 'miran', text: '네. 그가 먼저 제 이름을 기록에서 지우려 한다고 생각했어요. 하지만 그건 변명이 되지 않아요.' }] },
    { title: '잠긴 방의 진실', copy: '미란은 이미 11시 32분 무렵 태오와 단둘이 서재에서 대치했다. 태오가 원본을 내놓으라며 그녀의 거짓 진술을 공개하겠다고 하자, 미란은 책상 위 청동 문진으로 태오를 내리쳤다. 그녀는 문진을 천에 싸 직원 통로로 가져가 숨겼고, 문을 닫아 자동 잠금이 걸리게 했다. 그 뒤 전기실 차단기를 내려 산장 전체가 어둠에 빠지자, 금속 도구로 난방관을 세 번 두드렸다. 그 소리에 사람들은 서재 쪽으로 몰렸고, 모두는 방금 살인이 벌어졌다고 믿었다. 실제로 정전은 살인을 가린 게 아니라 사망 시각을 15분 늦춰 보이게 만든 연출이었다. 폭풍 속에서 현관문을 두드리는 소리가 들려왔다.', symbol: 'ϟ', art: 'assets/bg-prologue-blackout.png', note: '정전은 범행 순간이 아니라 사망 시각을 조작하기 위한 무대였다.', lines: [{ speaker: 'miran', text: '태오 씨는 11시 반쯤 이미 죽어 있었어요. 저는 그 뒤 전기실에서 차단기를 내렸습니다.' }, { speaker: 'miran', text: '문진으로 한 번 쳤어요. 천에 싸서 가져갔고, 문을 닫았죠. 잠금쇠는 저절로 걸렸습니다.' }, { speaker: 'doyun', text: '그럼 영상 속 11시 34분의 물체가 문진이고, 11시 47분의 정전과 난방관 소리는 사망 시각을 속이려는 연출이었군요.' }, { speaker: 'seojin', text: '우리는 어둠 속에서 살인이 일어난 줄 알았어요. 사실 그때는 이미 범인이 돌아와 사람들 틈에 있었던 거네요.' }, { speaker: 'narration', text: '쿵. 쿵. 쿵. 눈보라 속에서 누군가 산장 문을 두드렸다.' }] }
  ];
  const chapterTwoScenes = [
    { eyebrow: '제2장 · 눈보라 속의 손님', title: '세 번의 노크', art: 'assets/bg-foyer-storm.png', symbol: '❄', copy: '미란의 자백이 끝나기도 전에 현관문이 세 번 울렸다. 산길은 막혔고, 이 밤에 산장을 찾아올 사람은 없어야 했다. 문을 열자 눈을 뒤집어쓴 남자가 문틀을 붙잡고 서 있었다. 외투는 젖어 있었지만 부츠에는 산길을 오래 걸은 흔적이 없었다. 백진우는 18년 전 수아와 함께 산장에 왔다가, 준혁의 거짓 증언 때문에 자신의 목격담이 묵살됐다고 말했다. 준혁은 당시 사건을 수습한 지역 의원으로, 태오의 이야기를 사실처럼 확인해 준 사람이었다. 진우는 산장을 잘 안다는 말을 피했고 “방금 길을 헤맸다”고 주장했다. 하지만 서진은 그가 현관으로 들어오기 전 직원 통로에 남은 따뜻한 발자국을 보았다.', lines: [{ speaker: 'miran', text: '문 앞에서 기다리세요. 지금은 아무도 밖으로 나가면 안 됩니다.' }, { speaker: 'jinwoo', text: '백진우입니다. 김수아를 알았어요. 박준혁 선생을 만나러 왔습니다.' }, { speaker: 'seojin', text: '언니를 어떻게 알죠? 그날 무슨 일이 있었는지 알고 있어요?' }, { speaker: 'jinwoo', text: '수아가 사라지던 밤, 저는 이 산장에 있었습니다. 그런데 제가 돌아왔을 때는 이미 아무도 제 말을 듣지 않았어요.' }, { speaker: 'junhyuk', text: '진우 씨… 당신이 여기에 올 줄은 몰랐습니다.' }, { speaker: 'jinwoo', text: '이번에는 제 말을 끝까지 들어주세요. 원본 기록이 아직 남아 있다고 들었습니다.' }, { speaker: 'doyun', text: '어떻게 이 눈보라를 뚫고 왔죠? 길에는 새 발자국도 거의 없습니다.' }, { speaker: 'jinwoo', text: '산 아래에서 길을 잃었습니다. 방금 도착했어요.' }, { speaker: 'narration', text: '진우가 현관을 두드리기 20분 전, 누군가 직원 통로의 빗장을 안쪽에서 열었다. 그 장면은 아직 누구도 보지 못했다.' }] },
    { eyebrow: '제2장 · 자료 보관실', title: '두 번째 비명', art: 'assets/bg-archive-crime-scene.png', symbol: '▥', copy: '진우가 도착한 뒤 준혁은 서진에게 따로 이야기하자며 보관실로 향했다. 둘은 그곳에서 18년 전의 일을 두고 맞섰다. 준혁은 수아의 사망 직후 태오가 내민 조작된 숙박부를 확인하고도 “수아는 새벽에 산을 내려갔다”고 진술했다고 고백했다. 진우가 그 밤의 목격자였다는 걸 알고도, 자신의 의원 경력과 산장의 평판을 지키려 침묵했다. 준혁은 원본을 서진에게 넘기고 공개 증언을 하겠다고 약속했다. 진우는 문밖에서 그 대화를 들었다. 잠시 후, 모두가 식당에 모인 사이 보관실에서 쿵 하는 소리가 났다. 이어 서진의 비명이 산장에 울렸다. 준혁은 선반 아래 쓰러져 있었고, 그의 손에는 찢긴 기록 모서리가 쥐어져 있었다. 상자가 무너진 소리는 살인보다 18분 늦게 일어난 발견을 불렀다. 진우는 누구보다 먼저 “그가 약속을 지키기 전에 끝났군요”라고 말했다.', lines: [{ speaker: 'seojin', text: '방금 소리 들었죠? 준혁 씨가 안에 있어요!' }, { speaker: 'miran', text: '이번에도… 이번에도 사람이 죽은 거예요?' }, { speaker: 'doyun', text: '아무도 들어가지 마세요. 문과 바닥을 그대로 둬야 합니다.' }, { speaker: 'narration', text: '준혁은 들어가기 전, 원본을 보여주고 자신의 거짓말을 바로잡겠다고 약속했다.' }, { speaker: 'jinwoo', text: '그가 약속을 지키기 전에 일이 끝났군요.' }, { speaker: 'seojin', text: '그 말을 어떻게 그렇게 빨리 알았죠? 준혁 씨가 무슨 약속을 했는지 말하지 않았어요.' }, { speaker: 'narration', text: '비명은 시신을 발견한 서진의 것이었다. 태오의 경우처럼, 사건이 벌어진 시각과 모두가 알아챈 시각은 달랐다.' }] }
  ];

  const state = { location: 'dining', found: new Set(), seenClues: new Set(), inspected: new Set(), presented: new Set(), selectedClue: '', activePerson: '', solved: false, caseNumber: 1, log: [], lead: '', prologueIndex: 0, cutsceneIndex: 0, profileIntroIndex: 0, confessionIndex: 0, chapterSceneIndex: 0, started: false };
  const $ = (selector) => document.querySelector(selector);
  const locationList = $('#locationList');
  const actionList = $('#actionList');

  // 분위기 음악은 Web Audio, 장면·단서 효과음은 assets/audio의 녹음 음원으로 재생한다.
  const sound = { context: null, master: null, music: null, media: new Map(), stormWanted: false, enabled: true, started: false, timer: null, note: 0 };
  function initSound() {
    if (sound.context) { if (sound.context.state === 'suspended') sound.context.resume(); return; }
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    // Web Audio가 없는 브라우저에서도 아래 HTMLAudioElement 음원은 사용할 수 있다.
    if (!AudioContextClass) return;
    sound.context = new AudioContextClass();
    sound.master = sound.context.createGain(); sound.master.gain.value = 0.7; sound.master.connect(sound.context.destination);
    sound.music = sound.context.createGain(); sound.music.gain.value = 0; sound.music.connect(sound.master);
    // 낮은 화음 패드와 부드러운 바람 소리를 겹쳐 산장 앰비언스를 만든다.
    [55, 82.41, 110].forEach((frequency, index) => {
      const oscillator = sound.context.createOscillator(); const gain = sound.context.createGain();
      oscillator.type = index === 0 ? 'sine' : 'triangle'; oscillator.frequency.value = frequency;
      gain.gain.value = index === 0 ? 0.12 : 0.035; oscillator.connect(gain); gain.connect(sound.music); oscillator.start();
    });
    const buffer = sound.context.createBuffer(1, sound.context.sampleRate * 3, sound.context.sampleRate);
    const channel = buffer.getChannelData(0);
    for (let i = 0; i < channel.length; i++) channel[i] = (Math.random() * 2 - 1) * 0.35;
    const wind = sound.context.createBufferSource(); const filter = sound.context.createBiquadFilter(); const windGain = sound.context.createGain();
    wind.buffer = buffer; wind.loop = true; filter.type = 'lowpass'; filter.frequency.value = 380; windGain.gain.value = 0.13;
    wind.connect(filter); filter.connect(windGain); windGain.connect(sound.music); wind.start();
    sound.context.resume(); sound.started = true;
    if (sound.enabled) sound.music.gain.setTargetAtTime(0.34, sound.context.currentTime, 1.8);
    sound.timer = window.setInterval(playMusicNote, 5200);
    if (sound.stormWanted) setStormAmbience(true);
    updateSoundButton();
  }
  function playMusicNote() {
    if (!sound.context || !sound.enabled) return;
    const notes = [146.83, 174.61, 220, 196, 164.81, 130.81]; const now = sound.context.currentTime;
    const oscillator = sound.context.createOscillator(); const gain = sound.context.createGain();
    oscillator.type = 'sine'; oscillator.frequency.value = notes[sound.note++ % notes.length]; gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.035, now + 0.8); gain.gain.exponentialRampToValueAtTime(0.001, now + 4.8);
    oscillator.connect(gain); gain.connect(sound.music); oscillator.start(now); oscillator.stop(now + 5);
  }
  function setStormAmbience(active) {
    sound.stormWanted = active;
    const storm = getAudioAsset('blizzard-wind');
    if (active && sound.enabled) {
      storm.audio.loop = true; storm.baseVolume = 0.52; setAudioAssetVolume(storm);
      if (sound.started && storm.audio.paused) storm.audio.play().catch((error) => console.warn('눈보라 음원 재생 실패:', error));
    } else {
      storm.audio.pause(); storm.audio.currentTime = 0;
    }
  }
  function getAudioAsset(name) {
    if (!sound.media.has(name)) {
      const audio = new Audio(`assets/audio/${name}.mp3`); audio.preload = 'auto';
      audio.addEventListener('error', () => console.error(`오디오 파일을 불러오지 못했습니다: assets/audio/${name}.mp3`, audio.error), { once: true });
      sound.media.set(name, { audio, baseVolume: 0.7 });
    }
    return sound.media.get(name);
  }
  function setAudioAssetVolume(clip) {
    const slider = $('#audioVolume'); const masterVolume = slider ? Number(slider.value) / 100 : 0.7;
    clip.audio.volume = Math.max(0, Math.min(1, clip.baseVolume * masterVolume));
  }
  function playAudioAsset(name, { delay = 0, duration = 0, volume = 0.8 } = {}) {
    if (!sound.enabled) return;
    const clip = getAudioAsset(name);
    const start = () => {
      clip.audio.pause(); clip.audio.currentTime = 0; clip.audio.loop = false;
      clip.baseVolume = volume; setAudioAssetVolume(clip);
      clip.audio.play().catch((error) => console.warn(`오디오 재생 실패 (${name}):`, error));
      if (duration) window.setTimeout(() => clip.audio.pause(), duration);
    };
    if (delay) window.setTimeout(start, delay); else start();
  }
  function playSceneSound(kind) {
    if (kind === 'stairs') playAudioAsset('wood-stairs', { duration: 3000, volume: 0.85 });
    else if (kind === 'tableware') playAudioAsset('tableware', { duration: 2200, volume: 0.38 });
    else if (kind === 'commotion') {
      playAudioAsset('wood-footsteps', { duration: 1800, volume: 0.72 });
      playAudioAsset('heavy-impact', { delay: 520, volume: 0.68 });
    } else if (kind === 'doorScream') {
      playAudioAsset('door-slam', { volume: 0.76 });
      playAudioAsset('female-scream', { delay: 260, volume: 0.72 });
    }
  }
  function playEvidenceSound(detail) {
    const paper = ['note', 'ledger', 'jinNote', 'oldPhoto', 'guestBook', 'archiveDust', 'tornLetter'];
    const locks = ['door', 'scratch', 'serviceLatch'];
    if (detail === 'paper' || paper.includes(detail)) playAudioAsset('page-turn', { duration: 900, volume: 0.52 });
    else if (locks.includes(detail)) playAudioAsset('door-latch', { duration: 1400, volume: 0.62 });
    else if (detail === 'switch') playAudioAsset('light-switch', { duration: 1000, volume: 0.55 });
    else if (detail === 'wet') playAudioAsset('wood-footsteps', { duration: 1200, volume: 0.42 });
    else if (['footage', 'cameraSecond'].includes(detail)) playAudioAsset('camera-shutter', { duration: 900, volume: 0.5 });
    else if (['watch', 'clock'].includes(detail)) playAudioAsset('clock-tick', { duration: 1500, volume: 0.38 });
    else if (detail === 'kitchen') playAudioAsset('tableware', { duration: 900, volume: 0.32 });
    else if (detail === 'bookend') playAudioAsset('door-latch', { duration: 900, volume: 0.44 });
    else playAudioAsset('page-turn', { duration: 900, volume: 0.45 });
  }
  function playSound(kind = 'click', detail = '') {
    if (!sound.enabled) return;
    if (kind === 'evidence' || kind === 'paper') {
      playEvidenceSound(detail); return;
    }
    if (!sound.context) return;
    const ctx = sound.context; const now = ctx.currentTime;
    const oscillator = ctx.createOscillator(); const gain = ctx.createGain();
    const settings = { click: [520, 0.035, 0.07], clue: [740, 0.12, 0.18], transition: [260, 0.07, 0.3], blackout: [68, 0.22, 0.65], reveal: [92, 0.24, 0.8] }[kind] || [440, 0.05, 0.12];
    oscillator.type = kind === 'reveal' ? 'triangle' : 'sine'; oscillator.frequency.setValueAtTime(settings[0], now);
    if (kind === 'blackout') oscillator.frequency.exponentialRampToValueAtTime(34, now + settings[2]);
    if (kind === 'reveal') oscillator.frequency.exponentialRampToValueAtTime(48, now + settings[2]);
    gain.gain.setValueAtTime(settings[1], now); gain.gain.exponentialRampToValueAtTime(0.001, now + settings[2]);
    oscillator.connect(gain); gain.connect(sound.master); oscillator.start(now); oscillator.stop(now + settings[2] + 0.02);
  }
  function updateSoundButton() {
    const button = $('#audioToggle'); if (!button) return;
    button.textContent = sound.enabled ? '♫ 소리 켜짐' : '♪ 소리 꺼짐';
    button.setAttribute('aria-pressed', String(sound.enabled));
  }
  $('#audioToggle').addEventListener('click', () => {
    if (!sound.context) initSound(); sound.enabled = !sound.enabled;
    if (sound.music && sound.context) sound.music.gain.setTargetAtTime(sound.enabled ? 0.34 : 0, sound.context.currentTime, 0.25);
    if (!sound.enabled) sound.media.forEach((clip) => clip.audio.pause());
    else if (sound.stormWanted) setStormAmbience(true);
    updateSoundButton();
  });
  $('#audioVolume').addEventListener('input', (event) => {
    if (!sound.context) initSound();
    if (sound.master) sound.master.gain.setTargetAtTime(Number(event.target.value) / 100, sound.context.currentTime, 0.08);
    sound.media.forEach(setAudioAssetVolume);
  });
  document.addEventListener('pointerdown', (event) => {
    if (!sound.started) initSound();
    sound.started = true;
    if (sound.stormWanted) setStormAmbience(true);
  }, { passive: true });

  function addLog(message) {
    const phase = state.caseNumber === 1 ? '태오 사건' : '준혁 사건';
    state.log.unshift({ message, phase });
    renderLog();
  }
  function renderLog() {
    const list = $('#logList');
    $('#recordCount').textContent = state.log.length;
    $('#recordSummary').textContent = state.log.length ? `기록 ${state.log.length}건 · 최근 항목이 위에 표시됩니다.` : '아직 기록이 없습니다.';
    list.innerHTML = state.log.length ? state.log.map((entry) => `<div class="log-entry"><span class="log-time">${entry.phase}</span><span>${entry.message}</span></div>`).join('') : '<div class="empty-state"><span class="empty-symbol">⌁</span>조사 기록이 여기에 쌓입니다.<br>장소를 살펴보고 사람들과 대화하세요.</div>';
  }
  function renderStartingItems() {
    $('#starterItems').innerHTML = startingItems.map((item) => `<article class="starter-item"><span class="starter-item-icon" aria-hidden="true">${item.icon}</span><div><span class="eyebrow">${item.type}</span><h3>${item.title}</h3><p>${item.detail}</p></div></article>`).join('');
  }
  function actionsFor(location) { return state.caseNumber === 2 ? (secondActions[location.id] || []) : location.actions; }
  function renderLocations() {
    const visibleLocations = locations.filter((location) => state.caseNumber === 2 ? location.caseTwoOnly : !location.caseTwoOnly);
    locationList.innerHTML = visibleLocations.map((location) => {
      const actions = actionsFor(location);
      const done = actions.length > 0 && actions.every((action) => state.inspected.has(action.id));
      return `<button class="location-button ${state.location === location.id ? 'active' : ''}" data-location="${location.id}"><span class="location-icon">${location.icon}</span><span>${location.name}</span>${done ? '<span class="checked">✓</span>' : ''}</button>`;
    }).join('');
    locationList.querySelectorAll('[data-location]').forEach((button) => button.addEventListener('click', () => changeLocation(button.dataset.location)));
  }
  function changeLocation(id) { state.location = id; renderScene(); renderLocations(); }
  function renderScene() {
    const location = locations.find((item) => item.id === state.location);
    const actions = actionsFor(location);
    const sceneId = state.caseNumber === 2 ? (location.id === 'archive' ? 'archive' : location.id === 'foyer' ? 'foyer' : location.id) : location.id;
    $('#sceneArt').dataset.scene = sceneId;
    $('#scenePicture').innerHTML = scenePicture(sceneId);
    const sceneLabels = { dining: ['⌂', 'DINING ROOM', '저녁의 식탁'], hall: ['⌁', 'WEST CORRIDOR', '비상등 아래의 복도'], study: ['▤', 'TAEO’S STUDY', '잠겨 있던 서재'], power: ['ϟ', 'POWER ROOM', '정전의 흔적'], archive: ['▥', 'RECORDS ROOM', '두 번째 사건 현장'], foyer: ['❄', 'ENTRANCE HALL', '눈보라 속의 손님'] };
    const label = sceneLabels[sceneId] || sceneLabels.dining;
    $('#sceneArt .art-symbol').textContent = label[0]; $('#sceneArt .art-label').textContent = label[1]; $('#sceneArt .art-caption').textContent = label[2];
    const sceneFiles = { dining: 'assets/bg-dining.png', hall: 'assets/bg-hallway.png', study: 'assets/bg-study-crime-scene.png', power: 'assets/bg-power-room.png', archive: 'assets/bg-archive-crime-scene.png', foyer: 'assets/bg-foyer-storm.png' };
    const scenePhoto = $('#sceneBackground');
    scenePhoto.style.display = sceneFiles[sceneId] ? 'block' : 'none';
    $('#sceneArt').classList.remove('has-photo');
    scenePhoto.onload = () => $('#sceneArt').classList.add('has-photo');
    scenePhoto.onerror = () => { scenePhoto.style.display = 'none'; $('#sceneArt').classList.remove('has-photo'); };
    if (sceneFiles[sceneId]) scenePhoto.src = sceneFiles[sceneId];
    $('#sceneType').textContent = location.type;
    $('#sceneTime').textContent = location.time;
    $('#sceneTitle').textContent = location.title;
    $('#sceneDescription').textContent = location.description;
    $('#sceneArt').style.background = '';
    actionList.innerHTML = actions.map((action) => {
      const found = state.inspected.has(action.id);
      return `<button class="action-button ${found ? 'found' : ''}" data-action="${action.id}"><span class="action-icon">${found ? '✓' : action.icon}</span><span>${action.title}</span><span class="action-arrow">${found ? '·' : '›'}</span></button>`;
    }).join('');
    actionList.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', () => inspect(location, button.dataset.action)));
  }
  function scenePicture(sceneId) {
    const scenes = {
      dining: '<i class="scene-window"></i><i class="scene-table"></i><i class="scene-lamp"></i><i class="scene-chair chair-a"></i><i class="scene-chair chair-b"></i>',
      hall: '<i class="scene-hall-door"></i><i class="scene-lamp"></i><i class="scene-snow-line"></i>',
      study: '<i class="scene-window"></i><i class="scene-shelf"></i><i class="scene-desk"></i><i class="scene-covered-form"></i><i class="scene-evidence-mark">01</i>',
      power: '<i class="scene-panel-box"></i><i class="scene-cable cable-a"></i><i class="scene-cable cable-b"></i><i class="scene-warning-light"></i>',
      archive: '<i class="scene-shelf shelf-a"></i><i class="scene-shelf shelf-b"></i><i class="scene-box"></i><i class="scene-covered-form"></i><i class="scene-evidence-mark">02</i>',
      foyer: '<i class="scene-entrance"></i><i class="scene-snow-drift"></i><i class="scene-coat-hook"></i>',
      dining2: '<i class="scene-window"></i><i class="scene-table"></i><i class="scene-lamp"></i>'
    };
    return scenes[sceneId] || scenes.dining;
  }
  function inspect(location, id) {
    const action = actionsFor(location).find((item) => item.id === id);
    if (!action) return;
    const isNew = !state.inspected.has(id);
    state.inspected.add(id);
    if (action.clue && !state.found.has(action.clue)) {
      state.found.add(action.clue);
      addLog(`<strong>새 단서 획득</strong> · ${clues[action.clue].title}`);
    }
    if (action.clue) playSound('evidence', action.clue);
    if (isNew && action.log) addLog(action.log);
    renderScene(); renderLocations(); renderNotebook(); renderPeople(); updateProgress();
    showInvestigationScene(location, action);
  }
  function showInvestigationScene(location, action) {
    const person = action.person ? people.find((item) => item.id === action.person) : null;
    const evidence = action.clue ? clues[action.clue] : null;
    const roomImages = { dining: 'assets/bg-dining.png', hall: 'assets/bg-hallway.png', study: 'assets/bg-study-crime-scene.png', power: 'assets/bg-power-room.png', archive: 'assets/bg-archive-crime-scene.png', foyer: 'assets/bg-foyer-storm.png' };
    $('#investigationLocation').textContent = location.title;
    $('#investigationTime').textContent = location.time || $('#dateText').textContent;
    $('#investigationTitle').textContent = action.title;
    const narration = $('#investigationNarration');
    const characterNarration = { seojin: '서진은 오래된 사진을 손끝으로 누른 채, 대답을 재촉하지 않고 당신을 바라본다.', junhyuk: '준혁은 소매 끝을 매만진다. 대답은 차분하지만 시선은 문 쪽으로 한 번씩 향한다.', miran: '미란은 앞치마에 손을 닦고 짧게 숨을 고른다. 익숙한 산장 안에서도 당신과의 거리를 유지한다.', doyun: '도윤은 카메라의 녹화 표시를 확인한 뒤 렌즈를 아래로 향한다. 이번에는 기록보다 당신의 질문에 집중한다.', jinwoo: '진우는 젖은 외투를 벗지 않은 채 현관 쪽을 곁눈질한다. 대답하기 전, 방 안의 사람들 반응부터 살핀다.' };
    narration.classList.toggle('hidden', !person);
    narration.innerHTML = person ? `<span>기록 · 나레이션</span><p>${characterNarration[person.id] || '잠시 침묵이 흐른 뒤, 상대가 당신의 질문에 답한다.'}</p>` : '';
    $('#investigationArtSymbol').textContent = action.icon || location.icon || '⌕';
    const background = $('#investigationBackground');
    background.style.display = 'block';
    background.onload = () => $('#investigationDialog').classList.add('has-investigation-photo');
    background.onerror = () => { background.style.display = 'none'; $('#investigationDialog').classList.remove('has-investigation-photo'); };
    $('#investigationDialog').classList.remove('has-investigation-photo');
    background.src = roomImages[location.id] || 'assets/bg-study-crime-scene.png';
    const speakerPanel = $('#investigationSpeaker');
    if (person) {
      const questions = { seojin: '그때 무엇을 보았는지 더 들려주세요.', junhyuk: '당신이 기억하는 일을 숨김없이 말해 주세요.', miran: '정전 전후의 행동을 다시 확인하고 싶습니다.', doyun: '영상에 담긴 장면을 직접 설명해 주세요.', jinwoo: '산장에 오기까지의 일을 말해 주세요.' };
      const quoted = [...action.text.matchAll(/[“"]([^”"]+)[”"]/g)].map((match) => match[1]);
      const reply = quoted.length ? quoted.join(' ') : action.text;
      speakerPanel.innerHTML = `<div class="investigation-exchange"><strong>나</strong><p>${questions[person.id] || '그때 상황을 설명해 주세요.'}</p></div><div class="investigation-exchange character"><span class="investigation-portrait ${person.color}"><img src="${person.portrait}" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span>${person.icon}</span></span><div><strong>${person.name}</strong><p>${reply}</p></div></div>`;
      $('#investigationCopy').textContent = '';
    } else {
      speakerPanel.innerHTML = '';
      $('#investigationCopy').textContent = action.text;
    }
    const evidencePanel = $('#investigationEvidence');
    evidencePanel.classList.toggle('hidden', !evidence);
    if (evidence) {
      $('#investigationEvidenceTitle').textContent = evidence.title;
      $('#investigationEvidenceDetail').textContent = evidence.detail;
      const evidenceImage = $('#investigationEvidenceImage');
      evidenceImage.style.display = 'block';
      evidenceImage.onerror = () => { evidenceImage.style.display = 'none'; };
      evidenceImage.src = clueImages[action.clue] || 'assets/evidence-records.png';
    }
    $('#investigationDialog').showModal();
  }
  $('#investigationContinue').addEventListener('click', () => $('#investigationDialog').close());
  function renderNotebook() {
    $('#clueCount').textContent = state.found.size;
    $('#inventoryEvidenceCount').textContent = `발견한 단서 ${state.found.size}`;
    $('#clueTab').innerHTML = state.found.size ? `<div class="clue-list">${[...state.found].map((id) => `<button class="clue-card ${state.selectedClue === id ? 'selected' : ''}" data-clue="${id}"><span class="clue-title"><span>${clues[id].icon}</span>${clues[id].title}</span><span class="clue-once-mark">${state.seenClues.has(id) ? '기록됨' : '새 단서 · 열어보기'}</span></button>`).join('')}</div>` : '<div class="empty-state"><span class="empty-symbol">▤</span>아직 모은 단서가 없습니다.<br>현장을 조사해 증거를 찾아보세요.</div>';
    $('#clueTab').querySelectorAll('[data-clue]').forEach((button) => button.addEventListener('click', () => {
      const id = button.dataset.clue;
      playSound('paper', 'paper');
      state.selectedClue = id; $('#evidenceSelect').value = id;
      if (!state.seenClues.has(id)) showClueDetail(id);
      renderNotebook();
    }));
    $('#evidenceSelect').innerHTML = '<option value="">단서를 선택하세요</option>' + [...state.found].map((id) => `<option value="${id}">${clues[id].title}</option>`).join('');
    $('#evidenceSelect').value = state.selectedClue;
  }
  function showClueDetail(id) {
    const clue = clues[id];
    state.seenClues.add(id);
    $('#cluePhotoTitle').textContent = clue.title;
    $('#cluePhotoDescription').textContent = clue.detail;
    const photo = $('#cluePhoto');
    const fallback = $('#cluePhotoFallback');
    fallback.textContent = clue.icon;
    fallback.style.display = 'none'; photo.style.display = 'block'; photo.alt = `${clue.title} 증거 사진`;
    photo.onerror = () => { photo.style.display = 'none'; fallback.style.display = 'grid'; };
    photo.onload = () => { photo.style.display = 'block'; fallback.style.display = 'none'; };
    photo.src = clueImages[id] || 'assets/evidence-records.png';
    $('#clueDetailDialog').showModal();
  }
  function renderPeople() {
    const visiblePeople = people.filter((person) => !person.profileOnly && (!person.hidden || state.caseNumber === 2));
    $('#personCount').textContent = visiblePeople.length;
    $('#peopleTab').innerHTML = `<p class="people-help">인물을 선택하면 프로필을 볼 수 있습니다.</p><div class="people-list">${visiblePeople.map((person) => `<button type="button" class="person-row" data-profile="${person.id}"><span class="person-avatar ${person.color}"><img src="${person.portrait}" alt="" onerror="this.remove()">${person.icon}</span><span><strong>${person.name}</strong><small>${person.role}</small></span><span class="person-mark ${person.id === 'miran' && state.found.has('switch') ? 'suspicious' : ''}">${person.id === 'miran' && state.found.has('switch') ? '의심' : '프로필 보기'}</span></button>`).join('')}</div>`;
    $('#peopleTab').querySelectorAll('[data-profile]').forEach((button) => button.addEventListener('click', () => showPersonProfile(button.dataset.profile)));
    $('#personChips').innerHTML = visiblePeople.map((person) => `<button class="person-chip ${state.activePerson === person.id ? 'active' : ''}" data-person="${person.id}">${person.name}</button>`).join('');
    $('#personChips').querySelectorAll('[data-person]').forEach((button) => button.addEventListener('click', () => {
      if (!$('#evidenceSelect').value) { $('#presentationResponse').textContent = '먼저 제시할 단서를 선택하세요.'; return; }
      state.activePerson = button.dataset.person;
      presentEvidence($('#evidenceSelect').value, state.activePerson);
    }));
  }
  function showPortrait(personId, dialogue) {
    const person = people.find((item) => item.id === personId);
    const questions = {
      seojin: '태오가 기록 공개를 말했을 때, 당신은 무엇을 가장 먼저 떠올렸나요?',
      junhyuk: '그날 밤과 18년 전 사건에 관해 알고 있는 것을 말씀해 주세요.',
      miran: '정전 전후의 일을 처음부터 다시 들려주시겠어요?',
      doyun: '카메라가 기록한 장면과 당시 상황을 설명해 주세요.',
      jinwoo: '이 산장에 오기 전부터 준혁을 찾고 있었습니까?'
    };
    const followups = {
      seojin: '언니의 기록과 다른 사람들의 기억을 맞춰보겠습니다.',
      junhyuk: '당신의 말을 기록과 메모에 대조해 보겠습니다.',
      miran: '그 말은 주방과 전기실의 흔적을 확인한 뒤 판단하겠습니다.',
      doyun: '영상과 녹음의 시각을 다른 진술과 비교해 보죠.',
      jinwoo: '도착 시각과 남은 흔적을 함께 확인하겠습니다.'
    };
    const quoted = [...dialogue.matchAll(/[“"]([^”"]+)[”"]/g)].map((match) => match[1]);
    const reply = quoted.length ? quoted.join('<br>') : dialogue;
    const exchangeLine = (speaker, text, cls = '') => `<span class="exchange-line ${cls}"><strong>${speaker}</strong><span>${text}</span></span>`;
    $('#sceneDescription').innerHTML = `<span class="inline-portrait ${person.color}"><img src="${person.portrait}" alt="${person.name} 초상화" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span>${person.icon}</span></span><span class="dialogue-name">대화 · ${person.name}</span><span class="conversation-lines">${exchangeLine('나', questions[personId] || '그때 상황을 다시 이야기해 주세요.', 'investigator-line')}${exchangeLine(person.name, reply, 'character-line')}${exchangeLine('나', followups[personId] || '이 말을 다른 단서와 대조해 보겠습니다.', 'investigator-line')}</span>`;
  }
  function presentEvidence(clueId, personId) {
    const clue = clues[clueId]; const person = people.find((item) => item.id === personId); const key = `${clueId}:${personId}`;
    let response;
    if (state.caseNumber === 2 && personId === 'jinwoo') {
      response = clueId === 'oldPhoto' ? '진우는 사진을 빼앗으려다 손을 멈춘다. “그 사진은 어디서 찾았습니까?” 그는 수아를 알고 있었다.' : clueId === 'guestBook' ? '“이름은 미리 적어뒀을 뿐입니다.” 진우는 도착 시각을 설명하지 못한다.' : clueId === 'cameraSecond' ? '진우는 영상 속 사람이 자신인지 확인해 달라는 질문에 대답하지 않는다. 현관을 두드리기 전에 이미 안에 있었다는 사실을 부정하지 못한다.' : clueId === 'jinNote' ? '진우는 메모를 읽고 “준혁 씨가 나를 기다렸군요.”라고 말한다. 그는 메모 내용을 이미 알고 있는 듯하다.' : clueId === 'tornLetter' ? '진우는 편지를 읽자 “수아는 태오를 만나러 왔던 게 아니었습니다.”라고 말한다. 편지에 없는 내용을 아는 것처럼 보인다.' : clueId === 'dryBoots' ? '진우는 “문 앞에서 눈을 털었습니다.”라고 말하지만, 부츠 안쪽까지 마른 이유는 설명하지 못한다.' : clueId === 'serviceLatch' ? '진우의 시선이 직원 통로 쪽으로 향한다. “그 문은 오래돼서 누구나 열 수 있죠.” 산장 구조를 모른다던 말과 어긋난다.' : clueId === 'blanket' ? '진우는 담요를 보자마자 “저건 제가 숨겨둔 게 아닙니다.”라고 말한다. 아직 누가 숨겨뒀는지 묻지도 않았다.' : clueId === 'clock' ? '진우는 벽시계가 빠르다는 사실을 이미 알고 있는 듯 시각 보정음을 듣기 전에 반응한다.' : '진우는 “폭설 때문에 길을 잃었을 뿐입니다.”라고 답한다.';
    }
    else if (personId === 'miran' && ['switch', 'wet', 'footage', 'kitchen', 'watch', 'bookend'].includes(clueId)) response = clueId === 'kitchen' ? '“주전자는 손님들 오기 전에 올려둔 거예요. 정전 때 차를 따랐다는 뜻은 아니었어요.” 그녀는 알리바이와 차 준비를 구분해 설명한다.' : clueId === 'watch' ? '“시계는 충격으로 멈췄을 수도 있죠. 그렇다고 그 시각에 태오 씨가 살아 있었다고 단정할 수는 없어요.”' : clueId === 'bookend' ? '“문진이 두 개였던 건 기억해요. 하지만 서재 물건이 없어졌다고 제가 가져간 건 아니죠.” 미란은 사라진 시각을 모른다고 한다.' : clueId === 'footage' ? '“얼굴이 안 보이면 누구인지 확정할 수 없겠네요.” 미란은 화면 속 물건이 문진인지도 판단하지 않는다.' : '“전기실 흔적만으로 누가 차단기를 만졌는지는 알 수 없어요.” 그녀는 자신도 점검을 위해 그곳에 간 적이 있다고 인정하지만, 정전 시각은 부인한다.';
    else if (personId === 'miran' && ['note', 'ledger'].includes(clueId)) response = clueId === 'note' ? '미란은 “태오 씨와 이야기한 건 맞아요. 하지만 그 뒤에는 주방에 있었어요.”라고 답한다.' : '미란은 “그 기록은 태오 씨가 보관했어요. 저는 내용을 몰라요.”라고 말한다.';
    else if (personId === 'miran' && clueId === 'door') response = '미란은 “오래된 문이라 닫히면 잠겨요. 안에서 걸쇠를 잠글 필요는 없죠.”라고 답한다. 이 사실을 그녀는 처음부터 알고 있었다.';
    else if (personId === 'doyun' && clueId === 'footage') response = '도윤은 영상에 찍힌 사람이 자신은 아니라고 확인한다. 촬영 당시 그는 식당 쪽을 향하고 있었다.';
    else if (personId === 'doyun' && clueId === 'cameraGap') response = '“배터리가 추위에 약해 자동으로 꺼졌을 겁니다.” 도윤은 카메라를 확인하지만, 메모리에는 수동 정지와 자동 종료를 구분할 기록이 남아 있지 않다. 그는 자신이 계속 촬영했다고 한 말을 정정한다.';
    else if (personId === 'doyun' && ['switch', 'wet'].includes(clueId)) response = '“그 시간엔 식당 쪽에 있었습니다. 다만 영상이 비어 있으니 제 말도 증명할 수 없겠네요.” 도윤은 정전 때 카메라를 끄지 않았다고 했던 말을 바로잡는다.';
    else if (personId === 'seojin' && clueId === 'photoFiber') response = '서진은 봉투 모서리를 만져 본다. “제 봉투와 비슷하지만 같은 종이인지 확신할 수 없어요.” 그녀는 서재에 들어간 적 없다는 말을 반복하지만, 봉투가 어디서 찢겼는지는 설명하지 못한다.';
    else if (personId === 'seojin' && ['ledger', 'note'].includes(clueId)) response = clueId === 'ledger' ? '“기록을 찾고 싶었던 건 맞아요. 그래도 태오 씨가 공개하기로 했으니 기다렸어요.” 서진은 동기와 범행을 구분해 달라고 한다.' : '“미란 씨와 먼저 이야기한다는 메모네요. 태오 씨가 언니의 마지막 밤을 누구와 의논하려 했는지 알아야겠어요.”';
    else if (personId === 'seojin' && clueId === 'watch') response = '“정전 전에 이미 쓰러졌다면, 제가 들은 비명과 발견 시각은 살해 시각이 아니군요.” 서진은 자신이 방을 나선 시각을 확인해 달라고 되묻는다.';
    else if (personId === 'junhyuk' && clueId === 'ledger') response = '준혁은 기록철을 보자 표정이 굳는다. “그날 일은… 지금 공개할 얘기가 아닙니다.”';
    else if (personId === 'junhyuk' && clueId === 'medicalMemo') response = '준혁은 “시계가 11시 32분에 멈췄다는 말은 누군가에게 들었습니다. 제가 적은 건 현장에서 사망 시각을 단정하지 말자는 뜻입니다.”라고 답한다. 그 말을 전한 사람이 누구인지는 밝히지 않는다.';
    else if (personId === 'junhyuk' && clueId === 'watch') response = '“충격으로 시계가 멈춘 것과 사망 시각은 별개입니다. 저는 시신을 확인하기 전엔 시간을 말하지 않았어요.” 그는 자신이 현장에 가장 먼저 도착했는지에 대해선 답을 피한다.';
    else if (personId === 'junhyuk' && clueId === 'footage') response = '준혁은 영상의 인물이 문진을 가져갔다고 단정할 수 없다고 지적한다. “저라면 먼저 시계와 영상 장치의 시각 오차부터 확인하겠습니다.” 그는 카메라 시각을 확인한 경위를 설명하지 않는다.';
    else if (personId === 'seojin' && clueId === 'ledger') response = '서진은 기록을 한참 바라본다. “언니는 산장을 떠난 적이 없어요. 누군가 기록을 바꾼 거예요.”';
    else response = `${person.name}은 단서를 살펴본 뒤 “이것만으로는 제가 아는 사실과 연결되지 않네요.”라고 답한다.`;
    $('#presentationResponse').innerHTML = `<span class="inline-portrait mini ${person.color}"><img src="${person.portrait}" alt="" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span>${person.icon}</span></span><strong>${person.name}</strong><br>${response}`;
    if (!state.presented.has(key)) { state.presented.add(key); addLog(`<strong>${person.name}에게 단서 제시</strong> · ${clue.title}`); }
  }
  function updateProgress() {
    const total = state.caseNumber === 1 ? 13 : 10;
    $('#progressText').textContent = `${state.found.size} / ${total} 단서`;
    $('#progressBar').style.width = `${Math.min(100, state.found.size / total * 100)}%`;
    const canDeduce = state.found.size >= 6;
    $('#deductionButton').disabled = !canDeduce && !state.solved;
    $('#deductionButton').title = canDeduce ? '최종 추리를 제출할 수 있습니다.' : '단서 6개 이상 모으면 열립니다.';
    if (state.caseNumber === 2) {
      $('#deductionButton').querySelector('span:first-child').textContent = state.solved ? '에필로그' : '2차 사건 추리';
      $('#culpritLabel').firstChild.textContent = '준혁을 죽인 범인은?';
      $('#motiveLabel').firstChild.textContent = '범행 동기는?';
      $('#trickLabel').firstChild.textContent = '결정적인 모순은?';
    } else {
      $('#deductionButton').querySelector('span:first-child').textContent = state.solved ? '다음 사건' : '최종 추리';
      $('#culpritLabel').firstChild.textContent = '태오를 죽인 범인은?';
      $('#motiveLabel').firstChild.textContent = '범행 동기는?';
      $('#trickLabel').firstChild.textContent = '서재가 밀실처럼 보인 이유는?';
    }
  }
  const checkInPages = prologue.slice(0, 3);
  const cutscenePages = prologue.slice(3);
  function renderDialogueLines(target, lines) {
    const speakerNames = { narration: '기록', seojin: '윤서진', junhyuk: '박준혁', miran: '최미란', doyun: '한도윤', taeo: '강태오', jinwoo: '백진우' };
    const speakerPortraits = Object.fromEntries(people.map((person) => [person.id, person.portrait]));
    speakerPortraits.taeo = 'assets/portrait-kang-taeo.png';
    const speakerMarks = { narration: '記', seojin: '尹', junhyuk: '朴', miran: '崔', doyun: '韓', taeo: '姜', jinwoo: '白' };
    const narration = (lines || []).filter((line) => line.speaker === 'narration');
    const dialogue = (lines || []).filter((line) => line.speaker !== 'narration');
    const narrationMarkup = narration.length ? `<aside class="scene-narration" aria-label="기록 나레이션"><span class="narration-label">기록 · 나레이션</span>${narration.map((line) => `<p>${line.text}</p>`).join('')}</aside>` : '';
    const dialogueMarkup = dialogue.map((line) => {
      const portrait = speakerPortraits[line.speaker];
      const scream = /[꺅아악]/.test(line.text) ? 'scream-line' : '';
      return `<div class="prologue-line ${scream}"><span class="prologue-line-avatar">${portrait ? `<img src="${portrait}" alt="" onerror="this.remove()">` : ''}<span>${speakerMarks[line.speaker] || '•'}</span></span><div><strong>${speakerNames[line.speaker] || '기록'}</strong><p>${line.text}</p></div></div>`;
    }).join('');
    $(target).innerHTML = `${narrationMarkup}${dialogueMarkup ? `<div class="scene-conversation" aria-label="인물 대화">${dialogueMarkup}</div>` : ''}`;
  }
  function renderPrologue() {
    const page = prologue[state.prologueIndex];
    setStormAmbience(state.prologueIndex <= 1);
    if (page.title === '백설산장 체크인') playSceneSound('stairs');
    $('#prologueEyebrow').textContent = `PROLOGUE · 0${state.prologueIndex + 1}`;
    $('#prologueCounter').textContent = `${state.prologueIndex + 1} / ${checkInPages.length}`;
    $('#prologueTitle').textContent = page.title;
    $('#prologueCopy').textContent = page.copy;
    $('#prologueDialogue').innerHTML = '';
    $('#prologueArtSymbol').textContent = page.symbol;
    const prologueBackground = $('#prologueBackground');
    prologueBackground.onload = () => $('#prologueDialog').classList.add('has-prologue-photo');
    prologueBackground.onerror = () => $('#prologueDialog').classList.remove('has-prologue-photo');
    prologueBackground.src = page.art || 'assets/bg-prologue-memory.png';
    $('#prologueFootnote').textContent = page.note;
    $('#prologueNext').textContent = state.prologueIndex === checkInPages.length - 1 ? '산장 안으로 들어간다' : '계속';
    $('#prologueChoices').innerHTML = '';
  }
  function profileCardMarkup(person, label) {
    return `<div class="profile-hero ${person.color}"><img src="${person.portrait}" alt="${person.name} 초상화" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span>${person.icon}</span></div><div class="profile-bio"><span class="eyebrow">${label}</span><h2>${person.name}</h2><strong class="profile-role">${person.role}</strong><p>${person.profile || person.note}</p><section class="profile-first-impression"><span>첫인상</span><p>${person.firstImpression || person.note}</p></section></div>`;
  }
  function renderProfileIntro() {
    const guests = people.filter((person) => person.introProfile || !person.hidden);
    const person = guests[state.profileIntroIndex];
    $('#profileIntroCounter').textContent = `인물 ${state.profileIntroIndex + 1} / ${guests.length}`;
    $('#profileIntroProgress').style.setProperty('--intro-progress', `${(state.profileIntroIndex + 1) / guests.length * 100}%`);
    const label = person.id === 'taeo' ? '백설산장 주인' : '산장에 도착한 손님';
    $('#profileIntroCard').innerHTML = profileCardMarkup(person, `${label} · ${String(state.profileIntroIndex + 1).padStart(2, '0')}`);
    $('#profileIntroPrev').disabled = state.profileIntroIndex === 0;
    $('#profileIntroNext').textContent = state.profileIntroIndex === guests.length - 1 ? '산장 안으로 →' : '다음 인물 →';
  }
  function showPersonProfile(personId) {
    const person = people.find((item) => item.id === personId);
    if (!person) return;
    $('#personProfileCard').innerHTML = profileCardMarkup(person, '인물 기록');
    $('#personProfileDialog').showModal();
  }
  function renderCutscene() {
    const page = cutscenePages[state.cutsceneIndex];
    $('#cutsceneEyebrow').textContent = `산장 안 · 장면 ${String(state.cutsceneIndex + 1).padStart(2, '0')}`;
    $('#cutsceneCounter').textContent = `${state.cutsceneIndex + 1} / ${cutscenePages.length}`;
    $('#cutsceneTitle').textContent = page.title;
    if (page.title === '꺼진 불') playSceneSound('commotion');
    else if (page.title === '서재의 문이 열리다') playSceneSound('doorScream');
    else if (page.title === '태오의 선언') playSceneSound('tableware');
    $('#cutsceneCopy').textContent = page.copy;
    $('#cutsceneArtSymbol').textContent = page.symbol;
    renderDialogueLines('#cutsceneDialogue', page.lines);
    const background = $('#cutsceneBackground');
    background.onload = () => $('#cutsceneDialog').classList.add('has-prologue-photo');
    background.onerror = () => $('#cutsceneDialog').classList.remove('has-prologue-photo');
    $('#cutsceneDialog').classList.remove('has-prologue-photo');
    background.src = page.art || 'assets/bg-prologue-lodge.png';
    $('#cutsceneFootnote').textContent = page.note;
    $('#cutsceneNext').textContent = state.cutsceneIndex === cutscenePages.length - 1 ? '조사를 시작한다' : '다음 장면';
    $('#cutsceneChoices').innerHTML = page.choices ? `<span class="choice-label">서재 앞에서 무엇을 먼저 확인할까?</span><button data-lead="seojin">서진이 본 복도의 그림자</button><button data-lead="miran">미란의 손에 들린 열쇠고리</button><button data-lead="doyun">도윤의 카메라와 녹음</button>` : '';
    $('#cutsceneChoices').querySelectorAll('[data-lead]').forEach((button) => button.addEventListener('click', () => {
      state.lead = button.dataset.lead;
      $('#cutsceneChoices').querySelectorAll('[data-lead]').forEach((item) => item.classList.toggle('chosen', item === button));
    }));
  }
  function renderConfessionScene() {
    const page = confessionScenes[state.confessionIndex];
    $('#confessionCounter').textContent = `${state.confessionIndex + 1} / ${confessionScenes.length}`;
    $('#confessionTitle').textContent = page.title;
    $('#confessionCopy').textContent = page.copy;
    $('#confessionArtSymbol').textContent = page.symbol;
    renderDialogueLines('#confessionDialogue', page.lines);
    const background = $('#confessionBackground');
    background.onload = () => $('#confessionDialog').classList.add('has-prologue-photo');
    background.onerror = () => $('#confessionDialog').classList.remove('has-prologue-photo');
    $('#confessionDialog').classList.remove('has-prologue-photo');
    background.src = page.art;
    $('#confessionFootnote').textContent = page.note;
    $('#confessionNext').textContent = state.confessionIndex === confessionScenes.length - 1 ? '자백을 마치고 다음 장으로' : '다음 장면';
  }
  function beginConfessionScene() {
    state.confessionIndex = 0;
    $('#deductionDialog').close();
    renderConfessionScene();
    $('#confessionDialog').showModal();
  }
  function renderChapterScene() {
    const page = chapterTwoScenes[state.chapterSceneIndex];
    $('#chapterEyebrow').textContent = page.eyebrow;
    $('#chapterCounter').textContent = `${state.chapterSceneIndex + 1} / ${chapterTwoScenes.length}`;
    $('#chapterTitle').textContent = page.title;
    if (state.chapterSceneIndex === 1) playAudioAsset('heavy-impact', { volume: 0.62 });
    $('#chapterCopy').textContent = page.copy;
    $('#chapterSymbol').textContent = page.symbol;
    $('#chapterArt').dataset.scene = state.chapterSceneIndex === 0 ? 'storm-arrival' : 'archive-arrival';
    renderDialogueLines('#chapterDialogue', page.lines);
    const background = $('#chapterBackground');
    background.style.display = 'block';
    background.onerror = () => { background.style.display = 'none'; };
    background.src = page.art;
    $('#chapterNext').textContent = state.chapterSceneIndex === chapterTwoScenes.length - 1 ? '자료 보관실을 조사한다' : '다음 장면';
  }
  $('#prologueNext').addEventListener('click', () => {
    if (state.prologueIndex < checkInPages.length - 1) { state.prologueIndex++; renderPrologue(); return; }
    $('#prologueDialog').close();
    state.profileIntroIndex = 0;
    renderProfileIntro();
    $('#profileIntroDialog').showModal();
  });
  $('#profileIntroPrev').addEventListener('click', () => {
    if (state.profileIntroIndex > 0) { state.profileIntroIndex--; renderProfileIntro(); }
  });
  $('#profileIntroNext').addEventListener('click', () => {
    const guests = people.filter((person) => person.introProfile || !person.hidden);
    if (state.profileIntroIndex < guests.length - 1) { state.profileIntroIndex++; renderProfileIntro(); return; }
    $('#profileIntroDialog').close();
    state.cutsceneIndex = 0;
    renderCutscene();
    $('#cutsceneDialog').showModal();
  });
  $('#cutsceneNext').addEventListener('click', () => {
    if (state.cutsceneIndex < cutscenePages.length - 1) { state.cutsceneIndex++; renderCutscene(); return; }
    if (!state.lead) { $('#cutsceneFootnote').textContent = '세 가지 중 하나를 골라 첫 조사 대상을 기억해 두세요.'; return; }
    state.started = true;
    $('#cutsceneDialog').close();
    state.location = 'study';
    addLog(`<strong>첫 조사 메모</strong> · ${state.lead === 'seojin' ? '서진이 본 그림자의 방향을 확인한다.' : state.lead === 'miran' ? '미란이 든 열쇠고리와 자물쇠를 살펴본다.' : '도윤의 카메라와 녹음을 확인한다.'}`);
    renderLocations(); renderScene(); renderNotebook(); renderPeople(); updateProgress();
    $('#statusText').textContent = '첫 번째 사건';
  });
  $('#confessionNext').addEventListener('click', () => {
    if (state.confessionIndex < confessionScenes.length - 1) { state.confessionIndex++; renderConfessionScene(); return; }
    $('#confessionDialog').close();
    $('#deductionDialog').showModal();
    showEnding();
  });
  $('#chapterNext').addEventListener('click', () => {
    if (state.chapterSceneIndex < chapterTwoScenes.length - 1) { state.chapterSceneIndex++; renderChapterScene(); return; }
    $('#chapterDialog').close();
    state.location = 'archive';
    addLog('<strong>두 번째 사건</strong> · 백진우가 도착한 뒤 준혁이 자료 보관실에서 숨진 채 발견됐다.');
    renderLocations(); renderScene(); renderNotebook(); renderPeople(); updateProgress();
  });
  $('#inventoryButton').addEventListener('click', () => { renderStartingItems(); renderNotebook(); $('#inventoryDialog').showModal(); });
  $('#peopleButton').addEventListener('click', () => { renderPeople(); $('#peopleDialog').showModal(); });
  $('#recordsButton').addEventListener('click', () => { renderLog(); $('#recordsDialog').showModal(); });
  document.querySelectorAll('[data-close-dialog]').forEach((button) => button.addEventListener('click', () => $(`#${button.dataset.closeDialog}`).close()));
  $('#evidenceSelect').addEventListener('change', (event) => { state.selectedClue = event.target.value; renderNotebook(); });
  $('#helpButton').addEventListener('click', () => $('#helpDialog').showModal());
  $('#deductionButton').addEventListener('click', () => {
    if (state.solved && state.caseNumber === 1) { startActTwo(); return; }
    if (state.solved && state.caseNumber === 2) { showEnding(); return; }
    if (state.found.size < 6) return;
    prepareDeductionForm();
    $('#deductionDialog').showModal(); $('#endingView').classList.add('hidden'); $('#deductionForm').classList.remove('hidden');
  });
  function prepareDeductionForm() {
    const culprit = $('#deductionForm [name="culprit"]');
    const motive = $('#deductionForm [name="motive"]');
    const trick = $('#deductionForm [name="trick"]');
    if (state.caseNumber === 1) {
      culprit.innerHTML = '<option value="">선택</option><option value="미란">최미란</option><option value="서진">윤서진</option><option value="준혁">박준혁</option><option value="도윤">한도윤</option>';
      motive.innerHTML = '<option value="">선택</option><option value="과거은폐">공개 예정 기록을 둘러싼 일을 막기 위해</option><option value="산장매각">산장 소유권 문제를 끝내기 위해</option><option value="복수">오래전 개인적인 원한을 갚기 위해</option>';
      trick.innerHTML = '<option value="">선택</option><option value="선행살해">11시 32분 전에 살해하고, 11시 47분 정전과 난방관 소리로 사망 시각을 늦춰 보이게 했다. 문은 나간 뒤 자동 잠금됐다</option><option value="창문">범인이 창문으로 나갔다</option><option value="비밀통로">책장 뒤 비밀 통로를 이용했다</option>';
    } else {
      culprit.innerHTML = '<option value="">선택</option><option value="jinwoo">백진우</option><option value="seojin">윤서진</option><option value="miran">최미란</option><option value="doyun">한도윤</option>';
      motive.innerHTML = '<option value="">선택</option><option value="복수">수아 사건을 은폐한 준혁에게 복수하기 위해</option><option value="침묵">준혁이 과거 거짓 진술을 바로잡는 것을 막기 위해</option><option value="기록">원본 기록을 독차지하기 위해</option>';
      trick.innerHTML = '<option value="">선택</option><option value="재입장">진우는 직원 통로로 먼저 들어와 보관실에 숨어 있다가, 현관으로 돌아가 조난자처럼 다시 등장했다. 시계와 상자 소리로 사망 시각도 늦춰 보였다</option><option value="옷">젖은 외투만으로 범행을 증명할 수 있다</option><option value="영상">계획된 대면만으로 살인 방법을 설명할 수 있다</option>';
    }
    $('#deductionForm').reset(); $('#formError').textContent = '';
  }
  $('#closeDeduction').addEventListener('click', () => $('#deductionDialog').close());
  $('#deductionForm').addEventListener('submit', (event) => {
    event.preventDefault(); const form = new FormData(event.currentTarget);
    const correct = state.caseNumber === 1
      ? form.get('culprit') === '미란' && form.get('motive') === '과거은폐' && form.get('trick') === '선행살해'
      : form.get('culprit') === 'jinwoo' && form.get('motive') === '복수' && form.get('trick') === '재입장';
    if (correct) {
      state.solved = true;
      addLog(state.caseNumber === 1 ? '<strong>추리 성공</strong> · 최미란의 동기와 밀실의 착각을 밝혀냈다.' : '<strong>추리 성공</strong> · 백진우의 거짓 도착 시각과 진술을 밝혀냈다.');
      updateProgress();
      if (state.caseNumber === 1) beginConfessionScene();
      else showEnding();
    }
    else { $('#formError').textContent = '아직 단서가 서로 맞물리지 않습니다. 장소와 진술을 더 조사해 보세요.'; addLog('최종 추리가 맞지 않았다. 단서와 진술을 더 확인해야 한다.'); }
  });
  function showEnding() {
    $('#deductionForm').classList.add('hidden'); const ending = $('#endingView'); ending.classList.remove('hidden');
    if (state.caseNumber === 1) {
      ending.innerHTML = '<div class="ending-mark">雪</div><span class="eyebrow">CASE CLOSED · CHAPTER 01</span><h2>첫 번째 진실</h2><p>최미란은 11시 32분 무렵 청동 문진으로 태오를 살해했다. 11시 34분 영상에는 문진을 감싸 들고 나가는 인물이 찍혔다. 정전은 11시 47분에 일어났다. 미란은 어둠 속에서 난방관을 울려 사람들이 살인 순간을 잘못 짚게 했고, 자동 잠금문은 방 안에서 범행이 일어난 듯한 착각을 완성했다.</p><p>미란은 18년 전 태오의 김수아 살인을 숨기도록 기록을 고친 사실도 인정했다. 그러나 사라진 원본은 돌아오지 않았다. 그때 현관문을 두드리는 소리가 났다.</p><div class="ending-grade">1차 사건 해결 · 새로운 조난자가 도착했다</div><button class="primary-button" id="continueChapter">다음 장: 눈보라 속의 손님</button>';
      $('#continueChapter').addEventListener('click', startActTwo);
    } else {
      ending.innerHTML = '<div class="ending-mark">雪</div><span class="eyebrow">CASE CLOSED · CHAPTER 02</span><h2>두 번째 진실</h2><p>백진우는 공식 도착 전에 직원 통로로 산장에 들어왔다. 자료 보관실 뒤편에 숨어 준혁의 동선을 지켜본 뒤, 현관으로 돌아가 외투에 눈을 묻히고 조난자인 척 다시 입장했다. 모두가 그의 도착을 목격했다고 믿는 동안, 그는 이미 산장 안에서 자유롭게 움직일 수 있었다.</p><p>준혁은 00시 09분 무렵 살해됐다. 진우는 시계를 00시 18분에 멈추고, 훗날 상자를 무너뜨려 비명이 들린 00시 27분을 살인 시각처럼 연출했다. 복수의 이유는 준혁이 태오의 범행을 알고도 거짓 증언으로 수아의 죽음을 덮었기 때문이다.</p><p>해가 떠오르기 시작했다. 서진은 마침내 언니의 죽음과 산장에 얽힌 세 사람의 거짓말을 마주했다.</p><div class="ending-grade">2차 사건 해결 · 백설산장의 밀실 제1부 완료</div><button class="primary-button" id="closeEnding">기록 확인</button>';
      $('#closeEnding').addEventListener('click', () => $('#deductionDialog').close());
    }
  }
  function startActTwo() {
    if (state.caseNumber !== 1 || !state.solved) return;
    $('#deductionDialog').close();
    state.caseNumber = 2; state.solved = false; state.location = 'foyer';
    state.found = new Set(); state.seenClues = new Set(); state.inspected.clear(); state.presented.clear(); state.selectedClue = ''; state.activePerson = '';
    document.querySelector('.chapter-tag').textContent = '제2장';
    document.querySelector('.left-panel h1').innerHTML = '눈보라 속<br>새로운 손님';
    document.querySelector('.eyebrow').textContent = 'CASE FILE 02';
    document.querySelector('.left-panel .intro').textContent = '첫 번째 범인을 밝혀낸 직후, 새로운 조난자가 산장에 도착한다. 그날 새벽 의사 박준혁이 자료 보관실에서 숨진 채 발견된다.';
    $('#chapterTitle').textContent = '눈보라 속의 손님';
    state.chapterSceneIndex = 0;
    renderLocations(); renderScene(); renderNotebook(); renderPeople(); updateProgress();
    renderChapterScene();
    $('#chapterDialog').showModal();
  }
  $('#scrollLatest').addEventListener('click', () => $('#logList').scrollTo({ top: 0, behavior: 'smooth' }));

  renderPrologue(); renderLocations(); renderScene(); renderStartingItems(); renderNotebook(); renderPeople(); renderLog(); updateProgress();
  $('#prologueDialog').showModal();
})();
