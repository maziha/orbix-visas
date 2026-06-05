"use client";

import { ChevronDown } from "lucide-react";
import { useId } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import type { PickOption } from "@/lib/enquiry-options";

type SentenceInlineInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: "text" | "tel" | "email";
  required?: boolean;
  autoComplete?: string;
  className?: string;
  width?: "sm" | "md" | "lg";
};

const widthClass = {
  sm: "sentence-blank-input--sm",
  md: "sentence-blank-input--md",
  lg: "sentence-blank-input--lg",
};

export function SentenceInlineInput({
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  autoComplete,
  className,
  width = "md",
}: SentenceInlineInputProps) {
  return (
    <input
      type={type}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={cn("sentence-blank-input", widthClass[width], className)}
    />
  );
}

type SentenceInlinePickProps = {
  value: string;
  onChange: (value: string) => void;
  options: PickOption[];
  placeholder: string;
  ariaLabel: string;
  required?: boolean;
  layout?: "popover" | "chips";
};

export function SentenceInlinePick({
  value,
  onChange,
  options,
  placeholder,
  ariaLabel,
  required,
  layout = "popover",
}: SentenceInlinePickProps) {
  const listId = useId();
  const selected = options.find((o) => o.value === value);
  const display = selected?.label ?? placeholder;

  if (layout === "chips" || options.length <= 4) {
    return (
      <span className="sentence-inline-pick sentence-inline-pick--chips" role="group" aria-label={ariaLabel}>
        {options.map((option) => {
          const active = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(option.value)}
              className={cn("sentence-chip", active && "sentence-chip--active")}
            >
              {option.label}
            </button>
          );
        })}
      </span>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={ariaLabel}
          aria-haspopup="listbox"
          aria-expanded={undefined}
          className={cn("sentence-blank-trigger", !value && "sentence-blank-trigger--empty")}
        >
          <span>{display}</span>
          <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-1" align="start">
        <ul id={listId} role="listbox" aria-label={ariaLabel} className="max-h-64 overflow-y-auto">
          {options.map((option) => (
            <li key={option.value} role="none">
              <button
                type="button"
                role="option"
                aria-selected={value === option.value}
                onClick={() => onChange(option.value)}
                className={cn(
                  "sentence-pick-option w-full text-left",
                  value === option.value && "sentence-pick-option--active",
                )}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
