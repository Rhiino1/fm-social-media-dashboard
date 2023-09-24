import ToggleBtn from "@/components/ToggleBtn";

function Header(props: { darkMode: boolean; toggleDarkMode: Function }) {
  return (
    <>
      <div className="z-10 flex flex-col items-start lg:flex-row">
        <section className="flex flex-col items-start w-full gap-3">
          <h1 className="font-inter text-2xl md:text-4xl font-bold text-[#1E202A] dark:text-white">
            Social Media Dashboard
          </h1>
          <p className="text-[#63687E] text-[14px] md:text-lg dark:text-[#8B97C6] font-bold font-inter">
            Total Followers: 23,004
          </p>
        </section>
        <hr className="lg:hidden w-full h-[2px] bg-[#63687E] dark:bg-[#1F212E] mt-[27px]"></hr>
        <section className="flex justify-between lg:justify-end lg:space-x-5 w-full mt-[22px]">
          <p className="text-[#63687E] dark:text-[#8B97C6] text-[14px] font-bold font-inter">
            Dark Mode
          </p>
          <ToggleBtn
            darkMode={props.darkMode}
            toggleDarkMode={props.toggleDarkMode}
          ></ToggleBtn>
        </section>
      </div>
    </>
  );
}

export default Header;
