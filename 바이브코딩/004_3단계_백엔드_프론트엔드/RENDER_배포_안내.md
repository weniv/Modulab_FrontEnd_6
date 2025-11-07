# Render.com 배포 안내

## 1. 준비된 파일들
✅ `requirements.txt` - 필요한 Python 패키지들  
✅ `build.sh` - Render 빌드 스크립트  
✅ `gunicorn` 설정 완료

## 2. Render에서 배포하기

### 2-1. GitHub에 코드 업로드
1. GitHub에 새 저장소 생성
2. 이 프로젝트 전체를 업로드

### 2-2. Render에서 Web Service 생성
1. [render.com](https://render.com)에 가입/로그인
2. "New" → "Web Service" 클릭
3. GitHub 저장소 연결
4. 다음 설정 입력:

**기본 설정:**
- Name: `video-streaming` (원하는 이름)
- Root Directory: (비워두기)
- Environment: `Python 3`
- Region: `Oregon (US West)` 또는 가까운 지역

**빌드 및 배포 설정:**
- Build Command: `./build.sh`
- Start Command: `gunicorn video_streaming.wsgi`

**환경 변수 (Environment Variables):**
- `DEBUG`: `False`
- `SECRET_KEY`: (새로운 시크릿 키 생성해서 입력)

### 2-3. 시크릿 키 생성하기
Python에서 새 시크릿 키 생성:
```python
import secrets
print(secrets.token_urlsafe(50))
```

## 3. 배포 후 확인사항

### 관리자 계정
- **ID**: admin
- **비밀번호**: admin123
- **관리자 페이지**: https://your-app-name.onrender.com/admin/

### 첫 동영상 업로드
1. 관리자 페이지 접속
2. "Videos" → "비디오들" 클릭
3. "비디오 추가"로 동영상 업로드

## 4. 주의사항

### 파일 업로드 제한
- Render 무료 플랜에서는 파일 업로드가 제한적
- 큰 동영상 파일은 외부 스토리지(AWS S3 등) 사용 권장

### 데이터베이스
- SQLite 사용 중 (무료 플랜에 적합)
- 서버 재시작 시 업로드된 파일이 사라질 수 있음

## 5. 트러블슈팅

### 빌드 실패 시
- Build 로그 확인
- `build.sh` 실행 권한 문제일 수 있음

### 정적 파일 문제 시
- `python manage.py collectstatic` 명령어 확인

### 동영상 재생 안 될 시
- 브라우저 호환성 확인
- 동영상 파일 형식 확인 (.mp4 권장)

## 6. 업그레이드 옵션

### 유료 플랜 시 추가 가능한 기능:
- PostgreSQL 데이터베이스
- 더 큰 파일 업로드
- 사용자 정의 도메인
- SSL 인증서

## 7. 로컬에서 테스트
Windows에서는 gunicorn이 실행되지 않지만, 다음 명령어로 Django 개발 서버는 계속 사용 가능:
```bash
python manage.py runserver
```