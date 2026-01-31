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
              <button
                className="mt-4 flex items-center gap-1 cursor-pointer text-sm font-medium transition-colors rounded-lg px-3 py-2"
                style={{ 
                  background: "#EC9F55",
                  color: "#FFFFFF" 
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#D88A3D"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#EC9F55"}
              >
                Watch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Image */}
            <div 
              className="w-1/3 flex-shrink-0 overflow-hidden"
              style={{ 
                aspectRatio: "16/9",
              }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PsK7JNW18g0gq6loRNUX661o8gJHb6.png"
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
              className="w-1/3 flex-shrink-0 overflow-hidden"
              style={{ 
                aspectRatio: "16/9",
              }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XN911LA6jOZNvMYATau5JhA5VZJie5.png"
                alt="Tutorial 2: Set up your profile for better matches"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Recent Responses Section */}
        <div 
          className="mt-12 rounded-2xl p-8 transition-colors"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = "#CBD5E1"}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
        >
            <h3 className="text-xl font-semibold mb-1" style={{ color: "#0F172A" }}>
              Recent Responses
            </h3>
            <p className="text-sm mb-6" style={{ color: "#64748B" }}>
              Latest responses you got
            </p>

            {/* Sales List */}
            <div className="flex flex-col gap-4">
              {/* Response 1 */}
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
                <button
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-colors"
                  style={{
                    background: "#F1F5F9",
                    color: "#2563EB"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#E2E8F0"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#F1F5F9"}
                >
                  View
                </button>
              </div>

              {/* Response 2 */}
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
                <button
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-colors"
                  style={{
                    background: "#F1F5F9",
                    color: "#2563EB"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#E2E8F0"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#F1F5F9"}
                >
                  View
                </button>
              </div>

              {/* Response 3 */}
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
                <button
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-colors"
                  style={{
                    background: "#F1F5F9",
                    color: "#2563EB"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#E2E8F0"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#F1F5F9"}
                >
                  View
                </button>
              </div>

              {/* Response 4 */}
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
                <button
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-colors"
                  style={{
                    background: "#F1F5F9",
                    color: "#2563EB"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#E2E8F0"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#F1F5F9"}
                >
                  View
                </button>
              </div>

              {/* Response 5 */}
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
                <button
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-colors"
                  style={{
                    background: "#F1F5F9",
                    color: "#2563EB"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#E2E8F0"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#F1F5F9"}
                >
                  View
                </button>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}
