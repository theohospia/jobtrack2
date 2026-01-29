"use client"

import { TopNav } from "@/components/top-nav"

export default function ActionsPage() {
  const secondaryActions = [
    {
      title: "Follow up with TechStart Inc",
      subtext: "10 days since application"
    },
    {
      title: "Follow up with DataFlow",
      subtext: "7 days since application"
    },
    {
      title: "Update resume for Product roles",
      subtext: "Increases match rate by ~15%"
    },
    {
      title: "Add portfolio link to LinkedIn",
      subtext: "Boosts profile visibility"
    }
  ]

  return (
    <div 
      className="min-h-screen min-w-[1280px]"
      style={{ backgroundColor: '#F8FAFC' }}
    >
      <TopNav />
      
      <main 
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '32px 24px 64px 24px'
        }}
      >
        {/* Page Header */}
        <header style={{ marginBottom: 24 }}>
          <h1 
            style={{
              fontSize: 24,
              fontWeight: 600,
              lineHeight: '32px',
              color: '#0F172A'
            }}
          >
            Actions
          </h1>
          <p 
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '20px',
              color: '#64748B',
              marginTop: 4
            }}
          >
            Clear, high-impact steps to move your job search forward.
          </p>
        </header>

        {/* Primary Action Card */}
        <div 
          style={{
            width: '100%',
            borderRadius: 16,
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            padding: 24,
            boxShadow: '0px 8px 24px rgba(15, 23, 42, 0.06)',
            marginBottom: 32
          }}
        >
          {/* Title Row with Badges - Vertically Centered */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: 60
            }}
          >
            <h2 
              className="text-lg font-semibold leading-[1.35]"
              style={{ color: '#0F172A' }}
            >
              Follow up on 3 applications older than 7 days
            </h2>

            {/* Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {/* Time Estimate Pill */}
              <span 
                style={{
                  background: '#F1F5F9',
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#334155',
                  padding: '4px 10px',
                  borderRadius: 999
                }}
              >
                ~5 minutes
              </span>

              {/* Confidence Pill */}
              <span 
                style={{
                  background: '#ECFEFF',
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#0369A1',
                  padding: '4px 10px',
                  borderRadius: 999
                }}
              >
                High impact
              </span>
            </div>
          </div>

          </div>

        {/* Secondary Actions Section */}
        <section style={{ marginBottom: 32 }}>
          <h3 
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#0F172A',
              marginBottom: 12
            }}
          >
            Up next
          </h3>

          {/* Secondary Action List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {secondaryActions.map((action) => (
              <div 
                key={action.title}
                style={{
                  height: 64,
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                {/* Left Side */}
                <div>
                  <p 
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: '#0F172A'
                    }}
                  >
                    {action.title}
                  </p>
                  <p 
                    style={{
                      fontSize: 12,
                      color: '#64748B',
                      marginTop: 2
                    }}
                  >
                    {action.subtext}
                  </p>
                </div>

                {/* Right Side CTA */}
                <button className="flex items-center gap-1.5 opacity-90"
                  style={{
                    height: 32,
                    padding: '0 12px',
                    borderRadius: 8,
                    background: '#1D4ED8',
                    color: '#FFFFFF',
                    fontSize: 12,
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background 120ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#1D4ED8'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#1D4ED8'}
                >
                  Do it
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          </section>

        {/* Load More Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={{
              height: 44,
              padding: '0 24px',
              borderRadius: 10,
              background: '#2563EB',
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              transition: 'background 120ms ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#1D4ED8'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#2563EB'}
          >
            Load more
          </button>
        </div>
        
      </main>
    </div>
  )
}
