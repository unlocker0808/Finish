import SlideLeft from '../componentLogin/SlideLeft';
import Information from '../componentLogin/Information';
import Link from '../componentLogin/Link';
import HeadingRight from '../componentLogin/HeadingRight';
import Option from '../componentLogin/Option';
import Option2 from '../componentLogin/Option2';
import ButtonSignUp from '../componentLogin/ButtonSignUp';

function SignUp() {
  return (
    <div className="SignUp">
      <div className="thinh">
       <div id="main">
        <div className="blog-slider sign-up">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mystyle1 mycolorsignup">
              <SlideLeft content1="Chào bạn!" content2="Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi"/>
              </div>
              <div className="col-md-6 mystyle3">
                <div>
                  <div>
                    <div>
                    <HeadingRight content="Đăng kí"/>
                      <Information icon="fa fa-user-o" text="Họ tên"/>                      
                      <Option/>
                      <Option2/>
                      <Information icon="fa fa-user" text="Tên đăng nhập"/>
                      <Information icon="fa fa-lock" text="Mật khẩu"/>
                      <Information icon="fa fa-lock" text="Nhập lại mật khẩu"/>
                      <Link mylink="/login" content="Bạn đã có tài khoản?"/>
                      <ButtonSignUp content="Đăng kí"/>
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

export default SignUp;
