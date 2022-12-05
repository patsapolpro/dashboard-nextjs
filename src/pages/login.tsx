import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Col, Container, Form, InputGroup, Row,
} from 'react-bootstrap'
import { useRouter } from 'next/router'
import { SyntheticEvent, useEffect, useState } from 'react'
import { useApiContext } from 'src/store/ApiContext'
import { AUTH_LOCAL_STORAGE_KEY } from 'src/constant/auth-constant'
import { clearLocalStorage, getLocalStorage } from 'src/libs/utility'
import { ROUTE_PRIVATE } from 'src/constant/route-constant'
import { LOGIN_CONSTANT } from "src/store/reducers/authReducer";
import { CForm } from '@coreui/react'
import { useForm } from "react-hook-form";

const Login: NextPage = () => {
  const router = useRouter();
  const [state, dispatch] = useApiContext();
  const {
    auth: { authStatus, username, password },
    loading: { loading }
  } = state;
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    switch (authStatus) {
      case LOGIN_CONSTANT.LOGIN_SUCCESS:
        console.log("authStatus");
        const redirect = getLocalStorage(AUTH_LOCAL_STORAGE_KEY.REDIRECT);
        if (redirect) {
          router.push(redirect);
          clearLocalStorage(AUTH_LOCAL_STORAGE_KEY.REDIRECT);
        } else {
          router.push(ROUTE_PRIVATE.HOME);
        }
        break;
      // case LOGIN_CONSTANT.FORGOT_PASSWORD:
      //   registerLocalStorage(COGNITO_LOCAL_STORAGE_KEY.COGNITO_USER, email);
      //   router.push(ROUTE_PUBLIC.RESET_PASSWORD);
      //   break;
      // case LOGIN_CONSTANT.NEW_PASSWORD_REQUIRED:
      //   router.push(ROUTE_PUBLIC.SET_NEW_PASSWORD);
      //   break;
    }
  }, [authStatus]);

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch({
      type: LOGIN_CONSTANT.LOGIN_REQUEST,
      payload: { username: data.username, password: data.password }
    });
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent">
      <Container>
        <Row className="justify-content-center align-items-center px-3">
          <Col lg={8}>
            <Row>
              <Col md={12} className="bg-white border p-5">
                <div className="">
                  <h1>Login</h1>
                  <p className="text-black-50">Sign In to your account</p>

                  <CForm
                    className="row g-3 needs-validation"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon
                          icon={faUser}
                          fixedWidth
                        />
                      </InputGroup.Text>
                      <Form.Control
                        disabled={loading}
                        placeholder="Username"
                        aria-label="Username"
                        {...register("username", { required: true, maxLength: 20 }) }
                      />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon
                          icon={faLock}
                          fixedWidth
                        />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        required
                        disabled={loading}
                        placeholder="Password"
                        aria-label="Password"
                        {...register("password", { required: true }) }
                      />
                    </InputGroup>

                    <Row>
                      <Col xs={6}>
                        <Button className="px-4" variant="primary" type="submit" disabled={loading}>Login</Button>  
                      </Col>
                      <Col xs={6} className="text-end">
                        <Button className="px-0" variant="link" type="submit">
                          Forgot
                          password?
                        </Button>
                      </Col>
                    </Row>
                  </CForm>
                </div>
              </Col>
              {/* <Col
                md={5}
                className="bg-primary text-white d-flex align-items-center justify-content-center p-5"
              >
                <div className="text-center">
                  <h2>Sign up</h2>
                  <p>
                    Request to use
                  </p>
                  <Link href="/account/register">
                    <button className="btn btn-lg btn-outline-light mt-3" type="button">
                      Register Now!
                    </button>
                  </Link>
                </div>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
