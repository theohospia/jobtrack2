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
        
        {/* Dashboard Header with Date Range and Add New Deal */}
        <div className="mb-8 flex items-center justify-between">
          <h1 
            className="text-[32px] font-semibold leading-[1.2]"
            style={{ color: "#0F172A", letterSpacing: "-0.5px" }}
          >
            Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: "#F1F5F9", color: "#64748B" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 2V6M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-sm font-medium">Jan 20, 2023 - Feb 09, 2023</span>
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm"
              style={{
                background: "#2563EB",
                color: "#FFFFFF"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#1D4ED8"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#2563EB"}
            >
              <span>+</span>
              Add New Deal
            </button>
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

        {/* Today Section */}
        <div className="mb-8 flex items-center gap-4">
          <div
            className="flex items-center justify-center rounded-full flex-shrink-0"
            style={{
              width: "64px",
              height: "64px",
              background: "#E2E8F0",
              border: "2px solid #CBD5E1",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="10" r="4" fill="#64748B" />
              <path d="M16 16C12.6863 16 10 18.6863 10 22V28H22V22C22 18.6863 19.3137 16 16 16Z" fill="#64748B" />
            </svg>
          </div>
          <h2 
            className="text-[26px] font-semibold leading-[1.3]"
            style={{ color: "#0F172A", letterSpacing: "-0.3px" }}
          >
            Today
          </h2>
        </div>
        
        {/* Latest Jobs Section */}
        <section>
          <h2
            className="mb-6 text-[26px] font-semibold leading-[1.3]"
            style={{ color: "#0F172A", letterSpacing: "-0.3px" }}
          >
            Latest jobs
          </h2>

          <div className="flex flex-col gap-4">
            {/* Job Card 1 */}
            <div
              className="rounded-2xl p-5 transition-colors"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#CBD5E1"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
            >
              <h4 className="text-sm font-semibold" style={{ color: "#0F172A" }}>
                Product Manager
              </h4>
              <p className="mt-1 text-xs" style={{ color: "#64748B" }}>
                TechCorp Inc. · San Francisco, CA
              </p>
              <p className="mt-2 text-xs" style={{ color: "#94A3B8" }}>
                Posted 2 hours ago
              </p>
            </div>

            {/* Job Card 2 */}
            <div
              className="rounded-2xl p-5 transition-colors"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#CBD5E1"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
            >
              <h4 className="text-sm font-semibold" style={{ color: "#0F172A" }}>
                UX Designer
              </h4>
              <p className="mt-1 text-xs" style={{ color: "#64748B" }}>
                Design Studio Co. · New York, NY
              </p>
              <p className="mt-2 text-xs" style={{ color: "#94A3B8" }}>
                Posted 5 hours ago
              </p>
            </div>

            {/* Job Card 3 */}
            <div
              className="rounded-2xl p-5 transition-colors"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#CBD5E1"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
            >
              <h4 className="text-sm font-semibold" style={{ color: "#0F172A" }}>
                Senior Developer
              </h4>
              <p className="mt-1 text-xs" style={{ color: "#64748B" }}>
                Tech Innovations Ltd. · Seattle, WA
              </p>
              <p className="mt-2 text-xs" style={{ color: "#94A3B8" }}>
                Posted 4 hours ago
              </p>
            </div>

            {/* Job Card 4 */}
            <div
              className="rounded-2xl p-5 transition-colors"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#CBD5E1"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
            >
              <h4 className="text-sm font-semibold" style={{ color: "#0F172A" }}>
                Business Analyst
              </h4>
              <p className="mt-1 text-xs" style={{ color: "#64748B" }}>
                Consulting Partners · Boston, MA
              </p>
              <p className="mt-2 text-xs" style={{ color: "#94A3B8" }}>
                Posted 8 hours ago
              </p>
            </div>

            {/* Job Card 5 */}
            <div
              className="rounded-2xl p-5 transition-colors"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#CBD5E1"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
            >
              <h4 className="text-sm font-semibold" style={{ color: "#0F172A" }}>
                Marketing Coordinator
              </h4>
              <p className="mt-1 text-xs" style={{ color: "#64748B" }}>
                Growth Labs · Remote
              </p>
              <p className="mt-2 text-xs" style={{ color: "#94A3B8" }}>
                Posted 1 day ago
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
