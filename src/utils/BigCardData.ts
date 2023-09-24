import socials from "@/utils/SocialEnum";
import facebookImg from "@/assets/images/icon-facebook.svg";
import twitterImg from "@/assets/images/icon-twitter.svg";
import instagramImg from "@/assets/images/icon-instagram.svg";
import youtubeImg from "@/assets/images/icon-youtube.svg";

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

export default bigCards;