export const People =()=>{
  return <div className="p-2 bg-white">
    <div className="flex gap-1 p-2 text-lg">
        <div className="">Welcome to our </div>
        <div className="font-semibold">new online experience </div>
    </div>

    <div className="sm:p-4 grid grid-cols-1 md:grid-cols-4">

        <div className="flex flex-col items-center  border-r  border-gray-300 ">
            <img src="/dp.jpg" alt="admin" className="w-20 h-20 rounded-full  object-cover"></img>
            <div className="sm:pb-3">Aniket Rathour</div>
        </div>
        <div className="flex flex-col items-center border-r border-gray-300">
            <img src="/wallpaper.jpg" alt="admin" className="w-20 h-20 rounded-full  object-cover"></img>
            <div className="sm:pb-3">Dr. Dalal Kumar</div>
        </div>
        <div className="flex flex-col items-center border-r border-gray-300">
            <img src="/crying.jpg" alt="admin" className="w-20 h-20 rounded-full  object-cover"></img>
            <div className="sm:pb-3">Mr. Shaktimaan </div>
        </div>
        <div className="flex flex-col items-center">
            <img src="/images.jpg" alt="admin" className="w-20 h-20 rounded-full  object-cover"></img>
            <div className="sm:pb-3">Aasheesh Rathour</div>
        </div>


    </div>

  </div>
}