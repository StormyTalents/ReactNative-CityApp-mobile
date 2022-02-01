module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./App'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          Actions: './App/Actions',
          Components: './App/Components',
          Config: './App/Config',
          Containers: './App/Containers',
          Fixtures: './App/Fixtures',
          Helpers: './App/Helpers',
          I18n: './App/I18n',
          Images: './App/Images',
          Lib: './App/Lib',
          Navigation: './App/Navigation',
          Reducers: './App/Reducers',
          Sagas: './App/Sagas',
          Service: './App/Service',
          Themes: './App/Themes',
          Transforms: './App/Transforms',
        },
      },
    ],
  ],
};
