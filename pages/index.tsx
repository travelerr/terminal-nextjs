import Sidebar from "../components/sidebar/Sidebar";
import NavbarComponent from "../components/navbar/Navbar";
import { SidebarItemsType } from "../types/sidebar";
import { Sliders } from "react-feather";

export default function Home() {
  let sidebarItems = [
    {
      href: "/dashboard",
      icon: Sliders,
      title: "Dashboards",
      badge: "5",
      children: [
        {
          href: "/dashboard/default",
          title: "Default",
        },
        {
          href: "/dashboard/analytics",
          title: "Analytics",
        },
        {
          href: "/dashboard/saas",
          title: "SaaS",
        },
        {
          href: "/dashboard/social",
          title: "Social",
        },
        {
          href: "/dashboard/crypto",
          title: "Crypto",
        },
      ],
    },
  ] as SidebarItemsType[];

  let items = [
    {
      title: "test",
      pages: sidebarItems,
    },
  ];
  return (
    <div className="wrapper">
      <Sidebar items={items} />
      <div className="main">
        <NavbarComponent />
      </div>
    </div>
  );
}
