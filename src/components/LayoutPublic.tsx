/*

Vista do publico ao website

Pode:
- Adicionar items a um carrinho
- Fazer compras
- Ver catálogo (secções de mais vendidos e em destaque)


- Top bar com Homem / Mulher
- Menu lateral com categorias de items


*/

import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb, Avatar, Badge } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import logo from '../logo.svg';
import PublicHomepage from './PublicHomepage';
import { setConstantValue } from 'typescript';
import { ProductPage } from './ItemLayout';
import { example_product } from '../example_data/example_Data';
import React from 'react';
import CatalogLayout from './CatalogLayout';
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
        } else if (this.state.page == "showProduct") {
            content = <CatalogLayout />
        }

        return (

            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" onClick={() => this.setState({
                            page: "homepage"
                        })}>
                            <img src={logo} className="App-logo" alt="logo" />
                            LOJA MIGUEL
                        </Menu.Item>
                        <Menu.Item key="2" onClick={() => this.setState({
                            page: "showProduct"
                        })}>Homem</Menu.Item>
                        <Menu.Item key="3" onClick={() => this.setState({
                            page: "showProduct"
                        })}>Mulher</Menu.Item>
                    </Menu>
                    <Menu theme="dark" mode="horizontal" style={{ position: 'absolute', top: 0, right: 0 }}>
                        <Menu.Item key="4">
                            <SearchOutlined style={{ fontSize: '20px', color: 'white' }} />
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Badge count={20} style={{ backgroundColor: '#2db7f5' }}>
                                <ShoppingCartOutlined style={{ fontSize: '20px', color: 'white' }} />
                            </Badge>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Avatar size="large" icon={<UserOutlined />} />
                        </Menu.Item>
                    </Menu>
                </Header>

                {content}
       
                <Footer style={{ textAlign: 'center' }}> Loja Miguel 2021 </Footer>
            </Layout>
        )
    };

}

export default LayoutPublic;