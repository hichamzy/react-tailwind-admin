import AuthLayout from "@/components/auth/auth-layout";
import LoginForm from "@/components/auth/login-form";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_guest/auth/login")({
  component: Login,
});

function Login() {
  return (
    <AuthLayout title="Login">
      <div
        className="mx-auto rounded-[7px] bg-white lg:w-96"
        style={{
          backgroundColor: "white",
          height: "500px",
          width: "600px",
          borderRadius: "7px",
        }}
      >
        <div className="flex flex-col items-center justify-stretch">
          <img
            className="w-50px flex h-20 items-center justify-center"
            src="/media/logos/logo-auth.svg"
            alt="PPN"
          />
          <h2 className="mt-8 flex items-center justify-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Not a member?{" "}
            <Link
              to="/auth/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              create account
            </Link>
          </p>
        </div>

        <div className="mt-10">
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
