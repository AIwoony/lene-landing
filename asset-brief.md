# lene. Concept A Landing Page — Asset Brief

## Current Status

lene.(레네) 뷰티 브랜드의 컨셉 A "세로 모공 재건 듀오" 프리론칭 랜딩페이지 개발이 완료되었습니다.
현재 **코드(HTML/CSS/JS)와 애니메이션은 모두 완성된 상태**이며, 실제 이미지/영상 에셋만 교체하면 라이브 가능합니다.

### 완성된 항목
- 7개 섹션 원페이지 구조 (Hero → Fear → Ingredient → Solution → Product → Clinical → CTA)
- GSAP ScrollTrigger 스크롤 애니메이션 (패럴랙스, 카운트업, stagger, 텍스트 리빌)
- Lenis 스무스 스크롤
- 커스텀 커서 (mix-blend-mode)
- 프리로더 애니메이션
- 리드 수집 폼 (이름/이메일/전화/피부고민/피부타입)
- 반응형 (모바일/태블릿/데스크탑)

### 남은 작업
1. **아래 에셋 제작 및 교체**
2. 폼 제출 엔드포인트 연결 (Formspree, Google Sheets 등)
3. 도메인 배포 (Vercel/Netlify 정적 호스팅)

---

## Required Assets

### 1. Brand Assets (브랜드 기본 에셋)

| # | File Name | Description | Format | Size |
|---|-----------|-------------|--------|------|
| 1 | `logo-lene-dark.svg` | lene. 워드마크 로고 — 다크 버전 (어두운 컬러, 밝은 배경용) | SVG | - |
| 2 | `logo-lene-light.svg` | lene. 워드마크 로고 — 라이트 버전 (밝은 컬러, 어두운 배경용) | SVG | - |
| 3 | `favicon.ico` | 브라우저 탭 파비콘 | ICO or PNG | 32x32 |
| 4 | `og-image.jpg` | SNS 공유 시 표시되는 대표 이미지 (카카오톡, 인스타 링크 등) | JPG | 1200x630 |

> **촬영 방향:** 로고 + 태그라인 + 제품 이미지 조합. 크림/베이지 배경. 브랜드 톤 유지.

---

### 2. Hero Section (히어로 영역)

| # | File Name | Description | Format | Size |
|---|-----------|-------------|--------|------|
| 5 | `hero-bg.jpg` | 풀스크린 히어로 배경 이미지 | JPG | 1920x1080 |

> **촬영 방향:**
> - 피부 결 클로즈업 매크로 샷 **또는** 제품 보틀의 소프트 포커스 샷
> - 톤: 크림/베이지 계열, 따뜻한 자연광
> - Rhode / Typology 느낌의 미니멀하고 고급스러운 무드
> - 텍스트가 위에 올라가므로 중앙 영역은 비교적 심플하게 (너무 복잡한 패턴 X)

| # | File Name | Description | Format | Duration |
|---|-----------|-------------|--------|----------|
| 6 | `hero-loop.mp4` | **(선택)** 히어로 배경 영상 — 이미지 대신 사용 시 몰입감 극대화 | MP4 (H.264) | 8-12초 루프 |

> **촬영 방향:**
> - 크림 텍스처가 천천히 퍼지는 슬로우모션 **또는** 세럼 드롭이 피부 위에 떨어지는 장면
> - 무음, 루프 가능하게 시작/끝 프레임 일치
> - 베이지/뉴트럴 톤, 소프트 라이팅

---

### 3. Fear Section (세로 모공 3단계 다이어그램)

| # | File Name | Description | Format | Size |
|---|-----------|-------------|--------|------|
| 7 | `pore-stage-1.png` | 모공 1단계: **가로 확장 (Horizontal Expansion)** | PNG (투명 배경) | 400x400 |
| 8 | `pore-stage-2.png` | 모공 2단계: **수직 견인 (Vertical Traction)** | PNG (투명 배경) | 400x400 |
| 9 | `pore-stage-3.png` | 모공 3단계: **구조적 고착 (Structural Fixation)** | PNG (투명 배경) | 400x400 |

