import styled from 'styled-components'

const FormOut = styled.div`
  margin-top: 28px;
  width: 100%;
  .form-group {
    padding: 5px 0;
  }
  .form_name {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
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
          border: 1px solid #44546d;
        }
      }
    }
  }
  .form-info {
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
  .btn_register {
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
    .form_name {
      .form-group {
        input {
          padding: 13px 5px;
          font-size: 15px;
        }
      }
    }
    .form-info {
      input {
        padding: 13px 5px;
        font-size: 15px;
      }
    }
    .btn_register {
      padding: 12px;
      font-size: 16px;
    }
  }
`

export default FormOut
