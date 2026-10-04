/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      // Colors come from the CSS variables in src/input.css, so the palette lives in one place.
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        raised: 'var(--raised)',
        line: 'var(--line)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        ink: 'var(--ink)',
        fresh: 'var(--fresh)',
        warn: 'var(--warn)',
        hot: 'var(--hot)'
      },
      fontFamily: {
        display: ['Archivo', '"Arial Narrow"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      }
    }
  }
};
