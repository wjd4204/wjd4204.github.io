---
title: "TAVE Website"
description: "IT 연합 동아리 TAVE 공식 웹사이트"
summary: "동아리 소개, 활동 기록, 모집 정보를 안정적으로 제공하는 TAVE 공식 웹사이트입니다."
date: 2026-05-28
period: "2024.07 - 2024.09"
team: "Backend 1명 / Frontend 2명 / Design 1명"
stack: ["Spring Boot", "JPA", "MySQL", "GitHub Actions", "Nginx"]
role: "Backend API 및 배포 환경 구성"
status: "Representative"
image: "/projects/tave-overview.svg"
imageAlt: "TAVE Website의 콘텐츠 제공 구조 다이어그램"
hoverImage: "/projects/tave-result.svg"
hoverImageAlt: "TAVE Website의 안정적인 콘텐츠 제공 결과 다이어그램"
featured: true
slides:
  - key: "Overview"
    title: "동아리 정보를 안정적으로 보여주는 공식 채널"
    image: "/projects/tave-overview.svg"
    imageAlt: "TAVE 소개, 활동, 모집 정보가 사용자에게 전달되는 구조"
    body:
      - "TAVE Website는 IT 연합 동아리의 소개, 활동 기록, 모집 정보를 한 곳에서 제공하는 공식 웹사이트입니다."
      - "백엔드에서는 콘텐츠 데이터를 관리하고, 운영자가 반복적으로 바꾸는 정보를 안정적으로 제공하는 API에 집중했습니다."
    points:
      - "기간: 2024.07 - 2024.09"
      - "인원: Backend 1명 / Frontend 2명 / Design 1명"
      - "역할: 콘텐츠 API, 배포 환경 구성"
      - "기술: Spring Boot, JPA, MySQL, GitHub Actions, Nginx"
  - key: "Problem"
    title: "모집 시기마다 바뀌는 정보를 빠르게 반영해야 했습니다."
    image: "/projects/tave-problem.svg"
    imageAlt: "모집 정보와 활동 콘텐츠 변경 요구사항"
    body:
      - "동아리 웹사이트는 모집 기간, 활동 소개, 공지성 콘텐츠가 자주 바뀌는 특성이 있습니다."
      - "정적 문구에 의존하면 매번 배포가 필요하고, 운영자가 변경 흐름을 이해하기 어려워질 수 있었습니다."
    points:
      - "모집 기간별 노출 정보 변경"
      - "활동 기록과 소개 콘텐츠의 반복 갱신"
      - "서비스 중단 없이 빠른 수정 필요"
  - key: "Tech Choice"
    title: "Spring Boot와 배포 자동화로 운영 부담을 낮췄습니다."
    image: "/projects/tave-tech.svg"
    imageAlt: "Spring Boot, MySQL, GitHub Actions, Nginx 구성"
    body:
      - "콘텐츠 API는 Spring Boot로 구성하고, 변경 가능한 데이터는 MySQL에 저장해 화면과 데이터를 분리했습니다."
      - "GitHub Actions와 Nginx를 사용해 배포 절차를 단순화하고, 운영 중 변경에 대한 부담을 줄였습니다."
    points:
      - "Spring Boot: 콘텐츠 API 구성"
      - "MySQL: 모집 정보와 활동 데이터 관리"
      - "GitHub Actions: 반복 배포 과정 자동화"
  - key: "Solution"
    title: "콘텐츠 단위 API와 배포 흐름을 정리했습니다."
    image: "/projects/tave-solution.svg"
    imageAlt: "콘텐츠 API와 배포 파이프라인 구조"
    body:
      - "소개, 활동, 모집 정보를 독립된 API 단위로 나누고 프론트엔드가 필요한 순서대로 사용할 수 있게 했습니다."
      - "배포 과정은 빌드, 서버 반영, Nginx 연결 확인 순서로 정리했습니다."
    points:
      - "화면 섹션 기준 API 분리"
      - "운영 데이터와 화면 코드의 결합도 감소"
      - "배포 후 서비스 확인 절차 명확화"
  - key: "Result"
    title: "운영자가 다루기 쉬운 공식 웹사이트 기반을 만들었습니다."
    image: "/projects/tave-result.svg"
    imageAlt: "안정적으로 콘텐츠를 제공하는 웹사이트 결과"
    body:
      - "모집과 활동 정보가 구조화되어, 변경이 필요한 영역을 빠르게 찾고 반영할 수 있게 되었습니다."
      - "향후 관리자 페이지나 CMS를 붙이면 운영자가 개발자 도움 없이 콘텐츠를 관리할 수 있는 구조로 확장 가능합니다."
    points:
      - "콘텐츠 API 기준 정리"
      - "반복 배포 과정 단순화"
      - "관리자 기능으로 확장 가능한 기반"
---
