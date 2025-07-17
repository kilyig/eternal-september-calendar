"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { differenceInCalendarDays } from "date-fns"
import { enGB } from 'date-fns/locale'

export function EternalSeptemberCalendar() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [dayDiff, setDayDiff] = React.useState<number | null>(differenceInCalendarDays(new Date(), new Date(1993, 8, 1)))

  return (
    <div className="flex flex-col gap-3 items-center">
      <Label className="px-1 font-mono self-center">
        You thought the date was:
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-mono transition-none self-center"
          >
            {date ? date.toLocaleDateString("en-GB", {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            }) : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            defaultMonth={date}
            locale={enGB}
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
              if (date) {
                const baseDate = new Date(1993, 8, 1) // September is month 8 (0-indexed)
                const diffDays = differenceInCalendarDays(date, baseDate)
                setDayDiff(diffDays)
              } else {
                setDayDiff(null)
              }
            }}
          />
        </PopoverContent>
      </Popover>
      <Label className="px-1 font-mono self-center">
        What the date actually is:
      </Label>
      <Button
        variant="outline"
        className="w-48 justify-center font-mono transition-none self-center"
      >
        {dayDiff !== null 
            ? (dayDiff < 0 
                ? date?.toLocaleDateString("en-GB", {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })
                : `${dayDiff + 1} September 1993`)
            : "Select date"}
      </Button>
    </div>
  )
}
