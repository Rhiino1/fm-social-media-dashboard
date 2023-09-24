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

const smallCards = [
  {
    img: facebookImg,
    title: "Page Views",
    todayFollows: "87",
    percentageFollows: "3%",
    isUp: true
  },
  {
    img: facebookImg,
    title: "Likes",
    todayFollows: "52",
    percentageFollows: "2%",
    isUp: false
  },
  {
    img: instagramImg,
    title: "Likes",
    todayFollows: "5462",
    percentageFollows: "2257%",
    isUp: true
  },
  {
    img: instagramImg,
    title: "Profile Views",
    todayFollows: "52k",
    percentageFollows: "1375%",
    isUp: true
  },
  {
    img: twitterImg,
    title: "Retweets",
    todayFollows: "117",
    percentageFollows: "303%",
    isUp: true
  },
  {
    img: twitterImg,
    title: "Likes",
    todayFollows: "507",
    percentageFollows: "553%",
    isUp: true
  },
  {
    img: youtubeImg,
    title: "Likes",
    todayFollows: "107",
    percentageFollows: "19%",
    isUp: false
  },
  {
    img: youtubeImg,
    title: "Total Views",
    todayFollows: "1407",
    percentageFollows: "12%",
    isUp: false
  },
];

export { bigCards, smallCards };