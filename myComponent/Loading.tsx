import Loader from "@/components/3d-box-loader-animation";

const Loading = () => {
  return (
    <div className="flex w-full h-min-screen items-center justify-center min-h-screen bg-gray-200">
      <Loader />
    </div>
  );
};

export { Loading};
