"use Client";
import { useTheme } from "next-themes";
const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return <div>ThemeToggle</div>;
};

export default ThemeToggle;
