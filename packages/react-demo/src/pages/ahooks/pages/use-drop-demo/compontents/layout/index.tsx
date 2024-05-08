import React, { FC } from "react";
import "./index.css";
import LeftSidebar from "../left-sidebar";
import RightSidebar from "../right-sidebar";

interface IProps {
  children?: React.ReactNode;
}
const Layout: FC<IProps> = (props) => {
  const { children } = props;
  return (
    <div className="ahooks-drop-warp">
      <header>header</header>
      <main>
        <section>
          <LeftSidebar />
        </section>
        <section>{children}</section>
        <section>
          <RightSidebar />
        </section>
      </main>
    </div>
  );
};

export default Layout;
