import { useMoralis } from "react-moralis";
import { BounceLoader } from "react-spinners";
import { IoIosPartlySunny } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useState } from "react";
import Connect from "./Connect";
import Typewriter from "typewriter-effect";

const Login = () => {
  const { authenticate, isAuthenticating } = useMoralis();
  const [connect, setConnect] = useState(true);

  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center dark:bg-dark text-black dark:text-white">
        <IoIosPartlySunny className="text-9xl mb-10" />
        {connect ? (
          <>
            <h1 className="text-bold text-7xl text-center lg:text-8xl mb-2 font-bold">
              Good Morning
            </h1>
            <div className="mb-12 text-xl text-center">
              <Typewriter
                options={{
                  strings: [
                    "Make today a great day!",
                    "Keep going!",
                    "Have a good day!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            {/* <p className="mb-12 text-xl text-center">Have a good day.</p> */}
            <button className="w-64 mb-20" onClick={() => setConnect(false)}>
              <p>Login with wallet</p>
              <BsArrowRightShort className="text-xl" />
              {isAuthenticating ? (
                <BounceLoader color="#000000" size={20} />
              ) : (
                ""
              )}
            </button>
          </>
        ) : (
          <Connect setConnect={setConnect} />
        )}
      </div>
    </>
  );
};

export default Login;
