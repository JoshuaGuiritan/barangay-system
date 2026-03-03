import LoginForm from "./components/LoginCard";
import CopyrightNotice from "../../components/CopyrightNotice";

function LoginPage() {
  return (
    <>
      {/* Container w/ Barangay Image*/}
      <div
        className="relative w-full h-screen flex justify-center items-center bg-cover bg-center p-5"
        data-theme="dark"
        style={{ backgroundImage: "url(/barangay.jpg)" }}
      >
        <div className="absolute w-full h-full bg-black/45"></div>
        {/* Barangay Seal */}
        <a
          href="https://www.facebook.com/p/Sangguniang-Barangay-of-Talisayan-61554184720883/"
          className="fixed z-20 top-5 left-7 flex gap-3"
          target="_blank"
        >
          <img src="/barangay-seal.png" className="size-16" />
        </a>
        {/* Login Form Component */}
        <LoginForm />
        {/* Copyright Notice */}
        <CopyrightNotice />
      </div>
    </>
  );
}

export default LoginPage;
