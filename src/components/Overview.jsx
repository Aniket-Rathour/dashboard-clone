export const Overview =()=>{
    return <div className="flex justify-between bg-white pt-5 pl-5 pr-5">
            <div className="text-2xl font-semibold  ">
                Overview
            </div>
            <div className="">
                <Time></Time>
                
            </div>
    </div>
}

export const Time =()=>{
    return <div className="flex justify-between bg-[#F5F5F5] p-4 w-48 h-12 rounded-lg">

            <div className="text-sm">
                All Time
            </div>

            <div className="-mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>


            </div>
    </div>
}

