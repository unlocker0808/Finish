import SlideLeft from '../componentLogin/SlideLeft';
import Information from '../componentLogin/Information';
import Link from '../componentLogin/Link';
import LoginButton from '../componentLogin/LoginButton';
import Button from '../componentLogin/Button';
import HeadingRight from '../componentLogin/HeadingRight';


function Forgot() {
  return (
    <div className="Forgot">
       <div className="thinh">
       <div id="main">
        <div className="blog-slider">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mystyle1 mycolorforgot">
              <SlideLeft content1="Bạn quên mật khẩu?" content2="Vui lòng nhập tên đăng nhập và mật khẩu gần nhất mà bạn nhớ để chúng tôi có thể hỗ trợ bạn một cách kịp thời"/>
              </div>
              <div className="col-md-6 mystyle3">
                <div>
                  <div>
                    <div>
                      <HeadingRight content="Quên mật khẩu"/>
                      <Information icon="fa fa-user" text="Tên đăng nhập"/>
                      <Information icon="fa fa-lock" text="Mật khẩu gần nhất"/>
                      <Link mylink="/login" content="Quay trở lại đăng nhập"/>
                      <Button content="Tìm tài khoản"/>
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

export default Forgot;
