import SlideLeft from '../componentLogin/SlideLeft';
import Information from '../componentLogin/Information';
import Link from '../componentLogin/Link';
import LoginButton from '../componentLogin/LoginButton';
import Button from '../componentLogin/Button';
import HeadingRight from '../componentLogin/HeadingRight';


function Login() {
  return (
    <div className="Login">
      <div className="thinh">
      <div id="main">
        <div className="blog-slider">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mystyle1 mycolorlogin">
                <SlideLeft content1="Chào mừng trở lại!" content2="Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân của bạn"/>
              </div>
              <div className="col-md-6 mystyle3">
                <div>
                  <div>
                    <div>
                      <HeadingRight content="Đăng nhập"/>
                      <Information icon="fa fa-user" text="Tên đăng nhập"/>
                      <Information icon="fa fa-lock" text="Mật khẩu"/>
                      <Link mylink="/forgot" content="Quên mật khẩu?"/>
                      <LoginButton content="Đăng nhập"/>
                      <Button mylink="/signUp" content="Tạo tài khoản"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
