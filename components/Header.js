// components/Header.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    developers: false,
    resources: false,
    company: false
  });
  const router = useRouter();

  // External link to Postman workspace
  const POSTMAN_WORKSPACE_URL = 'https://web3nova.postman.co/workspace/LIQUIDITY~20697ae5-fb2f-4cee-9b4c-6d820595914f/request/29992378-acf26692-6bab-4be1-a399-c4130c2420ab?action=share&creator=29992378&ctx=documentation';

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Function to toggle mobile dropdowns
  const toggleMobileDropdown = (section) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  const isActive = (path) => {
    if (path.startsWith('#')) {
      return false;
    }
    return router.pathname === path;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled || isMobileMenuOpen 
        ? 'backdrop-blur-xl bg-white/95 border-b border-gray-200 shadow-sm' 
        : 'backdrop-blur-md bg-white/80 border-b border-gray-100'
    }`} style={{fontFamily: '"Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif'}}>
      <nav className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50 relative">
            <div className="text-2xl font-black text-black">STABLE FLOW</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/use-cases" className={`relative transition-all duration-300 text-[14px] font-medium group px-2 py-2 rounded-lg hover:bg-gray-100 ${
              isActive('/use-cases') 
                ? 'text-black bg-gray-100' 
                : 'text-gray-700 hover:text-black'
            }`}>
              Use Cases
              <span className={`absolute bottom-1 left-2 h-0.5 bg-black transition-all duration-300 ${
                isActive('/use-cases') 
                  ? 'w-[calc(100%-16px)]' 
                  : 'w-0 group-hover:w-[calc(100%-16px)]'
              }`}></span>
            </Link>
            
            <div className="relative group">
              <button className="relative text-gray-700 hover:text-black transition-all duration-300 text-[14px] font-medium flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-gray-100">
                Developers
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
              </button>
              
              {/* Developers Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="p-6 space-y-4">
                  <a href={POSTMAN_WORKSPACE_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group/item">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover/item:text-black transition-colors">Documentation</h3>
                      <p className="text-sm text-gray-600 mt-1">Learn how to integrate Stable Flow AI agent.</p>
                    </div>
                  </a>
                  
                  <a href={POSTMAN_WORKSPACE_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group/item">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover/item:text-black transition-colors">API Reference</h3>
                      <p className="text-sm text-gray-600 mt-1">Complete API specs for liquidity management.</p>
                    </div>
                  </a>
                  
                  <a href={POSTMAN_WORKSPACE_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group/item">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover/item:text-black transition-colors">Status Page</h3>
                      <p className="text-sm text-gray-600 mt-1">Real-time cross-chain network status.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="relative text-gray-700 hover:text-black transition-all duration-300 text-[14px] font-medium flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-gray-100">
                Resources
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
              </button>
              
              {/* Resources Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="p-6 space-y-4">
                  <Link href="/blog" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group/item">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover/item:text-black transition-colors">Blog</h3>
                      <p className="text-sm text-gray-600 mt-1">Insights on cross-chain liquidity management</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="relative text-gray-700 hover:text-black transition-all duration-300 text-[14px] font-medium flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-gray-100">
                Company
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
              </button>
              
              {/* Company Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="p-6 space-y-4">
                  <Link href="/about" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group/item">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover/item:text-black transition-colors">About Us</h3>
                      <p className="text-sm text-gray-600 mt-1">Our mission to simplify liquidity management</p>
                    </div>
                  </Link>
                  
                  <Link href="/contact-sales" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group/item">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover/item:text-black transition-colors">Contact Sales</h3>
                      <p className="text-sm text-gray-600 mt-1">Get in touch with our team</p>
                    </div>
                  </Link>
                  
                  <Link href="/partners" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group/item">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover/item:text-black transition-colors">Partners</h3>
                      <p className="text-sm text-gray-600 mt-1">Join our partner network</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className={`transition-all duration-300 text-[14px] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 ${
              isActive('/login') 
                ? 'text-black bg-gray-100' 
                : 'text-gray-700 hover:text-black'
            }`}>
              Log in
            </Link>
            <Link 
              href="/get-started" 
              className="bg-black text-white px-4 py-2 rounded-xl font-semibold text-[13px] hover:bg-gray-800 transition-all duration-300"
            >
              Get started
            </Link>
            <Link 
              href="/book-demo" 
              className="border border-gray-300 text-gray-900 px-4 py-2 rounded-xl font-medium text-[13px] hover:border-black hover:bg-gray-50 hover:text-black transition-all duration-300"
            >
              Book demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3 z-50 relative">
            <button
              className="text-gray-900 p-3 hover:text-black hover:bg-gray-100 rounded-xl transition-all duration-300 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`} />
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-all duration-500 ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-700 ease-out ${
            isMobileMenuOpen 
              ? 'transform translate-y-0 opacity-100 scale-100' 
              : 'transform -translate-y-8 opacity-0 scale-95'
          }`}>
            <div className="px-6 py-8">
              {/* Navigation Links */}
              <div className="space-y-1 mb-8">
                <div className={`transform transition-all duration-700 delay-100 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}>
                  <Link 
                    href="/use-cases" 
                    className={`flex items-center justify-between w-full text-base font-semibold py-4 px-5 transition-all duration-300 rounded-xl group ${
                      isActive('/use-cases')
                        ? 'text-white bg-black shadow-lg'
                        : 'text-gray-700 hover:text-black hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Use Cases</span>
                    <svg className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Developers Dropdown */}
                <div className={`transform transition-all duration-700 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`} style={{transitionDelay: '200ms'}}>
                  <button 
                    className="flex items-center justify-between w-full text-gray-700 hover:text-black text-base font-semibold py-4 px-5 transition-all duration-300 rounded-xl hover:bg-gray-50 group"
                    onClick={() => toggleMobileDropdown('developers')}
                  >
                    <span>Developers</span>
                    <svg className={`w-5 h-5 opacity-60 group-hover:opacity-100 transition-all duration-300 ${
                      mobileDropdowns.developers ? 'rotate-90' : ''
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    mobileDropdowns.developers ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 space-y-2">
                      <a href={POSTMAN_WORKSPACE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-900">Documentation</div>
                          <div className="text-sm text-gray-600">Integration guides</div>
                        </div>
                      </a>
                      
                      <a href={POSTMAN_WORKSPACE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-900">API Reference</div>
                          <div className="text-sm text-gray-600">Complete API specs</div>
                        </div>
                      </a>
                      
                      <a href={POSTMAN_WORKSPACE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-900">Status Page</div>
                          <div className="text-sm text-gray-600">Network status</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Resources Dropdown */}
                <div className={`transform transition-all duration-700 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`} style={{transitionDelay: '300ms'}}>
                  <button 
                    className="flex items-center justify-between w-full text-gray-700 hover:text-black text-base font-semibold py-4 px-5 transition-all duration-300 rounded-xl hover:bg-gray-50 group"
                    onClick={() => toggleMobileDropdown('resources')}
                  >
                    <span>Resources</span>
                    <svg className={`w-5 h-5 opacity-60 group-hover:opacity-100 transition-all duration-300 ${
                      mobileDropdowns.resources ? 'rotate-90' : ''
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    mobileDropdowns.resources ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 space-y-2">
                      <Link href="/blog" className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-900">Blog</div>
                          <div className="text-sm text-gray-600">Latest insights</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Company Dropdown */}
                <div className={`transform transition-all duration-700 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`} style={{transitionDelay: '400ms'}}>
                  <button 
                    className="flex items-center justify-between w-full text-gray-700 hover:text-black text-base font-semibold py-4 px-5 transition-all duration-300 rounded-xl hover:bg-gray-50 group"
                    onClick={() => toggleMobileDropdown('company')}
                  >
                    <span>Company</span>
                    <svg className={`w-5 h-5 opacity-60 group-hover:opacity-100 transition-all duration-300 ${
                      mobileDropdowns.company ? 'rotate-90' : ''
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    mobileDropdowns.company ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 space-y-2">
                      <Link href="/about" className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-900">About Us</div>
                          <div className="text-sm text-gray-600">Our mission</div>
                        </div>
                      </Link>
                      
                      <Link href="/contact-sales" className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-900">Contact Sales</div>
                          <div className="text-sm text-gray-600">Get in touch</div>
                        </div>
                      </Link>
                      
                      <Link href="/partners" className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-900">Partners</div>
                          <div className="text-sm text-gray-600">Join our network</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Links */}
              <div className="space-y-3 mb-8 pt-6 border-t border-gray-100">
                <div className={`transform transition-all duration-700 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`} style={{transitionDelay: '500ms'}}>
                  <Link 
                    href="/login" 
                    className={`block text-center text-base font-medium py-3 px-5 transition-all duration-300 rounded-xl ${
                      isActive('/login')
                        ? 'text-black bg-gray-100'
                        : 'text-gray-600 hover:text-black hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className={`transform transition-all duration-700 ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`} style={{transitionDelay: '700ms'}}>
                  <Link 
                    href="/get-started" 
                    className="block w-full bg-black text-white text-center px-6 py-4 rounded-xl font-bold text-base shadow-lg hover:bg-gray-800 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get started
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                </div>
                
                <div className={`transform transition-all duration-700 ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`} style={{transitionDelay: '800ms'}}>
                  <Link 
                    href="/book-demo" 
                    className="block w-full border-2 border-gray-200 text-gray-700 bg-white text-center px-6 py-4 rounded-xl font-semibold text-base hover:border-black hover:text-black hover:bg-gray-50 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book demo
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;