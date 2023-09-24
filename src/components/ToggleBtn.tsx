// la bolita w 18px
function ToggleBtn(props: { darkMode: boolean; toggleDarkMode: Function }) {
  const { darkMode, toggleDarkMode } = props;
  return (
    <div
      className="relative inline-flex items-center cursor-pointer"
      onClick={() => {
        toggleDarkMode();
      }}
    >
      <input
        type="checkbox"
        checked={darkMode}
        value=""
        className="sr-only peer"
      />
      <div className="dark:peer-checked:after:left-[27px] h-6 w-12 bg-[#AEB3CB] lg:bg-gradient-to-r lg:from-[#378FE6] lg:to-[#3EDA82] rounded-full dark:bg-gradient-to-r dark:from-[#378FE6] dark:to-[#3EDA82] after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white dark:after:bg-[#1E202A] after:rounded-full after:h-[18px] after:w-[18px] after:transition-all after:ease-in-out after:duration-[400ms]"></div>
    </div>
  );
}

export default ToggleBtn;
