import { AiOutlineHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { BsTranslate } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

export interface INavbarItem {
  id: number;
  name: string;
  icon: JSX.Element;
  link?: string;
}

export const navbarItems: INavbarItem[] = [
  {
    id: 0,
    name: "home",
    icon: <AiOutlineHome />,
    link: "/",
  },
  {
    id: 1,
    name: "about",
    icon: <AiOutlineInfoCircle />,
    link: "/about",
  },
  {
    id: 2,
    name: "translation",
    icon: <BsTranslate />,
  },
  {
    id: 3,
    name: "login",
    icon: <FiLogIn />,
    link: "/login",
  },
];
