import LoginForm from "../../components/loginform";

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
        {/* Barangay Seal (Top Left) */}
        <a
          href="https://www.facebook.com/p/Sangguniang-Barangay-of-Talisayan-61554184720883/"
          className="fixed z-20 top-5 left-7 flex gap-3"
          target="_blank"
        >
          <img src="/barangay-seal.png" className="size-16" />
        </a>
        {/* Login Form Component (Center) */}
        <LoginForm />
        {/* Copyright Notice (Bottom Center) */}
        <div className="fixed x-5 bottom-1 text-xs text-white font-semibold left-1/2 -translate-x-1/2 w-full text-center z-20">
          © 2026 Joshua Guiritan. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default LoginPage;
