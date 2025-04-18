const SubmitButton = () => {
  return (
    <div className="mt-10 w-full">
      <button
        // disabled={products?.length  > 0 ? false : true}
        type="submit"
        className="cursor-pointer text-lg font-medium h-[54px] bg-primary disabled:bg-gray-600 text-white w-full rounded-md hover:bg-orange-600 transition-all duration-150"
      >
        Complete order
      </button>
    </div>
  );
};

export default SubmitButton;
