const milestones = [
  { title: 'CSA', salary: '$60K' },
  { title: 'Developer', salary: '$90K' },
  { title: 'Senior Developer', salary: '$125K' },
  { title: 'Lead Developer', salary: '$150K' },
  { title: 'CTA', salary: '$200K' },
];

export default function CareerTimeline() {
  return (
    <div className="flex flex-col items-center px-4 py-12">
      <div className="relative w-full max-w-7xl">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 z-0 transform -translate-y-1/2" />

        {/* Timeline Points */}
        <div className="flex justify-between items-center relative z-10">
          {milestones.map(({ title, salary }, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* <div className="w-4 h-4 bg-blue-500 rounded-full mb-2" /> */}
              <div className="text-sm text-gray-400 font-medium">{title}</div>
              <div className="text-gray-300 text-sm">{salary}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
