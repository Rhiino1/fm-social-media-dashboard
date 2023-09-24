import Footer from "@/layouts/Footer";
import BigCard from "@/components/BigCard";
import bigCards from "@/utils/BigCardData";
import Header from "@/layouts/Header";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between bg-[#d5e1ef] gap-5 px-[26px] py-[41px]">
      <Header></Header>
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
