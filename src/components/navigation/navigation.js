import React, {Component} from 'react'
import {A} from 'hookrouter'

import {Menu} from 'antd';
import {HomeOutlined, InfoCircleOutlined, UserOutlined, ContactsOutlined} from '@ant-design/icons';

import './navigation.sass'

class Navigation extends Component{

  render () {
    return (
      <Menu mode="horizontal" theme='dark'>
        <Menu.Item key="home" icon={<HomeOutlined/>}>
          <A href='/'>
            Home
          </A>
        </Menu.Item>
        <Menu.Item key="about" icon={<InfoCircleOutlined/>}>
          <A href='/about'>
            About
          </A>
        </Menu.Item>
        <Menu.Item key="app" icon={<UserOutlined/>}>
          <A href='/resume'>
            Resume
          </A>
        </Menu.Item>
        <Menu.Item key="contact" icon={<ContactsOutlined/>}>
          <A href='/contact'>
            Contact
          </A>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation