import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const { Item } = Form;

class LogInForm extends Component{

    state = {
        data: {}
    }

    onChange = e => {
        const { data } = this.state;
        this.setState({
            data:{...data, [e.target.name]: e.target.value}
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        const { data } = this.state;
        return(
            <div>
                <h3>LogIn Form</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Item>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                            onChange={this.onChange}
                            value={data.user}
                            name="user"
                        placeholder="Username" />
                    </Item>
                    <Item>
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={this.onChange}
                            value={data.email}
                            name="email"
                        placeholder="Email" />
                    </Item>
                    <Button htmlType="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default LogInForm;
