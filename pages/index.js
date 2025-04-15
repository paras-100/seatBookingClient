import { increment } from "@/redux/slices/userSlice";
import { loginUser } from "@/redux/thunks/userThunk";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { loading, userDetails } = useSelector(
    (state) => state.stateUserReducer
  );

  useEffect(() => {
    if (userDetails) {
      router.push("/booking");
    }
  }, [userDetails]);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-black">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