> **제작 방향:**
> - 피부 단면을 보여주는 **의학 일러스트** 스타일
> - 미니멀한 라인아트, 컬러는 뮤트 베이지(#B8A088) + 화이트(#FAF8F5) + 그레이(#8C8379)
> - 각 단계에서 모공이 가로 → 세로 → 고착으로 변형되는 과정을 시각화
> - 현재 SVG 플레이스홀더가 들어가 있으므로 참고하여 더 정교하게 제작
> - 다크 배경(#1A1A1A) 위에 표시되므로 밝은 톤으로 제작

---

### 4. Product Section (제품 이미지)

| # | File Name | Description | Format | Size |
|---|-----------|-------------|--------|------|
| 10 | `product-serum.png` | **Ginseng Exosome Micro-Shot** (세럼) 제품 단독컷 | PNG (투명 배경) | 600x800 |
| 11 | `product-cream.png` | **Ginseng Retinol Structural Bond** (크림) 제품 단독컷 | PNG (투명 배경) | 600x800 |

> **촬영 방향:**
> - 투명 배경 스튜디오 촬영 (또는 3D 렌더링)
> - 세럼: 드로퍼 보틀 or 펌프 보틀, 밀키 에센스 질감이 느껴지도록
> - 크림: 자 or 튜브, 고밀도 크림 질감
> - Rhode / Typology 제품 이미지 톤 참고 — 미니멀, 고급, 클린
> - 비율 세로형 (3:4), 제품이 프레임의 60-70% 차지

| # | File Name | Description | Format | Duration |
|---|-----------|-------------|--------|----------|
| 12 | `product-reveal.mp4` | **(선택)** 듀오 제품 360도 회전 또는 배치 영상 | MP4 | 6-10초 |

---

### 5. Ingredient Section (성분 비주얼 — 선택)

| # | File Name | Description | Format | Size |
|---|-----------|-------------|--------|------|
| 13 | `ingredient-ginseng.jpg` | **(선택)** 홍삼 원물 클로즈업 | JPG | 800x600 |

> **촬영 방향:**
> - 에디토리얼 스타일 홍삼 뿌리 이미지
> - 어두운 배경에 홍삼 뿌리를 고급스럽게 라이팅
> - 현재 코드에서 이 이미지는 사용하지 않지만, 향후 섹션 확장 시 활용 가능

---

## Asset Summary

### Must-Have (최소 필수 — 이것만 있으면 라이브 가능)

| Priority | Asset | Current State |
|----------|-------|---------------|
| **P0** | `product-serum.png` | CSS 그라디언트 플레이스홀더 |
| **P0** | `product-cream.png` | CSS 그라디언트 플레이스홀더 |
| **P0** | `hero-bg.jpg` | CSS 그라디언트 플레이스홀더 |
| **P0** | `og-image.jpg` | 미제작 |
| **P1** | `favicon.ico` | 미제작 |
| **P1** | `logo-lene-dark.svg` | 현재 텍스트(Cormorant Garamond)로 대체 중 |
| **P1** | `logo-lene-light.svg` | 현재 텍스트(Cormorant Garamond)로 대체 중 |

### Nice-to-Have (있으면 퀄리티 상승)

| Priority | Asset | Current State |
|----------|-------|---------------|
| **P2** | `pore-stage-1.png` | SVG 미니멀 플레이스홀더 |
| **P2** | `pore-stage-2.png` | SVG 미니멀 플레이스홀더 |
| **P2** | `pore-stage-3.png` | SVG 미니멀 플레이스홀더 |
| **P3** | `hero-loop.mp4` | 미제작 (영상 있으면 이미지 대체) |
| **P3** | `product-reveal.mp4` | 미제작 |
| **P3** | `ingredient-ginseng.jpg` | 미제작 |

---

## Color Reference for Designers

에셋 제작 시 아래 컬러 팔레트를 기준으로 톤을 맞춰주세요.

| Name | Hex | Usage |
|------|-----|-------|
| Background Cream | `#FAF8F5` | 기본 배경, 밝은 섹션 |
| Background Beige | `#F0EBE3` | Solution 섹션, 제품 플레이스홀더 |
| Dark | `#1A1A1A` | Fear/CTA 다크 섹션 배경 |
| Text Dark | `#1A1A1A` | 본문 텍스트 |
| Text Light | `#FAF8F5` | 다크 섹션 텍스트 |
| Subtle Gray | `#8C8379` | 서브 텍스트, 캡션 |
| Accent Gold | `#B8A088` | 강조, 포인트, CTA hover |

## Typography Reference

| Usage | Font | Weight |
|-------|------|--------|
| Heading / Logo | Cormorant Garamond | Light (300) |
| Body / UI | Inter | Light (300), Regular (400) |

---

## File Delivery

완성된 에셋은 아래 경로에 넣어주세요:

```
faketest/assets/images/
├── hero-bg.jpg
├── pore-stage-1.png
├── pore-stage-2.png
├── pore-stage-3.png
├── product-serum.png
├── product-cream.png
├── og-image.jpg
├── favicon.ico
├── logo-lene-dark.svg
└── logo-lene-light.svg
```

에셋이 준비되면 코드에서 플레이스홀더를 실제 이미지로 교체하는 작업을 진행합니다.
