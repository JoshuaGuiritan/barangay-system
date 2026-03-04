function RainForcastCard() {
  const lat: number = 14.5995;
  const lon: number = 120.9842;

  const windyUrl: string = `https://embed.windy.com/embed.html?type=forecast&location=coordinates&lat=${lat}&lon=${lon}&detailLat=${lat}&detailLon=${lon}&metricRain=mm&metricTemp=%C&metricWind=km/h`;

  return (
    <div className="card w-full bg-base-100 shadow-xl border border-base-content/10 overflow-hidden">
      {/* Card Header */}
      <div className="px-4 py-3 border-b border-base-content/5 bg-base-200/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Heroicon: Cloud-Rain (Outline) */}
          <div className="text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1.125 11.25S3 14.25 6 14.25s4.875-3 4.875-3M1.125 11.25s1.875-3 4.875-3 4.875 3 4.875 3m-9.75 0h9.75M13.125 11.25S15 14.25 18 14.25s4.875-3 4.875-3m-9.75 0s1.875-3 4.875-3 4.875 3 4.875 3m-9.75 0h9.75"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11.25v9.75m0-9.75a2.25 2.25 0 0 0-2.25-2.25h-1.5a2.25 2.25 0 0 0-2.25 2.25v9.75m6 0a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v-9.75"
              />
            </svg>
          </div>
          <h2 className="text-sm font-bold tracking-tight">Rain Forecast</h2>
        </div>

        {/* Live Status Indicator */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </span>
          <span className="text-[10px] font-bold uppercase opacity-50 tracking-widest">
            Live
          </span>
        </div>
      </div>

      {/* Iframe Body */}
      <div className="relative group">
        <iframe
          title="Rain Forecast"
          src={windyUrl}
          className="w-full h-[187px] border-0 block"
          loading="lazy"
        />

        {/* Subtle Inner Glow to blend edges */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.05)]"></div>
      </div>

      {/* Footer Bar */}
      <div className="px-4 py-2 bg-base-200/30 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 opacity-40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-14.25V.75m0 19.5V4.5M9 9h.008v.008H9V9Zm.008 2.25H9v.008h.008V11.25Zm.008 2.25H9v.008h.008V13.5Zm3-2.25h.008v.008h-.008V11.25Zm0 2.25h.008v.008h-.008V13.5Zm3-2.25h.008v.008h-.008V11.25Z"
            />
          </svg>
          <span className="text-[10px] text-base-content/40 font-medium">
            Radar Data: Windy.com
          </span>
        </div>
      </div>
    </div>
  );
}

export default RainForcastCard;
