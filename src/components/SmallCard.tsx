import upImg from "@/assets/images/icon-up.svg";
import downImg from "@/assets/images/icon-down.svg";

function SmallCard(props: {
  img: string;
  title: string;
  todayFollows: string;
  percentageFollows: string;
  isUp: boolean;
}) {
  const { img, title, todayFollows, percentageFollows, isUp } = props;
  return (
    <>
      <section className="grid grid-cols-2 row-auto content-between rounded-md w-[326px] h-[125px] hover:bg-[#F0F2FA] bg-[#F5F7FF] py-[27px] px-[31px]">
        <h1 className="capitalize font-inter font-bold text-[#63687E] text-[14px]">
          {title}
        </h1>
        <img src={img} alt="Icon" className="justify-self-end" />
        <p className="text-4xl font-bold font-inter text-[#1E202A]">
          {todayFollows}
        </p>
        <div
          className={`flex justify-self-end items-end gap-1 font-inter text-[14px] ${
            isUp ? "text-[#1DB489]" : "text-[#DC414C]"
          } font-bold`}
        >
          <img src={isUp ? upImg : downImg} alt="Up/Down icon" className="mb-2"/>
          <p>{percentageFollows}</p>
        </div>
      </section>
    </>
  );
}

export default SmallCard;
