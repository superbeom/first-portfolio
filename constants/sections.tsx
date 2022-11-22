import { AiFillHome, AiTwotoneSetting } from "react-icons/ai";
import { FaUserAlt, FaPaperPlane, FaMap } from "react-icons/fa";
import { BsBookmarkStar } from "react-icons/bs";

const sections = [
  {
    id: "hero",
    name: "Home",
    icon: <AiFillHome />,
  },
  {
    id: "about",
    name: "About",
    icon: <FaUserAlt size={14} />,
  },
  {
    id: "experience",
    name: "Experience",
    icon: <FaMap />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <AiTwotoneSetting />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <BsBookmarkStar />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <FaPaperPlane size={14} />,
  },
];

export default sections;
