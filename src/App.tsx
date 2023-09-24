import Footer from "@/layouts/Footer";
import BigCard from "@/components/BigCard";
import bigCards from "@/utils/BigCardData";
import Header from "@/layouts/Header";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(darkMode ? "light" : "dark");
    root.classList.add(darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode);
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((value: boolean) => {
      return !value;
    });
  };

  return (
    <div className="flex flex-col h-screen justify-between bg-white dark:bg-[#1E202A] gap-5 px-[26px] py-[41px] transition-all duration-[400ms]">
      <Header
        darkMode={darkMode}
        toggleDarkMode={handleToggleDarkMode}
      ></Header>
      <main>
        {bigCards.map((card, index) => {
          const { img, name, social, totalFollows, todayFollows, isUp } = card;
          return (
            <BigCard
              key={index}
              img={img}
              name={name}
              social={social}
              totalFollows={totalFollows}
              todayFollows={todayFollows}
              isUp={isUp}
            ></BigCard>
          );
        })}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
