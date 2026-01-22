import React, { useState } from 'react';
import { Loader2, Sparkles, Send } from 'lucide-react';

interface WaitlistFormProps {
  onJoin: (email: string) => void;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ onJoin }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setErrorMessage('Please enter a valid email address.');
        return;
    }

    setErrorMessage('');
    setStatus('loading');

    try {
      // Using FormData is often more reliable for FormSubmit.co than JSON
      const formData = new FormData();
      formData.append('email', email);
      formData.append('_subject', 'New Hyrlance Waitlist Signup');
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');
      formData.append('message', `New user added to waitlist: ${email}`);

      const response = await fetch("https://formsubmit.co/ajax/kishorirnak4u@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        onJoin(email); // Pass the email back to update UI instantly
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection.');
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/60 rounded-2xl p-5 flex items-center gap-4 animate-fade-in-up shadow-sm">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center flex-shrink-0 text-green-600 shadow-sm">
          <Sparkles size={20} strokeWidth={2.5} />
        </div>
        <div>
          <h3 className="font-semibold text-green-800 text-sm">You're on the list!</h3>
          <p className="text-green-700 text-xs">Please check your inbox to confirm.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="flex items-center relative">
            <input
            type="email"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
                if (errorMessage) setErrorMessage('');
            }}
            placeholder="enter your email address..."
            className={`w-full h-14 pl-5 pr-36 rounded-xl bg-white border ${errorMessage ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : 'border-gray-200 focus:border-brand-teal focus:ring-brand-teal/20'} text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-4 transition-all duration-300 shadow-sm`}
            disabled={status === 'loading'}
            />
            <button
            type="submit"
            disabled={status === 'loading' || !email}
            className="absolute right-2 top-2 bottom-2 bg-brand-navy hover:bg-brand-navyLight text-white px-5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-brand-navy/20 active:scale-95"
            >
            {status === 'loading' ? (
                <Loader2 size={16} className="animate-spin" />
            ) : (
                <>
                <span>Join</span>
                <Send size={14} className="opacity-80" />
                </>
            )}
            </button>
        </div>
        {errorMessage && (
            <p className="absolute -bottom-6 left-2 text-xs text-red-500 font-medium">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};