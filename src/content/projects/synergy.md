---
title: "Synergy"
description: "대규모 IT 컨퍼런스 플랫폼 품질 개선 프로젝트"
summary: "대규모 IT 컨퍼런스 운영을 위한 플랫폼에서 TDD 기반 테스트 코드 작성과 서비스 품질 개선을 진행했습니다."
date: 2026-05-20
period: "2024.10 - 2024.12"
team: "Backend 3명 / Frontend 3명"
stack: ["Spring Boot", "JUnit5", "Mockito", "JPA", "MySQL"]
role: "Backend 테스트 코드 작성 및 서비스 품질 개선"
status: "Representative"
image: "/projects/synergy-overview.svg"
imageAlt: "Synergy 컨퍼런스 플랫폼의 테스트와 품질 개선 흐름"
hoverImage: "/projects/synergy-result.svg"
hoverImageAlt: "Synergy 프로젝트의 테스트 통과와 품질 개선 결과 다이어그램"
featured: true
slides:
  - key: "Overview"
    title: "대규모 컨퍼런스 운영을 안정적으로 받치는 플랫폼"
    image: "/projects/synergy-overview.svg"
    imageAlt: "참가자, 세션, 운영자가 연결되는 컨퍼런스 플랫폼 구조"
    body:
      - "Synergy는 대규모 IT 컨퍼런스의 참가 신청, 세션 정보, 운영 관리를 지원하는 플랫폼입니다."
      - "프로젝트에서는 TDD 기반 테스트 코드 작성과 핵심 서비스 로직 검증을 통해 품질 개선에 집중했습니다."
    points:
      - "기간: 2024.10 - 2024.12"
      - "인원: Backend 3명 / Frontend 3명"
      - "역할: 테스트 코드 작성, 서비스 로직 검증"
      - "기술: Spring Boot, JUnit5, Mockito, JPA, MySQL"
  - key: "Problem"
    title: "이벤트성 서비스는 작은 오류도 운영 리스크가 됩니다."
    image: "/projects/synergy-problem.svg"
    imageAlt: "컨퍼런스 신청과 세션 관리에서 발생할 수 있는 오류"
    body:
      - "컨퍼런스 플랫폼은 신청 기간과 운영 시간이 정해져 있어 장애가 발생하면 사용자가 다시 시도할 여유가 적습니다."
      - "참가 신청, 세션 조회, 운영 상태 변경 같은 핵심 로직은 배포 전 신뢰할 수 있는 검증이 필요했습니다."
    points:
      - "일시적인 트래픽 집중 가능성"
      - "신청 상태와 정원 관리 오류 위험"
      - "운영 일정상 빠른 회귀 검증 필요"
  - key: "Tech Choice"
    title: "JUnit5와 Mockito로 서비스 로직을 먼저 검증했습니다."
    image: "/projects/synergy-tech.svg"
    imageAlt: "JUnit5와 Mockito 기반 테스트 구조"
    body:
      - "핵심 정책은 컨트롤러보다 서비스 계층에 모아 테스트하기 쉬운 구조로 정리했습니다."
      - "JUnit5와 Mockito를 사용해 외부 의존성을 줄이고, 조건별 서비스 동작을 빠르게 검증했습니다."
    points:
      - "JUnit5: 정책별 테스트 케이스 작성"
      - "Mockito: Repository 의존성 대체"
      - "TDD: 실패 케이스를 먼저 정의하고 구현"
  - key: "Solution"
    title: "실패 케이스를 기준으로 테스트 시나리오를 작성했습니다."
    image: "/projects/synergy-solution.svg"
    imageAlt: "실패 케이스 중심 테스트 시나리오"
    body:
      - "정상 흐름만 테스트하지 않고, 정원 초과, 중복 신청, 잘못된 상태 변경 같은 실패 케이스를 먼저 정리했습니다."
      - "서비스 메서드의 입력 조건과 예외 응답을 명확히 하면서 코드의 의도를 문서처럼 남겼습니다."
    points:
      - "중복 신청 방지 테스트"
      - "정원 초과 예외 테스트"
      - "운영 상태 변경 권한 검증"
  - key: "Result"
    title: "배포 전 회귀 확인이 가능한 서비스가 되었습니다."
    image: "/projects/synergy-result.svg"
    imageAlt: "테스트 통과와 품질 개선 결과"
    body:
      - "핵심 정책이 테스트 코드로 고정되면서 기능 수정 후에도 기존 동작을 빠르게 확인할 수 있게 되었습니다."
      - "테스트는 팀원이 서비스 의도를 이해하는 문서 역할도 하며, 이후 리팩터링의 기준점이 되었습니다."
    points:
      - "핵심 서비스 로직 테스트 기반 확보"
      - "실패 케이스에 대한 팀 내 기준 공유"
      - "리팩터링과 기능 추가의 안정성 향상"
---
