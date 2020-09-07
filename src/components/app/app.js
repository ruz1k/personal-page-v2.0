import React from 'react';

import Navigation from "../navigation";
import {Col, Layout} from "antd";
import Route from "../route";

const {Header, Content} = Layout

const App = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
      <Navigation/>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <Route />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
