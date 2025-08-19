import { Overview } from "../components/Overview"
import { People } from "../components/People"
import { Numbering, RevenueCard } from "../components/revenueCard"
import { TotalIncome } from "../components/TotalIncome"

export const Dashboard= ()=>{
    return <div>


        <div className="bg-[#F5F5F5] flex pl-5 pb-3 font-bold text-3xl">
            <div>
                Dashboard
            </div>
        </div>

        <Overview></Overview>
        <Numbering></Numbering>
        <People></People>

    </div>
}