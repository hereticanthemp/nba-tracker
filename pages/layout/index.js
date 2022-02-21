import Navigation from "./navigation";
import { Layout } from "antd";

const AppLayout = (props) => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
      <Content>
        <main>{props.children}</main>
      </Content>
      <Footer>2022 Created by Gin Pan</Footer>
    </Layout>
  );
};
export default AppLayout;