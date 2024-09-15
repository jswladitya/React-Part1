import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, SetThemeMode] = useState("light");

  //hala ki hamare pass dono methods ka access he but wo methods kuch kar rahe nhi he toh unhe define karna padega
  const lightTheme = () => {
    SetThemeMode("light");
  };

  const darkTheme = () => {
    SetThemeMode("dark");
  };

  //actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark"); //mujhe nahi pata ki pehle se uske ander kya he isle remove kardo taki ham apna run karwa sake

    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  // themeMode me koi change ho toh useEffet wapas run ho

  return (
    // ab dono hamare components access kar sakte he themeContext ki cheezo ko
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
