import React, { useState } from 'react';

// Main App component that manages the different pages.
const App = () => {
  // State to manage which page is currently displayed.
  const [currentPage, setCurrentPage] = useState('login');

  const AuthLayout = ({ children, title, subtitle, image, imagePosition = 'right' }) => (
    <div className="min-h-screen p-4 sm:p-8 flex items-center justify-center bg-gray-100 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200">
      <div className="w-full max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {imagePosition === 'left' && image && (
          <div className="md:w-1/2 p-8 md:p-12 flex items-center justify-center bg-blue-50 dark:bg-blue-900/50">
            <div className="w-full h-full object-contain">
              {image}
            </div>
          </div>
        )}
        <div className="md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
          </div>
          {children}
        </div>
        {imagePosition === 'right' && image && (
          <div className="md:w-1/2 p-8 md:p-12 flex items-center justify-center bg-blue-50 dark:bg-blue-900/50">
            <div className="w-full h-full object-contain">
              {image}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Login attempt:', { email, password, rememberMe });
      alert('Login attempt in console!');
    };

    return (
      <AuthLayout
        title="Login"
        subtitle="Log in to your tutor-edge account"
        image={<LoginImage />}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="******************"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 bg-gray-100 dark:bg-gray-700 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <a onClick={() => setCurrentPage('forgotPassword')} className="text-sm font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
            Login
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account? <a onClick={() => setCurrentPage('signup')} className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">Sign up</a>
        </div>
        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">
              Or Login with
            </span>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="flex items-center justify-center p-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.675 11.232c-.062-1.076-.87-1.921-1.996-1.921H14.12V8.406c0-1.037.49-1.554 1.517-1.554h2.264c.03-.687.127-1.284.288-1.785a6.45 6.45 0 00-1.066-.642c-.524-.265-1.1-.476-1.72-.647a4.914 4.914 0 00-1.72-.258c-1.874 0-3.376.657-4.506 1.972C6.86 6.07 6.25 7.64 6.25 9.42v1.811H4.375c-.947 0-1.636.818-1.636 1.921v2.544c0 1.103.689 1.921 1.636 1.921h1.875v5.336c0 .888.756 1.597 1.688 1.597h2.648c.932 0 1.687-.71 1.687-1.597v-5.336h2.515c.668 0 1.258-.45 1.458-1.096l.79-2.545a1.862 1.862 0 00-.236-1.933 2.126 2.126 0 00-1.875-.724z" />
            </svg>
          </button>
          <button className="flex items-center justify-center p-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.97 0 9.06-3.73 9.77-8.58H20v-2.82h-1.66c-.19-.4-.4-.78-.65-1.14a10.02 10.02 0 00-1.14-1.14c-.25-.25-.53-.47-.83-.68a10.02 10.02 0 00-1.14-.83c-.25-.19-.5-.38-.78-.54A10.02 10.02 0 0012 2.01zm-1.01 14.15l-1.69-1.69-1.69 1.69c-.39.39-1.02.39-1.41 0l-1.01-1.01c-.39-.39-.39-1.02 0-1.41l1.69-1.69-1.69-1.69c-.39-.39-.39-1.02 0-1.41l1.01-1.01c.39-.39 1.02-.39 1.41 0l1.69 1.69 1.69-1.69c.39-.39 1.02-.39 1.41 0l1.01 1.01c.39.39.39 1.02 0 1.41l-1.69 1.69 1.69 1.69c.39.39.39 1.02 0 1.41l-1.01 1.01c-.39.39-1.02.39-1.41 0z" />
            </svg>
          </button>
          <button className="flex items-center justify-center p-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.97 0 9.06-3.73 9.77-8.58H20v-2.82h-1.66c-.19-.4-.4-.78-.65-1.14a10.02 10.02 0 00-1.14-1.14c-.25-.25-.53-.47-.83-.68a10.02 10.02 0 00-1.14-.83c-.25-.19-.5-.38-.78-.54A10.02 10.02 0 0012 2.01zm-1.01 14.15l-1.69-1.69-1.69 1.69c-.39.39-1.02.39-1.41 0l-1.01-1.01c-.39-.39-.39-1.02 0-1.41l1.69-1.69-1.69-1.69c-.39-.39-.39-1.02 0-1.41l1.01-1.01c.39-.39 1.02-.39 1.41 0l1.69 1.69 1.69-1.69c.39-.39 1.02-.39 1.41 0l1.01 1.01c.39.39.39 1.02 0 1.41l-1.69 1.69 1.69 1.69c.39.39.39 1.02 0 1.41l-1.01 1.01c-.39.39-1.02.39-1.41 0z" />
            </svg>
          </button>
        </div>
      </AuthLayout>
    );
  };

  const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Signup attempt:', { name, email, password, terms });
      alert('Signup attempt in console!');
      if (terms) {
        setCurrentPage('verify');
      }
    };

    return (
      <AuthLayout
        title="Sign up"
        subtitle="Sign up for a tutor-edge account"
        image={<LoginImage />}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="******************"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              className="h-4 w-4 text-blue-600 bg-gray-100 dark:bg-gray-700 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
              I agree to the <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Terms of Service</a>
            </label>
          </div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
            Sign up
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account? <a onClick={() => setCurrentPage('login')} className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">Login</a>
        </div>
      </AuthLayout>
    );
  };

  const Verify = () => {
    const [code, setCode] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Verification code:', code);
      alert('Verification code sent! In a real app, this would verify the code and redirect.');
    };

    return (
      <AuthLayout
        title="Verify code"
        subtitle="We sent a verification code to your email."
        image={<VerifyImage />}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Enter code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="e.g. 12345"
              required
            />
          </div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
            Verify
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Didn't receive the code? <a href="#" className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">Resend code</a>
        </div>
      </AuthLayout>
    );
  };

  const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Forgot password request for:', email);
      alert('Forgot password link sent to your email!');
      setCurrentPage('setPassword');
    };

    return (
      <AuthLayout
        title="Forgot your password?"
        subtitle="Don't worry, we'll send you an email to help you reset it."
        image={<LockImage />}
        imagePosition="left"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
            Submit
          </button>
        </form>
        <div className="mt-6 text-center text-sm">
          <a onClick={() => setCurrentPage('login')} className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
            &larr; Back to login
          </a>
        </div>
      </AuthLayout>
    );
  };

  const SetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('New password set:', password);
      alert('Password has been reset successfully!');
      setCurrentPage('login');
    };

    return (
      <AuthLayout
        title="Set a password"
        subtitle="Please enter your new password below."
        image={<LockImage />}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="******************"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="******************"
              required
            />
          </div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
            Set Password
          </button>
        </form>
        <div className="mt-6 text-center text-sm">
          <a onClick={() => setCurrentPage('login')} className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
            &larr; Back to login
          </a>
        </div>
      </AuthLayout>
    );
  };

  // SVG and mock images
  const LoginImage = () => (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-56 h-56 md:w-72 md:h-72 text-gray-300 dark:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15h2v2h-2zm1-12a4 4 0 014 4c0 1.5-.78 2.8-1.55 3.55a1.5 1.5 0 01-2.9 0c-.77-.75-1.55-2.05-1.55-3.55a4 4 0 014-4z"/>
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <img
          src="https://placehold.co/400x400/F5F5F5/1C1C1C?text=Mockup"
          alt="Login illustration"
          className="w-full h-full rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );

  const VerifyImage = () => (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-56 h-56 md:w-72 md:h-72 text-gray-300 dark:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15h2v2h-2zm1-12a4 4 0 014 4c0 1.5-.78 2.8-1.55 3.55a1.5 1.5 0 01-2.9 0c-.77-.75-1.55-2.05-1.55-3.55a4 4 0 014-4z"/>
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <img
          src="https://placehold.co/400x400/F5F5F5/1C1C1C?text=Mockup"
          alt="Verification illustration"
          className="w-full h-full rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );

  const LockImage = () => (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-56 h-56 md:w-72 md:h-72 text-gray-300 dark:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 8h-1V6a5 5 0 00-10 0v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM8 6a4 4 0 018 0v2H8zm4 9a2 2 0 112-2 2 2 0 01-2 2z"/>
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <img
          src="https://placehold.co/400x400/F5F5F5/1C1C1C?text=Lock"
          alt="Lock illustration"
          className="w-full h-full rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );

  // Switch statement to render the correct page component based on state
  switch (currentPage) {
    case 'login':
      return <Login />;
    case 'signup':
      return <Signup />;
    case 'verify':
      return <Verify />;
    case 'forgotPassword':
      return <ForgotPassword />;
    case 'setPassword':
      return <SetPassword />;
    default:
      return <Login />;
  }
};

export default App;
