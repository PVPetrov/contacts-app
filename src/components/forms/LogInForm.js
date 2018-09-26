import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class LogIn extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const { form: { validateFields } } = this.props;
        validateFields((err,vals) => {
            if(!err){
            }
        });
    }

    render(){
         const { form: { getFieldDecorator } } = this.props;
         const formItemLayout = {
           labelCol: { span: 6 },
           wrapperCol: { span: 14 },
         };
        return(
            <div>
                <Form onSubmit={this.handleSubmit}
                    style={{
                        maxWidth: 800,
                        textAlign: 'center',
                        margin: '0 auto'
                    }}>
                    <h3>LogIn Form</h3>
                    <FormItem
                        {...formItemLayout}
                    label="Email">
                        {getFieldDecorator('Email', {
                            rules: [{ required: true, message: 'Please input your email!' }, {
                                type: 'email', message: 'Please enter a valid email!'
                            }],
                        })(
                            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    label="Password">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <p>If you dont have an account yet <Link to="/auth/signup">click here to sign up</Link></p>
                </Form>
            </div>
        )
    }
}

const LogInForm = Form.create()(LogIn);

export default LogInForm;
