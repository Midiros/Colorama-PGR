export const colors = {
  background: '#f3f4f8',
  panel: '#fff',
  primary: '#4f8cff',
  text: '#222',
  textSecondary: '#666',
  border: '#ddd',
  accent: '#ffb300',
  shadow: '#4f8cff',
  canvasHeader: '#f3f4f8',
  canvasFooter: '#f3f4f8',
  colorButtonBorder: '#fff',
  colorButtonActive: '#4f8cff',
  colorButtonShadow: '#222',
  colorButtonActiveShadow: '#4f8cff',
  bresenhamDot: 'Green',
};

export const drawingColors = [
  '#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'
];

export const layout = {
  headerMarginTop: 16,
  headerPaddingTop: 38,
  headerPaddingBottom: 18,
  footerMinHeight: 80,
  footerPadding: 14,
  footerMarginBottom: 28,
};

export const commonStyles = {
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 40,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: colors.text,
    textAlign: 'center' as const,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 16,
    textAlign: 'center' as const,
  },
  panel: {
    backgroundColor: colors.panel,
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 16,
  },
  button: {
    backgroundColor: colors.panel,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    marginHorizontal: 4,
    marginBottom: 8,
  },
  buttonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  buttonText: {
    color: colors.text,
    fontWeight: 'bold' as const,
  },
  buttonTextActive: {
    color: '#fff',
  },
};