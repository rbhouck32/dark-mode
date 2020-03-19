import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
let key = 5;
function useDarkMode() {
  const [toggle, setToggle] = useLocalStorage(key, false);

  useEffect(() => {
    toggle
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [setToggle]);
  return [toggle, setToggle];
}
export default useDarkMode;
