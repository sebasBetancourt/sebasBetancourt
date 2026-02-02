export const lightTheme = {
  /* fondo blanco roto, no puro */
  "--background": "oklch(0.9404 0.0027 70.72 / 46.23%)",

  /* texto principal oscuro pero no negro */
  "--foreground": "oklch(0.18 0.01 260)",

  /* azul moderno, no tan chillón */
  "--primary": "oklch(0.58 0.18 255)",

  /* texto sobre primary */
  "--primary-foreground": "oklch(0.96 0.01 255)",

  /* bordes suaves, casi invisibles */
  "--border": "oklch(0.88 0.01 260)",
};


export const darkTheme = {
  "--background": "oklch(0.141 0.005 285.823)",
  "--foreground": "oklch(0.985 0 0)",
  "--primary": "oklch(0.546 0.245 262.881)",
  "--primary-foreground": "oklch(0.379 0.146 265.522)",
  "--border": "oklch(1 0 0 / 10%)",
};

export const themeConfig = {
  name: "blue",
  light: lightTheme,
  dark: darkTheme,
};
