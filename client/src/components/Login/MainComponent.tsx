import React from 'react';
import {
  Form, Icon, Input, Button, Checkbox
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { login } from '../../services/main/user/action';
import { connect } from 'react-redux';
type DispatchToProps = {
  login: (username: string, password: string) => void
}
type Props = {

}
  & FormComponentProps
  & DispatchToProps;



class Component extends React.Component<Props, {}> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values.username, values.password);
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <div className="title">
          Login
      </div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
        </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch: Function): DispatchToProps => ({
  login: (username: string, password: string) => dispatch(login(username, password))
});
const MainComponent = connect(null, mapDispatchToProps)(Form.create({ name: 'normal_login' })(Component));
export { MainComponent };