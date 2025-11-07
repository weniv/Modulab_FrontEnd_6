# Google Sheets TODO App

Google Sheets를 백엔드로 사용하는 심플한 TODO 웹 애플리케이션입니다. GitHub Pages에 배포 가능하며, 별도의 서버 없이 Google Apps Script를 통해 데이터를 관리합니다.

## 기능

- TODO 추가, 완료, 삭제
- 전체/진행중/완료 필터링
- Google Sheets에 실시간 데이터 저장
- 반응형 디자인 (모바일 지원)
- 로컬 스토리지를 통한 설정 저장

## 파일 구조

```
.
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # 프론트엔드 JavaScript
├── Code.gs             # Google Apps Script 백엔드 코드
└── README.md           # 이 파일
```

## Google Sheets 및 Apps Script 설정 방법

### 1단계: Google Sheets 생성

1. [Google Sheets](https://sheets.google.com)에 접속합니다
2. 새 스프레드시트를 생성합니다
3. 스프레드시트 이름을 "TODO App" 등으로 지정합니다
   - 참고: 시트 이름은 자동으로 "TODO"로 생성됩니다 (코드에서 자동 생성)

### 2단계: Google Apps Script 설정

1. Google Sheets에서 **확장 프로그램 > Apps Script** 메뉴를 클릭합니다
2. 기본 코드를 모두 삭제합니다
3. `Code.gs` 파일의 내용을 복사하여 붙여넣습니다
4. 프로젝트 이름을 "TODO Backend" 등으로 지정합니다
5. **저장** 버튼을 클릭합니다 (Ctrl+S 또는 Cmd+S)

### 3단계: 웹 앱으로 배포

1. Apps Script 편집기에서 **배포 > 새 배포** 버튼을 클릭합니다
2. **배포 유형 선택** 옆의 톱니바퀴 아이콘을 클릭하고 **웹 앱**을 선택합니다
3. 다음과 같이 설정합니다:
   - **설명**: "TODO App v1" 등 원하는 설명 입력
   - **다음 사용자로 실행**: **나**를 선택
   - **액세스 권한**: **모든 사용자**를 선택
     - ⚠️ 주의: 이 설정은 URL을 아는 누구나 접근할 수 있게 합니다. 보안이 중요하다면 "Google 계정이 있는 모든 사용자"를 선택하세요.
4. **배포** 버튼을 클릭합니다
5. **액세스 승인** 창이 나타나면:
   - **액세스 권한 부여**를 클릭합니다
   - Google 계정을 선택합니다
   - "Google에서 확인하지 않은 앱" 경고가 나타나면 **고급**을 클릭하고 **[프로젝트명](안전하지 않은 페이지)로 이동**을 클릭합니다
   - **허용** 버튼을 클릭합니다
6. **웹 앱 URL**이 표시됩니다. 이 URL을 복사해둡니다
   - 예시: `https://script.google.com/macros/s/AKfycbz.../exec`

### 4단계: 웹 앱에 URL 설정

1. 웹 앱(index.html)을 브라우저로 엽니다
2. "Google Apps Script Web App URL" 입력란에 복사한 URL을 붙여넣습니다
3. **저장** 버튼을 클릭합니다
4. 이제 TODO를 추가하고 관리할 수 있습니다!

## GitHub Pages 배포 방법

### 1단계: GitHub 저장소 생성

1. [GitHub](https://github.com)에 로그인합니다
2. 우측 상단의 **+** 버튼을 클릭하고 **New repository**를 선택합니다
3. 저장소 이름을 입력합니다 (예: `todo-app`)
4. **Public**을 선택합니다
5. **Create repository** 버튼을 클릭합니다

### 2단계: 파일 업로드

1. 생성된 저장소 페이지에서 **uploading an existing file**을 클릭합니다
2. 다음 파일들을 드래그 앤 드롭합니다:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - ⚠️ `Code.gs`는 업로드하지 않습니다 (이미 Google Apps Script에 있음)
3. **Commit changes** 버튼을 클릭합니다

### 3단계: GitHub Pages 활성화

1. 저장소 페이지에서 **Settings** 탭을 클릭합니다
2. 왼쪽 메뉴에서 **Pages**를 클릭합니다
3. **Source** 섹션에서:
   - Branch: **main** 선택
   - 폴더: **/ (root)** 선택
4. **Save** 버튼을 클릭합니다
5. 몇 분 후 페이지 상단에 웹사이트 URL이 표시됩니다
   - 예시: `https://username.github.io/todo-app/`

### 4단계: 배포된 사이트 확인

1. 표시된 URL로 접속합니다
2. Google Apps Script URL을 설정하고 사용합니다

## Google Sheets 데이터 구조

앱을 처음 실행하면 Google Sheets에 다음과 같은 구조의 "TODO" 시트가 자동 생성됩니다:

| ID | Text | Completed | CreatedAt | UpdatedAt |
|----|------|-----------|-----------|-----------|
| uuid-1 | 첫 번째 할 일 | FALSE | 2025-01-01T00:00:00.000Z | 2025-01-01T00:00:00.000Z |
| uuid-2 | 두 번째 할 일 | TRUE | 2025-01-02T00:00:00.000Z | 2025-01-02T00:00:00.000Z |

- **ID**: UUID로 생성된 고유 식별자
- **Text**: TODO 내용
- **Completed**: 완료 여부 (TRUE/FALSE)
- **CreatedAt**: 생성 시간 (ISO 8601 형식)
- **UpdatedAt**: 마지막 수정 시간 (ISO 8601 형식)

## API 엔드포인트

Google Apps Script는 다음 API를 제공합니다:

### GET 요청

- `GET ?action=getTodos`: 모든 TODO 목록 가져오기

### POST 요청

- `POST action=addTodo&text={text}`: TODO 추가
- `POST action=toggleTodo&id={id}`: TODO 완료/미완료 토글
- `POST action=deleteTodo&id={id}`: TODO 삭제

## 문제 해결

### CORS 오류가 발생하는 경우

Google Apps Script는 기본적으로 CORS를 허용합니다. 만약 오류가 발생한다면:
1. Apps Script를 다시 배포해보세요 (새 배포 생성)
2. 브라우저 캐시를 삭제하고 다시 시도해보세요

### "권한이 필요합니다" 오류

Apps Script 배포 시 다음을 확인하세요:
- "다음 사용자로 실행": **나**로 설정
- "액세스 권한": **모든 사용자** 또는 **Google 계정이 있는 모든 사용자**로 설정
- 권한 승인을 완료했는지 확인

### 데이터가 저장되지 않는 경우

1. Google Apps Script URL이 올바른지 확인하세요
2. Apps Script가 제대로 배포되었는지 확인하세요
3. 브라우저 콘솔(F12)에서 에러 메시지를 확인하세요
4. Google Sheets에 직접 접속하여 "TODO" 시트가 생성되었는지 확인하세요

### URL 업데이트 방법

Apps Script를 다시 배포하여 새 URL을 받은 경우:
1. 웹 앱에서 설정 섹션을 다시 표시하려면 브라우저의 개발자 도구를 열고 (F12)
2. Console 탭에서 다음 명령어를 입력:
   ```javascript
   localStorage.removeItem('googleSheetsApiUrl'); location.reload();
   ```
3. 또는 새로운 URL을 직접 입력하면 기존 설정을 덮어씁니다

## 보안 고려사항

- 이 앱은 누구나 URL을 알면 접근할 수 있습니다
- 민감한 정보를 저장하지 마세요
- 더 강력한 보안이 필요하다면:
  - Apps Script 배포 시 "액세스 권한"을 "Google 계정이 있는 모든 사용자"로 설정
  - 추가 인증 로직 구현 고려

## 기술 스택

- **프론트엔드**: HTML5, CSS3, Vanilla JavaScript
- **백엔드**: Google Apps Script
- **데이터베이스**: Google Sheets
- **배포**: GitHub Pages

## 라이선스

이 프로젝트는 자유롭게 사용 가능합니다.

## 기여

버그 리포트나 개선 제안은 언제나 환영합니다!
