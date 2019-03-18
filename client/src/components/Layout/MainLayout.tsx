import React from 'react';
import { Layout, Menu, Icon, Tooltip } from 'antd';
import Nav from '../Nav/Nav';

import './MainLayout.css';
import { Link } from 'react-router-dom';
import { AllModelReducer } from '../../reducers';
import { connect } from 'react-redux';
const { Header, Sider, Content } = Layout;


type MapToProps = {
  loggingIn: boolean
}



type Props = {

} & MapToProps;
class MainLayout extends React.Component<Props, {}> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { collapsed } = this.state;
    const { loggingIn } = this.props;

    const typeLog = loggingIn ? 'logout' : 'login';
    return (
      <Layout id="main-layout">
        {/* <Nav collapsed={collapsed} /> */}
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Link to="/">
              <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              Tiki Book Store
            </Link>
            <Tooltip title={loggingIn ? 'Logout' : 'Login'}>
              <Link to={typeLog}>
                <Icon
                  style={{ float: 'right' }}
                  className="trigger"
                  type={typeLog}
                  onClick={this.toggle}
                />
              </Link>
            </Tooltip>
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state: AllModelReducer): MapToProps => ({
  loggingIn: state.main.loggingIn
});

export default connect(mapStateToProps, null)(MainLayout);