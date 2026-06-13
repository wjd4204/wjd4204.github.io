---
title: "F'LINK"
description: "IT 컨퍼런스 플랫폼 품질 개선 프로젝트"
summary: "컨퍼런스 신청과 운영 로직을 테스트로 고정해, 배포 전 불안한 부분을 줄인 프로젝트입니다."
date: 2026-05-20
period: "2024.10 - 2024.12"
team: "Backend 3명 / Frontend 3명"
stack: ["Spring Boot", "Redis", "Jacoco"]
role: "Backend 테스트 코드 작성 및 서비스 품질 개선"
status: "Representative"
card:
  badge: "코드 품질 개선 프로젝트"
  device: "phones"
  image: "/projects/flink-participant.png"
  imageAlt: "F'LINK 참가자 모바일 화면"
  secondaryImage: "/projects/flink-manager.png"
  secondaryImageAlt: "F'LINK 관리자 모바일 화면"
image: "/projects/synergy-overview.svg"
imageAlt: "Synergy 컨퍼런스 플랫폼의 테스트와 품질 개선 흐름"
hoverImage: "/projects/synergy-result.svg"
hoverImageAlt: "Synergy 프로젝트의 테스트 통과와 품질 개선 결과 다이어그램"
featured: true
slides:
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
    troubleshootingSummary:
      problem: "정원 초과나 중복 신청 같은 작은 오류도 행사 운영 리스크로 이어질 수 있었습니다."
      judgment: "정상 흐름보다 실패 흐름을 먼저 정리해야 배포 전 검증이 의미 있다고 봤습니다."
      result: "테스트 시나리오의 우선순위를 실패 케이스 중심으로 잡았습니다."
  - key: "Result"
    title: "실패 케이스를 테스트로 고정해 회귀 확인 기준을 만들었습니다."
    image: "/projects/synergy-result.svg"
    imageAlt: "테스트 통과와 품질 개선 결과"
    body:
      - "정상 흐름만 테스트하지 않고, 정원 초과, 중복 신청, 잘못된 상태 변경 같은 실패 케이스를 먼저 정리했습니다."
      - "핵심 정책이 테스트 코드로 고정되면서 기능 수정 후에도 기존 동작을 빠르게 확인할 수 있게 되었습니다."
    points:
      - "핵심 서비스 로직 테스트 기반 확보"
      - "실패 케이스에 대한 팀 내 기준 공유"
      - "리팩터링과 기능 추가의 안정성 향상"
    troubleshootingSummary:
      problem: "기능을 고친 뒤 기존 정책이 그대로 지켜지는지 확인할 기준이 부족했습니다."
      judgment: "실패 케이스를 테스트로 고정해 회귀 검증 도구로 쓰는 방향을 선택했습니다."
      result: "수정 후 영향 범위를 더 빠르게 확인할 수 있게 되었습니다."
---
