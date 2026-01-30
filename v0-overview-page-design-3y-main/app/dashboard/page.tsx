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
        
        {/* Today Section with Stats */}
        <div className="mb-6 flex items-center justify-between gap-6">
          {/* Left: Today Header with Profile */}
          <div className="flex items-center gap-4 flex-shrink-0">
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
            <h1 
              className="text-[26px] font-semibold leading-[1.3]"
              style={{ color: "#0F172A", letterSpacing: "-0.3px" }}
            >
              Today
            </h1>
          </div>

          {/* Right: Stats Container */}
          <div
            className="flex gap-3"
            style={{
              background: "transparent",
            }}
          >
            {/* Matches - Pill Card */}
            <div 
              className="flex items-center gap-3 rounded-full px-5 py-3"
              style={{
                background: "#2563EB",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{
                  width: "44px",
                  height: "44px",
                  background: "#1D4ED8",
                  border: "2px solid #FFFFFF",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="3" fill="#FFFFFF" />
                  <circle cx="16" cy="8" r="3" fill="#FFFFFF" />
                  <path d="M12 14C10.3431 14 9 15.3431 9 17V20H15V17C15 15.3431 13.6569 14 12 14Z" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="flex flex-col gap-0">
                <p
                  className="text-sm font-semibold leading-none"
                  style={{ color: "#FFFFFF" }}
                >
                  12
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "#FFFFFF" }}
                >
                  Matches
                </p>
              </div>
            </div>

            {/* Responses - Pill Card */}
            <div 
              className="flex items-center gap-3 rounded-full px-5 py-3"
              style={{
                background: "#2563EB",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{
                  width: "44px",
                  height: "44px",
                  background: "#1D4ED8",
                  border: "2px solid #FFFFFF",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 4L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <div className="flex flex-col gap-0">
                <p
                  className="text-sm font-semibold leading-none"
                  style={{ color: "#FFFFFF" }}
                >
                  4
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "#FFFFFF" }}
                >
                  Responses
                </p>
              </div>
            </div>

            {/* Follow-ups - Pill Card */}
            <div 
              className="flex items-center gap-3 rounded-full px-5 py-3"
              style={{
                background: "#2563EB",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{
                  width: "44px",
                  height: "44px",
                  background: "#1D4ED8",
                  border: "2px solid #FFFFFF",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth="2"/>
                  <path d="M12 7V12L15.5 14.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col gap-0">
                <p
                  className="text-sm font-semibold leading-none"
                  style={{ color: "#FFFFFF" }}
                >
                  3
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "#FFFFFF" }}
                >
                  Follow-ups
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tutorials Section */}
        <section className="mt-12">
          {/* Header */}
          <h2
            className="mb-6 text-[26px] font-semibold leading-[1.3]"
            style={{ color: "#0F172A", letterSpacing: "-0.3px" }}
          >
            Welcome
          </h2>

          <div className="flex flex-col gap-6">
            {/* Tutorial 1 - Image Left, Content Right */}
            <div
              className="flex gap-6 overflow-hidden rounded-2xl transition-colors"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#CBD5E1"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
            >
              {/* Image */}
              <div 
                className="w-2/5 flex-shrink-0 overflow-hidden"
                style={{ 
                  aspectRatio: "16/9",
                }}
              >
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Tutorial 1: How to use the app"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex w-3/5 flex-col items-start justify-center pr-6">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#0F172A" }}
                >
                  Tutorial #1: How to use the app
                </h3>
                <p 
                  className="mt-2 text-xs"
                  style={{ color: "#64748B" }}
                >
                  3 min · Beginner
                </p>
                <button
                  className="mt-4 flex items-center gap-1 cursor-pointer text-sm font-medium transition-colors rounded-lg px-3 py-2"
                  style={{ 
                    background: "#2563EB",
                    color: "#FFFFFF" 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#1D4ED8"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#2563EB"}
                >
                  Watch
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Tutorial 2 - Content Left, Image Right */}
            <div
              className="flex gap-6 overflow-hidden rounded-2xl transition-colors"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#CBD5E1"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
            >
              {/* Content */}
              <div className="flex w-3/5 flex-col items-start justify-center pl-6">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#0F172A" }}
                >
                  Tutorial #2: Set up your profile for better matches
                </h3>
                <p 
                  className="mt-2 text-xs"
                  style={{ color: "#64748B" }}
                >
                  5 min · Quick win
                </p>
                <button
                  className="mt-4 flex items-center gap-1 cursor-pointer text-sm font-medium transition-colors rounded-lg px-3 py-2"
                  style={{ 
                    background: "#2563EB",
                    color: "#FFFFFF" 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#1D4ED8"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#2563EB"}
                >
                  Watch
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Image */}
              <div 
                className="w-2/5 flex-shrink-0 overflow-hidden"
                style={{ 
                  aspectRatio: "16/9",
                }}
              >
                <img
                  src="/placeholder.svg?height=200&width=350"
                  alt="Tutorial 2: Set up your profile for better matches"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Jobs Section */}
        <section className="mt-12">
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
