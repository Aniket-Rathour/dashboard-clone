import { TotalIncome } from "../components/TotalIncome"
import { Dashboard } from "./Dashboard"

export const Mid=()=>{
    return <div className="bg-[#F5F5F5] p-6">
        <Dashboard></Dashboard>
        <div className="bg-[#F5F5F5] p-3">
            
        </div>
        <TotalIncome></TotalIncome>
    </div>
}