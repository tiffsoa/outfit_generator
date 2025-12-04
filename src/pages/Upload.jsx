import { Link } from "react-router-dom";

export default function Upload() {
  return (
    <div className="p-10">
      <Link to="/" className="btn btn-ghost mb-5">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-5">Upload Station</h1>
      <div className="alert alert-info">
        <span>TODO: Build the file uploader here!</span>
      </div>
    </div>
  );
}
