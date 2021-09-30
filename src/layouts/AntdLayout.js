import { Layout } from "antd";
import Cookies from "js-cookie";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Sidebar from "../components/shared/Sidebar";
import { Wrapper } from "../components/ui/Wrapper";

const { Content } = Layout;

function AntdLayout(props) {
  const token = Cookies.get("token");
  const { children } = props;
  return (
    <Layout>
      <Header />
      <Content style={{ padding: "0px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          {token !== undefined ? <Sidebar /> : null}
          {token ? (
            <Content
              style={{
                backgroundColor: "#223350",
                padding: "0 8rem 0 14rem",
              }}
            >
              {children}
            </Content>
          ) : (
            <Content
              style={{
                backgroundColor: "#223350",
                padding: "0 8rem",
              }}
            >
              {children}
            </Content>
          )}
        </Layout>
      </Content>
      <Footer />
    </Layout>
  );
}

export default AntdLayout;
