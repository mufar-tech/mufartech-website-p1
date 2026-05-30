import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  Bell, 
  Search,
  TrendingUp,
  TrendingDown,
  MoreHorizontal
} from "lucide-react"

export function DashboardPreview() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0F172A] dark-section overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-3">
            Dashboard Preview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            A Dashboard That Feels Like Home
          </h2>
          <p className="text-lg text-slate-400">
            Clean, intuitive, and powerful. Everything you need at your fingertips 
            with a modern interface designed for productivity.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="relative mx-auto max-w-5xl">
          <div className="rounded-xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
            {/* App header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700 bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="font-semibold text-white">Mufar</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative hidden sm:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-9 pr-4 py-1.5 text-sm bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-48"
                    readOnly
                  />
                </div>
                <button className="relative p-2 text-slate-400 hover:text-white">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full" />
                </button>
                <div className="h-8 w-8 rounded-full bg-blue-600/30 flex items-center justify-center">
                  <span className="text-blue-400 font-medium text-sm">JD</span>
                </div>
              </div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="hidden md:block w-56 border-r border-slate-700 bg-slate-800/30 py-4">
                {[
                  { icon: LayoutDashboard, label: "Dashboard", active: true },
                  { icon: FileText, label: "Forms" },
                  { icon: Users, label: "CRM" },
                  { icon: Settings, label: "Settings" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg cursor-pointer ${
                      item.active 
                        ? "bg-blue-600/20 text-blue-400" 
                        : "text-slate-400 hover:bg-slate-700/50 hover:text-white"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Dashboard</h3>
                    <p className="text-sm text-slate-400">Welcome back, John</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <select className="px-3 py-1.5 text-sm bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 focus:outline-none">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                    </select>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Total Revenue", value: "$45,231", change: "+20.1%", up: true },
                    { label: "Active Users", value: "2,350", change: "+180", up: true },
                    { label: "Pending Tasks", value: "12", change: "-3", up: false },
                    { label: "Completion Rate", value: "98.5%", change: "+2.4%", up: true },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-4 rounded-lg bg-slate-800/50 border border-slate-700"
                    >
                      <p className="text-xs text-slate-400 mb-1">{stat.label}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-semibold text-white">{stat.value}</p>
                        <span className={`flex items-center text-xs ${stat.up ? "text-emerald-400" : "text-rose-400"}`}>
                          {stat.up ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts area */}
                <div className="grid lg:grid-cols-3 gap-4">
                  {/* Main chart */}
                  <div className="lg:col-span-2 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-white">Revenue Overview</h4>
                      <button className="p-1 text-slate-400 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="h-40 flex items-end justify-between gap-2">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((month, i) => (
                        <div key={month} className="flex-1 flex flex-col items-center gap-2">
                          <div
                            className="w-full bg-blue-600/80 rounded-t transition-all hover:bg-blue-500"
                            style={{ height: `${[45, 62, 58, 75, 68, 85, 92][i]}%` }}
                          />
                          <span className="text-xs text-slate-500">{month}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activity feed */}
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h4 className="font-medium text-white mb-4">Recent Activity</h4>
                    <div className="space-y-3">
                      {[
                        { text: "New order #1234", time: "2m ago", color: "bg-emerald-500" },
                        { text: "Invoice sent", time: "15m ago", color: "bg-blue-500" },
                        { text: "Task completed", time: "1h ago", color: "bg-amber-500" },
                        { text: "New user signup", time: "2h ago", color: "bg-purple-500" },
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${activity.color}`} />
                          <p className="text-sm text-slate-300 flex-1">{activity.text}</p>
                          <span className="text-xs text-slate-500">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
