import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Tak a maluj 🎨</Text>
        <Text style={styles.headerSubtitle}>Vyber barvu, prst a jedeš</Text>
      </View>
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
      {/* Stylové zápatí */}
      <View style={styles.bottomPanel}>
        <View style={styles.row}>
          {COLORS.map((color) => (
            <TouchableOpacity
              key={color}
              style={[
                styles.colorButton,
                { backgroundColor: color },
                penColor === color && styles.colorButtonActive
              ]}
              onPress={() => handleColorChange(color)}
              activeOpacity={0.7}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 38,
    paddingBottom: 18,
    marginTop: 16, // přidá horní mezeru
    backgroundColor: '#f3f4f8',
    alignItems: 'center',
    borderBottomWidth: 0,
    shadowColor: '#4f8cff',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  bottomPanel: {
    padding: 14,
    backgroundColor: '#f3f4f8',
    width: '100%',
    minHeight: 80,
    borderTopWidth: 0,
    shadowColor: '#4f8cff',
    shadowOpacity: 0.09,
    shadowRadius: 10,
    elevation: 4,
  },
  row: { flexDirection: 'row', justifyContent: 'center', marginVertical: 6 },
  colorButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginHorizontal: 8,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#222',
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 2,
  },
  colorButtonActive: {
    borderColor: '#4f8cff',
    shadowColor: '#4f8cff',
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
    transform: [{ scale: 1.13 }],
  },
});