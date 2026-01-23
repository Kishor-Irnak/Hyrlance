import React, { useState, useEffect } from "react";
import { WaitlistForm } from "./WaitlistForm";
import { UserCounter, RecentUser } from "./UserCounter";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { database } from "../lib/firebase";
import { ref, onValue } from "firebase/database";

const INITIAL_USERS: RecentUser[] = [
  { initial: "S", color: "bg-orange-400" },
  { initial: "A", color: "bg-brand-teal" },
  { initial: "J", color: "bg-blue-500" },
  { initial: "M", color: "bg-brand-navy" },
];

export const Hero: React.FC = () => {
  const [waitingCount, setWaitingCount] = useState<number | null>(null);
  const [recentUsers, setRecentUsers] = useState<RecentUser[]>(INITIAL_USERS);

  // Load initial count from Firebase on component mount
  useEffect(() => {
    const countRef = ref(database, "waitlistCount");

    // Set up a listener to get real-time updates
    const unsubscribe = onValue(
      countRef,
      (snapshot) => {
        const count = snapshot.val();
        if (count !== null && typeof count === "number") {
          setWaitingCount(count);
        } else if (count === null) {
          // If the path doesn't exist yet, initialize it to 0 or handle accordingly
          setWaitingCount(0);
        }
      },
      (error) => {
        console.error("Error reading from Firebase:", error);
        // Fallback to 0 if database fails and we have no value
        if (waitingCount === null) setWaitingCount(0);
      },
    );

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  const handleUserJoined = (email: string) => {
    setWaitingCount((prev) => (prev || 0) + 1);

    // Extract first letter of email or name part
    const initial = email.charAt(0).toUpperCase();

    // Add new user to the start of the list and remove the last one to keep size constant
    setRecentUsers((prev) => [
      { initial, color: "bg-green-500" }, // New user gets green to signify success
      ...prev.slice(0, 3),
    ]);
  };

  return (
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center py-12 lg:py-20">
      {/* Left Column: Content */}
      <div className="flex flex-col gap-8 text-center lg:text-left animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-slate text-xs font-semibold uppercase tracking-wider w-fit mx-auto lg:mx-0">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
          Coming Soon
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-navy leading-[1.1]">
          Work together, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-slate">
            beautifully.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          The next-generation platform where top-tier clients and expert
          freelancers build the future. No clutter, just connection.
        </p>

        <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0">
          <WaitlistForm onJoin={handleUserJoined} />
          <UserCounter count={waitingCount} users={recentUsers} />
        </div>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 mt-4">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-brand-teal" />
            <span>Curated Talent</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-brand-teal" />
            <span>Zero Fees for Beta</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-brand-teal" />
            <span>Smart Matching</span>
          </div>
        </div>
      </div>

      {/* Right Column: Visual/Abstract UI */}
      <div
        className="relative hidden lg:block h-full min-h-[500px] w-full animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        {/* Abstract shapes representing connection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden">
          {/* UI Mockup Placeholder */}
          <div className="absolute top-[10%] left-[10%] right-[10%] bottom-[-20%] bg-white rounded-t-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-6 flex flex-col gap-6">
            {/* Header of Mockup */}
            <div className="flex items-center justify-between border-b border-gray-50 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              </div>
              <div className="h-2 w-24 bg-gray-100 rounded-full"></div>
            </div>

            {/* Content of Mockup */}
            <div className="flex gap-6 h-full">
              {/* Sidebar */}
              <div className="w-16 flex flex-col gap-4 items-center pt-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 1 ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/20" : "bg-gray-50 text-gray-300"}`}
                  >
                    {i === 1 && (
                      <div className="w-4 h-4 rounded-sm bg-brand-cyan/50"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Main Area */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="h-8 w-48 bg-gray-50 rounded-lg"></div>
                  <div className="h-8 w-24 bg-brand-teal/10 rounded-lg"></div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-brand-teal/30 transition-colors group cursor-default">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-brand-cyan/20"></div>
                      <div className="flex flex-col gap-1">
                        <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                        <div className="h-2 w-10 bg-gray-100 rounded-full"></div>
                      </div>
                    </div>
                    <div className="h-16 w-full bg-white rounded-lg border border-gray-100 mb-2"></div>
                    <div className="flex justify-between items-center mt-3">
                      <div className="h-4 w-12 bg-brand-teal/10 rounded-md text-[10px] text-brand-teal flex items-center justify-center font-medium">
                        Active
                      </div>
                      <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-brand-teal group-hover:text-brand-teal text-gray-300 transition-colors">
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm ring-1 ring-black/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold">
                        JD
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="h-2 w-20 bg-gray-800 rounded-full opacity-80"></div>
                        <div className="h-2 w-12 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                      <div className="h-2 w-[80%] bg-gray-100 rounded-full"></div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <div className="h-6 flex-1 bg-brand-navy rounded-md"></div>
                      <div className="h-6 w-8 bg-gray-100 rounded-md"></div>
                    </div>
                  </div>
                </div>

                {/* List */}
                <div className="mt-4 space-y-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-50 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                        <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="h-2 w-12 bg-gray-100 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements for Depth */}
          <div className="absolute top-20 right-10 p-4 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 animate-pulse-slow">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-tealDark font-bold">
                  MK
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-brand-cyan border-2 border-white rounded-full"></div>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-800">
                  New Proposal
                </div>
                <div className="text-[10px] text-gray-400">Just now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background blobs for the visual column */}
        <div className="absolute -z-10 top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute -z-10 bottom-[-10%] left-[10%] w-[300px] h-[300px] bg-brand-navy/10 rounded-full blur-[80px]"></div>
      </div>
    </div>
  );
};
