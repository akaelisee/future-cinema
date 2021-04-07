import styled from 'styled-components'

const FormIn = styled.div`
  margin-top: 35px;
  width: 100%;
  .form-group {
    padding: 5px 0;
  }
  .form-group {
    input {
      background-color: #f0f5f7;
      padding: 14px 5px;
      border-radius: 5px;
      border: 1px solid #f0f5f7;
      outline: none;
      width: 100%;
      font-size: 17px;

      &:focus {
        border: 1px solid#44546d;
      }
    }
  }
  .btn_login {
    width: 100%;
    outline: none;
    border: none;
    background-color: rgba(68, 84, 109, 0.844);
    color: #fff;
    padding: 14px;
    margin: 8px 0;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    &:hover {
      background-color: #44546d;
    }
  }
  .error_red {
    border: 1px solid #ec2f4d !important;
  }
  .error_blue {
    border: 1px solid #44546d !important;
  }

  /* mobile and tablette */
  @media screen and (max-width: 700px) {
    margin-top: 25px;
    .form-group {
      padding: 3.5px 0;
    }
    .form-group {
      input {
        padding: 13px 5px;
        font-size: 15px;
      }
    }
    .btn_login {
      padding: 12px;
      font-size: 16px;
    }
  }
`

export default FormIn
