/**
 * @Author: zhishuai-tang
 * @Date: 2018/9/25 14:33
 * @Version: 1.0
 */

import {Form, Icon, Input, Button, Checkbox} from 'antd';

const FormItem = Form.Item;

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className='login-form'>
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: '请输入用户名！'}]
                    })(
                        <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}} placeholder='用户名'/>}/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码！'}]
                    })(
                        <Input prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25'}}/>} type='password' placeholder='密码'/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember',{
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住用户名</Checkbox>
                    )}
                    <a className='login-form-forgot' href=''>忘记密码</a>
                    <Button type='primary' htmlType='submit' className='login-form-button'>
                        登录
                    </Button>
                    或 <a href=''>立即注册！</a>
                </FormItem>
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);