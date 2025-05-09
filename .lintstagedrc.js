export default {
  '*.{js,jsx,ts,tsx,json}': ['biome format --write', 'biome lint'],
  'src/**/*.astro': ['prettier --write'],
};
