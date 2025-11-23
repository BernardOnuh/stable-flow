// components/Hero.js
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-white min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Sophisticated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-200 to-transparent rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-bl from-gray-300 to-transparent rounded-full mix-blend-multiply filter blur-3xl animate-float-slow animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-tr from-gray-200 to-transparent rounded-full mix-blend-multiply filter blur-3xl animate-float-slow animation-delay-4000"></div>
        </div>
        
        {/* Floating network nodes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-black rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-black rounded-full animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-black rounded-full animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-black rounded-full animate-pulse-slow animation-delay-3000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-black rounded-full animate-pulse-slow animation-delay-4000"></div>
        
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="25%" y1="25%" x2="75%" y2="33%" stroke="black" strokeWidth="1" className="animate-dash" strokeDasharray="5,5" />
          <line x1="75%" y1="33%" x2="33%" y2="75%" stroke="black" strokeWidth="1" className="animate-dash animation-delay-1000" strokeDasharray="5,5" />
          <line x1="33%" y1="75%" x2="67%" y2="50%" stroke="black" strokeWidth="1" className="animate-dash animation-delay-2000" strokeDasharray="5,5" />
          <line x1="67%" y1="50%" x2="75%" y2="67%" stroke="black" strokeWidth="1" className="animate-dash animation-delay-3000" strokeDasharray="5,5" />
        </svg>
        
        {/* Grid Pattern with fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center py-16">
        {/* Badge/Label */}
        <div className="inline-flex items-center gap-2 bg-black/5 border border-black/10 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
          </span>
          <span className="text-sm font-medium text-gray-700">Powered by LayerZero & Coinbase Smart Wallet</span>
        </div>

        {/* Main Headline with staggered animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-12 tracking-tight text-gray-900" style={{fontFamily: '"Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif'}}>
          <span className="inline-block animate-fade-in-up animation-delay-200">
            AI-POWERED
          </span>
          <br />
          <span className="inline-block animate-fade-in-up animation-delay-400">
            <span className="relative">
              <span className="text-black relative z-10">CROSS-CHAIN</span>
              <span className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></span>
            </span>
          </span>
          <br />
          <span className="inline-block animate-fade-in-up animation-delay-600">
            <span className="relative">
              <span className="text-black relative z-10">LIQUIDITY</span>
              <span className="absolute -inset-1 bg-gradient-to-r from-gray-300 to-gray-200 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></span>
            </span>
          </span>
          {' '}
          <span className="inline-block animate-fade-in-up animation-delay-800">MANAGEMENT</span>
          <br />
          <span className="text-gray-600 inline-block animate-fade-in-up animation-delay-1000">FOR BUSINESSES</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-16 leading-relaxed animate-fade-in-up animation-delay-1200" style={{fontFamily: '"Inter", "SF Pro Text", "Helvetica Neue", system-ui, sans-serif'}}>
          Stable Flow is an AI agent built on LayerZero with Coinbase Developer Smart Wallet. 
          Unify your business liquidity across chains, eliminate fragmentation, and access your 
          assets seamlessly from one intelligent platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20 animate-fade-in-up animation-delay-1400">
          <Link 
            href="/get-started" 
            className="group relative w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get started for free
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link 
            href="/book-demo" 
            className="group relative w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium text-base hover:border-black hover:text-black transition-all duration-300 bg-white hover:scale-105 hover:shadow-xl"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Book demo
            </span>
          </Link>
          
          <Link 
            href="/docs"
            className="group w-full sm:w-auto text-black font-medium text-base hover:text-gray-600 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Explore documentation
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Dashboard Image Section */}
        <div className="border-t border-gray-200 pt-16 mt-16 animate-fade-in-up animation-delay-1600">
          <div className="relative group">
            {/* Glow effect on hover */}
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>
            
            {/* Custom Dashboard Visualization */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-700 group-hover:scale-[1.02] p-8">
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan pointer-events-none"></div>
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Liquidity Overview</h3>
                  <p className="text-sm text-gray-500 mt-1">Real-time cross-chain asset monitoring</p>
                </div>
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-green-700">All Systems Operational</span>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-700">Asset Distribution Across Chains</span>
                  <span className="text-xs text-gray-500">Last updated: 2 min ago</span>
                </div>
                
                {/* Animated Bar Chart */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium text-gray-600 w-24">Ethereum</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div className="bg-black h-full rounded-full animate-expand-bar" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-xs font-bold text-gray-900 w-16 text-right">$2.1M</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium text-gray-600 w-24">Arbitrum</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div className="bg-gray-700 h-full rounded-full animate-expand-bar animation-delay-200" style={{width: '65%'}}></div>
                    </div>
                    <span className="text-xs font-bold text-gray-900 w-16 text-right">$1.6M</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium text-gray-600 w-24">Optimism</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div className="bg-gray-600 h-full rounded-full animate-expand-bar animation-delay-400" style={{width: '52%'}}></div>
                    </div>
                    <span className="text-xs font-bold text-gray-900 w-16 text-right">$1.3M</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium text-gray-600 w-24">Base</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div className="bg-gray-500 h-full rounded-full animate-expand-bar animation-delay-600" style={{width: '48%'}}></div>
                    </div>
                    <span className="text-xs font-bold text-gray-900 w-16 text-right">$1.2M</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium text-gray-600 w-24">Polygon</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div className="bg-gray-400 h-full rounded-full animate-expand-bar animation-delay-800" style={{width: '40%'}}></div>
                    </div>
                    <span className="text-xs font-bold text-gray-900 w-16 text-right">$980K</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="text-xs text-gray-500 mb-1">Total Volume</div>
                  <div className="text-xl font-bold text-gray-900">$7.2M</div>
                  <div className="text-xs text-green-600 mt-1">+12.5%</div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="text-xs text-gray-500 mb-1">Transactions</div>
                  <div className="text-xl font-bold text-gray-900">1,847</div>
                  <div className="text-xs text-green-600 mt-1">+8.3%</div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="text-xs text-gray-500 mb-1">Active Chains</div>
                  <div className="text-xl font-bold text-gray-900">7</div>
                  <div className="text-xs text-gray-500 mt-1">Connected</div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="text-xs text-gray-500 mb-1">Avg Speed</div>
                  <div className="text-xl font-bold text-gray-900">0.8s</div>
                  <div className="text-xs text-gray-500 mt-1">Response</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 mt-6">
                <div className="text-sm font-semibold text-gray-700 mb-3">Recent Cross-Chain Activity</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Transfer completed</span>
                    </div>
                    <span className="text-gray-900 font-medium">Ethereum → Base</span>
                    <span className="text-gray-500">2m ago</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Transfer completed</span>
                    </div>
                    <span className="text-gray-900 font-medium">Arbitrum → Optimism</span>
                    <span className="text-gray-500">5m ago</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-600">Transfer pending</span>
                    </div>
                    <span className="text-gray-900 font-medium">Polygon → Ethereum</span>
                    <span className="text-gray-500">Just now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats with enhanced animations */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl border border-gray-200 px-5 py-3 animate-float-gentle backdrop-blur-sm bg-white/90">
              <div className="text-sm font-bold text-black">$2.5M</div>
              <div className="text-xs text-gray-500">Total liquidity</div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl border border-gray-200 px-5 py-3 animate-float-gentle animation-delay-1000 backdrop-blur-sm bg-white/90">
              <div className="text-sm font-bold text-black flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                7 Chains
              </div>
              <div className="text-xs text-gray-500">Connected</div>
            </div>
            
            <div className="absolute -bottom-4 left-1/4 bg-white rounded-xl shadow-xl border border-gray-200 px-5 py-3 animate-float-gentle animation-delay-2000 backdrop-blur-sm bg-white/90">
              <div className="text-sm font-bold text-black">0.8s</div>
              <div className="text-xs text-gray-500">Avg response</div>
            </div>
            
            <div className="absolute -bottom-4 right-1/4 bg-white rounded-xl shadow-xl border border-gray-200 px-5 py-3 animate-float-gentle animation-delay-3000 backdrop-blur-sm bg-white/90">
              <div className="text-sm font-bold text-black">99.9%</div>
              <div className="text-xs text-gray-500">Uptime</div>
            </div>
          </div>

          {/* Dashboard description */}
          <p className="text-gray-500 text-sm mt-12 max-w-2xl mx-auto leading-relaxed">
            Intelligent dashboard powered by AI to monitor cross-chain liquidity, optimize asset allocation, 
            and provide real-time insights for your business operations.
          </p>
        </div>


      </div>

      {/* Advanced Animations & Effects */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-30px, 30px) scale(0.95); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expand-bar {
          from {
            width: 0;
          }
        }
        
        .animate-expand-bar {
          animation: expand-bar 1.5s ease-out forwards;
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-dash {
          animation: dash 20s linear infinite;
        }
        
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-1400 { animation-delay: 1.4s; }
        .animation-delay-1600 { animation-delay: 1.6s; }
        .animation-delay-1800 { animation-delay: 1.8s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        @media (max-width: 640px) {
          .absolute.floating-stats {
            position: relative;
            margin: 1rem auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;