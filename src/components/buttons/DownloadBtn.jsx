function ButtonCreative() {
  return (
    <>
      <button className='mt-5 text-2xl group relative cursor-pointer p-4 border-none bg-yellow-400 rounded-none overflow-hidden text-black text-center [box-shadow:4px_4px_rgb(217_119_6)] hover:[box-shadow:4px_4px_rgb(134_25_143)]'>
        <span className='translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
          Download Now
        </span>
        <div className='flex gap-2 text-white bg-fuchsia-600 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 '>
          <span>Download Now</span>
        </div>
      </button>
    </>
  );
}

export default ButtonCreative;
