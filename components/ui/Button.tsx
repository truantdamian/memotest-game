import { Loading } from "components/icons/Loading";

export const Button = (props) => {
  const { className, children, loading, ...otherProps } = props;

  return (
    <>
      <button
        type="button"
        className={`w-full text-gray-900  border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 ${className}`}
        {...otherProps}
      >
        {!loading && <>{children}</>}
        {loading && (
          <div className="flex items-center justify-center">
            <Loading />
          </div>
        )}
      </button>
    </>
  );
};
