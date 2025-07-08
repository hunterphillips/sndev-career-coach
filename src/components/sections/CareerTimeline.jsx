const milestones = [
  { title: 'CSA', salary: '$60K' },
  { title: 'Developer', salary: '$90K' },
  { title: 'Senior Developer', salary: '$125K' },
  { title: 'Lead Developer', salary: '$150K' },
  { title: 'CTA', salary: '$200K+' },
];

export default function CareerTimeline() {
  const timeline = [...milestones, ...milestones];
  return (
    <div className="flex flex-col items-center px-4 py-12">
      <div className="relative w-full max-w-7xl overflow-hidden">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 z-0 transform -translate-y-1/2" />

        {/* Scrolling Timeline Container */}
        <div className="relative z-10">
          <div className="flex animate-scroll-left">
            {timeline.map(({ title, salary }, index) => (
              <div
                key={`first-${index}`}
                className="flex flex-col items-center text-center flex-shrink-0"
                style={{ width: 'calc(100% / 5)', minWidth: '12.5em' }}
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
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
