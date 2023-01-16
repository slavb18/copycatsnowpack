import * as React from "react";
import "./App.css";
import cuteAsianWomanStu from "./assets/cuteAsianWomanStu.png";
import handsomeBusinessman from "./assets/handsomeBusinessman.png";
import vector from "./assets/vector.svg";
import avatar2 from "./assets/avatar2.png";
import logo1 from "./assets/logo1.svg";
import avatar6 from "./assets/avatar6.png";
import icon from "./assets/icon.svg";
import star from "./assets/star.svg";
import wireframesVarious from "./assets/wireframesVarious.svg";
import socialProof from "./assets/socialProof.svg";
import avatar3 from "./assets/avatar3.png";
import socialLinks from "./assets/socialLinks.svg";
import star11 from "./assets/star11.svg";
import portraitSuccessful from "./assets/portraitSuccessful.png";
import ellipse2 from "./assets/ellipse2.svg";
import icon2 from "./assets/icon2.svg";
import icon1 from "./assets/icon1.svg";
import avatar from "./assets/avatar.png";
import avatar5 from "./assets/avatar5.png";
import logo from "./assets/logo.svg";
import avatar4 from "./assets/avatar4.png";
import avatar1 from "./assets/avatar1.png";
const App = () => {
  return (
    <div className="landing-page">
      <div className="navigation">
        <div className="navbar">
          <img className="logo" src={logo} />
          <span className="wakanda">Wakanda</span>
          <span className="nav-item">Home</span>
          <span>About us</span>
          <span>How it works</span>
          <span>For Freelancer</span>
          <button className="makers-button">Get Started</button>
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-container-1">
          <span className="recruit-top-talented">
            Recruit top talented freelancer for your business
          </span>
          <span className="connect-you-to-thoud">
            Connect you to thoudsands of talented freelancer from any industry.
            You can have the best people in just few simple steps.
          </span>
          <button className="button">Get Started</button>
        </div>
        <div className="flex-container-2">
          <img className="handsome-businessman" src={handsomeBusinessman} />
          <img className="vector" src={vector} />
        </div>
      </div>
      <img className="social-proof" src={socialProof} />
      <div className="feature">
        <span className="feature-1">FEATURE</span>
        <span className="the-benefit-of-using">
          The benefit of using our platform
        </span>
        <div className="flex-container-3">
          <img className="icon" src={icon} />
          <img className="icon-1" src={icon1} />
          <img className="icon-2" src={icon2} />
        </div>
        <div className="flex-container-4">
          <span>Professional &amp; Fast</span>
          <span className="num-247-support">24&#x2F;7 support</span>
          <span className="safe-secure">Safe &amp; Secure</span>
        </div>
        <div className="flex-container-5">
          <span className="search-and-hire-the">
            Search and hire the most talented freelancers to match your needs.
            No matter what you need done, we&#39;ve got the perfect freelancer
            for you.
          </span>
          <span className="you-have-any-concern">
            You have any concerns or questions? Don’t worry, we have our support
            team to help you at anytime and anywhere.
          </span>
          <span>
            We know that safety is the most important thing for our customer, so
            all of our payments are processed instantly and securely.
          </span>
        </div>
      </div>
      <div className="tutorial">
        <img className="wireframes-various" src={wireframesVarious} />
        <div className="flex-container-6">
          <span className="wakanda-is-an-easy-p">
            Wakanda is an easy platform to find talent
          </span>
          <div className="flex-container-7">
            <div className="flex-container-8">
              <img className="ellipse-2" src={ellipse2} />
              <div className="cat-absolute-container">1</div>
            </div>
            <span className="sign-in-to-our-websi">Sign in to our website</span>
          </div>
          <div className="flex-container-9">
            <div className="flex-container-10">
              <img className="ellipse-21" src={ellipse2} />
              <div className="cat-absolute-container-1">2</div>
            </div>
            <span className="fill-out-neccesary-i">
              Fill out neccesary information
            </span>
          </div>
          <div className="flex-container-11">
            <div className="flex-container-12">
              <img className="ellipse-22" src={ellipse2} />
              <div className="cat-absolute-container-2">3</div>
            </div>
            <span className="discover-thoudsands">
              Discover thoudsands of freelancers
            </span>
          </div>
          <div className="flex-container-13">
            <div className="flex-container-14">
              <img className="ellipse-23" src={ellipse2} />
              <div className="cat-absolute-container-3">4</div>
            </div>
            <span className="view-freelancers-pro">
              View freelancer’s profile and hire
            </span>
          </div>
          <div className="flex-container-15">
            <div className="flex-container-16">
              <img className="ellipse-24" src={ellipse2} />
              <div className="cat-absolute-container-4">5</div>
            </div>
            <span className="complete-payment-it">
              Complete payment &amp; it’s time to work!
            </span>
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="flex-container-17">
          <span className="explore-and-hire-tal">
            Explore and hire talent from our platform
          </span>
          <span className="weve-got-experts-for">
            We&#39;ve got experts for every industry - all under one roof! You
            can find everything from WordPress developers to Graphic designers
            to copywriters and many more at Wakanda.
          </span>
          <button className="button-1">Explore now</button>
        </div>
        <div className="flex-container-18">
          <div className="card">
            <img className="avatar" src={avatar} />
            <span className="dianne-russell">Dianne Russell</span>
            <div className="flex-container-19">
              <img className="star-11" src={star11} />
              <span className="num-49-5">4.9 &#x2F; 5</span>
            </div>
          </div>
          <img className="portrait-successful" src={portraitSuccessful} />
        </div>
      </div>
      <div className="testimonial">
        <span className="testimonial-1">TESTIMONIAL</span>
        <span className="see-what-theyre-sayi">
          See what they’re saying about us
        </span>
        <div className="flex-container-20">
          <div className="flex-container-21">
            <div className="card-1">
              <div className="flex-container-22">
                <img className="avatar-1" src={avatar1} />
                <div className="flex-container-23">
                  <span className="cara-bedford">Cara Bedford</span>
                  <img className="star" src={star} />
                </div>
              </div>
              <span className="wakanda-was-amazing">
                I have been using Wakanda for quite some time now and I have to
                say it has been the best freelance hiring platform that I&#39;ve
                used. The quality of freelancers on this site is very high and
                they&#39;re totally reliable. I would highly recommend it!
              </span>
            </div>
            <div className="card-2">
              <div className="flex-container-24">
                <img className="avatar-2" src={avatar2} />
                <div className="flex-container-25">
                  <span className="cara-bedford-1">Kathryn Murphy</span>
                  <img className="star-1" src={star11} />
                </div>
              </div>
              <span className="wakanda-was-amazing-1">
                One of the best things about Wakanda is that it really
                simplifies the process of finding and hiring people. The quality
                is good as well, every freelancer I&#39;ve hired has been
                high-quality and professional. I would recommend this to anyone
                who needs a freelancer.
              </span>
            </div>
          </div>
          <div className="flex-container-26">
            <div className="card-3">
              <div className="flex-container-27">
                <img className="avatar-3" src={avatar3} />
                <div className="flex-container-28">
                  <span className="cara-bedford-2">Robert Fox</span>
                  <img className="star-2" src={star} />
                </div>
              </div>
              <span className="wakanda-was-amazing-2">
                I’m so happy because the freelance talent we work with are more
                productive than we have ever thought. Recommend for people who
                want to find professional freelancer on this platform.
              </span>
            </div>
            <div className="card-4">
              <div className="flex-container-29">
                <img className="avatar-4" src={avatar4} />
                <div className="flex-container-30">
                  <span className="cara-bedford-3">Esther Howard</span>
                  <img className="star-3" src={star} />
                </div>
              </div>
              <span className="wakanda-was-amazing-3">
                {" "}
                have used a lot of freelance hiring platforms, but none compare
                to Wakanda. The quality of freelancers that I can find here is
                unmatched and the service is top-notch. The customer service is
                also excellent, which cannot be said for my previous experiences
                in using other apps. I would highly recommend this product for
                anyone looking to hire a freelancer.
              </span>
            </div>
          </div>
          <div className="flex-container-31">
            <div className="card-5">
              <div className="flex-container-32">
                <img className="avatar-5" src={avatar5} />
                <div className="flex-container-33">
                  <span>Albert Flores</span>
                  <img className="star-4" src={star} />
                </div>
              </div>
              <span className="wakanda-was-amazing-4">
                I am happy to say that I have hired a couple of freelancers
                through Wakanda and they are high-quality ones. Working with
                them is not just easier; it has also been more effective. Having
                found a great freelance team, I cannot imagine switching to any
                other hiring platform.
              </span>
            </div>
            <div className="card-6">
              <div className="flex-container-34">
                <img className="avatar-6" src={avatar6} />
                <div className="flex-container-35">
                  <span className="cara-bedford-4">Eleanor Pena</span>
                  <img className="star-5" src={star} />
                </div>
              </div>
              <span className="wakanda-was-amazing-5">
                I have used a number of different freelance hiring platforms and
                none come close to Wakanda. The quality of the freelancers on
                here is top notch and it&#39;s easy to browse through the
                listings. I&#39;ve been using it for six months now and I&#39;ve
                found my perfect freelancer without any regrets whatsoever.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="call-to-action">
        <div className="container">
          <img className="cute-asian-woman-stu" src={cuteAsianWomanStu} />
          <div className="flex-container-36">
            <span className="what-are-you-waiting">
              WHAT ARE YOU WAITING FOR?
            </span>
            <span className="find-the-talent-to-g">
              Find the talent to get your business growing
            </span>
            <button className="button-2">Get Started</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="flex-container-37">
          <img className="logo-1" src={logo1} />
          <span className="wakanda-1">Wakanda</span>
          <span className="company">Company</span>
          <span className="support">Support</span>
          <span className="subscribe-to-our-new">
            Subscribe to our newsletter
          </span>
        </div>
        <div className="flex-container-38">
          <img className="social-links" src={socialLinks} />
          <div className="flex-container-39">
            <span>About us</span>
            <span className="blog">Blog</span>
          </div>
          <div className="flex-container-40">
            <span className="help-center">Help center</span>
            <span className="terms-of-service">Terms of service</span>
          </div>
          <input
            className="input-field-bg"
            placeholder="Your email address"
            type="text"
          />
        </div>
        <div className="flex-container-41">
          <span className="copyright-2022-waka">
            Copyright © 2022 Wakanda. All rights reserved
          </span>
          <span className="contact-us">Contact us</span>
          <span className="legal">Legal</span>
        </div>
        <div className="flex-container-42">
          <span>How it works</span>
          <span>Privacy policy</span>
        </div>
        <div className="flex-container-43">
          <span>For freelancer</span>
          <span>Status</span>
        </div>
      </div>
    </div>
  );
};
export default App;
