function ProductDetails() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="grid grid-cols-[72px_auto] gap-6 ">
        <div className="w-full">
          <div className="py-1">
            <div className=" w-[70px] h-[70px] overflow-hidden rounded-lg cursor-pointer transition-all ease-in duration-300 hover:opacity-90 hover:outline hover:outline-1 hover:ring-gray-600">
              <img
                src="https://pos.nvncdn.com/be3159-662/ps/20240720_z3cPmG7INR.jpeg"
                alt="preview"
              />
            </div>
          </div>
          <div className="py-1">
            <div className=" w-[70px] h-[70px] overflow-hidden rounded-lg cursor-pointer transition-all ease-in duration-300 hover:opacity-90 hover:outline hover:outline-1 hover:ring-gray-600">
              <img
                src="https://pos.nvncdn.com/be3159-662/ps/20240720_Z3CEJ8UOIb.jpeg"
                alt="preview"
              />
            </div>
          </div>
          <div className="py-1">
            <div className="w-[70px] h-[70px] overflow-hidden rounded-lg cursor-pointer transition-all ease-in duration-300 hover:opacity-90 hover:outline hover:outline-1 hover:ring-gray-600">
              <img
                src="https://pos.nvncdn.com/be3159-662/ps/20240720_aVQj6JNF2L.jpeg"
                alt="preview"
              />
            </div>
          </div>
        </div>
        <div className="h-[452px] overflow-hidden">
          <img
            src="https://pos.nvncdn.com/be3159-662/ps/20240720_z3cPmG7INR.jpeg"
            alt="preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-6">
        <p className="text-blue-700 uppercase text-left font-bold mb-2.5">
          Áo Thun Nam
        </p>
        <h2 className="capitalize font-bold text-3xl text-left mb-5">
          Áo thun unisex. Loose - 10S24TSSU001K
        </h2>
        <p className="text-left text-gray-500 mb-5">
		Che vết mổ toàn diện, cân bằng 2 bên bầu ngực, giữ cục silicon không bị trồi sụt khi vận động, hút mồ hôi, không gây đau, cúi xuống vẫn không bị thấy ...
        </p>
        <div className="text-left relative mb-5">
          <span className="text-3xl font-bold mr-3">$99.00</span>
          <span className="bg-blue-600 bg-opacity-20 rounded-sm absolute inline-block px-2 text-blue-600">
            -25%
          </span>
        </div>
        <p className="uppercase text-black text-left font-bold mb-5">
          choose size
        </p>
        <div className="flex gap-3 items-center mb-10">
          <div className="w-[2rem] h-[2rem] relative cursor-pointer">
            <input
              type="radio"
              name="size"
              className="absolute top-0 left-0 w-[38px] h-[38px] opacity-0 cursor-pointer"
            />
            <span className="flex items-center justify-center font-medium text-sm w-[38px] h-[38px] rounded-lg border border-gray-400 border-solid">
              S
            </span>
          </div>
          <div className="w-[2rem] h-[2rem] relative cursor-pointer">
            <input
              type="radio"
              name="size"
              className="absolute top-0 left-0 w-[38px] h-[38px] opacity-0 cursor-pointer"
            />
            <span className="flex items-center justify-center font-medium text-sm w-[38px] h-[38px] rounded-lg border border-gray-400 border-solid">
              M
            </span>
          </div>
          <div className="w-[2rem] h-[2rem] relative cursor-pointer">
            <input
              type="radio"
              name="size"
              className="absolute top-0 left-0 w-[38px] h-[38px] opacity-0 cursor-pointer"
            />
            <span className="flex items-center justify-center font-medium text-sm w-[38px] h-[38px] rounded-lg border border-gray-400 border-solid">
              L
            </span>
          </div>
          <div className="w-[2rem] h-[2rem] relative cursor-pointer">
            <input
              type="radio"
              name="size"
              className="absolute top-0 left-0 w-[38px] h-[38px] opacity-0 cursor-pointer"
            />
            <span className="flex items-center justify-center font-medium text-sm w-[38px] h-[38px] rounded-lg border border-gray-400 border-solid">
              XL
            </span>
          </div>
          <div className="w-[2rem] h-[2rem] relative cursor-pointer">
            <input
              type="radio"
              name="size"
              className="absolute top-0 left-0 w-[38px] h-[38px] opacity-0 cursor-pointer"
            />
            <span className="flex items-center justify-center font-medium text-sm w-[38px] h-[38px] rounded-lg border border-gray-400 border-solid">
              XXL
            </span>
          </div>
        </div>
        <div className="px-5">
          <a className="bg-blue-600 py-3 px-9 block rounded-lg text-white font-bold">
            ADD TO BAG
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
