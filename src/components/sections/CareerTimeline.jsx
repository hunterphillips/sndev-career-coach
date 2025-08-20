const milestones = [
  { title: 'Administrator', salary: '$60K' },
  { title: 'Developer', salary: '$90K' },
  { title: 'Senior Developer', salary: '$130K' },
  { title: 'Lead Developer', salary: '$170K' },
  { title: 'Architect', salary: '$200K+' },
];

export default function CareerTimeline() {
  return (
    <div className="flex flex-col items-center px-4 py-12">
      <div className="relative w-full max-w-7xl overflow-hidden">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 z-0 transform -translate-y-1/2" />

        {/* Scrolling Timeline Container */}
        <div className="relative z-10 flex animate-scroll-left">
          {/* First set */}
          <div className="flex flex-shrink-0">
            {milestones.map(({ title, salary }, index) => (
              <div
                key={`first-${index}`}
                className="flex flex-col items-center text-center flex-shrink-0"
                className="w-32 sm:w-40 md:w-48 lg:w-56"
              >
                <div className="text-sm text-gray-400 font-medium">{title}</div>
                <div className="text-gray-300 text-sm">{salary}</div>
              </div>
            ))}
          </div>
          {/* Second set (duplicate for seamless loop) */}
          <div className="flex flex-shrink-0">
            {milestones.map(({ title, salary }, index) => (
              <div
                key={`second-${index}`}
                className="flex flex-col items-center text-center flex-shrink-0"
                className="w-32 sm:w-40 md:w-48 lg:w-56"
              >
                <div className="text-sm text-gray-400 font-medium">{title}</div>
                <div className="text-gray-300 text-sm">{salary}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-640px);
          }
        }
        
        @media (min-width: 640px) {
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-800px);
            }
          }
        }
        
        @media (min-width: 768px) {
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-960px);
            }
          }
        }
        
        @media (min-width: 1024px) {
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-1120px);
            }
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        @media (min-width: 1024px) {
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
