import Footer from "@/layouts/Footer";
import BigCard from "./components/BigCard";

import socials from "@/utils/SocialEnum";
import facebookImg from "@/assets/images/icon-facebook.svg";
import twitterImg from "@/assets/images/icon-twitter.svg";
import instagramImg from "@/assets/images/icon-instagram.svg";
import youtubeImg from "@/assets/images/icon-youtube.svg";

function App() {
  const bigCards = [
    {
      img: facebookImg,
      name: "@nathanf",
      social: socials.Facebook,
      totalFollows: "1987",
      todayFollows: "12",
      isUp: true,
    },
    {
      img: twitterImg,
      name: "@nathanf",
      social: socials.Twitter,
      totalFollows: "1044",
      todayFollows: "99",
      isUp: true,
    },
    {
      img: instagramImg,
      name: "@realnathanf",
      social: socials.Instagram,
      totalFollows: "11k",
      todayFollows: "1099",
      isUp: true,
    },
    {
      img: youtubeImg,
      name: "@Nathan F.",
      social: socials.Youtube,
      totalFollows: "8239",
      todayFollows: "144",
      isUp: false,
    },
  ];
  return (
    <>
      <main className="flex flex-col h-screen justify-between bg-[#d5e1ef] gap-5">
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
    </>
  );
}

export default App;
