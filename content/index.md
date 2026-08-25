---
title: Boram Kim
---

# 결제·거래 시스템의 안정적 운영에 강한 백엔드 개발자

> 전자세금계산서 SaaS 백엔드 (넷매니아㈜ 재직중), 전자결제(PG) 재정산 솔루션 유지보수(부국위너스).
> RESTful API 개발, 외부 시스템 연동, 대량 트랜잭션 정합성 관리, RSA 서명 모듈 직접 개발.

`Java` `Spring Framework` `Spring Boot` `JSP` `MyBatis` `Oracle` `MySQL` `REST API` `Linux` `Apache/Tomcat` `Bouncy Castle` `Git`

---

## 핵심 요약 (30초용)

### 1. 결제(PG) + 세금계산서 SaaS 도메인
부국위너스 PG 개발팀에서 결제 재정산 솔루션 유지보수, 넷매니아㈜에서 세금계산서 SaaS 발행/정산 흐름 운영. **결제·정산·외부 연동 3축을 실무로 경험.**

### 2. RSA 3072bit 전자서명 모듈 직접 개발
KISA·과기부 전자서명 강도 상향(RSA 2048 → 3072bit) 규정에 대응해 **Bouncy Castle 기반 신규 서명 모듈(PKCS#1 v1.5)을 직접 설계·개발**. 병행으로 JDK 5 → 8, Tomcat 5.5 → 9, 32 → 64bit 전환 진행. 개발한 모듈은 사내 API 서명 처리로 확장 적용 예정.

### 3. 외부 시스템 연동 실무 다수
국세청 e세로 연동, 수천 개 고객사 에이전트 유지보수, 결제사 API 연동. **각기 다른 네트워크·JDK·JDBC·설정 편차를 실 운영 환경에서 대응.**

---

## 담당 업무 매트릭스

### RESTful API 개발 및 운영
- 전자세금계산서 신규 API 설계·구현·운영·유지보수 (넷매니아)
- 결제 재정산 솔루션 소스 분석 및 유지보수 (부국위너스)
- 엔드포인트 설계, 예외 처리, 재시도 흐름 실무 적용

### Backend 관리자 시스템 개발·운영
- 발행현황·매출·발행량 관리자 화면 (넷매니아)
- Oracle Materialized View 활용으로 조회 응답 **10초 → 3초** 단축
- 결제 재정산 관리자 시스템 유지보수 (부국위너스)

### 다양한 외부 시스템 연동
- 국세청 e세로 발행/전송 흐름
- 수천 개 고객사 서버 에이전트 대응 (월 10건 규모 이슈 대응)
- 이질적 환경(네트워크·JDK·JDBC·설정) 편차를 로그·설정·DB 스펙 확인으로 처리

### 대량 트랜잭션 정합성 관리
- 월 120만 건 규모 발행 트랜잭션 운영
- 월초 1~10일 집중기 최대 100만 건 처리
- 발행 누락·재동기화·외부 전송 정합성 이슈를 **요청 → DB → 문서 → 외부 전송** 흐름 기준으로 원인 추적

### 라이브 무중단 보안·인프라 개선
- Apache 2.4.6 → 2.4.64 업그레이드, mod_jk 기반 WAS 연동 호환성 검증
- SSL/TLS 취약점 대응, SQL Injection 방어, DNS DCV 반영
- RSA 서명 모듈 신규 개발 + JDK 5 → 8 + Tomcat 5.5 → 9 + 32 → 64bit 아키텍처 전환 병행

### 개발·운영 프로세스 개선
- CVS → Git 전환, Git-flow 브랜치 전략 도입
- GitHub Actions 기반 CI/CD 파이프라인 구성
- AI 기반 배포 보조 도구, 스케줄러 SMS 자동 발송, 일일 보고 엑셀 자동 생성

---

## 경력

### 넷매니아㈜ | 백엔드 개발자 | 2025.01 ~ 재직중 (1년 7개월)

전자세금계산서 SaaS 개발·운영. 발행/역발행/국세청 전송/보관함/휴폐업 조회 흐름 담당.

**주요 성과**
- 월 120만 건 규모 발행 트랜잭션 안정 운영
- 조회 응답 10초 → 3초 (Oracle Materialized View)
- Apache 2.4.6 → 2.4.64, SSL/TLS·SQLi·DNS DCV 라이브 무중단 반영
- **RSA 3072bit 서명 모듈 직접 개발** (Bouncy Castle, PKCS#1 v1.5)
- JDK 5 → 8, Tomcat 5.5 → 9, 32 → 64bit 아키텍처 전환
- CVS → Git 전환, Git-flow, GitHub Actions 기반 CI/CD 구성

---

### 부국위너스 | PG 개발팀 | 2021.07 ~ 2022.08 (1년 2개월)

**전자결제(PG) 도메인 첫 실무.** 결제 재정산 솔루션 소스 분석 및 유지보수 담당. 결제 승인·취소·정산 흐름, 관리자 시스템, 결제사 연동 구조 학습.

---

### Y&H company | CS 부서 | 2018.06 ~ 2019.11 (1년 6개월)

**이커머스 고객 접점.** 쇼핑몰 고객 응대·배송 담당. 이커머스 서비스 흐름과 고객 관점 이해.

---

### SK텔레콤 | 인바운드 | 2015.02 ~ 2017.03 (2년 2개월)

**통신 고객 응대.** 콜센터 인바운드. 요구사항 파악·문제 해결 커뮤니케이션 훈련.

---

## 기술 키워드

**Backend**  
`Java` `Spring Framework` `Spring Boot` `Spring MVC` `Spring Data JPA` `JSP` `MyBatis` `REST API` `Batch` `Scheduler`

**Database**  
`Oracle` `Oracle Materialized View` `MySQL` `SQL Tuning` `Data Sync`

**Infra / Security**  
`Linux` `Apache` `Tomcat` `mod_jk` `SSL/TLS` `DNS DCV` `SQL Injection 대응`  
`Bouncy Castle` `PKCS#1 v1.5` `RSA 3072 서명 모듈 개발`

**DevOps**  
`Docker` `GitHub Actions` `Jenkins` `CVS → Git 전환` `Git-flow` `CI/CD`

**Operation**  
`Troubleshooting` `Log Analysis` `Monitoring` `Deployment Automation`

**Learning**  
`AWS` `GCP` `Kafka` `React.js` `Node.js` `TypeScript` `Flutter`

---

## 학력·자격

**학점은행제대학교(4년제) 컴퓨터공학과** — 2020.04 ~ 2023.08 졸업

**자격증**
- 정보처리기사 (2021.06)
- SQL개발자(SQLD) (2021.06)
- 리눅스마스터 2급 (2022.02)
- 네트워크관리사 2급 (2022.05)

---

## 잘 맞는 팀

- **결제·정산·거래·심사처럼 돈 흐름을 다루는 서비스**
- 외부 시스템 연동, 가맹점/고객사 기술 지원, 관리자 시스템 개발이 필요한 팀
- 레거시 시스템을 유지하면서 보안·성능·인프라를 점진적으로 개선해야 하는 팀
- 코드뿐 아니라 DB·서버·인증서·네트워크까지 함께 봐야 하는 운영형 백엔드 팀

---

## 현재 보완 중인 영역

대규모 분산 시스템, Kubernetes, Kafka 기반 실서비스 운영 경험은 아직 부족합니다. 대신 실제 운영 서비스에서 장애를 끝까지 추적하고, 서명 모듈을 직접 개발해 라이브에 반영하며, 결제·정산·외부 연동 흐름을 실무로 다뤄온 경험을 강점으로 가져가고 있습니다.

---

## Contact

- Email — [boram04415@gmail.com](mailto:boram04415@gmail.com)
- Velog — [velog.io/@boram0415](https://velog.io/@boram0415/posts)
- GitHub — [github.com/boram0415](https://github.com/boram0415)
- Location — 서울 송파구
