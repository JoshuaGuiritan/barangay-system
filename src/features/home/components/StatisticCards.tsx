function StatisticCards() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* 1. Pending Review - Clipboard Icon */}
        <div className="card bg-base-100 border-t-4 border-primary shadow-sm transition-all">
          <div className="card-body p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-base-content/60 uppercase tracking-widest">
                  PENDING REQUEST
                </p>
                <h2 className="text-4xl font-black text-base-content mt-1">
                  90
                </h2>
              </div>
              <div className="text-primary bg-primary/10 p-3 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.375m1.875-12h-1.125a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 13.125 21h5.25A2.25 2.25 0 0 0 20.625 18.75V5.25A2.25 2.25 0 0 0 18.375 3H17.25m-4.5 0h1.125m-1.125 0a2.25 2.25 0 0 1 2.25 2.25v13.5a2.25 2.25 0 0 1-2.25 2.25h-1.125a2.25 2.25 0 0 1-2.25-2.25V5.25A2.25 2.25 0 0 1 11.25 3h1.125m-1.125 0a2.25 2.25 0 0 0-2.25 2.25v13.5a2.25 2.25 0 0 0 2.25 2.25h1.125"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Appointment Schedule - Calendar Icon */}
        <div className="card bg-base-100 shadow-sm border-t-4 border-secondary transition-all">
          <div className="card-body p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-base-content/60 uppercase tracking-widest">
                  APPOINTMENTS
                </p>
                <h2 className="text-4xl font-black text-base-content mt-1">
                  90
                </h2>
              </div>
              <div className="text-secondary bg-secondary/10 p-3 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Ready for Pickup - Truck Icon */}
        <div className="card bg-base-100 shadow-sm border-t-4 border-accent transition-all">
          <div className="card-body p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-base-content/60 uppercase tracking-widest">
                  Ready for Pickup
                </p>
                <h2 className="text-4xl font-black text-base-content mt-1">
                  12
                </h2>
              </div>
              <div className="text-accent bg-accent/10 p-3 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125a1.125 1.125 0 0 0 1.125-1.125V11.16a2.25 2.25 0 0 0-.659-1.591l-3.111-3.11c-.634-.633-1.491-.989-2.384-.989H12.75V11.25m0 0h6.75"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatisticCards;
