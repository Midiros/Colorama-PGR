# Colorama

Colorama je primitvní mobilní appka pro kreslení, vyzkoušení grafických efektů na obrázky a vizualizaci Bresenhamova algoritmu. Projekt jsem vypracoval v rámci předmětu PGR.

## Funkcionalita projektu

- **Malování:** Kreslení prstem na plátno, výběr barvy.
- **Filtry:** Načtení obrázku z galerie a aplikace efektů (blur, grayscale, sepia).
- **Bresenham:** Interaktivní vykreslení úsečky pomocí Bresenhamova algoritmu.

## Techstack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [@shopify/react-native-skia](https://shopify.github.io/react-native-skia/)
- [react-native-signature-canvas](https://github.com/ssaraf/react-native-signature-canvas)
- [react-navigation](https://reactnavigation.org/)

## Spuštění

1. Nainstaluj závislosti:
    npm install

2. Spusť aplikaci v Expo:
    npx expo start

## Struktura projektu

- `/screens` – jednotlivé obrazovky aplikace (Canvas, Effects, Bresenham)
- `/theme.ts` – centrální barvy a styly
- `App.tsx` – hlavní navigace (taby)