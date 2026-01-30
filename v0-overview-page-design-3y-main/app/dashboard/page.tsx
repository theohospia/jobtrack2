'use client';

import { TopNav } from "@/components/top-nav"
import { PageHeader } from "@/components/page-header"

export default function DashboardPage() {
  return (
    <div 
      className="min-h-screen min-w-[1280px]"
      style={{
        backgroundColor: '#F8FAFC'
      }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-6 pb-10">
        <PageHeader />
        
        {/* Dashboard Header with Date Range */}
        <div className="mb-8 flex items-center justify-between">
          <h1 
            className="text-[32px] font-semibold leading-[1.2]"
            style={{ color: "#0F172A", letterSpacing: "-0.5px" }}
          >
            Dashboard
          </h1>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: "#F1F5F9", color: "#64748B" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 2V6M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-sm font-medium">Jan 20, 2023 - Feb 09, 2023</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-6 border-b" style={{ borderColor: "#E5E7EB" }}>
          <button className="pb-3 text-sm font-medium" style={{ color: "#0F172A", borderBottom: "2px solid #2563EB" }}>
            Overview
          </button>
          <button className="pb-3 text-sm font-medium transition-colors" style={{ color: "#94A3B8" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#64748B"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#94A3B8"}>
            Analytics
          </button>
          <button className="pb-3 text-sm font-medium transition-colors" style={{ color: "#94A3B8" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#64748B"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#94A3B8"}>
            All Deals
          </button>
          <button className="pb-3 text-sm font-medium transition-colors" style={{ color: "#94A3B8" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#64748B"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#94A3B8"}>
            Reports
          </button>
        </div>

        {/* Metric Cards Grid */}
        <div className="mb-12 grid grid-cols-4 gap-4">
          {/* Monthly Revenue */}
          <div
            className="rounded-2xl p-6 transition-colors"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#CBD5E1";
              e.currentTarget.style.boxShadow = "0px 8px 24px rgba(15, 23, 42, 0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium" style={{ color: "#64748B" }}>
                Monthly Revenue
              </h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="8" y="16" fontSize="14" fontWeight="bold" fill="#2563EB">$</text>
              </svg>
            </div>
            <p className="text-2xl font-semibold mb-2" style={{ color: "#0F172A" }}>
              $48,500
            </p>
            <p className="text-xs" style={{ color: "#10B981" }}>
              +12.5% from last month
            </p>
          </div>

          {/* New Deals Closed */}
          <div
            className="rounded-2xl p-6 transition-colors"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#CBD5E1";
              e.currentTarget.style.boxShadow = "0px 8px 24px rgba(15, 23, 42, 0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium" style={{ color: "#64748B" }}>
                New Deals Closed
              </h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" stroke="#2563EB" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" fill="#2563EB"/>
              </svg>
            </div>
            <p className="text-2xl font-semibold mb-2" style={{ color: "#0F172A" }}>
              12
            </p>
            <p className="text-xs" style={{ color: "#10B981" }}>
              +3 from last month
            </p>
          </div>

          {/* Pipeline Value */}
          <div
            className="rounded-2xl p-6 transition-colors"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#CBD5E1";
              e.currentTarget.style.boxShadow = "0px 8px 24px rgba(15, 23, 42, 0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium" style={{ color: "#64748B" }}>
                Pipeline Value
              </h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 19L19 5M19 5H10M19 5V14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-2xl font-semibold mb-2" style={{ color: "#0F172A" }}>
              $320,000
            </p>
            <p className="text-xs" style={{ color: "#10B981" }}>
              +8.2% total pipeline
            </p>
          </div>

          {/* Conversion Rate */}
          <div
            className="rounded-2xl p-6 transition-colors"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#CBD5E1";
              e.currentTarget.style.boxShadow = "0px 8px 24px rgba(15, 23, 42, 0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium" style={{ color: "#64748B" }}>
                Conversion Rate
              </h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="2" fill="#2563EB" />
                <circle cx="16" cy="8" r="2" fill="#2563EB" />
                <path d="M12 14C10.3431 14 9 15.3431 9 17V20H15V17C15 15.3431 13.6569 14 12 14Z" fill="#2563EB" />
              </svg>
            </div>
            <p className="text-2xl font-semibold mb-2" style={{ color: "#0F172A" }}>
              18.4%
            </p>
            <p className="text-xs" style={{ color: "#10B981" }}>
              +2.1% lead to close
            </p>
          </div>
        </div>

        {/* Revenue Overview and Recent Sales */}
        <div className="grid grid-cols-3 gap-6">
          {/* Revenue Overview - 2 columns */}
          <div
            className="col-span-2 rounded-2xl p-8 transition-colors"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "#CBD5E1"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
          >
            <h3 className="text-xl font-semibold mb-1" style={{ color: "#0F172A" }}>
              Revenue Overview
            </h3>
            <p className="text-sm mb-6" style={{ color: "#64748B" }}>
              Monthly revenue and deals closed over time
            </p>
            
            {/* Chart Container */}
            <div className="flex items-end justify-center gap-4 h-64">
              {/* Y-axis labels */}
              <div className="flex flex-col justify-between h-full text-right pr-2">
                <span className="text-xs" style={{ color: "#94A3B8" }}>$60k</span>
                <span className="text-xs" style={{ color: "#94A3B8" }}>$45k</span>
                <span className="text-xs" style={{ color: "#94A3B8" }}>$30k</span>
                <span className="text-xs" style={{ color: "#94A3B8" }}>$15k</span>
                <span className="text-xs" style={{ color: "#94A3B8" }}>$0k</span>
              </div>

              {/* Bars */}
              <div className="flex items-end gap-3 flex-1">
                {/* Jan */}
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div
                    style={{
                      width: "100%",
                      height: "120px",
                      background: "#2563EB",
                      borderRadius: "4px",
                    }}
                  />
                  <span className="text-xs font-medium" style={{ color: "#64748B" }}>Jan</span>
                </div>

                {/* Feb */}
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div
                    style={{
                      width: "100%",
                      height: "95px",
                      background: "#2563EB",
                      borderRadius: "4px",
                    }}
                  />
                  <span className="text-xs font-medium" style={{ color: "#64748B" }}>Feb</span>
                </div>

                {/* Mar */}
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div
                    style={{
                      width: "100%",
                      height: "140px",
                      background: "#2563EB",
                      borderRadius: "4px",
                    }}
                  />
                  <span className="text-xs font-medium" style={{ color: "#64748B" }}>Mar</span>
                </div>

                {/* Apr */}
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div
                    style={{
                      width: "100%",
                      height: "155px",
                      background: "#2563EB",
                      borderRadius: "4px",
                    }}
                  />
                  <span className="text-xs font-medium" style={{ color: "#64748B" }}>Apr</span>
                </div>

                {/* May */}
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div
                    style={{
                      width: "100%",
                      height: "145px",
                      background: "#2563EB",
                      borderRadius: "4px",
                    }}
                  />
                  <span className="text-xs font-medium" style={{ color: "#64748B" }}>May</span>
                </div>

                {/* Jun */}
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div
                    style={{
                      width: "100%",
                      height: "165px",
                      background: "#2563EB",
                      borderRadius: "4px",
                    }}
                  />
                  <span className="text-xs font-medium" style={{ color: "#64748B" }}>Jun</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Sales - 1 column */}
          <div
            className="rounded-2xl p-8 transition-colors"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "#CBD5E1"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
          >
            <h3 className="text-xl font-semibold mb-1" style={{ color: "#0F172A" }}>
              Recent Sales
            </h3>
            <p className="text-sm mb-6" style={{ color: "#64748B" }}>
              Latest deals closed by your team
            </p>

            {/* Sales List */}
            <div className="flex flex-col gap-4">
              {/* Sale 1 */}
              <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "#E5E7EB" }}>
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0 text-sm font-semibold"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#E0E7FF",
                      color: "#2563EB",
                    }}
                  >
                    JD
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>Jane Doe</p>
                    <p className="text-xs" style={{ color: "#64748B" }}>Acme Inc.</p>
                  </div>
                </div>
                <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>+$15,000</p>
              </div>

              {/* Sale 2 */}
              <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "#E5E7EB" }}>
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Mike Roberts"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>Mike Roberts</p>
                    <p className="text-xs" style={{ color: "#64748B" }}>StartupXYZ</p>
                  </div>
                </div>
                <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>+$12,500</p>
              </div>

              {/* Sale 3 */}
              <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "#E5E7EB" }}>
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah Johnson"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>Sarah Johnson</p>
                    <p className="text-xs" style={{ color: "#64748B" }}>TechCorp Inc.</p>
                  </div>
                </div>
                <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>+$25,000</p>
              </div>

              {/* Sale 4 */}
              <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "#E5E7EB" }}>
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Alex Lee"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>Alex Lee</p>
                    <p className="text-xs" style={{ color: "#64748B" }}>Global Solutions</p>
                  </div>
                </div>
                <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>+$8,500</p>
              </div>

              {/* Sale 5 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Emily Martinez"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>Emily Martinez</p>
                    <p className="text-xs" style={{ color: "#64748B" }}>Retail Chain Co.</p>
                  </div>
                </div>
                <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>+$25,000</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
