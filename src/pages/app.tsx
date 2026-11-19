
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Circle,
  Clock3,
  FileText,
  Lightbulb,
  LoaderCircle,
  LockKeyhole,
  Sparkles,
  WandSparkles,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type GenerationStatus = "idle" | "generating" | "failed";

const businessIdea =
  "I want to build a technology company that provides innovative software solutions to businesses.";

const completedTasks = [
  "Create your account",
  "Verify your email address",
  "Complete your profile",
  "Tell us about your business",
  "Choose your business category",
  "Set your business goals",
  "Explore your dashboard",
];

export default function AppPage() {
  const [status, setStatus] = useState<GenerationStatus>("idle");
  const [idea, setIdea] = useState(businessIdea);

  const generateBusinessPlan = () => {
    if (status !== "idle") return;

    setStatus("generating");

    const duration = Math.floor(Math.random() * 5000) + 4000;

    window.setTimeout(() => {
      setStatus("failed");
    }, duration);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-2.5">
            <img src="/favicon.svg" alt="" className="size-9" />
            <span className="font-heading text-xl font-bold tracking-tight">
              verdant<span className="text-primary">.</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:block">
              Welcome aboard!
            </span>
            <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              S
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <section className="mb-10 animate-[content-enter_650ms_ease_both]">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
            <Sparkles className="size-4" />
            YOUR VERDANT JOURNEY
          </div>

          <h1 className="max-w-2xl font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            You're almost ready to build something great.
          </h1>

          <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
            Just one more step before you can experience the power of Verdant
            AI.
          </p>
        </section>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.5fr]">
          <aside className="space-y-6">
            <section className="rounded-xl border border-border bg-card p-6">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-heading font-bold">Your progress</h2>
                <span className="font-mono text-sm font-semibold text-primary">
                  7/8
                </span>
              </div>

              <div
                className="mb-5 h-2 overflow-hidden rounded-full bg-muted"
                role="progressbar"
                aria-label="Onboarding progress"
                aria-valuemin={0}
                aria-valuemax={8}
                aria-valuenow={7}
              >
                <div className="h-full w-[87.5%] rounded-full bg-primary transition-all" />
              </div>

              <div className="space-y-4">
                {completedTasks.map((task) => (
                  <div key={task} className="flex items-center gap-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3.5" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {task}
                    </span>
                  </div>
                ))}

                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary">
                    <Circle className="size-2 fill-current" />
                  </div>
                  <span className="text-sm font-semibold">
                    Generate your business plan
                  </span>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-primary/15 bg-primary/[0.04] p-5">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Lightbulb className="size-5" />
                <span className="text-sm font-bold">A little tip</span>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                Your business plan is the first step towards turning your idea
                into something real. Let's make it happen!
              </p>
            </section>
          </aside>

          <section className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="border-b border-border bg-muted/20 px-6 py-5 sm:px-8">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <WandSparkles className="size-4" />
                    AI BUSINESS PLAN GENERATOR
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary">
                    BETA
                  </span>
                </div>

                <h2 className="font-heading text-2xl font-bold tracking-tight">
                  Let's bring your idea to life.
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Generate a comprehensive business plan for your next big
                  idea using AI.
                </p>
              </div>

              <div className="p-6 sm:p-8">
                {status === "idle" && (
                  <div className="animate-[content-enter_500ms_ease_both]">
                    <label
                      htmlFor="business-idea"
                      className="mb-3 block text-sm font-semibold"
                    >
                      Tell us about your business idea
                    </label>

                    <Textarea
                      id="business-idea"
                      value={idea}
                      onChange={(event) => setIdea(event.target.value)}
                      className="min-h-36 resize-none rounded-lg border-border bg-muted/20 p-4 text-base leading-7 shadow-none focus-visible:ring-primary/30"
                      placeholder="Describe your business idea..."
                    />

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <span className="text-xs text-muted-foreground">
                        Be as descriptive as possible.
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {idea.length} characters
                      </span>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <LockKeyhole className="size-3.5" />
                        Your idea stays private.
                      </div>

                      <Button
                        onClick={generateBusinessPlan}
                        disabled={!idea.trim()}
                        className="h-12 gap-2 rounded-lg px-6 font-semibold"
                      >
                        <Sparkles className="size-4" />
                        Generate Business Plan
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {status === "generating" && (
                  <div
                    className="flex min-h-[340px] flex-col items-center justify-center py-10 text-center animate-[content-enter_500ms_ease_both]"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="relative mb-8 flex size-24 items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-2 border-primary/15" />
                      <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary" />
                      <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <WandSparkles className="size-7 animate-pulse" />
                      </div>
                    </div>

                    <h3 className="font-heading text-xl font-bold">
                      Generating your business plan
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                      Our AI is working its magic. This may take a few
                      moments...
                    </p>

                    <div className="mt-9 w-full max-w-sm space-y-4 text-left">
                      {[
                        "Analyzing your business idea",
                        "Researching market opportunities",
                        "Building your business strategy",
                        "Preparing your final report",
                      ].map((task, index) => (
                        <div
                          key={task}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          {index === 3 ? (
                            <LoaderCircle className="size-4 animate-spin text-primary" />
                          ) : (
                            <CheckCircle2 className="size-4 text-primary" />
                          )}
                          {task}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-2 font-mono text-[10px] tracking-widest text-muted-foreground">
                      <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                      PROCESSING YOUR REQUEST
                    </div>
                  </div>
                )}

                {status === "failed" && (
                  <div
                    className="flex min-h-[340px] flex-col items-center justify-center py-10 text-center animate-[content-enter_650ms_ease_both]"
                    role="alert"
                    aria-live="assertive"
                  >
                    <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-destructive/10 text-destructive animate-[success-pop_600ms_ease_both]">
                      <XCircle className="size-11" />
                    </div>

                    <span className="mb-3 font-mono text-xs font-semibold tracking-[0.2em] text-destructive">
                      GENERATION FAILED
                    </span>

                    <h3 className="max-w-lg font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                      Your request failed successfully!
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                      We've successfully processed your request. Unfortunately,
                      something went wrong while generating your business plan.
                      Please try again later.
                    </p>

                    <div className="mt-8 w-full max-w-md rounded-lg border border-destructive/15 bg-destructive/[0.04] p-4 text-left">
                      <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-destructive">
                        <FileText className="size-4" />
                        SYSTEM RESPONSE
                      </div>
                      <p className="font-mono text-xs leading-6 text-muted-foreground">
                        STATUS: 200 OK
                        <br />
                        RESULT: TASK FAILED SUCCESSFULLY.
                        <br />
                        ERROR: EVERYTHING WENT ACCORDING TO PLAN.
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      className="mt-7 h-11 gap-2"
                      onClick={() => setStatus("idle")}
                    >
                      Try again
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Clock3 className="size-3.5" />
              Your final onboarding step is almost complete.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
