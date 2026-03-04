/// <reference path="../../../types/cally.d.ts" />

import "cally";
import type {} from "../../../types/cally";

function CalendarCard() {
  return (
    <div className="card w-full bg-base-100 border border-base-200 shadow-sm overflow-hidden">
      {/* Permanent Solid Accent Top Bar */}
      <div className="h-1 w-full bg-primary"></div>

      <div className="card-body">
        {/* Ignore the Typescript error! */}
        {/* @ts-ignore */}
        <calendar-date
          className="cally"
          style={{
            "--color-accent": "oklch(var(--p))",
            "--color-text-on-accent": "oklch(var(--pc))",
            "--font-family": "inherit",
            "--border-radius": "0px",
            width: "100%",
          }}
        >
          {/* Header Section - No Navigation Arrows */}
          <div className="flex flex-col mb-5">
            <h1 className="text-3xl font-light tracking-tighter text-base-content">
              {/* @ts-ignore */}
              <calendar-month-name></calendar-month-name>{" "}
              <span className="font-semibold">
                {/* @ts-ignore */}
                <calendar-year></calendar-year>
              </span>
            </h1>
          </div>

          {/* The Calendar Engine */}
          {/* @ts-ignore */}
          <calendar-month
            style={{
              "--day-size": "2.5rem",
              "--day-spacing": "0.5rem",
              "--color-canvas": "transparent",
            }}
          />
          {/* @ts-ignore */}
        </calendar-date>
      </div>
    </div>
  );
}

export default CalendarCard;
