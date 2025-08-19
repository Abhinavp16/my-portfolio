const { useState, useEffect } = React;

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleTheme = () => {                                                                  
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`portfolio-app ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${isDarkTheme ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-xl z-50 shadow-2xl border-b ${isDarkTheme ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg ${isDarkTheme ? 'shadow-blue-500/25' : 'shadow-blue-500/20'}`}>
                <span className="text-white font-bold text-lg">AP</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Abhinav Pandey
              </div>
            </div>
            
            {/* Horizontal Navigation - Always visible */}
            <ul className="flex items-center space-x-1">
              <li>
                <a href="#home" onClick={() => setActiveSection('home')} 
                   className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 group text-sm ${
                     activeSection === 'home' 
                       ? `${isDarkTheme ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-600 text-white shadow-lg'}` 
                       : `${isDarkTheme ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`
                   }`}>
                  <span className="relative z-10">Home</span>
                  {activeSection === 'home' && (
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 animate-pulse`}></div>
                  )}
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setActiveSection('about')} 
                   className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 group text-sm ${
                     activeSection === 'about' 
                       ? `${isDarkTheme ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-600 text-white shadow-lg'}` 
                       : `${isDarkTheme ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`
                   }`}>
                  <span className="relative z-10">About</span>
                  {activeSection === 'about' && (
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 animate-pulse`}></div>
                  )}
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => setActiveSection('skills')} 
                   className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 group text-sm ${
                     activeSection === 'skills' 
                       ? `${isDarkTheme ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-600 text-white shadow-lg'}` 
                       : `${isDarkTheme ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`
                   }`}>
                  <span className="relative z-10">Skills</span>
                  {activeSection === 'skills' && (
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 animate-pulse`}></div>
                  )}
                </a>
              </li>
              <li>
                <a href="#education" onClick={() => setActiveSection('education')} 
                   className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 group text-sm ${
                     activeSection === 'education' 
                       ? `${isDarkTheme ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-600 text-white shadow-lg'}` 
                       : `${isDarkTheme ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`
                   }`}>
                  <span className="relative z-10">Education</span>
                  {activeSection === 'education' && (
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 animate-pulse`}></div>
                  )}
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setActiveSection('projects')} 
                   className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 group text-sm ${
                     activeSection === 'projects' 
                       ? `${isDarkTheme ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-600 text-white shadow-lg'}` 
                       : `${isDarkTheme ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`
                   }`}>
                  <span className="relative z-10">Projects</span>
                  {activeSection === 'projects' && (
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 animate-pulse`}></div>
                  )}
                </a>
              </li>
              <li>
                <a href="#research" onClick={() => setActiveSection('research')} 
                   className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 group text-sm ${
                     activeSection === 'research' 
                       ? `${isDarkTheme ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-600 text-white shadow-lg'}` 
                       : `${isDarkTheme ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`
                   }`}>
                  <span className="relative z-10">Research</span>
                  {activeSection === 'research' && (
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 animate-pulse`}></div>
                  )}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setActiveSection('contact')} 
                   className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 group text-sm ${
                     activeSection === 'contact' 
                       ? `${isDarkTheme ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-600 text-white shadow-lg'}` 
                       : `${isDarkTheme ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`
                   }`}>
                  <span className="relative z-10">Contact</span>
                  {activeSection === 'contact' && (
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 animate-pulse`}></div>
                  )}
                </a>
              </li>
            </ul>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                isDarkTheme 
                  ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 shadow-lg hover:shadow-yellow-500/25' 
                  : 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700 shadow-lg hover:shadow-gray-500/25'
              }`}
              title={isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span className="text-lg">{isDarkTheme ? '☀️' : '🌙'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`hero-section min-h-[70vh] flex items-center justify-center pb-8 ${isDarkTheme ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'} text-white relative overflow-hidden`} style={{paddingTop: '96px', boxSizing: 'border-box'}}>
        <div className={`absolute inset-0 ${isDarkTheme ? 'bg-black/20' : 'bg-white/20'}`}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className={`text-left space-y-8 ${isVisible ? 'animate-slide-up' : ''}`}>
              <div className="space-y-4">
                <h1 className={`text-5xl md:text-7xl font-bold leading-tight ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Abhinav Pandey</span>
                </h1>
                <div className="space-y-2">
                  <p className={`text-2xl md:text-3xl font-light opacity-90 ${isDarkTheme ? 'text-white' : 'text-gray-700'}`}>Web Developer</p>
                </div>
              </div>
              
              <p className={`text-xl opacity-90 leading-relaxed max-w-2xl ${isDarkTheme ? 'text-white' : 'text-gray-700'}`}>
              I build intuitive and high-performance web applications, turning complex ideas into elegant digital experiences. 
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="/Abhinav-Resume.pdf" download="Abhinav-Resume.pdf" className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 border border-blue-500 text-center">
                  Download Resume
                </a>
                <a
                  href="https://github.com/Abhinavp16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 ${isDarkTheme ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white'} rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center`}
                >
                  GitHub
                </a>
              </div>
            </div>

          {/* Right Photo - Small LinkedIn Profile Size */}
<div
  className={`flex justify-center lg:justify-end ${
    isVisible ? "animate-float-in" : ""
  } mt-8 sm:mt-12 mb-8 sm:mb-12`}
>
  <div className="relative">
    {/* Small profile photo - LinkedIn size */}
    <div className="w-30 h-30 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 bg-white">
      <img
        src="img1.jpg"
        alt="Abhinav Pandey"
        className="w-full h-full object-cover"
      />
      
      {/* Fallback placeholder if image fails to load */}
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-center hidden">
        <div>
          <div className="text-2xl mb-1">👨‍💻</div>
          <div className="text-xs font-semibold">AP</div>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkTheme ? 'text-white' : 'text-gray-900'} animate-fade-in`}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-up">
              <p className={`text-lg leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              As a passionate developer, my journey into the world of technology has been driven by a fascination with solving 
              complex problems. I began by building a strong foundation in front-end technologies, creating responsive and engaging user interfaces. 
              Now, I am enthusiastically transitioning into a Full Stack role, expanding my expertise into backend development to architect and deliver comprehensive, high-performance web applications.
              </p>
              <p className={`text-lg leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
              I am a collaborative team player committed to agile methodologies and the principles of continuous learning. 
              My focus is on writing clean, scalable code and optimizing application performance from end-to-end. 
              I thrive in environments where I can tackle technical challenges and contribute to building products that not only
               function flawlessly but also provide a seamless user experience.


              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 animate-slide-up">
              <div className="text-center p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-blue-500">
                <div className="text-3xl font-bold text-white mb-2">8.63</div>
                <div className="text-sm text-blue-100 font-medium">CGPA (MCA)</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-purple-500">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-sm text-purple-100 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-green-500">
                <div className="text-3xl font-bold text-white mb-2">4+</div>
                <div className="text-sm text-green-100 font-medium">Research Papers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkTheme ? 'text-white' : 'text-gray-900'} animate-fade-in`}>Skills & Technologies</h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-blue-500 animate-slide-up">
              <h3 className="text-xl font-semibold mb-6 text-white">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-400 hover:text-white transition-colors">C</span>
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-400 hover:text-white transition-colors">C++</span>
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-400 hover:text-white transition-colors">JavaScript</span>
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-400 hover:text-white transition-colors">Python</span>
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-400 hover:text-white transition-colors">HTML5</span>
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-400 hover:text-white transition-colors">CSS3</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-purple-500 animate-slide-up">
              <h3 className="text-xl font-semibold mb-6 text-white">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium hover:bg-purple-400 hover:text-white transition-colors">React.js</span>
                <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium hover:bg-purple-400 hover:text-white transition-colors">Node.js</span>
                <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium hover:bg-purple-400 hover:text-white transition-colors">Bootstrap</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-green-500 animate-slide-up">
              <h3 className="text-xl font-semibold mb-6 text-white">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-400 hover:text-white transition-colors">Git/GitHub</span>
                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-400 hover:text-white transition-colors">VS Code</span>
                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-400 hover:text-white transition-colors">MySQL</span>
                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-400 hover:text-white transition-colors">MS Access</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-pink-500 animate-slide-up">
              <h3 className="text-xl font-semibold mb-6 text-white">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-400 hover:text-white transition-colors">Problem-Solving</span>
                <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-400 hover:text-white transition-colors">Team Leadership</span>
                <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-400 hover:text-white transition-colors">Adaptability</span>
                <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-400 hover:text-white transition-colors">Decision-Making</span>
                <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-400 hover:text-white transition-colors">Project Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-24 ${isDarkTheme ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-extrabold tracking-tight ${isDarkTheme ? 'text-white' : 'text-gray-900'} animate-fade-in`}>Education</h2>
            <p className={`mt-3 text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>A concise timeline of my academic journey.</p>
          </div>

          <div className="relative">
            {/* Vertical gradient line on larger screens */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full h-full"></div>

            <div className="space-y-12 md:space-y-16">
              {/* MCA (Right) */}
              <div className="grid md:grid-cols-2 items-center gap-8 animate-slide-up">
                <div className="hidden md:block" />
                <div className="relative">
                  <span className="hidden md:block absolute -left-10 top-8 w-5 h-5 rounded-full bg-white ring-4 ring-blue-500 border-4 border-blue-600"></span>
                  <div className="group bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-2xl border border-blue-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2"><span>🎓</span>Master of Computer Applications</h3>
                      <span className="shrink-0 whitespace-nowrap text-sm md:text-base font-extrabold px-3.5 py-1.5 rounded-full bg-white text-blue-700 shadow-sm ring-1 ring-blue-200">CGPA • 8.63 / 10</span>
                    </div>
                    <p className="mt-2 text-blue-100 font-medium">Amity University, Raipur, Chhattisgarh</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/10 text-blue-100 border border-white/20">Postgraduate</span>
                      <span className="text-xs tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/10 text-blue-100 border border-white/20">Computer Applications</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BCA (Left) */}
              <div className="grid md:grid-cols-2 items-center gap-8 animate-slide-up">
                <div className="relative md:justify-self-end">
                  <span className="hidden md:block absolute -right-10 top-8 w-5 h-5 rounded-full bg-white ring-4 ring-purple-500 border-4 border-purple-600"></span>
                  <div className="group bg-gradient-to-br from-purple-600 to-fuchsia-700 p-8 rounded-2xl shadow-2xl border border-purple-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2"><span>📘</span>Bachelor of Computer Applications</h3>
                      <span className="shrink-0 whitespace-nowrap text-sm md:text-base font-extrabold px-3.5 py-1.5 rounded-full bg-white text-purple-700 shadow-sm ring-1 ring-purple-200">78.4%</span>
                    </div>
                    <p className="mt-2 text-purple-100 font-medium">Disha College, Ramnagar, Raipur, Chhattisgarh</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/10 text-purple-100 border border-white/20">Undergraduate</span>
                      <span className="text-xs tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/10 text-purple-100 border border-white/20">Computer Applications</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>

              {/* Higher Secondary (Right) */}
              <div className="grid md:grid-cols-2 items-center gap-8 animate-slide-up">
                <div className="hidden md:block" />
                <div className="relative">
                  <span className="hidden md:block absolute -left-10 top-8 w-5 h-5 rounded-full bg-white ring-4 ring-green-500 border-4 border-green-600"></span>
                  <div className="group bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-2xl shadow-2xl border border-green-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2"><span>🏫</span>Higher Secondary Education</h3>
                      <div className="flex items-center gap-2 md:flex-nowrap flex-wrap">
                        <span className="shrink-0 whitespace-nowrap text-sm md:text-base font-extrabold px-3.5 py-1.5 rounded-full bg-white text-green-700 shadow-sm ring-1 ring-green-200">Class XII • 80%</span>
                        <span className="shrink-0 whitespace-nowrap text-sm md:text-base font-extrabold px-3.5 py-1.5 rounded-full bg-white text-green-700 shadow-sm ring-1 ring-green-200">Class X • 79.6%</span>
                      </div>
                    </div>
                    <p className="mt-2 text-green-100 font-medium">Adarsh Vidyalaya Higher Senior Secondary School, Raipur</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/10 text-green-100 border border-white/20">Science</span>
                      <span className="text-xs tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/10 text-green-100 border border-white/20">CBSE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkTheme ? 'text-white' : 'text-gray-900'} animate-fade-in`}>Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-blue-500 animate-slide-up">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">Digital Library</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Digital Library – Web Application</h3>
                <p className="text-blue-100 font-medium mb-4">Team Lead | Disha College (2023-24)</p>
                <ul className="text-blue-200 space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-100 mr-2">•</span>
                    Spearheaded a team of four to design, develop, and deploy a Digital Library Web Application on LAN network
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-100 mr-2">•</span>
                    Led project planning, task delegation, and agile development, ensuring timely deployment
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-100 mr-2">•</span>
                    Successfully implemented a secure database management system to handle over 500+ digital resources
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Bootstrap</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-100 hover:text-white font-medium">GitHub</a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-purple-500 animate-slide-up">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">Hotel Management</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Hotel Management Software</h3>
                <p className="text-purple-100 font-medium mb-4">Developer | Freelancer</p>
                <ul className="text-purple-200 space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-purple-100 mr-2">•</span>
                    Developed a Hotel Management Software to streamline room bookings, guest management, billing, and staff coordination
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-100 mr-2">•</span>
                    Implemented a user-friendly interface for hotel staff to efficiently manage reservations and customer records
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-100 mr-2">•</span>
                    Designed a centralized database using MS Access for storing customer details, booking history, and payment records
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm">MS Access</span>
                  <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm">Database Design</span>
                  <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm">System Architecture</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-purple-100 hover:text-white font-medium">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className={`py-20 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkTheme ? 'text-white' : 'text-gray-900'} animate-fade-in`}>Research Publications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-blue-500 animate-slide-up">
              <h3 className="text-lg font-semibold text-white mb-4">Blockchain-Powered Decentralized Platforms for Secure Healthcare Data Exchange</h3>
              <p className="text-blue-100 text-sm mb-2">IEEE 4th International Conference on ICT in Business Industry & Government (ICTBIG), Indore, India, 2024</p>
              <p className="text-blue-200 text-xs">DOI: 10.1109/ICTBIG64922.2024.10911185</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-purple-500 animate-slide-up">
              <h3 className="text-lg font-semibold text-white mb-4">Energy-Efficient Blockchain Protocols for Sustainable Healthcare Data Management</h3>
              <p className="text-purple-100 text-sm">Innovation and Integrative Research Center Journal</p>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-green-500 animate-slide-up">
              <h3 className="text-lg font-semibold text-white mb-4">AI-Driven Robotics: Transforming Automation and Intelligent Systems</h3>
              <p className="text-green-100 text-sm">Innovation and Integrative Research Center Journal</p>
            </div>
            <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-pink-500 animate-slide-up">
              <h3 className="text-lg font-semibold text-white mb-4">Privacy Concerns in IoT Networks: A Comprehensive Study of Challenges, Vulnerabilities, Regulatory Impact, and Mitigation Strategies</h3>
              <p className="text-pink-100 text-sm">Innovation and Integrative Research Center Journal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-20 ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkTheme ? 'text-white' : 'text-gray-900'} animate-fade-in`}>Achievements & Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 p-8 rounded-xl shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-yellow-500 animate-slide-up">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-white mb-4">Mr. Disha Award</h3>
              <p className="text-sm text-yellow-100">
                Highest recognition awarded to a single final-year student across all streams for outstanding all-round performance in academics, extracurricular activities, and leadership.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 rounded-xl shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-indigo-500 animate-slide-up">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-white mb-4">37th Inter-University South-East Zone Youth Festival</h3>
              <p className="text-sm text-indigo-100">
                Represented Dr. Ravishankar Shukla University in One-Act Play at JSS Science and Technology University, Mysuru (Feb 2024)
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-8 rounded-xl shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-teal-500 animate-slide-up">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-white mb-4">Best Student Award – BCA III</h3>
              <p className="text-sm text-teal-100">
                Awarded Best Student of BCA III at Disha College, affiliated with Pt. Ravishankar Shukla University, Raipur
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-xl shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-orange-500 animate-slide-up">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-4">ISRO START Program</h3>
              <p className="text-sm text-orange-100">
                Space Science and Technology Awareness Training - Score: A+ (100%) | Duration: 19.5 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkTheme ? 'text-white' : 'text-gray-900'} animate-fade-in`}>Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-slide-up">
              <h3 className={`text-2xl font-semibold mb-6 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Let's work together!</h3>
              <p className={`text-lg mb-8 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm always interested in new opportunities and exciting projects in web development and full-stack engineering.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📧</span>
                  <span className={isDarkTheme ? 'text-gray-300' : 'text-gray-700'}>abhinavpandey12201@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📱</span>
                  <span className={isDarkTheme ? 'text-gray-300' : 'text-gray-700'}>+91 8839439024</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📍</span>
                  <span className={isDarkTheme ? 'text-gray-300' : 'text-gray-700'}>Chhattisgarh, India</span>
                </div>
                
                {/* Social Links */}
                <div className="pt-4 space-y-3">
                  <a
                    href="https://www.linkedin.com/in/abhinav-pandey-4900a92a2/"
                    className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-2xl">💼</span>
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://wa.me/918839439024?text=Hi%20Abhinav,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                    className="flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-2xl">💬</span>
                    <span className="font-medium">WhatsApp</span>
                  </a>
                  <a
                    href="https://github.com/Abhinavp16"
                    className={`flex items-center space-x-3 ${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-2xl">🐙</span>
                    <span className="font-medium">GitHub</span>
                  </a>
                  
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h3 className={`text-2xl font-semibold mb-6 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Send me a message</h3>
              <form 
                action="https://formspree.io/f/abhinavpandey12201@gmail.com" 
                method="POST"
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${isDarkTheme ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${isDarkTheme ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${isDarkTheme ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${isDarkTheme ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  >
                    <option value="">Select a subject</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Freelance Work">Freelance Work</option>
                    <option value="Research Discussion">Research Discussion</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${isDarkTheme ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-blue-500"
                  >
                    <span className="flex items-center justify-center">
                      <span className="mr-2">📧</span>
                      Send Email
                    </span>
                  </button>
                  
                  <a
                    href="https://wa.me/918839439024?text=Hi%20Abhinav,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center flex items-center justify-center border border-green-500"
                  >
                    <span className="flex items-center justify-center">
                      <span className="mr-2">💬</span>
                      WhatsApp
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${isDarkTheme ? 'bg-gray-900 text-white border-gray-700' : 'bg-gray-100 text-gray-900 border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Abhinav Pandey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

