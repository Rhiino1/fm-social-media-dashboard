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
      <div className="h-6 w-12 bg-[#AEB3CB] lg:bg-gradient-to-r from-[#378FE6] to-[#3EDA82] rounded-full dark:bg-[#63687E] after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-[18px] after:w-[18px] after:transition-all"></div>
    </div>
  );
}

export default ToggleBtn;
