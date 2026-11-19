import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Eye,
  EyeOff,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type SettingsSection = "profile" | "security" | "notifications" | "billing";
type SecurityView = "overview" | "change-password";

export default function SecurityPage() {
  const navigate = useNavigate();
  const deleteAccount = () => {
    navigate("/checkout-delete");
  };

  const [section, setSection] = useState<SettingsSection>("profile");
  const [securityView, setSecurityView] = useState<SecurityView>("overview");
  const [showPasswords, setShowPasswords] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
    confirm: "",
  });

  const navigation: {
    id: SettingsSection;
    label: string;
    description: string;
    icon: typeof UserRound;
  }[] = [
    {
      id: "profile",
      label: "My profile",
      description: "Manage your personal information",
      icon: UserRound,
    },
    {
      id: "security",
      label: "Security",
      description: "Manage your password and account security",
      icon: ShieldCheck,
    },
    {
      id: "notifications",
      label: "Notifications",
      description: "Choose how you receive updates",
      icon: Bell,
    },
    {
      id: "billing",
      label: "Billing & plans",
      description: "Manage your subscription",
      icon: CreditCard,
    },
  ];

  const updateField = (field: keyof typeof passwords, value: string) => {
    setPasswords((current) => ({ ...current, [field]: value }));
  };

  const updatePassword = () => {
    if (
      !passwords.current.trim() ||
      !passwords.next.trim() ||
      !passwords.confirm.trim() ||
      passwords.next !== passwords.confirm ||
      isProcessing
    ) {
      return;
    }

    setIsProcessing(true);

    window.setTimeout(() => {
      navigate("/checkout");
    }, 3000);
  };

  const goToSecurity = () => {
    setSection("security");
    setSecurityView("overview");
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
              Account settings
            </span>
            <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              S
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-10 animate-[content-enter_650ms_ease_both]">
          <p className="mb-3 text-sm font-semibold text-primary">
            ACCOUNT PREFERENCES
          </p>
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Settings
          </h1>
          <p className="mt-3 text-muted-foreground">
            Manage your account, preferences, and security.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside>
            <div className="mb-5 rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  S
                </div>
                <div className="min-w-0">
                  <p className="truncate font-semibold">Samuel Benny</p>
                  <p className="truncate text-sm text-muted-foreground">
                    samuel@example.com
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
                <span className="size-2 rounded-full bg-primary" />
                <span className="text-xs font-medium text-muted-foreground">
                  FREE PLAN
                </span>
              </div>
            </div>

            <nav className="space-y-1" aria-label="Settings navigation">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = section === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSection(item.id);
                      if (item.id === "security") {
                        setSecurityView("overview");
                      }
                    }}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-5 shrink-0" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-xs opacity-75">
                        {item.description}
                      </span>
                    </span>
                    <ChevronRight className="size-4 shrink-0" />
                  </button>
                );
              })}
            </nav>
          </aside>

          <section className="min-w-0">
            {section === "profile" && (
              <div className="animate-[content-enter_500ms_ease_both]">
                <div className="mb-6">
                  <h2 className="font-heading text-xl font-bold">My profile</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your personal information and account details.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card">
                  <div className="border-b border-border p-6 sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                      <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
                        S
                      </div>

                      <div>
                        <h3 className="font-heading text-xl font-bold">
                          Samuel Benny
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          samuel@example.com
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                          <CheckCircle2 className="size-3.5" />
                          Email verified
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 p-6 sm:p-8">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>First name</Label>
                        <Input
                          value="Samuel"
                          readOnly
                          className="h-12 bg-muted/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Last name</Label>
                        <Input
                          value="Benny"
                          readOnly
                          className="h-12 bg-muted/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Email address</Label>
                      <Input
                        value="samuel@example.com"
                        readOnly
                        className="h-12 bg-muted/20"
                      />
                    </div>

                    <div className="border-t border-border pt-6">
                      <Button
                        variant="outline"
                        onClick={goToSecurity}
                        className="gap-2"
                      >
                        Go to security settings
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 animate-[content-enter_500ms_ease_both]">
                  <div className="mb-4">
                    <h3 className="font-heading text-lg font-bold">
                      Danger zone
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Actions here can permanently affect your account.
                    </p>
                  </div>

                  <div className="rounded-xl border border-destructive/30 bg-card p-6 sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="max-w-lg">
                        <h4 className="font-semibold text-destructive">
                          Delete your account
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          Permanently delete your Verdant AI account, including
                          your profile and associated data. This action cannot
                          be undone.
                        </p>
                      </div>

                      <Button
                        variant="destructive"
                        onClick={deleteAccount}
                        className="w-full shrink-0 gap-2 sm:w-auto"
                      >
                        Delete account
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {section === "security" && (
              <div className="animate-[content-enter_500ms_ease_both]">
                {securityView === "overview" && (
                  <>
                    <div className="mb-6">
                      <h2 className="font-heading text-xl font-bold">
                        Security
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Manage your password and keep your account secure.
                      </p>
                    </div>

                    <div className="rounded-xl border border-border bg-card">
                      <div className="flex items-start gap-4 p-6 sm:p-8">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <KeyRound className="size-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold">Password</h3>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            Change your password regularly to keep your account
                            safe.
                          </p>

                          <Button
                            variant="outline"
                            className="mt-5 gap-2"
                            onClick={() => setSecurityView("change-password")}
                          >
                            Change password
                            <ArrowRight className="size-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="border-t border-border">
                        <div className="flex items-start gap-4 p-6 sm:p-8">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                            <LockKeyhole className="size-5" />
                          </div>

                          <div>
                            <h3 className="font-semibold">
                              Two-factor authentication
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                              Add an extra layer of protection to your account.
                            </p>
                            <span className="mt-3 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                              Not enabled
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {securityView === "change-password" && (
                  <div className="animate-[content-enter_500ms_ease_both]">
                    <button
                      type="button"
                      onClick={() => setSecurityView("overview")}
                      className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ArrowLeft className="size-4" />
                      Back to security
                    </button>

                    <div className="mb-6">
                      <h2 className="font-heading text-xl font-bold">
                        Change password
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Choose a new password for your account.
                      </p>
                    </div>

                    {isProcessing ? (
                      <div
                        className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-border bg-card px-6 text-center"
                        role="status"
                        aria-live="polite"
                      >
                        <div className="relative mb-7 flex size-20 items-center justify-center">
                          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary" />
                          <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <ShieldCheck className="size-7" />
                          </div>
                        </div>

                        <h3 className="font-heading text-xl font-bold">
                          Securing your account
                        </h3>

                        <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
                          We're validating your credentials and preparing your
                          password update. Please don't close this window.
                        </p>

                        <div className="mt-8 space-y-4 text-left">
                          {[
                            "Validating current password",
                            "Checking account security",
                            "Preparing password update",
                          ].map((task) => (
                            <div
                              key={task}
                              className="flex items-center gap-3 text-sm"
                            >
                              <CheckCircle2 className="size-4 text-primary" />
                              <span className="text-muted-foreground">
                                {task}
                              </span>
                            </div>
                          ))}
                        </div>

                        <p className="mt-8 font-mono text-[10px] tracking-widest text-muted-foreground">
                          PROCESSING SECURITY REQUEST...
                        </p>
                      </div>
                    ) : (
                      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                        <div className="mb-6 flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                          <LockKeyhole className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                          <p className="text-sm leading-6 text-muted-foreground">
                            For your security, you'll need to provide your
                            current password before setting a new one.
                          </p>
                        </div>

                        <div className="space-y-5">
                          {(
                            [
                              ["current", "Current password"],
                              ["next", "New password"],
                              ["confirm", "Confirm new password"],
                            ] as const
                          ).map(([field, label]) => (
                            <div key={field} className="space-y-2">
                              <Label htmlFor={field}>{label}</Label>

                              <div className="relative">
                                <Input
                                  id={field}
                                  type={showPasswords ? "text" : "password"}
                                  value={passwords[field]}
                                  onChange={(event) =>
                                    updateField(field, event.target.value)
                                  }
                                  placeholder={`Enter ${label.toLowerCase()}`}
                                  className="h-12 pr-12"
                                />

                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={() =>
                                    setShowPasswords((current) => !current)
                                  }
                                  aria-label={
                                    showPasswords
                                      ? "Hide passwords"
                                      : "Show passwords"
                                  }
                                  className="absolute right-1 top-1/2 size-10 -translate-y-1/2 text-muted-foreground hover:bg-transparent"
                                >
                                  {showPasswords ? (
                                    <EyeOff className="size-4" />
                                  ) : (
                                    <Eye className="size-4" />
                                  )}
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>

                        {passwords.confirm &&
                          passwords.next !== passwords.confirm && (
                            <p className="mt-3 text-sm text-destructive">
                              Your new passwords do not match.
                            </p>
                          )}

                        <div className="mt-8 border-t border-border pt-6">
                          <Button
                            className="h-12 w-full gap-2 sm:w-auto"
                            onClick={updatePassword}
                            disabled={
                              !passwords.current.trim() ||
                              !passwords.next.trim() ||
                              !passwords.confirm.trim() ||
                              passwords.next !== passwords.confirm
                            }
                          >
                            Update password
                            <ArrowRight className="size-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {section === "notifications" && (
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="font-heading text-xl font-bold">
                  Notifications
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Manage how Verdant AI communicates with you.
                </p>
              </div>
            )}

            {section === "billing" && (
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="font-heading text-xl font-bold">
                  Billing & plans
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  You're currently using the Free plan.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
