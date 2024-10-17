const FluxHighlight = () => {
  return (
    <div className="container h-full py-5">
      <div className="pl-4 mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-5xl font-bold text-primary-black">
          Try AI photoshoot
        </h2>
        <p className="text-primary-blue text-base md:text-xl">
        Upload your photos and start creating stunning, realistic images now!
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 relative my-4">
        <div className="h-full w-full p-4 grid grid-cols-2 gap-3">
          <div className="bg-accent h-[200px] md:h-[300px] rounded-xl transform transition duration-300 hover:rotate-6 hover:scale-95">
            <img
              src="/assets/demo1.jpg"
              alt="heroimage"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <div className="bg-accent h-[200px] md:h-[300px] rounded-xl transform transition duration-300 hover:-rotate-6 hover:scale-95">
            <img
              src="/assets/demo2.jpg"
              alt="heroimage"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <div className="bg-accent h-[200px] md:h-[300px] rounded-xl transform transition duration-300 hover:rotate-12 hover:scale-95">
            <img
              src="/assets/demo3.jpg"
              alt="heroimage"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <div className="bg-accent h-[200px] md:h-[300px] rounded-xl transform transition duration-300 hover:-rotate-12 hover:scale-95">
            <img
              src="/assets/demo4.jpg"
              alt="heroimage"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="absolute top-[45%] md:top-[15%] left-[20%] md:left-[41%] w-[10rem] md:w-[20rem] h-[10rem] md:h-[20rem]">
          <img
            src="https://photoai.com/cdn-cgi/image/format=auto,fit=cover,height=400,quality=75/assets/pencil-arrow.png?25"
            alt="icon"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="md:max-w-[77%] md:ml-auto">
          <img
             src="/assets/demo5.png"
            alt="images"
            className="w-ful h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FluxHighlight;
