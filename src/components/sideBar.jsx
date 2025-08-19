export const Sidebar = () => {
  return (
    <div className="w-56 bg-white h-screen pl-4 pr-4 ">
      {[
        { name: "Home", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75V15h4.5v6h4.125c.621 0 1.125-.504 1.125-1.125V9.75" },
        { name: "Products", icon: "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" },
        { name: "Customers", icon: "M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.5 19.5a9 9 0 0 1 15 0" },
        { name: "Shop", icon: "M3 3h18l-2 13.5a3 3 0 0 1-3 2.5H8a3 3 0 0 1-3-2.5L3 3z" },
        { name: "Income", icon: "M12 6v12m6-6H6" },
        { name: "Promote", icon: "M15 17h5l-1.405-1.405M15 17l-3 3-3-3" }
      ].map((item, i) => (
        <div key={i} className={`flex items-center justify-between p-2 cursor-pointer rounded ${item.name==="Home"?"bg-[#F5F5F5]":""}`}>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
            </svg>
            <div className="text-sm">{item.name}</div>
          </div>
          {item.name!=="Home" && (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}
