/*

Vista do publico ao website

Pode:
- Adicionar items a um carrinho
- Fazer compras
- Ver catálogo (secções de mais vendidos e em destaque)


- Top bar com Homem / Mulher
- Menu lateral com categorias de items


*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb, Avatar, Badge } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import logo from '../logo.svg';
import PublicHomepage from './PublicHomepage';
import { setConstantValue } from 'typescript';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const rightStyle = { position: 'absolute', top: 0, right: 0 };

interface Props {
}

interface State {
    page: string
}

class LayoutPublic extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            page: "homepage"
        };
    };

    render() {

        let content;
        if (this.state.page == "homepage") {
            content = <PublicHomepage />;

        }

        return (

            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <img src={logo} className="App-logo" alt="logo" />
                            LOJA MIGUEL
                        </Menu.Item>
                        <Menu.Item key="2">Homem</Menu.Item>
                        <Menu.Item key="3">Mulher</Menu.Item>
                    </Menu>
                    <Menu theme="dark" mode="horizontal" style={{ position: 'absolute', top: 0, right: 0 }}>
                        <Menu.Item key="4">
                            <SearchOutlined style={{ fontSize: '20px', color: 'white' }} />
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Badge count={5} style={{ backgroundColor: '#2db7f5' }}>
                                <ShoppingCartOutlined style={{ fontSize: '20px', color: 'white' }} />
                            </Badge>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Avatar size="large" icon={<UserOutlined />} />
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="Coleção">
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="sub2" icon={<LaptopOutlined />}>Sapatos
                                </Menu.Item>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Acessórios">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>

                            {content}

                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}> Loja Miguel 2021 </Footer>
            </Layout>

        );

    }

}

export default LayoutPublic;