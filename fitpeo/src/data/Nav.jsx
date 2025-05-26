import { IoMdAdd } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaCalendarDays } from "react-icons/fa6";
import { MdAddBox } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { BsChatDotsFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
export const nav_icons = [
  {
    title: "profile",
    icon: "https://demos.pixinvent.com/materialize-html-admin-template/assets/img/avatars/1.png",
  },
  {
    title: "notifications",
    icon: IoMdAdd,
  },
];

export const side_nav_links = {
  general: [
    {
      title: "Dashboard",
      icon: RiDashboardFill,
      link: "/",
    },
    {
      title: "History",
      icon: HiArrowsUpDown,
      link: "/history",
    },
    {
      title: "Calendar",
      icon: FaCalendarDays,
      link: "/calendar",
    },
    {
      title: "Appointments",
      icon: MdAddBox,
      link: "/appointments",
    },
    {
      title: "Statitcs",
      icon: GoGraph,
      link: "/statics",
    },
  ],
  tools: [
    {
      title: "Chats",
      icon: BsChatDotsFill,
      link: "/chat",
    },
    {
      title: "Support",
      icon: IoIosCall,
      link: "/support",
    },
  ],
};
