import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero min-h-[20rem] bg-slate-800 text-white text-center flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to PhoneBazar</h1>
      <p className="text-xl mb-8">
        Discover the best mobile phones at unbeatable prices.
      </p>
      <Link to={"/phones"} className="btn btn-info">
        Explore Now
      </Link>
    </section>
  );
}
