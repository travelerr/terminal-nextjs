import React from "react";
import { useRouter } from "next/router";

import reduceChildRoutes from "./reduceChildRoutes";
import { SidebarItemsType } from "../../types/sidebar";

interface SidebarNavListProps {
  depth: number;
  pages: SidebarItemsType[];
}

const SidebarNavList = (props: SidebarNavListProps) => {
  const { pages, depth } = props;
  const router = useRouter();
  const currentRoute = "/";

  const childRoutes = pages.reduce(
    (items, page) => reduceChildRoutes({ items, page, currentRoute, depth }),
    [] as JSX.Element[]
  );

  return <React.Fragment>{childRoutes}</React.Fragment>;
};

export default SidebarNavList;
