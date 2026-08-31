const LoginLeftSide = () => {
    return (
      <div className="hidden md:flex w-1/2 min-h-screen bg-indigo-950 relative overflow-hidden border-r border-slate-200">
  
        {/* Decorative circle */}
        <div className="absolute -top-30 -left-30 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
  
        {/* Text content */}
        <div className="relative z-10 flex flex-col items-start justify-center p-12 lg:p-20 w-full min-h-screen">
          <h1 className="text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
            Employee <br />
            Management System
          </h1>
  
          <p className="text-slate-600 text-lg max-w-md leading-relaxed">
            Streamline your workforce operations, track attendance, manage payroll
            and empower your team securely
          </p>
        </div>
  
      </div>
    )
  }
  
  export default LoginLeftSide