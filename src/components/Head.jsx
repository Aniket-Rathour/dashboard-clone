export const Head=()=>{
    return <div className="bg-white p-5 flex justify-between">
        
        <div className="flex">
            <div className="flex flex-col items-center   ">
                <img src="/logo.jpg" alt="admin" className="w-9 h-9 rounded-full object-cover"></img>
            </div>
            <div className="font-semibold text-2xl pl-2 italic ">
                Ragh
            </div>
        </div>
            
        <div>

            <form className="flex items-center bg-[#F5F5F5] rounded-md px-3 p-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-[#F5F5F5] text-sm focus:outline-none w-64"
                />
                <button type="submit" className="ml-2 text-gray-500">   🔍
                </button>
            </form>
            
        </div>

        <div className="flex items-center gap-3 ">

            <div className="bg-blue-500 rounded-md h-9 w-24 flex items-center gap-1 text-white cursor-pointer ">
                <div className="font-bold pl-1 text-2xl">
                    +
                </div>
                <div className="pt-1 text-lg ">
                    Create
                </div>
            </div>


            <div className="pt-1 pl-4 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                </svg>

            </div>

            <div className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>

            </div>

            <div className="cursor-pointer">
                <img src="dp.jpg" className="w-10 h-10 rounded-full  object-cover"></img>
            </div>
        </div>
       
    </div>
}