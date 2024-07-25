import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmitNumber = async (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      toast.error("Invalid email format!");
      return;
    }

    const isConfirmed = confirm(
      "Are you sure you entered the correct email? The OTP will be sent to this email address."
    );

    if (!isConfirmed) return;

    setShowOTPInput(true);
    const generatedOTP = generateOTP();
    setGeneratedOtp(generatedOTP);
    await sendOTPMail(generatedOTP);
  };

  const sendOTPMail = async (generatedOTP) => {
    const templateParams = {
      to_email: email,
      message: generatedOTP,
    };

    try {
      await emailjs.send(
        "resumifyX",
        "template_vu0ou76",
        templateParams,
        "V1mcZHxH3lgu1mEzs" // Add your EmailJS user ID here
      );
      toast.success("OTP Sent Successfully!");
      setOTP("");
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
      setOTP("");
    }
  };

  const generateOTP = () => {
    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  };

  const resendOTP = async (e) => {
    e.preventDefault();
    await handleSubmitNumber(e);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      navigate("/reset-password/new-password");
      toast.success("OTP Verified!");
    } else {
      toast.error("Incorrect OTP!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Recover Password</title>
      </Helmet>
      <section className="min-h-screen ">
        <div className=" flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className=" w-full xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <h1 className="font-semibold font-mono text-xl">ResumifyX</h1>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Recover Your Password
            </h2>
            <form className="mt-8" onSubmit={handleSubmitNumber}>
              <div className="space-y-5  ">
                <div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Your Email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                {showOTPInput && (
                  <div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="number"
                        placeholder="OTP"
                        id="OTP"
                        name="OTP"
                        value={otp}
                        onChange={(e) => setOTP(e.target.value)}
                      />
                      <button
                        className="mt-2 inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 w-full"
                        id="resend"
                        onClick={resendOTP}
                      >
                        Resend OTP
                      </button>
                    </div>
                    <button
                      className="mt-2 inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 w-full"
                      id="verify"
                      onClick={handleVerifyOTP}
                    >
                      Verify
                    </button>
                  </div>
                )}
                {!showOTPInput && (
                  <div>
                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 w-full"
                      id="submit"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <NavLink to={"/signin"}>
                <button className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
                  Back to SignIn
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
