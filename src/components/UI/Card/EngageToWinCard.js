import React from 'react'

const EngageToWinCard = ({data}) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-[#313131] font-extrabold text-xl">{data.title}</h2>
        <p className="text-base text-[#303030]">{data.description}</p>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        {data?.step.map((step, idx) => (
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold leading-9 text-[#2458F1]">{step.number}</span>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <div className="p-4 border border-[#6E6E6E] bg-[#F9F9F9] rounded-[10px]">
        <p className="text-[#6E6E6E]">{data.disclaimer}</p>
      </div>
    </div>
  )
}

export default EngageToWinCard