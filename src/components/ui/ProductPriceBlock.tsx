interface Props {
  price: number
  originalPrice?: number
}

export function ProductPriceBlock({ price, originalPrice }: Props) {
  return (
    <div className="flex items-baseline gap-3 flex-wrap">
      {originalPrice ? (
        <>
          <span className="text-[18px] text-[#7a7870] line-through">${originalPrice.toFixed(2)}</span>
          <span className="text-[32px] font-extrabold text-[#943020]">${price.toFixed(2)}</span>
          <span className="text-[12px] font-semibold text-[#943020] bg-[rgba(148,48,32,0.08)] px-2 py-1 rounded-sm">
            Save ${(originalPrice - price).toFixed(2)}
          </span>
        </>
      ) : (
        <span className="text-[32px] font-extrabold text-[#1a1a18]">${price.toFixed(2)}</span>
      )}
    </div>
  )
}
