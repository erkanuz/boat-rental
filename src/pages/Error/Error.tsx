const Error = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-6 items-center justify-center mx-2">
      <img src="/notfound.svg" alt="" />
      <h1 className="2xl:text-[70px] text-[40px] italic uppercase underline">
        No such page was found
      </h1>
    </div>
  );
};

export default Error;
