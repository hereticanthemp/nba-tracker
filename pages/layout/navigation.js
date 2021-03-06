import { Menu } from "antd";
import Link from "next/link";
const Navigation = (props) => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      <Menu.Item key="Home">
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="Game">
        <Link href="/game">Game</Link>
      </Menu.Item>
    </Menu>
  );
};
export default Navigation;
