---
title: "F'LINK"
description: "IT 컨퍼런스 플랫폼 품질 개선 프로젝트"
summary: "대규모 IT 컨퍼런스를 운영 및 관리하는 프로젝트입니다."
date: 2026-05-20
period: "2024.12 - 2025.04"
team: "FE 2인, BE 4인, PM 1인, UI/UX 디자이너 2인"
stack: ["Spring Boot", "Redis", "Jacoco"]
role: "Backend 테스트 코드 작성 및 서비스 품질 개선"
status: "Quality Improvement"
card:
  badge: "코드 품질 개선 프로젝트"
  device: "phones"
  image: "/projects/flink-participant.png"
  imageAlt: "F'LINK 참가자 모바일 화면"
  secondaryImage: "/projects/flink-manager.png"
  secondaryImageAlt: "F'LINK 관리자 모바일 화면"
image: "/projects/synergy-overview.svg"
imageAlt: "Synergy 컨퍼런스 플랫폼의 테스트와 품질 개선 흐름"
hoverImage: "/projects/flink-mock-test.png"
hoverImageAlt: "F'LINK 테스트 피드백 사이클 개선 다이어그램"
featured: true
slides:
  - key: "Problem"
    title: "Sorted Set 캐싱을 이용한 포인트 랭킹 조회 기능 개선"
    image: "/projects/flink-redis-sorted-set.png"
    imageAlt: "Redis Sorted Set을 이용한 포인트 랭킹 조회 구조"
    problem:
      - "컨퍼런스 참여자의 포인트 랭킹을 조회하는 기능에서 DB 직접 접근이 반복적으로 발생했습니다.\n
      포인트는 참여자의 보상과 연결되는 지표였기 때문에 많은 사용자가 랭킹 페이지에 접근했고, 동일한 랭킹 데이터를 조회하기 위한 DB 집계 쿼리가 반복 실행되었습니다."
    cause:
      - "랭킹 데이터의 특성을 재검토했습니다. 조회 빈도는 높지만 초 단위 실시간 정합성이 필수적인 데이터는 아니라고 판단했습니다.
      DB 커넥션을 줄이며 응답 시간을 단축시키는 캐싱을 생각했지만 단순 key-value 캐시로는 부족한 이유가 있었습니다."
      - "1. 점수 기준 정렬 및 상위 목록에 대한 빠른 조회가 필요했습니다."
      - "2. 점수 변경 시 랭킹 구조 반영의 용이성을 높일 필요가 있었습니다."
      - "이 특성들이 Redis Sorted Set의 사용 목적과 정확히 일치하여 일반 String 캐시 대신 **Sorted Set**을 선택했습니다."
    solution:
      - "Sorted Set의 Score에는 참여자의 포인트를 저장하고, member에는 참여자 식별자를 저장하여 Redis 내부에서 점수 기준 정렬이 가능하도록 구성했습니다.
      이를 통해 랭킹 조회 시 Redis에서 정렬된 데이터를 바로 조회할 수 있도록 개선했습니다."
      - "캐시 데이터가 오래 유지되어 실제 포인트와 랭킹의 차이가 커지는 문제를 줄이기 위해 **TTL을 10분**으로 설정했습니다.
      이를 통해 DB 부하를 줄이면서도 적절한 데이터 신선도를 확보할 수 있었습니다."
    result:
      - "응답 시간 **367ms -> 87ms로 76% 개선**"
      - "DB 커넥션 풀 부담 완화"
    lesson:
      - "랭킹 데이터는 단순 Key-Value 캐싱보다 점수 기준 정렬이 중요했기 때문에, 조회 결과를 그대로 저장하기보다 Redis Sorted Set처럼 **문제에 맞는 자료구조**를 선택하는 과정이 중요하다는 것을 알게 되었습니다."
      - "모든 데이터를 실시간으로 맞추기보다, 서비스 특성상 허용 가능한 지연 범위를 정하고 TTL 10분으로 성능과 **데이터 신선도**의 균형을 맞추는 판단을 경험했습니다."
    troubleshootingSummary:
      problem: "포인트 랭킹 조회가 반복 DB 집계 쿼리로 이어져 응답 지연과 커넥션 부담이 생겼습니다."
      judgment: "랭킹은 실시간 정합성보다 빠른 정렬 조회가 중요해 Redis Sorted Set이 적합하다고 봤습니다."
      result: "응답 시간을 367ms에서 87ms로 줄이고 DB 커넥션 풀 부담을 완화했습니다."
  - key: "Result"
    title: "테스트 코드를 통한 피드백 사이클 강화"
    image: "/projects/flink-mock-test.png"
    imageAlt: "Mockito 기반 단위 테스트로 피드백 사이클을 개선하는 구조"
    imageLink: "https://app.codecov.io/gh/Goorm-Synergy/Synergy-Backend"
    imageLinkLabel: "JaCoCo Coverage"
    problem:
      - "서비스 로직의 동작을 확인하려면 매번 어플리케이션을 전체 실행하는 번거로움이 발생했습니다.
      별도의 테스트 코드 없이 수동으로 기능을 검증하다 보니 피드백 사이클이 길어졌고, 곧 개발 속도 저하로 이어지게 되었습니다."
    cause:
      - "**테스트 코드가 부재**한 상황에서 기능 검증을 통합 실행에만 의존했던 것이 원인이었습니다.
      또한 서비스 레이어가 DB, 외부 API 등 외부 의존성과 강하게 결합되어 있어 단독으로 실행 가능한 테스트 환경 자체를 구성하기 어려운 구조였습니다."
    solution:
      - "**Mockito**를 도입해 외부 의존성을 격리한 **단위 테스트 환경을 구성**했습니다.
      Repository, 외부 API 같은 의존 객체를 **Mock으로 대체**하고 서비스 인스턴스를 @InjectMocks로 주입해 DB 없이도 서비스 로직만 독립적으로 실행 가능하도록 하였습니다.
      이때 예외 케이스가 발생할 것을 예상하고 시나리오를 분리하여 핵심 분기 로직을 검증하였습니다."
      - "단위 테스트를 통해 빠른 피드백을 확보한 뒤에는 실제 DB 및 컨테이너 환경에서 통합 테스트를 추가하여 계층 간 동작을 최종 검증할 수 있도록 구성하였습니다."
    result:
      - "JaCoCo 테스트 커버리지 **75% 달성**"
      - "기능 추가 시 회귀 여부를 테스트로 즉시 확인 가능"
    lesson:
      - "서비스 로직을 검증할 때 DB나 외부 API까지 매번 함께 실행하면 원인 파악이 느려지기 때문에, Mockito로 외부 의존성을 격리하고 핵심 분기만 먼저 검증하는 방식이 효과적이었습니다."
      - "JaCoCo 커버리지는 단순히 숫자를 높이기 위한 지표가 아니라, 테스트가 부족한 영역을 찾고 기능 추가 시 **회귀 가능성**을 줄이는 기준으로 활용해야 한다는 점을 배웠습니다."
    troubleshootingSummary:
      problem: "수동 검증에 의존하여 피드백 사이클이 길어졌습니다."
      judgment: "Mockito로 외부 의존성을 격리한 단위 테스트를 먼저 만들고, 통합 테스트로 전체 흐름을 보완했습니다."
      result: "JaCoCo 테스트 커버리지 75%를 달성하였습니다."
---
