import React from 'react'

const EngageToWinCard = ({
  title = "Get 'em Gacha Balls",
  step = [
    "Use Carta card and Carta app to network with fellow attendees",
    "You will get 10 points when you follow an attendee by tapping their Carta to your phone",
    "Get 50 points for every side venue check-in",
    "Every 200 points can be redeemed with 1 Gacha Coin",
    "Redeem your points at Information desk",
    "Insert Coin into the Gacha machine to win a prize",
  ],
  disclaimer = "Point redemption can only be done 1x (once) in 1 day. Attendees are encouraged to collect more points if they want to get more than 1 coin a day"
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className="text-[#202020] font-bold text-base sm:text-lg md:text-xl lg:text-2xl">{title}</h2>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        {step.map((step, idx) => (
          <div className="flex flex-col gap-2 p-4 lg:p-6 border border-[#ECECEC] rounded-[15px]">
            <span className="text-sm text-[#2458F1]">{`Step ${idx+1}`}</span>
            <p className='text-base text-black-900'>{step}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 lg:gap-2 p-4 lg:p-6 border border-[#FFE395] bg-[#FFFEF7] rounded-[15px]">
        <span className='text-sm text-[#A5A5A5]'>Notes</span>
        <p className="text-[#000000]">{disclaimer}</p>
      </div>
    </div>
  )
}

export default EngageToWinCard