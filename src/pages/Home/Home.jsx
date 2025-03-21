import { HeroSection, HeaderWrapper, Header, InfoSection } from "./styled";
import courage from "../../images/courage.png";
import cooperation from "../../images/cooperation.png";
import love from "../../images/love.png";
import respect from "../../images/respect.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HeroSection>
        <Header>
          <HeaderWrapper>
            <div class="flex">
              <div class="img-cnt">
                <img
                  src="https://www.bsw.com.pl/theme/img/bps-white.png"
                  alt="bg-picture"
                />
              </div>
              <h1>
                <span>British school </span>
                <span>in Kiev</span>
              </h1>
            </div>
            <ul class="flex nav">
              <li>
                <Link to="/">Про нас</Link>
              </li>
              <li>Практична інформація</li>
              <li>Новини</li>
              <li>Оплати</li>
            </ul>

            <button class="flex fl-wrap apply-btn">
              <Link to="/userAccount"> Подати заявку</Link>
            </button>
          </HeaderWrapper>
        </Header>
        <div class="hero_section_mask"></div>
        <div class="hero_section_img"></div>
        <div class="title">
          <h2>З нами начання в радість</h2>
        </div>
      </HeroSection>
      <InfoSection>
        <h3>Цінності, яким ми вчимо</h3>
        <div class="card">
          <h5> Сміливість</h5>
          <div class="icon-wrapper">
            <img src={courage} alt="courage-icon" />
          </div>
        </div>

        <div class="card">
          <h5>Кооперація</h5>
          <div class="icon-wrapper">
            <img src={cooperation} alt="cooperation-icon" />
          </div>
        </div>

        <div class="card">
          <h5>Толерантність</h5>
          <div class="icon-wrapper">
            <img src={love} alt="tolerance-icon" />
          </div>
        </div>

        <div class="card">
          <h5> Повага</h5>
          <div class="icon-wrapper">
            <img src={respect} alt="respect-icon" />
          </div>
        </div>
      </InfoSection>
    </>
  );
};

export default Home;
