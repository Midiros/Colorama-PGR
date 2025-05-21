import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Canvas, Path, Skia } from '@shopify/react-native-skia';
import { colors } from '../theme';

const { width, height } = Dimensions.get('window');
/*
  Bresenhamův algoritmus pro vykreslení úsečky mezi dvěma body

  Matematika:
  - Algoritmus efektivně rozhoduje, který pixel je nejblíže ideální (teoretické) úsečce mezi dvěma body.
  - V každém kroku rozhoduje, zda se má posunout pouze v jednom směru (X nebo Y), nebo v obou, aby se úsečka co nejvíce přiblížila skutečné přímce.
  - Používá pouze celočíselné operace (žádné desetinné čísla), což je rychlé a přesné.
  - Proměnné:
      dx, dy ... rozdíly souřadnic (šířka a výška úsečky)
      sx, sy ... směr pohybu (1 nebo -1)
      err ... chyba, která říká, jak moc jsme „daleko“ od ideální úsečky
  - V každém kroku:
      - Pokud je chyba větší než -dy, posuneme se v X a upravíme chybu
      - Pokud je chyba menší než dx, posuneme se v Y a upravíme chybu
  - Takto projdeme všechny pixely mezi dvěma body a získáme rastrovou úsečku.

  Tento algoritmus je základní stavební kámen pro další grafické algoritmy (kružnice, polygony, fill...).
*/
function bresenhamLine(x0: number, y0: number, x1: number, y1: number): [number, number][] {
  const points: [number, number][] = [];
  let dx = Math.abs(x1 - x0);
  let dy = Math.abs(y1 - y0);
  let sx = x0 < x1 ? 1 : -1;
  let sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    points.push([x0, y0]);
    if (x0 === x1 && y0 === y1) break;
    let e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x0 += sx; }
    if (e2 < dx) { err += dx; y0 += sy; }
  }
  return points;
}

export default function BresenhamScreen() {
  const [points, setPoints] = useState<[number, number][]>([]);
  const [start, setStart] = useState<[number, number] | null>(null);

  const handlePress = (evt: any) => {
    const { locationX, locationY } = evt.nativeEvent;
    const x = Math.round(locationX);
    const y = Math.round(locationY);
    if (!start) {
      setStart([x, y]);
      setPoints([]);
    } else {
      const line = bresenhamLine(start[0], start[1], x, y);
      setPoints(line);
      setStart(null);
    }
  };

  // Vytvoření Skia Path z bodů
  const path = Skia.Path.Make();
  if (points.length > 0) {
    path.moveTo(points[0][0], points[0][1]);
    points.forEach(([x, y]) => path.lineTo(x, y));
  }

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onResponderRelease={handlePress}
    >
      <Canvas style={styles.canvas}>
        {points.length > 0 && (
          <Path path={path} color={colors.bresenhamLine} style="stroke" strokeWidth={2} />
        )}
        {points.map(([x, y], i) => (
          <Path
            key={i}
            path={Skia.Path.Make().addCircle(x, y, 2)}
            color={colors.bresenhamDot}
            style="fill"
          />
        ))}
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.panel,
    marginTop: 16,
    marginBottom: 28,
  },
  canvas: { flex: 1 },
});