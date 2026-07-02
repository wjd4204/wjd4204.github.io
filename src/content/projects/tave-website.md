---
title: "TAVE Website"
description: "IT 연합 동아리 TAVE 공식 웹사이트"
summary: "IT 연합 동아리 TAVE를 효율적으로 운영할 수 있게 만든 **동아리 공식 웹사이트**입니다.\n
운영진 활동 경험을 통해 전반기/후반기 활동 뿐 아니라 복잡한 지원 절차 중 겪었던 불편 사항들을 사이트 내 자체 지원 기능으로 구현했습니다."
date: 2026-05-28
period: "2024.10 - 2025.08"
team: "PM 1인, FE 4인, BE 4인, DA 3인"
stack: ["Spring Batch", "AWS", "MS Clarity", "Redis"]
role: "배포 환경 구성 및 동아리 지원 기능 담당"
status: "Platform"
card:
  badge: "실전 운영 프로젝트"
  device: "laptop"
  image: "/projects/tave-main-page.png"
  imageAlt: "TAVE Website 메인 화면"
  imageFit: "contain"
  imagePosition: "center center"
  screenRatio: "2940 / 1512"
image: "/projects/tave-overview.svg"
imageAlt: "TAVE Website의 콘텐츠 제공 구조 다이어그램"
hoverImage: "/projects/tave-result.svg"
hoverImageAlt: "TAVE Website의 안정적인 콘텐츠 제공 결과 다이어그램"
featured: true
slides:
  - key: "Mail Batch"
    title: "Spring Batch를 이용한 대량 메일 발송 자동화 구현"
    image: "/projects/tave-mail-success.png"
    imageAlt: "Spring Batch와 AWS SES 기반 메일 발송 처리 구조"
    problem:
      - "이전 기수까지 동아리 지원자마다 안내 메일을 개별 발송하고 면접 시간을 수동으로 조율해야하는 비효율 작업 경험"
    cause:
      - "수동으로 메일 발송과 면접 시간을 조율할 경우 잘못된 정보 기입 가능성 존재"
      - "지원자 수가 늘어날수록 메일 발송과 일정 배정 시간이 선형적으로 증가"
    solution:
      - "- Spring Batch로 전체 이메일 목록을 **Chunk 단위로 분할**\n
      - 실패한 Chunk는 **재시도** 설정으로 별도 재처리할 수 있게 구성\n
      - Chunk를 파티션 단위로 분할하고 각 파티션을 실행 컨텍스트에 저장해, **여러 스레드가 병렬로 메일 발송 작업을 처리**"
      - "- **AWS SES**로 메일 발송 인프라 구축\n
      - NAVER SMTP 보다 1회 발송 제한과 운영 로그 관리 측면에서 SES가 현재 AWS 기반 인프라와 어울린다고 판단\n
      - AWS SES의 초당 최대 전송 수 14개를 넘지 않도록 **Scouter**로 평균 응답 시간을 측정
       -> **스레드 수를 3개로 조정**해 안정적으로 병렬 처리되도록 튜닝"
      - "- 다중 인스턴스 환경에서 같은 배치가 중복 실행되지 않도록 **ShedLock**을 적용\n
      - 하나의 인스턴스에서만 메일 발송 배치가 실행되도록 보장"
    result:
      - "**2,000건 부하 테스트를 통해 안정성을 검증한 뒤, 실제 지원 기간에 182명 지원자에게 메일 발송 성공률 100% 달성**"
    lesson:
      - "스레드 수처럼 결정하기 쉬운 설정값도 **실측 데이터를 기반**으로 결정해야 한다는 점을 배웠습니다."
  - key: "UX Performance"
    title: "MS Clarity 기반 이미지 로딩 병목 분석 및 WebP 최적화 적용"
    image: "/projects/tave-ms-clarity-webp.png"
    imageAlt: "MS Clarity 분석 기반 WebP 이미지 최적화 결과"
    problem:
      - "공식 홈페이지 개발 중 MS Clarity 분석을 통해 페이지 렌더링이 지연되는 **병목 구간**을 확인"
      - "한 페이지 내에 렌더링되는 고해상도 이미지 파일 크기가 병목의 원인"
    cause:
      - "해상도를 낮추면 시각적 품질 저하가 발생\n
      - 홈페이지 특성상 적합하지 않다고 판단\n
      - JPG·PNG보다 높은 압축 효율을 제공하는 **WebP 이미지 변환 방식**을 고려"
    solution:
      - "효율성 검증을 위해 손실 / 무손실 압축 WebP 변환 테스트 진행"
      - "1. 손실 압축\n
          - 4.4MB 기준 이미지로 10회 반복 측정한 결과, 평균 로딩 시간이 **30.38ms -> 1.58ms**로 측정\n
          
      2. 무손실 압축\n
        - JPG는 이미 손실 압축 기반 포맷이기 때문에, WebP 무손실로 변환하면 역효과가 발생 -> 변환 후 파일 크기가 증가\n
        - PNG는 손실 압축 대비 압축률이 낮음"
      - "결과적으로 양측에 유의미한 크기 감소를 보여주는 **손실 압축**을 전체 이미지에 일괄 적용"
    result:
      - "WebP 파일 변환을 적용하여 30.38ms -> 1.58ms로 렌더링 시 **94.8% 개선**"
    lesson:
      - "성능 개선은 감으로 시작하기보다, 먼저 **사용자 행동 데이터**로 병목 구간을 찾는 과정이 중요하다는 것을 배웠습니다."
      - "결국 최적화는 특정 기법을 적용하는 일이 아니라, **측정 결과**를 기준으로 사용자 경험에 실제로 효과가 있는 선택을 검증하는 과정이라는 점을 배웠습니다."
---
