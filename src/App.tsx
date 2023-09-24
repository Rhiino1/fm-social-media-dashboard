import Footer from "@/layouts/Footer";
import BigCard from "@/components/BigCard";
import { bigCards, smallCards } from "@/utils/CardsData";
import Header from "@/layouts/Header";
import { useEffect, useState } from "react";
import SmallCard from "@/components/SmallCard";

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
    <>
      <div className="absolute top-0 w-full bg-[#F5F7FF] dark:bg-[#1F212E] h-96 rounded-b-xl transition-all duration-[400ms]"></div>
      <div className="flex flex-col h-full w-full justify-between bg-white dark:bg-[#1E202A] gap-5 px-[26px] py-[41px] transition-all duration-[400ms]">
        <Header
          darkMode={darkMode}
          toggleDarkMode={handleToggleDarkMode}
        ></Header>
        <main className="z-10">
          <section className="grid w-full h-auto grid-cols-1 gap-6 mt-12 md:grid-cols-2 xl:grid-cols-4 auto-cols-fr">
            {bigCards.map((card, index) => {
              const { img, name, social, totalFollows, todayFollows, isUp } =
                card;
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
          </section>
          <section className="mt-[51px] mb-6">
            <h1 className="font-inter font-bold text-[#63687E] dark:text-white text-2xl">
              Overview - Today
            </h1>
          </section>
          <section className="grid gap-6 mb-2 xl:grid-cols-4">
            {smallCards.map((card, index) => {
              const { img, title, todayFollows, percentageFollows, isUp } =
                card;
              return (
                <SmallCard
                  key={index}
                  img={img}
                  title={title}
                  todayFollows={todayFollows}
                  percentageFollows={percentageFollows}
                  isUp={isUp}
                ></SmallCard>
              );
            })}
          </section>
          <Footer></Footer>
        </main>
      </div>
    </>
  );
}

export default App;
