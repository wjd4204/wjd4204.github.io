---
title: "SOUF"
description: "대학생과 기업 간 외주 매칭 플랫폼"
summary: "대학생의 성장 기회와 기업의 프로젝트 수요를 연결하는 매칭 플랫폼에서 실제 운영 환경을 바탕으로 프로젝트를 진행했습니다."
date: 2026-06-02
period: "2025.01 - 2026.01"
team: "FE 2인, BE 2인, Marketing 1인, AI 1인"
stack: [ "Spring Boot", "AWS", "Redis", "EventListener + SQS + ECS", "Google Analytics"]
role: "PM 및 백엔드 설계 및 기능 구현 담당"
status: "Platform"
card:
  badge: "창업형 서비스 프로젝트"
  device: "laptop"
  image: "/projects/souf-main-page.png"
  imageAlt: "SOUF 메인 웹사이트 화면"
image: "/projects/souf-overview.svg"
imageAlt: "SOUF 서비스의 ALB, EC2 ASG, RDS 기반 3-Tier 아키텍처 다이어그램"
hoverImage: "/projects/souf-result.svg"
hoverImageAlt: "SOUF 프로젝트의 매칭 상태 정리 결과 다이어그램"
featured: true
slides:
  - key: "Architecture"
    title: "단일 서버 CPU 고갈을 ALB + ASG 수평 확장으로 안정화"
    image: "/projects/souf-overview.svg"
    imageAlt: "ALB, EC2 Auto Scaling Group, RDS 기반 3-Tier 수평 확장 아키텍처"
    body:
      - "운영 비용을 고려해 단일 인스턴스로 서버를 운영하던 중, 메인 페이지 API 요청 및 DB 커넥 병목 현상으로 인해 CPU 사용률이 98%까지 급격히 증가하며 서버 응답 불가 상태가 발생했습니다."
      - "CloudWatch CPUUtilization 지표로 단일 인스턴스의 CPU가 한계에 도달한 것을 확인했고, 요청 폭증에 대응할 수 있는 확장 구조가 없어 처리 한계를 초과했다고 판단했습니다."
      - "수직 확장도 고려했지만 비용 제약이 있어 ALB로 요청을 분산하고, ASG로 인스턴스를 최대 3대까지 수평 확장하는 3-tier 구조로 개선했습니다."
    points:
      - "CPU 사용률 70% 초과 시 ASG scale-out 정책 적용"
      - "이벤트 진행 중 활성 사용자 220% 증가 상황에서도 평균 응답 시간 정상 유지"
      - "서버 장애 0건"
      - "비용 제약 안에서도 모니터링 임계치와 자동 확장 정책으로 안정성을 확보할 수 있음을 학습"
      - "이벤트 전 부하 테스트로 병목 지점을 사전에 파악해야 한다는 필요성 확인"
  - key: "Caching"
    title: "인기 게시글 반복 조회 부하를 캐싱으로 줄였습니다."
    image: "/projects/souf-problem.svg"
    imageAlt: "인기 게시글 조회 요청이 데이터베이스에 반복 접근하는 문제"
    body:
      - "인기 게시글은 갱신 빈도는 낮지만 읽기 요청이 집중되어 DB 조회 비용이 반복적으로 발생했습니다."
      - "Look-aside 캐싱 전략을 적용해 캐시 히트 시 DB 접근 없이 응답하도록 개선했습니다."
    points:
      - "Redis 기반 Look-aside 캐싱 적용"
      - "반복 조회 구간의 DB 접근 감소"
      - "평균 응답 시간 312ms → 57ms 단축"
  - key: "Distribution Lock"
    title: "오토스케일링 환경의 배치 중복 실행을 막았습니다."
    image: "/projects/souf-tech.svg"
    imageAlt: "여러 서버 인스턴스에서 스케줄러 중복 실행을 막는 분산락 구조"
    body:
      - "Auto Scaling 환경에서는 서버 인스턴스가 여러 대로 늘어나며 스케줄러나 배치 작업이 중복 실행될 수 있었습니다."
      - "@DistributedLock 기반 분산락을 도입해 여러 인스턴스 중 하나에서만 작업이 실행되도록 보장했습니다."
    points:
      - "Redis 기반 분산락 적용"
      - "스케줄러/배치 중복 실행 방지"
      - "ASG 환경에서도 단일 인스턴스 실행 보장"
  - key: "Asynchronous Pipeline"
    title: "비동기 썸네일 추출 파이프라인을 구성했습니다."
    image: "/projects/souf-solution.svg"
    imageAlt: "EventListener, SQS, ECS 기반 비동기 썸네일 처리 구조"
    body:
      - "이미지 업로드 후 썸네일 추출 작업이 요청 흐름 안에서 처리되면 업로드 응답이 지연되고, 처리 실패가 사용자 요청에 영향을 줄 수 있었습니다."
      - "@EventListener로 도메인 이벤트를 분리하고, AWS SQS와 ECS를 통해 썸네일 추출 작업을 비동기로 처리했습니다."
    points:
      - "@EventListener 기반 도메인 이벤트 분리"
      - "AWS SQS로 썸네일 작업 큐잉"
      - "ECS에서 비동기 작업 처리"
      - "업로드 응답 지연 제거 및 썸네일 처리 장애 격리"
  - key: "Reduce Bounce Rate"
    title: "행동 분석 기반 개선으로 이탈률을 낮췄습니다."
    image: "/projects/souf-result.svg"
    imageAlt: "Google Analytics 경로 탐색 분석과 이탈률 개선 결과"
    body:
      - "서비스 안정성과 사용자 흐름 개선을 위해 Google Analytics 경로 탐색 분석을 진행했습니다."
      - "메인페이지의 초기 이탈률을 확인한 뒤 로직을 전면 수정해 사용자가 다음 행동으로 이어질 수 있도록 개선했습니다."
    points:
      - "Google Analytics 경로 탐색 분석 적용"
      - "메인페이지 초기 이탈률 확인"
      - "로직 전면 수정 후 이탈률 31% → 5%대로 감소"
---
