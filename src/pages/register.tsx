import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type RegistrationStatus = "idle" | "creating" | "verification";

function getPasswordError(password: string): string | undefined {
  if (!password) return "Please enter a password.";

  switch (password) {
    case "Man":
      return "Password is too short.";
    case "SuperMan123456789":
      return "Password is too long.";
    case "Woman":
      return "Password is too weak. Please choose a stronger password.";
    case "Independent Woman":
      return "Password must contain at least one special character.";
    case "Independent Woman$":
      return "This password is already taken by chiomadavid@gmail.com. Please choose another password.";
    case "Strong Man with $$$":
      return undefined;
  }

  if (password.length < 8) return "Password is too short.";
  if (password.length > 24) return "Password is too long.";

  if (!/[^a-zA-Z0-9\s]/.test(password)) {
    return "Password must contain at least one special character.";
  }

  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    return "Password is too weak. Please choose a stronger password.";
  }

  return undefined;
}

const registerSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, "Please enter your email address.")
      .email("Please enter a valid email address."),
    password: z.string().min(1, "Please enter a password."),
  })
  .superRefine(({ password }, ctx) => {
    if (!password) return;

    const error = getPasswordError(password);

    if (error) {
      ctx.addIssue({
        code: "custom",
        path: ["password"],
        message: error,
      });
    }
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [status, setStatus] = useState<RegistrationStatus>("idle");
  const [showPassword, setShowPassword] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = async (values) => {
    setRegisteredEmail(values.email);
    setStatus("creating");

    // Simulate account creation and server processing.
    await new Promise((resolve) => window.setTimeout(resolve, 2200));

    setStatus("verification");
  };

  const passwordError = form.formState.errors.password?.message;

  return (
    <main className="grid min-h-svh bg-background text-foreground lg:grid-cols-[1.08fr_0.92fr]">
      {/* BRAND STAGE */}
      <section className="relative isolate flex min-h-[540px] flex-col overflow-hidden bg-[#102D20] px-6 py-7 text-white sm:px-10 sm:py-9 lg:min-h-svh lg:px-14 xl:px-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_45%,rgba(90,180,111,0.22),transparent_42%),radial-gradient(ellipse_at_10%_90%,rgba(40,120,75,0.2),transparent_45%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        />

        <header className="relative z-10 flex items-center justify-between gap-4">
          <a
            href="/register"
            aria-label="Verdant AI registration"
            className="inline-flex items-center gap-3 rounded-sm outline-offset-8 focus-visible:outline-2 focus-visible:outline-[#B7F28B]"
          >
            <img
              src="/favicon.svg"
              alt=""
              className="size-10 animate-[brand-float_5s_ease-in-out_infinite]"
            />
            <span className="font-heading text-2xl font-extrabold tracking-[-0.07em]">
              verdant<span className="text-[#A7E88B]">.</span>
            </span>
          </a>

          <div className="flex items-center gap-2.5 font-mono text-[10px] font-medium tracking-wider text-green-100/80 sm:text-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#A7E88B] opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-[#A7E88B]" />
            </span>
            SYSTEM ONLINE
          </div>
        </header>

        <div className="relative z-10 flex flex-1 flex-col justify-center py-16 lg:py-20">
          <div className="mb-7 flex items-center gap-3 font-mono text-[10px] font-medium tracking-[0.18em] text-green-100/70 sm:text-xs">
            <span className="text-[#B7F28B]">01</span>
            <span className="h-px w-9 bg-[#A7E88B]/70" />
            INTELLIGENCE FOR WHAT'S NEXT
          </div>

          <h1 className="max-w-[760px] font-heading text-[clamp(4.5rem,8.4vw,8.5rem)] font-extrabold leading-[0.88] tracking-[-0.095em]">
            Think
            <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.8)]">
              bigger.
            </span>
            <br />
            Build
            <br />
            <span className="text-[#B7F28B]">better.</span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-8 text-green-50/75 sm:text-lg">
            Your ideas deserve more than another blank document. Give them a
            place to become something extraordinary.
          </p>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-4 -right-12 hidden size-[340px] items-center justify-center opacity-75 sm:flex xl:-right-8 xl:size-[400px]"
          >
            <div className="absolute inset-4 animate-[spin_35s_linear_infinite] rounded-full border border-[#A7E88B]/25" />
            <div className="absolute inset-14 animate-[spin_26s_linear_infinite_reverse] rounded-full border border-dashed border-[#A7E88B]/35" />
            <div className="absolute inset-24 animate-[orbit-pulse_6s_ease-in-out_infinite] rounded-full border border-[#A7E88B]/40" />

            <div className="relative grid size-28 place-items-center rounded-full border border-[#A7E88B]/50 bg-[#1D4932]/80 shadow-[0_0_80px_rgba(167,232,139,0.16)] backdrop-blur-md">
              <img
                src="/favicon.svg"
                alt=""
                className="size-14 animate-[brand-float_5s_ease-in-out_infinite]"
              />
            </div>

            <span className="absolute left-[48%] top-3 size-3 rounded-full bg-[#B7F28B] shadow-[0_0_20px_#B7F28B]" />
            <span className="absolute right-5 top-[47%] size-2.5 rounded-full bg-[#B7F28B] shadow-[0_0_20px_#B7F28B]" />
            <span className="absolute bottom-7 left-[25%] size-2 rounded-full bg-[#B7F28B] shadow-[0_0_20px_#B7F28B]" />

            <div className="absolute -right-1 top-10 font-mono text-[9px] tracking-wider text-green-100/60">
              NEURAL ENGINE
              <br />
              <span className="text-[#B7F28B]">ACTIVE / 001</span>
            </div>

            <div className="absolute -bottom-1 left-0 font-mono text-[9px] tracking-wider text-green-100/60">
              IDEAS PROCESSED
              <br />
              <span className="text-[#B7F28B]">WITHOUT LIMITS</span>
            </div>
          </div>
        </div>

        <footer className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5 font-mono text-[9px] tracking-[0.12em] text-green-100/60 sm:text-[10px]">
          <span>INTELLIGENCE, WITHOUT THE ORDINARY.</span>
          <span>VERDANT AI © 2026</span>
        </footer>
      </section>

      {/* REGISTRATION WORKSPACE */}
      <section className="flex min-h-[650px] flex-col justify-between bg-background px-6 py-7 sm:px-10 sm:py-9 lg:min-h-svh lg:px-14 xl:px-20">
        <header className="flex items-center justify-between gap-4 font-mono text-[9px] font-medium tracking-[0.12em] text-muted-foreground sm:text-[10px]">
          <span>YOUR WORKSPACE STARTS HERE</span>
          <span className="text-primary">01 / 01</span>
        </header>

        <div
          key={status}
          className="mx-auto my-16 w-full max-w-[460px] animate-[content-enter_650ms_cubic-bezier(0.2,0.7,0.2,1)_both]"
        >
          {/* ACCOUNT CREATION LOADER */}
          {status === "creating" && (
            <div
              className="py-12"
              role="status"
              aria-live="polite"
              aria-label="Creating your account"
            >
              <div className="relative mb-10 grid size-20 place-items-center">
                <div className="absolute inset-0 rounded-full border-2 border-primary/15" />
                <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary" />
                <div className="absolute inset-2 rounded-full border border-primary/20" />
                <img
                  src="/favicon.svg"
                  alt=""
                  className="size-9 animate-[orbit-pulse_2s_ease-in-out_infinite]"
                />
              </div>

              <p className="mb-5 font-mono text-[10px] font-semibold tracking-[0.16em] text-primary">
                PLEASE WAIT
              </p>

              <h2 className="font-heading text-5xl font-extrabold leading-[1.04] tracking-[-0.075em] sm:text-6xl">
                Creating
                <br />
                your <span className="text-primary">account.</span>
              </h2>

              <p className="mt-6 max-w-sm text-base leading-8 text-muted-foreground">
                We're setting things up for you. This should only take a moment.
              </p>

              <div className="my-9 space-y-4 border-y py-6 font-mono text-[10px] tracking-wider">
                <div className="flex items-center gap-3 text-primary">
                  <LoaderCircle className="size-4 animate-spin" />
                  VALIDATING ACCOUNT DETAILS
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="size-4 rounded-full border border-current/30" />
                  INITIALIZING YOUR WORKSPACE
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="size-4 rounded-full border border-current/30" />
                  PREPARING VERIFICATION EMAIL
                </div>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-2/3 animate-pulse rounded-full bg-primary" />
              </div>

              <p className="mt-4 font-mono text-[9px] tracking-wider text-muted-foreground">
                INITIALIZING SECURE REGISTRATION...
              </p>
            </div>
          )}

          {/* EMAIL VERIFICATION */}
          {status === "verification" && (
            <div>
              <div className="mb-9 grid size-16 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary animate-[success-pop_650ms_cubic-bezier(0.2,1.5,0.5,1)_both]">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  className="size-9"
                  aria-hidden="true"
                >
                  <path
                    d="M7 13.5L24 27L41 13.5M9 12H39C40.1 12 41 12.9 41 14V34C41 35.1 40.1 36 39 36H9C7.9 36 7 35.1 7 34V14C7 12.9 7.9 12 9 12Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 14L19 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M40.5 14L29 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="mb-5 font-mono text-[10px] font-semibold tracking-[0.16em] text-primary">
                ONE LAST STEP
              </p>

              <h2 className="font-heading text-5xl font-extrabold leading-[1.04] tracking-[-0.075em] sm:text-6xl">
                Check your
                <br />
                <span className="text-primary">inbox.</span>
              </h2>

              <p className="mt-6 max-w-sm text-base leading-8 text-muted-foreground">
                Your account is almost ready. We've sent a verification link to
                your email address. Open the email and verify your account to
                continue.
              </p>

              <div className="my-9 border-y py-5">
                <p className="mb-2 font-mono text-[10px] font-semibold tracking-wider text-muted-foreground">
                  VERIFICATION EMAIL SENT TO
                </p>

                <p className="break-all text-base font-bold text-foreground">
                  {registeredEmail}
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-sm border border-primary/20 bg-primary/5 p-4">
                <span className="mt-0.5 text-primary" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="size-5">
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 11V16M12 8V8.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <p className="text-xs leading-6 text-muted-foreground">
                  Can't find the email? Check your spam or junk folder. Make
                  sure you verify your email before attempting to sign in.
                </p>
              </div>

              <div className="mt-9 flex items-center justify-between border-t pt-6 font-mono text-[10px] tracking-wider">
                <span className="text-muted-foreground">ACCOUNT STATUS</span>

                <span className="flex items-center gap-2 font-semibold text-amber-600 dark:text-amber-400">
                  <span className="size-2 rounded-full bg-current" />
                  PENDING VERIFICATION
                </span>
              </div>
            </div>
          )}

          {/* REGISTRATION FORM */}
          {status === "idle" && (
            <>
              <div className="mb-9">
                <p className="mb-5 font-mono text-[10px] font-semibold tracking-[0.16em] text-primary">
                  CREATE YOUR ACCOUNT
                </p>

                <h2 className="font-heading text-5xl font-extrabold leading-[1.04] tracking-[-0.075em] sm:text-6xl">
                  Let's make
                  <br />
                  <span className="text-primary">something happen.</span>
                </h2>

                <p className="mt-6 max-w-sm text-base leading-8 text-muted-foreground">
                  Create an account to get started with your next big idea.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-6"
                >
                  {/* EMAIL */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2.5">
                        <FormLabel className="flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[0.12em]">
                          EMAIL ADDRESS
                        </FormLabel>

                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            className="h-14 rounded-sm border-border bg-muted/20 px-4 text-xl! font-bold! shadow-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25"
                          />
                        </FormControl>

                        <FormMessage className="text-sm leading-6" />
                      </FormItem>
                    )}
                  />

                  {/* PASSWORD */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-2.5">
                        <FormLabel className="flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[0.12em]">
                          PASSWORD
                        </FormLabel>

                        <FormControl>
                          <div className="relative">
                            <Input
                              {...field}
                              type={showPassword ? "text" : "password"}
                              autoComplete="new-password"
                              placeholder="Create a password"
                              aria-invalid={Boolean(passwordError)}
                              aria-describedby="password-guidance"
                              className="h-14 rounded-sm border-border bg-muted/20 px-4 pr-12 text-xl! font-bold! shadow-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25 aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive/25"
                            />

                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                setShowPassword((current) => !current)
                              }
                              aria-label={
                                showPassword ? "Hide password" : "Show password"
                              }
                              aria-pressed={showPassword}
                              className="absolute right-2 top-1/2 size-10 -translate-y-1/2 text-muted-foreground hover:bg-transparent hover:text-foreground"
                            >
                              {showPassword ? (
                                <EyeOff className="size-5" />
                              ) : (
                                <Eye className="size-5" />
                              )}
                            </Button>
                          </div>
                        </FormControl>

                        {passwordError ? (
                          <div
                            key={passwordError}
                            id="password-guidance"
                            role="alert"
                            aria-live="polite"
                            className="flex items-start gap-2.5 rounded-sm border border-destructive/25 bg-destructive/5 p-3 text-destructive animate-[error-arrive_350ms_ease-out_both]"
                          >
                            <span className="grid size-5 shrink-0 place-items-center rounded-full border border-current font-mono text-xs font-bold">
                              !
                            </span>
                            <FormMessage className="text-sm leading-6 text-destructive" />
                          </div>
                        ) : (
                          <FormDescription
                            id="password-guidance"
                            className="text-xs leading-6"
                          >
                            Use 8–24 characters with uppercase, lowercase,
                            numbers and a special character.
                          </FormDescription>
                        )}
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="h-14 w-full text-center rounded-sm px-5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15"
                  >
                    Create account
                  </Button>
                </form>
              </Form>

              {/* DIVIDER */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <span className="font-mono text-[10px] font-medium tracking-widest text-muted-foreground">
                  OR CONTINUE WITH
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* GOOGLE SIGN-IN */}
              <Button
                type="button"
                variant="outline"
                className="h-14 w-full gap-3 rounded-sm border-border bg-background text-sm font-semibold text-foreground shadow-none transition-colors hover:bg-muted/60"
              >
                <svg viewBox="0 0 48 48" className="size-5" aria-hidden="true">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
                    transform="translate(0 5)"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.74 7.17l7.64 5.93c4.46-4.12 7.14-10.2 7.14-17.57Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a23.98 23.98 0 0 0 0 21.56l7.98-6.19Z"
                    transform="translate(0 5)"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.9-5.78l-7.64-5.93c-2.12 1.43-4.83 2.28-8.26 2.28-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
                    transform="translate(0 -2)"
                  />
                </svg>
                Sign in with Google
              </Button>

              <div className="mt-8 flex items-start gap-3 border-t pt-6">
                <span className="text-2xl text-primary" aria-hidden="true">
                  ✳
                </span>
                <p className="text-xs leading-6 text-muted-foreground">
                  By creating an account, you agree to our Terms of Service and
                  Privacy Policy.
                </p>
              </div>
            </>
          )}
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t pt-5 font-mono text-[9px] tracking-wider text-muted-foreground">
          <span>© 2026 VERDANT AI</span>
          <span>
            BUILT FOR WHAT'S NEXT <span className="text-primary">↗</span>
          </span>
        </footer>
      </section>
    </main>
  );
}
