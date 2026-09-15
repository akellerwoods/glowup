import { cn } from "@/lib/utils";

type Common = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  className?: string;
  hint?: string;
};

export function Field({
  label,
  name,
  required,
  error,
  className,
  hint,
  type = "text",
  placeholder,
  autoComplete,
  defaultValue,
}: Common & {
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  defaultValue?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={name}
        className="text-xs font-semibold tracking-[0.16em] uppercase opacity-70"
      >
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : hint ? `${name}-hint` : undefined}
        className="field"
      />
      {hint && !error ? (
        <p id={`${name}-hint`} className="text-xs opacity-60">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${name}-error`} className="text-gold text-xs">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextArea({
  label,
  name,
  required,
  error,
  className,
  hint,
  placeholder,
  rows = 4,
}: Common & { placeholder?: string; rows?: number }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={name}
        className="text-xs font-semibold tracking-[0.16em] uppercase opacity-70"
      >
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : hint ? `${name}-hint` : undefined}
        className="field resize-y"
      />
      {hint && !error ? (
        <p id={`${name}-hint`} className="text-xs opacity-60">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${name}-error`} className="text-gold text-xs">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function Select({
  label,
  name,
  required,
  error,
  className,
  options,
  defaultValue,
}: Common & { options: { value: string; label: string }[]; defaultValue?: string }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={name}
        className="text-xs font-semibold tracking-[0.16em] uppercase opacity-70"
      >
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue={defaultValue ?? ""}
        aria-invalid={!!error}
        className="field cursor-pointer"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error ? <p className="text-gold text-xs">{error}</p> : null}
    </div>
  );
}

export function Checkbox({
  label,
  name,
  defaultChecked,
  value = "yes",
}: {
  label: React.ReactNode;
  name: string;
  defaultChecked?: boolean;
  value?: string;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-sm">
      <input
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="checked:bg-gold checked:border-gold mt-0.5 h-4 w-4 shrink-0 cursor-pointer appearance-none border border-current"
      />
      <span className="opacity-80">{label}</span>
    </label>
  );
}

export function FormMessage({
  status,
  message,
}: {
  status?: "success" | "error";
  message?: string;
}) {
  if (!status || !message) return null;
  return (
    <p
      role="status"
      aria-live="polite"
      className={cn(
        "border-l-2 py-2 pl-4 text-sm",
        status === "success" ? "border-gold" : "border-white/40",
      )}
    >
      {message}
    </p>
  );
}
