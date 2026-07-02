---
title: "F'LINK"
description: "IT 컨퍼런스 플랫폼 품질 개선 프로젝트"
summary: "대규모 IT 컨퍼런스를 효율적으로 관리하기 위한 어플리케이션입니다.\n
백엔드 팀장을 맡아 다양한 직군과의 협업을 이끌어내고 알맞은 요구사항을 도출했습니다.\n
백엔드 팀원들의 역량을 토대로 작업을 분배했으며, Git Flow 전략으로 유연한 개발 과정을 진행했습니다."
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
    title: "Redis Sorted Set을 적용한 실시간 랭킹 시스템 조회 성능 최적화"
    image: "/projects/flink-redis-sorted-set.png"
    imageAlt: "Redis Sorted Set을 이용한 포인트 랭킹 조회 구조"
    problem:
      - "
      - 실시간 포인트 랭킹 조회 기능에서 랭킹 데이터를 조회하기 위한 DB 집계 쿼리가 반복 실행되는 문제 발생\n
      - 포인트에 따라 보상이 지급되는 구조로 인해 사용자 불편사항 예상"
    cause:
      - "읽기 요청이 많지만 초 단위 실시간 정합성이 반드시 요구되지 않는 유형의 데이터\n -> DB 접근 횟수를 줄이기 위해 캐싱이 적합"
    solution:
      - "- 포인트에 따른 고유 사용자를 정렬하는데 최적화된 Redis Sorted Set 도입\n
      - DTO를 JSON 문자열로 직렬화해 중복되지 않는 member로 저장하고, 랭킹 포인트를 score로 적용\n
      - 'reverseRange'를 사용하여 높은 점수 순서대로 랭킹 조회"
      - "- **TTL을 10분**으로 설정\n
      - DB 부하를 줄이면서도 **데이터 신선도를 확보**"
    result:
      - "응답 시간 **367ms -> 87ms로 76% 개선**"
      - "DB 커넥션 풀 부담 완화"
    lesson:
      - "랭킹 데이터는 단순 Key-Value 캐싱보다 점수 기준 정렬이 중요했기 때문에, Redis Sorted Set처럼 **문제에 맞는 자료구조**를 선택하는 과정이 중요하다는 것을 알게 되었습니다."
      - "모든 데이터를 실시간으로 맞추기보다, 서비스 특성상 허용 가능한 지연 범위를 정하고 TTL 10분으로 설정하여 **데이터 신선도**의 균형을 맞추는 판단을 경험했습니다."
  - key: "Result"
    title: "Mock 기반 테스트 도입 및 JaCoCo 커버리지 75% 달성으로 개발 피드백 사이클 강화"
    image: "/projects/flink-mock-test.png"
    imageAlt: "Mockito 기반 단위 테스트로 피드백 사이클을 개선하는 구조"
    imageLink: "https://app.codecov.io/gh/Goorm-Synergy/Synergy-Backend"
    imageLinkLabel: "JaCoCo Coverage"
    problem:
      - "- 서비스 로직의 동작을 확인하려면 매번 어플리케이션을 전체 실행하는 비효율 작업 발생"
    cause:
      - "- 서비스 레이어가 외부 의존성과 강하게 결합되어 있어 단독으로 실행 가능한 테스트 환경 자체를 구성하기 어려운 구조"
      - "- 하지만 현재 상황을 유지하면 피드백 사이클이 지연 -> 개발 속도 저하 우려"
    solution:
      - "- **Mockito**를 도입\n
      - 외부 의존성을 격리한 **단위 테스트 환경을 구성**\n
      - 외부 API 같은 의존 객체를 **Mock으로 대체**하고 서비스 인스턴스를 @InjectMocks로 주입해 \n
      서비스 로직만 독립적으로 실행 가능하도록 구현\n
      - 이때 예외 사항을 고려하여 시나리오를 분리하고 핵심 분기 로직을 검증"
      - "- 단위 테스트를 통해 빠른 피드백을 확보한 뒤, 실제 DB 및 컨테이너 환경에서\n 통합 테스트를 추가하여 **계층 간 동작을 최종 검증**할 수 있도록 구성"
    result:
      - "JaCoCo 테스트 커버리지 **75% 달성**"
      - "기능 추가 시 회귀 여부를 테스트로 즉시 확인 가능"
    lesson:
      - "서비스 로직을 검증할 때 DB나 외부 API까지 매번 함께 실행하면 원인 파악이 느려지기 때문에, Mockito로 외부 의존성을 격리하고 핵심 분기만 먼저 검증하는 방식이 효과적이었습니다."
      - "JaCoCo 커버리지는 단순히 숫자를 높이기 위한 지표가 아니라, 테스트가 부족한 영역을 찾고 기능 추가 시 **회귀 가능성**을 줄이는 기준으로 활용해야 한다는 점을 배웠습니다."
---
