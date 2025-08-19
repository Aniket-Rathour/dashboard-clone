import { Money } from "../data/NumberingBack";


export const Numbering = ()=>{
    return <div className="bg-white p-6">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F5F5F5] pr-4 pl-3 pt-3 pb-4 rounded shadow-md '>

      <RevenueCard {...Money.amountPending}></RevenueCard>
      <RevenueCard2 {...Money.amountIncome}></RevenueCard2>

    </div>
    </div>
}

export const RevenueCard= ({
    title,
    showWarning,
    amount,
    orders

}) =>{
    return <div className="bg-white   rounded-xl shadow-sm p-4">
        <div className="text-gray-600 flex justify-between">
            <div>
                {title}
            </div>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
            </svg>

        </div>
        <div className="flex justify-between ">

            <div className="font-semibold text-2xl">
            ${amount}
            </div>

            <div className="flex text-blue-700  p-1">
                <div className="font-medium cursor-pointer underline ">

                    {orders ? <div>
                    {orders} order(s)
                        </div> : null
                    }

                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </div>
        </div>
        
    </div>
}

export const RevenueCard2= ({
    title,
    showWarning,
    amount,
    orders

}) =>{
    return <div className="bg-[#F5F5F5]  rounded-xl shadow-sm p-4">
        <div className="text-gray-600 flex justify-between">
            <div>
                {title}
            </div>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
            </svg>

        </div>
        <div className="flex justify-between ">

            <div className="font-semibold text-2xl">
            ${amount}
            </div>

            <div className="flex text-blue-700  p-1">
                <div className="font-medium cursor-pointer underline ">

                    {orders ? <div>
                    {orders} order(s)
                        </div> : null
                    }

                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </div>
        </div>
        
    </div>
}