export const outSideClick = (
  refItem: React.RefObject<HTMLElement>,
  setter: React.Dispatch<React.SetStateAction<string>>
) => {
  function handleClickOutside(e: MouseEvent) {
    if (refItem.current && !refItem.current.contains(e.target as Node)) {
      setter("");
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
};
