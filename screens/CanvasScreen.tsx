import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';

const COLORS = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

export default function CanvasScreen() {
  const ref = useRef<any>();
  const [penColor, setPenColor] = useState('#000000');
  const signatureKey = `${penColor}`;

  const handleColorChange = (color: string) => {
    setPenColor(color);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <SignatureScreen
        key={signatureKey}
        ref={ref}
        style={{ flex: 1 }}
        webStyle={`
          .m-signature-pad {height: 100vh; min-height: 100vh;}
          .m-signature-pad--body {height: 100vh; min-height: 100vh;}
          .m-signature-pad--footer {display: none; margin: 0px;}
          body,html {height: 100vh; min-height: 100vh; margin: 0; padding: 0;}
        `}
        backgroundColor="#fff"
        penColor={penColor}
        autoClear={false}
        descriptionText=""
      />
      <View style={styles.bottomPanel}>
        <View style={styles.row}>
          {COLORS.map((color) => (
            <TouchableOpacity
              key={color}
              style={[
                styles.colorButton,
                { backgroundColor: color, borderWidth: penColor === color ? 2 : 0 }
              ]}
              onPress={() => handleColorChange(color)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomPanel: {
    padding: 10,
    backgroundColor: '#fff',
    width: '100%',
    height: 80,
  },
  row: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 },
  colorButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 6,
    borderColor: '#333',
  },
});