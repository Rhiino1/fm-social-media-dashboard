import ToggleBtn from "@/components/ToggleBtn";

function Header(props: { darkMode: boolean; toggleDarkMode: Function }) {
  return (
    <>
      <div className="flex flex-col items-start lg:flex-row">
        <section className="flex flex-col items-start gap-3">
          <h1 className="font-inter text-2xl font-bold text-[#1E202A]">
            Social Media Dashboard
          </h1>
          <p className="text-[#63687E] text-[14px] font-bold font-inter">
            Total Followers: 23,004
          </p>
        </section>
        <hr className="lg:hidden w-full h-[2px] bg-[#63687E] mt-[27px]"></hr>
        <section className="flex justify-end space-x-5 w-full mt-[22px]">
          <p className="text-[#63687E] text-[14px] font-bold font-inter">
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
