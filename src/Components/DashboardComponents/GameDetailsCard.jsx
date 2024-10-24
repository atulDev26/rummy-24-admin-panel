import React from "react";
import { formatAmount } from "../../utils/GlobalFunction/globalFunction";

const GameDetailsCard = ({ totalAmount = 0, dealAmount = 0, poolAmount = 0, pointAmount = 0, liveGames = 0 }) => {


  return (
    <div className="min-w-fit max-w-full p-3 bg-slate-100 dark:bg-[#1F2937] rounded-lg shadow-md">
      <div className="grid grid-cols-2">
        <div className="grid gap-y-1">
          {/* Dynamic values for game amounts */}
          <p className="font-bold text-4xl">₹ {formatAmount(totalAmount)}</p>
          <p className="font-medium text-base">Deals : ₹ {formatAmount(dealAmount)}</p>
          <p className="font-medium text-base">Pool : ₹ {formatAmount(poolAmount)}</p>
          <p className="font-medium text-base">Point : ₹ {formatAmount(pointAmount)}</p>
        </div>
        <div className="bg-red-400 max-h-fit p-3 rounded-md shadow-md">
          {/* Dynamic values for live games */}
          <p className="font-bold text-lg text-rose-50">{liveGames}</p>
          <p className="font-bold text-lg text-rose-50">Live game{liveGames > 1 ? 's' : ''}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsCard;
