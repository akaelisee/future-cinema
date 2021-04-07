import styled from 'styled-components'

const Skills = styled.div`
  padding: 9px 25px;
  width: 650px;
  margin: 20px auto 0 auto;
  background-color: #d6d8d9;
  text-align: center;
  justify-content: space-around;
  .cards__skills {
    width: 45%;
    margin: 0px auto;
    display: flex;
    justify-content: space-around;

    .skills__item {
      position: relative;
      padding: 16px;
      margin: 0 5px;
      border-radius: 50%;
      background-color: #ffffff;
      cursor: pointer;
      top: 0px;
      transition: all 0.2s ease;
      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &:hover {
        transition: all 0.2s ease;
        top: -5px;
      }
    }
  }

  @media screen and (max-width: 750px) {
    width: 90%;
  }

  @media screen and (max-width: 530px) {
    width: 100%;
    .skills__item {
      &:hover {
        transition: 0s;
        top: 0px !important;
      }
    }
  }
`

export default Skills
