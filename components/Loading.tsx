import { ClipLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex space-x-3 items-center justify-center">
      <ClipLoader color="#464748" loading={true} size={25} />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
