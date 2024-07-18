"use client";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ResetPassword() {
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const searchParams = useSearchParams(); // Corrected variable name
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPassword = async () => {
    try {
      setIsLoading(true);
      await axios.post("/api/reset_password", { token, password });
      setResetSuccess(true);
    } catch (error: any) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const Token = searchParams.get("token");
    if (Token) {
      setToken(Token);
    }
    setLoading(false);
  }, [searchParams]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setError(true);
    } else {
      setError(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center lg:py-52 md:py-52 py-20">
      {!resetSuccess && (
        <h1 className="text-[40px] not-italic pt-12 font-SaolDisplayR">
          Reset Password
        </h1>
      )}
      {!resetSuccess && (
        <div className="description text-center px-[20px] pt-[35px] font-Apercu">
          To keep your account secure, please create a strong password.
        </div>
      )}
      {resetSuccess && (
        <div className="text-center pt-[110px]">
          <h2 className="text-2xl mb-4">Password Reset Successful</h2>
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      )}
      {!resetSuccess && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            resetPassword();
          }}
          className="md:w-[520px] lg:w-[520px] reset-password-form pt-[50px]"
        >
          <div className="flex-reset-password">
            <div className="flex justify-between ">
              <label
                htmlFor="password"
                className="text-[16px] font-Akzidenz text-[#666]"
              >
                New Password:
              </label>
              <div className=" flex flex-row gap-3 items-center">
                <div onClick={togglePasswordVisibility} className="ml-3">
                  {showPassword ? (
                    <FaEyeSlash fill="#666" />
                  ) : (
                    <FaEye fill="#666" />
                  )}
                </div>
                <p className="text-[16px] font-Akzidenz text-[#666] w-[40px]">
                  {showPassword ? "Show" : "Hide"}
                </p>
              </div>
            </div>
            <input
              type={showPassword ? "password" : "text"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex-reset-password pt-[24px]">
            <div className="flex justify-between ">
              <label
                htmlFor="password"
                className="text-[16px] font-Akzidenz text-[#666]"
              >
                Repeat Password:
              </label>
              <div className="flex flex-row gap-3 items-center">
                <div onClick={toggleConfirmPasswordVisibility} className="ml-3">
                  {showConfirmPassword ? (
                    <FaEyeSlash fill="#666" />
                  ) : (
                    <FaEye fill="#666" />
                  )}
                </div>
                <p className="text-[16px] font-Akzidenz text-[#666] w-[40px]">
                  {showConfirmPassword ? "Show" : "Hide"}
                </p>
              </div>
            </div>
            <input
              type={showConfirmPassword ? "password" : "text"}
              id="confirm-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            {error && <p style={{ color: "red" }}>Password not match</p>}
          </div>
          <div className="button pt-[60px]">
            <button
              type="submit"
              className={`px-[16px] py-2  text-white  text-[16px] font-Akzidenz flex justify-center bg-black ${
                !error && confirmPassword.length > 0
                  ? "bg-black"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              {isLoading ? "Reset Password..." : "Reset Password"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
