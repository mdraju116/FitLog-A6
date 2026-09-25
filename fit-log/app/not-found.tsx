import Link from "next/link";


const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-6xl font-bold text-[#db2e2e]">404</p>

      <h1 className="mt-4 text-2xl font-bold text-white">
        Page Not Found
      </h1>

      <p className="mt-2 text-[#8a92a0]">
        Sorry, the page you are looking for doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-xl bg-[#c2f800] px-5 py-3 font-medium text-black transition hover:bg-[#b8eb00]"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;