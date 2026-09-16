import { cn } from "@/lib/utils";

type Common = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  className?: string;
  hint?: string;
};

const labelCls = "label text-[0.6875rem] text-bone/60";

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
      <label htmlFor={name} className={labelCls}>
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
        <p id={`${name}-hint`} className="text-bone/50 text-xs">
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
      <label htmlFor={name} className={labelCls}>
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
        <p id={`${name}-hint`} className="text-bone/50 text-xs">
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
      <label htmlFor={name} className={labelCls}>
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
        "border-l py-1 pl-4 text-sm",
        status === "success" ? "border-gold text-bone" : "border-bone/40 text-bone/80",
      )}
    >
      {message}
    </p>
  );
}
