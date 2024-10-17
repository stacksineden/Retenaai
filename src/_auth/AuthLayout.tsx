import { Outlet } from "react-router-dom";


const AuthLayout = () => {
  return (
    <section className="flex h-screen">
      <div className="w-full h-screen bg-black bg-auth-bg bg-cover bg-center bg-no-repeat hidden xl:flex flex-1 items-center px-5">
        <div className="flex flex-col gap-2">
        </div>
      </div>
      <section className="flex flex-1 justify-center items-center flex-col py-10">
        <Outlet />
      </section>
    </section>
  );
};

export default AuthLayout;
