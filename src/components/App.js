import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import Contacts from './Contacts';
import Homepage from './Homepage';
import Profile from './Profile';
import LoginPage from './LoginPage';

import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component{

    state = {
        height: 0
    }

    componentWillMount = () => {
        this.resizeHeight();
    }

    componentDidMount = () => {
        window.addEventListener("resize", this.resizeHeight.bind(this));
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.resizeHeight.bind(this));
    }

    resizeHeight = () => {
        const height = window.innerHeight;
        this.setState({height});
    }

    render(){
        const { height } = this.state;
        return(
            <Layout>
                <Header>
                    <Layout
                        style={{display: 'flex', flexFlow: 'row wrap'}}
                    >
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                        >
                            <Menu.Item key="1"><Link to="/"><h3>Home</h3></Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/contacts"><h3>Contacts</h3></Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/profile"><h3>Profile</h3></Link></Menu.Item>
                        </Menu>
                        <Button type="primary"
                            style={{margin: '0 1em 0 auto', alignSelf: 'center'}}
                        ><Link to="/login">Log In / Sign up</Link></Button>
                    </Layout>
                </Header>
                <Content
                    style={{minHeight: height - 64 - 69}}>
                    <Switch>
                        <Route path="/contacts" component={Contacts}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route exact path="/" component={Homepage} />
                        <Route render={ () => (<div>Page Not Found</div>)}/>
                    </Switch>
                </Content>
                <Footer>Contacts app by <em>PVPetrov</em></Footer>
            </Layout>
        );
    }
}

export default App;
