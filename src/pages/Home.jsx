import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Clueless Closet 💅</h1>
          <p className="py-6">
            The digital wardrobe that does the thinking for you. Upload your
            fits or let AI style you.
          </p>
          <div className="flex flex-col gap-4">
            {/* Option 1: Go to Upload */}
            <Link to="/upload" className="btn btn-primary btn-lg">
              Upload New Clothes 📸
            </Link>

            {/* Option 2: Go to Studio */}
            <Link to="/studio" className="btn btn-secondary btn-lg">
              Style Me (Studio) ✨
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
