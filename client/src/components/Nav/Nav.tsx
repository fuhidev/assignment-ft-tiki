import React from 'react';
import Sider from 'antd/lib/layout/Sider';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

type Props = {
  collapsed: boolean
};

export default class NavComponent extends React.Component<Props, {}> {
  render() {
    const { collapsed } = this.props;
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="user" />
              <span>Books</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
          <Link to="/book-manage">
            <Icon type="video-camera" />
            <span>Book Manage</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}