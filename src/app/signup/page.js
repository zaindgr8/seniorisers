"use client";
import Layout from "../../components/Layout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

export default function SignIn() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!user.email || !user.password || !user.username);
  }, [user]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            <Link
              href="/"
              className="align-items-center d-flex fw-medium text-primary"
            >
              <i className="fa-solid fa-chevron-left me-1" />
              Back To Home
            </Link>
          </div>
        </div>
        <div className="py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-10">
                <div className="align-items-center g-4 row">
                  <div className="col-lg-6 col-xl-5 text-center">
                    <div className="text-center mb-4">
                      <h3 className="fw-semibold">
                        Sign into your{" "}
                        <span className="underline position-relative text-primary">
                          account!
                        </span>
                      </h3>
                      <p className="text-muted text-center mb-0">
                        Nice to see you! Please log in with your account.
                      </p>
                    </div>
                    <div className="d-grid gap-3 mb-3">
                      <Link
                        className="align-items-center bg-grey btn btn-lg d-flex linkedin-btn position-relative text-start"
                        href="#"
                      >
                        <img src="assets/img/linkdin.svg" alt="LinkedIn" />
                        <span className="ms-3">Sign up with LinkedIn</span>
                      </Link>
                      <Link
                        className="bg-grey btn btn-lg google-btn d-flex align-items-center position-relative text-start"
                        href="#"
                      >
                        <img src="assets/img/google.svg" alt="Google" />
                        <span className="ms-3">Sign up with Google</span>
                      </Link>
                    </div>
                    <p>
                      We won't post anything without your permission and your
                      personal details are kept private
                    </p>
                    <div className="align-items-center d-flex my-4">
                      <hr className="flex-grow-1 m-0" />
                      <span className="fs-16 fw-bold px-3 text-dark">Or</span>
                      <hr className="flex-grow-1 m-0" />
                    </div>
                    <form className="register-form" onSubmit={onSignup}>
                      <div className="form-group mb-4">
                        <label className="required">Enter Username</label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          value={user.username}
                          onChange={(e) =>
                            setUser({ ...user, username: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label className="required">Enter Email</label>
                        <input
                          type="email"
                          className="form-control"
                          required
                          value={user.email}
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label className="required">Password</label>
                        <input
                          id="password"
                          type={isPasswordVisible ? "text" : "password"}
                          className="form-control password"
                          autoComplete="off"
                          required
                          value={user.password}
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                        />
                        <i
                          className={`toggle-password ${
                            isPasswordVisible
                              ? "fa-regular fa-eye"
                              : "fa-regular fa-eye-slash"
                          }`}
                          onClick={togglePasswordVisibility}
                        ></i>
                      </div>
                      <div className="form-check mb-4 text-start">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Remember me next time
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                        disabled={buttonDisabled}
                      >
                        {loading ? "Signing in..." : "Sign in"}
                      </button>
                    </form>
                    <div className="bottom-text text-center my-3">
                      Don't have an account?{" "}
                      <Link
                        href="signup"
                        className="fw-medium text-decoration-underline"
                      >
                        Sign Up
                      </Link>
                      <br />
                      Forgot your password?{" "}
                      <Link
                        href="forgot-password"
                        className="fw-medium text-decoration-underline"
                      >
                        Reset here
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-7 order-lg-first pe-xl-5">
                    <img
                      src="assets/img/png-img/login.png"
                      alt="Login Illustration"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /. End Main Content */}
    </Layout>
  );
}
