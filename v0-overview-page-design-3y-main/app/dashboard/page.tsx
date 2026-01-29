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
        
        {/* Today Section */}
        <h1 
          className="mb-2 text-[26px] font-semibold leading-[1.3]"
          style={{ color: "#0F172A", letterSpacing: "-0.3px" }}
        >
          Today
        </h1>
        
        <p
          className="mb-6 text-sm"
          style={{ color: "#64748B" }}
        >
          Your job search progress and opportunities await.
        </p>

        {/* Stats Container */}
        <div
          className="mb-8 flex gap-6"
          style={{
            background: "transparent",
          }}
        >
          {/* Matches */}
          <div 
            className="flex flex-1 items-center gap-4 rounded-2xl p-6"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full w-12 h-12 flex-shrink-0"
              style={{
                background: "#DBEAFE",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="3" fill="#2563EB" />
                <circle cx="16" cy="8" r="3" fill="#2563EB" />
                <path d="M12 14C10.3431 14 9 15.3431 9 17V20H15V17C15 15.3431 13.6569 14 12 14Z" fill="#2563EB" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p
                className="text-xs font-medium"
                style={{ color: "#64748B" }}
              >
                Matches
              </p>
              <p
                className="text-2xl font-semibold"
                style={{ color: "#0F172A" }}
              >
                12
              </p>
            </div>
          </div>

          {/* Responses */}
          <div 
            className="flex flex-1 items-center gap-4 rounded-2xl p-6"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full w-12 h-12 flex-shrink-0"
              style={{
                background: "#DBEAFE",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 4L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" fill="#2563EB" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <p
                className="text-xs font-medium"
                style={{ color: "#64748B" }}
              >
                Responses
              </p>
              <p
                className="text-2xl font-semibold"
                style={{ color: "#0F172A" }}
              >
                4
              </p>
            </div>
          </div>

          {/* Follow-ups */}
          <div 
            className="flex flex-1 items-center gap-4 rounded-2xl p-6"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full w-12 h-12 flex-shrink-0"
              style={{
                background: "#DBEAFE",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" stroke="#2563EB" strokeWidth="2"/>
                <path d="M12 7V12L15.5 14.5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <p
                className="text-xs font-medium"
                style={{ color: "#64748B" }}
              >
                Follow-ups
              </p>
              <p
                className="text-2xl font-semibold"
                style={{ color: "#0F172A" }}
              >
                3
              </p>
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
            Tutorials
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
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src="https://www.efinancialcareers.fr/img/resize=width:540,height:320,fit:crop/vAvBKQzoTLyOOPWQtfc8"
                  alt="Tutorial 1"
                  className="h-full w-full object-cover"
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
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src="https://www.efinancialcareers.fr/img/resize=width:350,height:207,fit:crop/DyLoYqEiQCepjRaEmtAM"
                  alt="Tutorial 2"
                  className="h-full w-full object-cover"
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
                Marketing Coordinator
              </h4>
              <p className="mt-1 text-xs" style={{ color: "#64748B" }}>
                Growth Labs · Remote
              </p>
              <p className="mt-2 text-xs" style={{ color: "#94A3B8" }}>
                Posted 1 day ago
              </p>
            </div>

            {/* CTA Card */}
            <div
              className="rounded-2xl p-5 transition-colors flex items-center justify-between"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#CBD5E1"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
            >
              <div>
                <h4 className="text-sm font-semibold" style={{ color: "#0F172A" }}>
                  Explore more jobs
                </h4>
                <p className="mt-1 text-xs" style={{ color: "#64748B" }}>
                  1000s of jobs waiting for you
                </p>
              </div>
              <button
                className="cursor-pointer rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-[120ms] flex-shrink-0 ml-4"
                style={{
                  background: "#2563EB",
                  color: "#FFFFFF",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#1D4ED8"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#2563EB"}
              >
                Browse
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-12">
          <div
            className="rounded-2xl p-8"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
            }}
          >
            <h2
              className="text-2xl font-semibold"
              style={{ color: "#0F172A" }}
            >
              Join our newsletter
            </h2>
            <p
              className="mt-2 text-sm"
              style={{ color: "#64748B" }}
            >
              Get weekly tips, job opportunities, and career insights delivered to your inbox.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border px-4 py-2 text-sm transition-colors"
                style={{
                  borderColor: "#E5E7EB",
                  background: "#FFFFFF",
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = "#CBD5E1"}
                onBlur={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
              />
              <button
                className="cursor-pointer rounded-lg px-6 py-2 text-sm font-semibold transition-all duration-[120ms]"
                style={{
                  background: "#2563EB",
                  color: "#FFFFFF",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#1D4ED8"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#2563EB"}
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
