interface Props { steps: string[]; currentStep: number }

export default function StepIndicator({ steps, currentStep }: Props) {
  return (
    <div className="flex items-center justify-center gap-0 py-5 border-b border-[#e8e6e0] px-4 overflow-x-auto">
      {steps.map((step, i) => {
        const isActive = i === currentStep
        const isComplete = i < currentStep
        const circleClass = isActive
          ? 'bg-[#1a1a18] text-white'
          : isComplete
          ? 'bg-[#2e4a2c] text-white'
          : 'bg-[#e8e6e0] text-[#7a7870]'
        const labelClass = isActive
          ? 'text-[#1a1a18] font-semibold'
          : 'text-[#7a7870]'
        return (
          <div key={step} className="flex items-center gap-0">
            {i > 0 && <div className="flex-1 h-px bg-[#e8e6e0] max-w-[80px] min-w-[24px]" />}
            <div className="flex flex-col items-center gap-1 px-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold ${circleClass}`}>
                {i + 1}
              </div>
              <span className={`text-[11px] whitespace-nowrap ${labelClass}`}>{step}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
