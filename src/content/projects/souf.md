---
title: "SOUF"
description: "대학생과 기업 간 외주 매칭 플랫폼"
summary: "대학생의 성장 기회와 기업의 프로젝트 수요를 연결하는 매칭 플랫폼입니다."
date: 2026-06-02
period: "2025.01 - 2026.01"
team: "FE 2인, BE 2인, Marketing 1인, AI 1인"
stack: ["Java", "Spring Boot", "JPA", "MySQL", "AWS"]
role: "PM 및 백엔드 설계 및 기능 구현 담당"
status: "Representive"
image: "/projects/souf-overview.svg"
imageAlt: "SOUF 플랫폼의 학생과 기업 매칭 흐름 다이어그램"
hoverImage: "/projects/souf-result.svg"
hoverImageAlt: "SOUF 프로젝트의 매칭 상태 정리 결과 다이어그램"
featured: true
slides:
  - key: "Overview"
    title: "대학생과 기업을 연결하는 매칭 흐름"
    image: "/projects/souf-overview.svg"
    imageAlt: "학생 프로필과 기업 프로젝트가 매칭되는 개요"
    body:
      - "SOUF는 대학생이 프로젝트 경험을 찾고, 기업은 적합한 참여자를 찾을 수 있도록 연결하는 플랫폼입니다."
      - "백엔드에서는 사용자 프로필, 기업 프로젝트, 지원 및 매칭 상태를 일관된 흐름으로 관리하는 데 집중했습니다."
    points:
      - "기간: 2024.03 - 2024.06"
      - "인원: FE 2인, BE 2인, Marketing 1인, AI 1인"
      - "역할: 매칭 도메인 API, 프로젝트 지원 상태 관리"
      - "기술: Java, Spring Boot, JPA, MySQL, AWS"
  - key: "Problem"
    title: "서로 다른 사용자의 상태를 하나의 흐름으로 다뤄야 했습니다."
    image: "/projects/souf-problem.svg"
    imageAlt: "학생, 기업, 프로젝트 상태가 얽힌 문제 상황"
    body:
      - "학생과 기업은 같은 프로젝트를 바라보지만 필요한 정보와 행동 시점이 달랐습니다."
      - "지원, 검토, 승인, 거절 상태가 흩어지면 사용자에게 다음 행동이 명확히 보이지 않는 문제가 생길 수 있었습니다."
    points:
      - "학생 기준: 내가 지원한 프로젝트와 진행 상태 확인"
      - "기업 기준: 지원자 목록과 검토 상태 확인"
      - "공통 기준: 상태 변경의 권한과 순서 보장"
  - key: "Tech Choice"
    title: "JPA 기반 도메인 모델로 상태 전이를 명확히 했습니다."
    image: "/projects/souf-tech.svg"
    imageAlt: "Spring Boot, JPA, MySQL 기술 선택 다이어그램"
    body:
      - "매칭 흐름은 관계와 상태 변경이 핵심이기 때문에 JPA 엔티티 관계와 명시적인 상태 enum을 중심으로 설계했습니다."
      - "Spring Boot를 사용해 REST API를 빠르게 구성하고, MySQL로 지원 이력과 프로젝트 상태를 안정적으로 저장했습니다."
    points:
      - "JPA: 사용자, 기업, 프로젝트, 지원 이력 간 관계 표현"
      - "MySQL: 상태 기반 조회와 이력 데이터 저장"
      - "Spring Boot: 인증 이후 사용자 역할별 API 분기"
  - key: "Solution"
    title: "역할별 API와 상태 검증 로직을 분리했습니다."
    image: "/projects/souf-solution.svg"
    imageAlt: "역할별 API와 서비스 계층 분리 구조"
    body:
      - "학생과 기업의 API를 역할 기준으로 나누고, 상태 변경은 서비스 계층에서 한 번 더 검증하도록 구성했습니다."
      - "응답 DTO는 화면에서 바로 사용할 수 있는 형태로 정리해 프론트엔드의 조합 로직을 줄였습니다."
    points:
      - "지원 생성, 취소, 검토 상태 변경 책임 분리"
      - "권한 없는 상태 변경 방지"
      - "목록 조회 응답에 필요한 요약 정보 포함"
  - key: "Result"
    title: "사용자가 다음 행동을 이해하기 쉬운 구조가 되었습니다."
    image: "/projects/souf-result.svg"
    imageAlt: "정리된 매칭 상태와 사용자 행동 흐름"
    body:
      - "지원 상태를 중심으로 화면과 API가 같은 기준을 공유하게 되어, 사용자별 다음 행동을 명확히 보여줄 수 있었습니다."
      - "프로젝트 이후에는 상태 변경 로그와 알림 기능을 붙이면 더 자연스러운 매칭 경험으로 확장할 수 있다고 판단했습니다."
    points:
      - "지원 상태 관리 기준 통일"
      - "역할별 API 책임 명확화"
      - "알림, 추천 로직으로 확장 가능한 구조"
---
