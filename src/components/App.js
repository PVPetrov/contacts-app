import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import Contacts from './Contacts';
import Homepage from './Homepage';
import Profile from './Profile';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component{

    state = {
        height: 0
    }

    componentWillMount(){
        this.resizeHeight();
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeHeight.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeHeight.bind(this));
    }

    resizeHeight(){
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
                        >
                            <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
                            <Menu.Item key="contacts"><Link to="/contacts">Contacts</Link></Menu.Item>
                            <Menu.Item key="profile"><Link to="/profile">Profile</Link></Menu.Item>
                        </Menu>
                        <Button type="primary"
                            style={{margin: '0 1em 0 auto', alignSelf: 'center'}}
                        >Log In / Sign up</Button>
                    </Layout>
                </Header>
                <Content
                    style={{minHeight: height - 64 - 69}}>
                    <Switch>
                        <Route path="/contacts" component={Contacts}/>
                        <Route path="/profile" component={Profile}/>
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
