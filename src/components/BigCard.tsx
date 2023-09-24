import upImg from "@/assets/images/icon-up.svg";
import downImg from "@/assets/images/icon-down.svg";

function BigCard(props: {
  img: string;
  name: string;
  social: string;
  totalFollows: string;
  todayFollows: string;
  isUp: boolean;
}) {
  const { img, name, social, totalFollows, todayFollows, isUp } = props;

  return (
    <>
      <section
        className={`w-[326px] h-[216px] rounded-md rounded-b-md  ${social}`}
      >
        <article className="dark:bg-[#252A41] dark:hover:bg-[#2C334E] w-[inherit] h-[212px] rounded-b-md grid grid-flow-row grid-rows-3 items-center justify-center hover:bg-[#E9EBF7] bg-[#F0F2FA]  mt-[4px]">
          <div className="flex items-center justify-center gap-2">
            <img src={img} alt="Icon" />
            <p className="font-inter text-[14px] text-[#63687E] dark:text-[#8B97C6] font-bold">
              {name}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-inter text-6xl text-[#1E202A] dark:text-white font-bold">
              {totalFollows}
            </h1>
            <p className="uppercase font-inter text-[14px] text-[#63687E] dark:text-[#8B97C6] font-base tracking-[5px]">
              followers
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={isUp ? upImg : downImg} alt="Up/Down icon" />
            <p
              className={`font-inter text-[14px] ${
                isUp ? "text-[#1DB489]" : "text-[#DC414C]"
              } font-bold`}
            >
              {todayFollows} Today
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default BigCard;
