export const outSideClick = (
  refItem: React.RefObject<HTMLElement>,
  setter: React.Dispatch<React.SetStateAction<string>>,
  buttonId: string
) => {
  function handleClickOutside(e: MouseEvent) {
    const buttonElement = document.getElementById(buttonId);
    if (
      refItem.current &&
      !refItem.current.contains(e.target as Node) &&
      buttonElement &&
      !buttonElement.contains(e.target as Node)
    ) {
      setter("");
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
};
