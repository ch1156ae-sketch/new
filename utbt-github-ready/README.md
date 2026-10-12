# UTBT GitHub 업로드용 정리본

원본 HTML 코드에서 카테고리 페이지에 포함된 PNG 이미지 37개만 분리했습니다. 이미지 자체는 다시 압축하거나 변환하지 않았으므로 원본 파일 데이터와 화질은 동일합니다.

## GitHub 업로드 방법

1. ZIP 파일을 압축 해제합니다.
2. `utbt-github-ready` 폴더 안의 **파일과 assets 폴더**를 GitHub 리포지토리 루트(최상위 경로)에 업로드합니다. ZIP 파일 자체만 업로드하면 GitHub Pages에서 웹사이트를 실행할 수 없습니다.
3. 최상위 위치에 `index.html`, `category.html`, `assets/icons/...` 구조가 유지되어야 합니다.
4. GitHub Pages를 사용할 경우 리포지토리 Settings > Pages에서 Publish 설정 후 웹사이트로 접속합니다.

## 수정 사항

- `category(1).html` → `category.html` (모든 Base64 PNG 이미지 37개를 `assets/icons/*.png`로 분리)
- `index(20261012-185647).html` → `index.html`
- 나머지 5개 HTML 파일은 수정하지 않았습니다.

**주의**: `assets/icons` 폴더를 빠뜨리면 카테고리 아이콘이 표시되지 않습니다. 앱의 나머지 화면에 외부 이미지 URL이 사용된 경우 해당 URL에 따라 표시 여부가 달라질 수 있습니다.
