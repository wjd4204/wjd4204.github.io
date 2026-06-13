---
title: "TAVE Website"
description: "IT 연합 동아리 TAVE 공식 웹사이트"
summary: "모집 때마다 바뀌는 동아리 정보를 화면 코드와 분리해, 더 빠르게 운영할 수 있게 만든 공식 웹사이트입니다."
date: 2026-05-28
period: "2024.10 - 2025.08"
team: "PM 1인, FE 4인, BE 4인, DA 3인"
stack: ["Spring Batch", "AWS", "MS Clarity", "Redis"]
role: "배포 환경 구성 및 주요 기능 담당"
status: "Representative"
card:
  badge: "실전 운영 프로젝트"
  device: "laptop"
  image: "/projects/tave-main-page.png"
  imageAlt: "TAVE Website 메인 화면"
image: "/projects/tave-overview.svg"
imageAlt: "TAVE Website의 콘텐츠 제공 구조 다이어그램"
hoverImage: "/projects/tave-result.svg"
hoverImageAlt: "TAVE Website의 안정적인 콘텐츠 제공 결과 다이어그램"
featured: true
slides:
  - key: "Mail Batch"
    title: "대량 메일 발송 자동화 시스템 구현"
    image: "/projects/tave-overview.svg"
    imageAlt: "TAVE 지원자 메일 발송 배치 처리 구조"
    problem:
      - "기존에는 서류 및 면접 합격자 안내 메일을 약 300명 이상의 지원자에게 수동으로 발송하고 있었습니다.
      반복 작업에 따른 인력 소모가 매우 컸고, 발송 누락이나 지연 등 운영상 실수가 발생할 위험이 있었습니다."
    cause:
      - "대량 발송 자체를 자동화하는 구조가 없었던 것이 원인이었습니다.
      수동 발송 방식은 규모가 커질수록 누락과 오류 위험이 증가하기 때문에 이를 해결하기 위해서 세 가지 요구사항을 도출하였습니다."
      - "1. 대량 데이터를 메모리 효율적으로 처리하고, 실패 시 재시도가 가능한 배치 처리 구조"
      - "2. 외부 메일 서비스의 전송 속도 제한을 초과하지 않는 발송 제어"
      - "3. 다중 인스턴스 환경에서 중복 실행 없이 스케줄러가 단일 동작하도록 하는 구조"
    solution:
      - "세 가지 요구사항에 대해 순차적으로 접근하였습니다."
      - "1. Spring Batch 도입\n
      전체 이메일 목록을 Chunk 단위로 분할하여 메모리에 올려 처리하며 메모리 효율을 확보했습니다.
      그리고 Chunk를 파티션 사이즈 별로 분할한 뒤 각 파티션을 실행 컨텍스트에 저장하여 병렬 발송이 가능하도록 구성했습니다.
      실패한 Chunk는 재시도 설정을 통해 별도 재처리할 수 있어 안정성 또한 확보하였습니다."
      - "2. AWS SES 도입\n
      기존에는 NAVER SMTP를 고려했으나 1회에 최대 100명까지 메일을 보낼 수 있다는 한계에 부딪혀 AWS SES를 사용하기로 했습니다.
      기존 인프라가 AWS 기반이라 SES와의 통합 비용이 낮았고, CloudWatch 연동으로 발송 로그를 중앙 관리할 수 있다는 점이 결정적이었습니다.
      SES의 초당 최대 전송 수는 14개로, 멀티 스레딩 환경에서 이를 초과하지 않도록 Scouter로 평균 응답 시간을 측정했습니다.
      측정 결과를 바탕으로 스레드 수를 3개로 설정하여 안정적으로 병렬 처리 되도록 튜닝하였고 2,000개 메일 테스트를 성공하였습니다."
      - "3. 분산락 기반 스케줄러\n
      다중 인스턴스 배포 환경에서 메일이 중복 발송되는 문제를 방지하기 위해서 분산락을 도입했습니다.
      스케줄러에 분산락을 적용하여 하나의 인스턴스에서만 배치가 실행되도록 보장했습니다."
    result:
      - "2,000건 부하 테스트를 통해 안정성을 검증한 뒤, 실제 지원 기간에 182명 지원자에게 메일 발송 성공률 100% 달성"
    lesson:
      - "스레드 수처럼 결정하기 쉬운 설정값도 실측 데이터를 기반으로 결정해야 한다는 점을 배웠습니다."
    troubleshootingSummary:
      problem: "매 기수 300명 이상 지원자 대상 합격 안내 메일을 수동 발송하며 인력 소모와 누락 위험이 존재했습니다."
      judgment: "Spring Batch 파티셔닝과 AWS SES를 도입하여 대량 메일 발송 자동화 시스템을 구축했습니다."
      result: "2,000건 테스트 검증 후, 실제 지원 기간 중 182명을 대상으로 발송 성공률 100%를 달성했습니다."
  - key: "Distributed Lock"
    title: "Redisson 재진입 분산락으로 동시 지원서 제출 카운트 정합성 보장"
    image: "/projects/tave-problem.svg"
    imageAlt: "동시 지원서 제출 환경에서 카운트 정합성을 보장하는 분산락 구조"
    body:
      - "모집 기간에는 지원서 제출 요청이 동시에 들어올 수 있어 지원자 수 카운트가 중복 집계되거나 누락될 위험이 있었습니다."
      - "낙관적 락과 분산락을 비교한 뒤, 다중 인스턴스 환경에서 더 적합한 Redisson 재진입 분산락을 도입했습니다."
    points:
      - "동시 지원서 제출 시 카운트 정합성 보장"
      - "낙관적 락 대비 분산 환경 적합성 고려"
      - "중복 집계 및 중복 실행 방지"
    troubleshootingSummary:
      problem: "동시 제출 요청이 겹치면 지원자 수 카운트가 중복 집계되거나 중복 실행될 수 있었습니다."
      judgment: "낙관적 락보다 다중 인스턴스 환경에 적합한 Redisson 재진입 분산락을 선택했습니다."
      result: "지원서 제출 카운트 정합성을 보장하고 중복 집계 및 중복 실행을 방지했습니다."
  - key: "UX Performance"
    title: "MS Clarity 병목 분석과 WebP 전환으로 95P 응답 속도 99.29% 개선"
    image: "/projects/tave-result.svg"
    imageAlt: "Microsoft Clarity 기반 사용자 행동 분석과 이미지 최적화 결과"
    body:
      - "Microsoft Clarity 기반 사용자 행동 분석을 통해 페이지 내 병목 구간을 식별했습니다."
      - "병목 구간의 이미지 리소스를 WebP로 변환하여 1000TPS 기준 95P 응답 속도를 99.29% 개선했습니다."
    points:
      - "MS Clarity로 사용자 행동 및 병목 구간 분석"
      - "이미지 리소스 WebP 변환"
      - "1000TPS 기준 95P 응답 속도 99.29% 개선"
    troubleshootingSummary:
      problem: "사용자 행동 분석 결과 페이지 내 특정 이미지 리소스 구간에서 병목이 발생했습니다."
      judgment: "병목 원인이 큰 이미지 리소스에 있다고 보고 WebP 변환으로 전송 비용을 줄였습니다."
      result: "1000TPS 기준 95P 응답 속도를 99.29% 개선했습니다."
---
