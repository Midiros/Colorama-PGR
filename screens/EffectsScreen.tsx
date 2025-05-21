import React, { useState } from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Canvas, useImage, Image as SkiaImage, Group, Paint, Skia } from '@shopify/react-native-skia';
import Slider from '@react-native-community/slider';
import { BlurMask } from '@shopify/react-native-skia';

const { width, height } = Dimensions.get('window');

type FilterType = 'original' | 'blur' | 'grayscale' | 'sepia' | 'pixel' | 'invert';

export default function EffectsScreen() {
  const [uri, setUri] = useState<string | null>(null);
  const image = useImage(uri || '');
  const [filter, setFilter] = useState<FilterType>('original');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!result.canceled) setUri(result.assets[0].uri);
  };

  let paint: Paint | undefined = undefined;
  if (filter === 'grayscale') {
    paint = Skia.Paint();
    paint.setColorFilter(Skia.ColorFilter.MakeMatrix([
      0.33, 0.33, 0.33, 0, 0,
      0.33, 0.33, 0.33, 0, 0,
      0.33, 0.33, 0.33, 0, 0,
      0, 0, 0, 1, 0
    ]));
  } else if (filter === 'sepia') {
    paint = Skia.Paint();
    paint.setColorFilter(Skia.ColorFilter.MakeMatrix([
      0.393, 0.769, 0.189, 0, 0,
      0.349, 0.686, 0.168, 0, 0,
      0.272, 0.534, 0.131, 0, 0,
      0, 0, 0, 1, 0
    ]));
  } else if (filter === 'invert') {
    paint = Skia.Paint();
    paint.setColorFilter(Skia.ColorFilter.MakeMatrix([
      -1,  0,  0, 0, 255,
       0, -1,  0, 0, 255,
       0,  0, -1, 0, 255,
       0,  0,  0, 1,   0,
    ]));
  }

  return (
    <View style={styles.container}>
      <Button title="Vybrat obrázek" onPress={pickImage} />
      <View style={styles.buttons}>
        <Button title="Originál" onPress={() => setFilter('original')} />
        <Button title="Blur" onPress={() => setFilter('blur')} />
        <Button title="Invert" onPress={() => setFilter('invert')} />
        <Button title="Grayscale" onPress={() => setFilter('grayscale')} />
        <Button title="Sepia" onPress={() => setFilter('sepia')} />
      </View>
      {image && (
        <Canvas style={styles.canvas}>
          {filter === 'pixel' ? (
            <>
              <SkiaImage
                image={image}
                x={0}
                y={0}
                width={Math.round(width / 20)}
                height={Math.round(height / 20)}
                fit="fill"
                filterMode="nearest"
              />
              <SkiaImage
                image={image}
                x={0}
                y={0}
                width={width}
                height={height}
                fit="fill"
                filterMode="nearest"
              />
            </>
          ) : filter === 'blur' ? (
            <SkiaImage image={image} x={0} y={0} width={width} height={height}>
              <BlurMask blur={100} style="normal" />
            </SkiaImage>
          ) : (
            <SkiaImage image={image} x={0} y={0} width={width} height={height} paint={paint} />
          )}
        </Canvas>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  canvas: { flex: 1 },
  buttons: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
});