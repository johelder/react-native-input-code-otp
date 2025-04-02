import { useColorScheme } from 'react-native';

export function useThemeColor<T, U>(props: { light: T; dark: U }) {
  const theme = useColorScheme() ?? 'light';

  return props[theme];
}
