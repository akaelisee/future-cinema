// @ts-nocheck
import styled from 'styled-components'

const Container = styled.div`
  padding: 90px 0;

  /* .title {
    color: #fff;
    margin
  } */

  ${props => {
    if (props.second) {
      return `
        padding: 0px 0;
      `
    } else if (props.newLetter) {
      return `
      padding: 0px 0;
      background: #2C3E50;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to left, #4CA1AF, #2C3E50);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to left, #4CA1AF, #2C3E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      position: relative;
      
      .btn__top{
        position: relative;
        border-radius: 50%;
        background-color: #ffffff;
        padding: 18px;
        width: 10px;
        bottom: -16px;
        margin: 0 auto;
        box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.75);
        transition: all 0.1s;
        cursor: pointer;
            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }

        &:hover {
          bottom: -9px;
          transition: all 0.1s;
          box-shadow: 0px 5px 7px 1px rgba(0,0,0,0.75);
        }
      }
    @media screen and (max-width: 530px) {
      background: transparent; 
    }
      `
    }
  }}
`

export default Container
