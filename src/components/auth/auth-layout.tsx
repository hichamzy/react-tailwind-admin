import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
};

export default function AuthLayout({ children, title }: PropsWithChildren<Props>) {
  return (
    <div
      className="flex min-h-screen flex-1"
      style={{ backgroundImage: "url('../public/media/auth/bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="static  h-1/2 w-1/2 object-cover"
          src="../public/media/auth/img.png"
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        {children}
      </div>
    </div>
  );
}
