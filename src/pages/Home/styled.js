import styled from "styled-components";

export const HeroSection = styled.div`
  .flex {
    display: flex;
  }

  .fl-wrap {
    flex-wrap: wrap;
  }

  a {
    text-decoration: none;
    color: white;
  }

  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 30px;
    color: white;
  }

  .img-cnt {
    width: 79px;
    height: 100px;
    overflow: hidden;
  }

  .img-cnt img {
    width: 100px; /* Keep the original width */
    height: 100px;
    object-fit: cover;
    object-position: left; /* Show only the left side */
  }

  .nav {
    justify-content: space-between;
    gap: 25px;
  }

  li {
    text-align: center;
    font-size: 20px;
  }

  .apply-btn {
    background-color: #db861d;
    color: white;
    font-size: 20px;
    padding: 10px;
    border-radius: 50px;
  }

  .hero_section_mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 530px;
    z-index: 2;
  }

  .hero_section_mask::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(6, 18, 89, 0.5);
    height: 100vh;
  }

  .hero_section_img {
    background-image: url(https://www.bsw.com.pl/upload/page/17/header/original.jpg);
    background-size: cover;
    opacity: 0.6;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    height: 100vh;
  }

  .title {
    position: absolute;
    z-index: 2;
    top: 270px;
    opacity: 0.8;
    width: 100%;

    h2 {
      font-family: "Playfair Display", serif;
      color: white;
      font-size: 100px;
      margin: 0 auto;
      text-align: center;
    }
  }
`;

export const Header = styled.div`
  position: absolute;
  top: 40px;
  color: white;
  z-index: 3;
  opacity: 0.8;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const InfoSection = styled.div`
  position: absolute;
  display: flex;
  top: 450px;
  margin: auto 0;
  left: 0;
  right: 0;
  justify-content: center;
  z-index: 2;
  opacity: 0.8;
  flex-wrap: wrap;

  h3 {
    flex-basis: 100%;
    text-align: center;
    color: white;
  }
  .card {
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    border-radius: 20px;
    padding: 20px;
    margin-right: 30px;
  }

  h5 {
    color: white;
  }

  .icon-wrapper {
    img {
      width: 200px;
    }
  }
`;
