import { HeroSection, HeaderWrapper, Header, InfoSection } from "./styled";
import courage from "../../images/courage.png";
import cooperation from "../../images/cooperation.png";
import love from "../../images/love.png";
import respect from "../../images/respect.png";

const Home = () => {
  return (
    <>
      <HeroSection>
        <Header>
          <HeaderWrapper>
            <div class="flex">
              <div class="img-cnt">
                <img src="https://www.bsw.com.pl/theme/img/bps-white.png" />
              </div>
              <h1>
                <span>British school </span>
                <span>in Kiev</span>
              </h1>
            </div>
            <ul class="flex nav">
              <li>Про нас</li>
              <li>Практична інформація</li>
              <li>Новини</li>
              <li>Оплати</li>
            </ul>
            <button class="flex fl-wrap apply-btn">Подати заявку</button>
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
            <img src={courage} />
          </div>
        </div>

        <div class="card">
          <h5>Кооперація</h5>
          <div class="icon-wrapper">
            <img src={cooperation} />
          </div>
        </div>

        <div class="card">
          <h5>Толерантність</h5>
          <div class="icon-wrapper">
            <img src={love} />
          </div>
        </div>

        <div class="card">
          <h5> Повага</h5>
          <div class="icon-wrapper">
            <img src={respect} />
          </div>
        </div>
      </InfoSection>
    </>
  );
};

export default Home;
