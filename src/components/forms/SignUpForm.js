import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class SignUp extends Component{

    state = {
        confirmDirty: false,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { form } = this.props;
        form.validateFields((err, val) => {
            if(!err){
                form.resetFields();
            }
        })
    }

    handleConfirmBlur = (e) => {
        const { value } = e.target;
        const { confirmDirty } = this.state;
        this.setState({ confirmDirty: confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        const { confirmDirty } = this.state;
        if (value && confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    render(){
        const formItemLayout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        };

        const { form: { getFieldDecorator } } = this.props;
        return(
            <div style={{textAlign: 'center'}}>
                <Form onSubmit={this.handleSubmit}
                    style={{
                        maxWidth: 800,
                        textAlign: 'center',
                        margin: '0 auto 0 auto'
                    }}>
                    <h3>Sign Up</h3>
                    <FormItem
                        {...formItemLayout}
                    label="Username">
                        {getFieldDecorator('userName', {
                            rules: [{
                                    required: true, message: 'Please input your Username!'
                            }, {
                                pattern: (/^\S{4,8}$/), min: 4, max: 20, message: 'Your user name should be between minimum 4 and maximum 20 characters and can not contain space!'
                            }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    label="Email">
                        {getFieldDecorator('email', {
                            rules: [{
                                    required: true, type: "email", message: 'Please input a valid Email!'
                            }, {

                            }],
                        })(
                            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Password"
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                    required: true, message: 'Please input your Password!'
                            },{
                                    whiteSpace: true, message: 'The password can not contain space'
                            }, {
                                    min: 6, max: 8, message: 'The password must be longer than 6 and shorter than 8 characters!'
                            }, {
                                    validator: this.validateToNextPassword
                            }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Confirm Password"
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                    required: true, message: 'Please confirm your password!',
                            }, {
                                    validator: this.compareToFirstPassword,
                            }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"
                                placeholder="Confirm Password"
                                onBlur={this.handleConfirmBlur} />
                        )}
                    </FormItem>
                    <Button type="primary" htmlType="submit">Submit</Button>
                    <p>If you already have an account <Link to="/auth/login">click here to log in.</Link></p>
                </Form>
            </div>
        )
    }
}

const SignUpForm = Form.create()(SignUp);

export default SignUpForm;
