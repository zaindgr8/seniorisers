"use client";
import Layout from "../../components/Layout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [userType, setUserType] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/login", user);
      toast.success("Login successful!");

      if (userType === "agent") {
        router.push("/create-agent");
      } else if (userType === "community member") {
        router.push("/create-community");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email.length > 0 && user.password.length > 0));
  }, [user]);

  return (
    <Layout>
      <ToastContainer />
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
                    <p>
                      We won't post anything without your permission and your
                      personal details are kept private
                    </p>
                    <div className="align-items-center d-flex my-4">
                      <hr className="flex-grow-1 m-0" />
                      <span className="fs-16 fw-bold px-3 text-dark">Or</span>
                      <hr className="flex-grow-1 m-0" />
                    </div>
                    <form className="register-form" onSubmit={onLogin}>
                      <div className="form-group mb-4">
                        <label className="required">Enter Email</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Email"
                          value={user.email}
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
                          className="form-control is-invalid"
                          required
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label className="required">Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="password"
                          value={user.password}
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                          className="form-control password"
                          required
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label className="required">
                          Are you a community member or an agent?
                        </label>
                        <select
                          className="form-control"
                          value={userType}
                          onChange={(e) => setUserType(e.target.value)}
                          required
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          <option value="community member">
                            Community Member
                          </option>
                          <option value="agent">Agent</option>
                        </select>
                      </div>
                      <div className="form-check mb-4 text-start">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
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
                      <br /> Remind{" "}
                      <Link
                        href="forgot-password"
                        className="fw-medium text-decoration-underline"
                      >
                        Password
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-7 order-lg-first pe-xl-5">
                    <img
                      src="assets/img/png-img/login.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
