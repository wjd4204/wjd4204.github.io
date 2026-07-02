# Backend Engineer Portfolio

Astro 기반의 백엔드 개발자 포트폴리오 사이트입니다. 미니멀한 기술 문서형 스타일을 사용하고, 프로젝트 상세 페이지는 PPT 슬라이드처럼 읽히는 큰 카드 섹션으로 구성했습니다.

## Pages

- `/`: 자기소개, 기술 스택, 대표 프로젝트 3개
- `/projects/`: 프로젝트 목록
- `/projects/{id}/`: 프로젝트 상세 페이지

## Stack

- Astro
- Markdown Content Collections
- GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

로컬 서버가 실행되면 터미널에 표시되는 주소로 접속합니다. 일반적으로 `http://localhost:4321`입니다.

## Build

```bash
npm run build
```

빌드 결과물은 `dist/`에 생성됩니다.

## Project Content

프로젝트 데이터는 `src/content/projects/*.md`에서 관리합니다. 각 프로젝트는 frontmatter에 상세 페이지 렌더링에 필요한 데이터를 포함합니다.

주요 필드:

- `title`, `description`, `summary`
- `period`, `team`, `role`, `stack`
- `image`, `imageAlt`
- `slides`
- `featured`

상세 페이지의 `slides`는 다음 5개 섹션을 기준으로 작성합니다.

- `Overview`
- `Problem`
- `Tech Choice`
- `Solution`
- `Result`

## Components

- `src/layouts/BaseLayout.astro`: 공통 HTML, 메타 태그, 헤더, 푸터
- `src/components/ProjectCard.astro`: 프로젝트 카드
- `src/components/ProjectSlide.astro`: 프로젝트 상세 슬라이드 섹션

## Deploy To GitHub Pages

`main` 또는 `master` 브랜치에 push하면 `.github/workflows/pages-deploy.yml`이 실행됩니다.

배포 흐름:

1. GitHub Actions에서 Node.js 22를 설정합니다.
2. `npm install`로 의존성을 설치합니다.
3. `npm run build`로 Astro 사이트를 빌드합니다.
4. `dist/`를 GitHub Pages artifact로 업로드합니다.
5. GitHub Pages에 배포합니다.
