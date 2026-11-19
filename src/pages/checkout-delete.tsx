import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CheckoutDeletePage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-muted/30 text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-2.5">
            <img src="/favicon.svg" alt="" className="size-9" />
            <span className="font-heading text-xl font-bold tracking-tight">
              verdant<span className="text-primary">.</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <LockKeyhole className="size-4" aria-hidden="true" />
            SECURE CHECKOUT
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        <button
          type="button"
          onClick={() => navigate("/settings/security")}
          className="mb-8 inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to account settings
        </button>

        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-destructive">
            Account closure checkout
          </p>

          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Pay to delete your account.
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            We're sorry to see you go. Before we can permanently delete your
            Verdant AI account, you'll need to settle the account termination
            charges below.
          </p>
        </div>

        {/* Account deletion charge */}
        <section
          aria-labelledby="deletion-charge-heading"
          className="mb-8 rounded-xl border border-destructive/30 bg-destructive/[0.045] p-5 sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <AlertTriangle className="size-5" aria-hidden="true" />
              </div>

              <div>
                <h2
                  id="deletion-charge-heading"
                  className="font-semibold leading-6"
                >
                  Account deletion requires payment
                </h2>

                <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">
                  A one-time account closure fee of $1,499.99 is required before
                  we can process your deletion request.
                </p>
              </div>
            </div>

            <div className="sm:text-right">
              <p className="text-xs font-medium text-muted-foreground">
                AMOUNT REQUIRED
              </p>
              <p className="mt-1 font-heading text-3xl font-bold tracking-tight tabular-nums">
                $1,499.99
              </p>
            </div>
          </div>
        </section>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Payment details */}
          <section aria-labelledby="payment-heading" className="space-y-6">
            <div className="rounded-xl border border-border bg-background p-5 sm:p-7">
              <div className="mb-7">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CreditCard className="size-5" aria-hidden="true" />
                  </div>

                  <div>
                    <h2
                      id="payment-heading"
                      className="font-heading text-lg font-bold"
                    >
                      Payment details
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Enter your payment details to proceed with account
                      closure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between rounded-lg border border-primary/40 bg-primary/[0.04] p-4">
                <div className="flex items-center gap-3">
                  <CreditCard
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold">
                      Credit or debit card
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Visa, Mastercard and more
                    </p>
                  </div>
                </div>

                <CheckCircle2
                  className="size-5 text-primary"
                  aria-label="Selected"
                />
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="cardholder-name">Name on card</Label>
                  <Input
                    id="cardholder-name"
                    name="cardholderName"
                    autoComplete="cc-name"
                    placeholder="Enter name on card"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="card-number">Card number</Label>
                  <Input
                    id="card-number"
                    name="cardNumber"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    placeholder="1234 5678 9012 3456"
                    className="h-12"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry-date">Expiry date</Label>
                    <Input
                      id="expiry-date"
                      name="expiryDate"
                      autoComplete="cc-exp"
                      placeholder="MM/YY"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="security-code">Security code</Label>
                    <Input
                      id="security-code"
                      name="securityCode"
                      inputMode="numeric"
                      autoComplete="cc-csc"
                      placeholder="CVV"
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-7 flex items-start gap-3 border-t border-border pt-5">
                <ShieldCheck
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <p className="text-xs leading-5 text-muted-foreground">
                  Your payment details would be securely processed. This is a
                  demonstration checkout; no actual payment will be collected.
                </p>
              </div>
            </div>

            {/* Account information */}
            <section
              aria-labelledby="account-heading"
              className="rounded-xl border border-border bg-background p-5 sm:p-7"
            >
              <h2
                id="account-heading"
                className="font-heading text-lg font-bold"
              >
                Account being deleted
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Please confirm this is the account you wish to close.
              </p>

              <div className="mt-5 flex items-center gap-3 rounded-lg bg-muted/40 p-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  S
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold">Samuel Benny</p>
                  <p className="break-all text-sm text-muted-foreground">
                    samuel@example.com
                  </p>
                </div>
              </div>
            </section>
          </section>

          {/* Order summary */}
          <aside
            aria-labelledby="order-summary-heading"
            className="rounded-xl border border-border bg-background p-5 sm:p-6 lg:sticky lg:top-8"
          >
            <h2
              id="order-summary-heading"
              className="font-heading text-lg font-bold"
            >
              Order summary
            </h2>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                  <Trash2 className="size-5" aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">
                    Account termination service
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Administrative processing of your account closure.
                  </p>
                  <p className="mt-2 text-sm font-semibold tabular-nums">
                    $999.99
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">
                    Data farewell & departure fee
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Final handling of your data as it says goodbye.
                  </p>
                  <p className="mt-2 text-sm font-semibold tabular-nums">
                    $500.00
                  </p>
                </div>
              </div>
            </div>

            <div className="my-6 space-y-4 border-y border-border py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium tabular-nums">$1,499.99</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-medium tabular-nums">$0.00</span>
              </div>
            </div>

            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="font-semibold">Total due</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  One-time payment
                </p>
              </div>

              <p className="font-heading text-3xl font-bold tracking-tight tabular-nums">
                $1,499.99
              </p>
            </div>

            <Button
              type="button"
              disabled
              variant="destructive"
              className="mt-7 h-12 w-full gap-2 text-sm font-semibold"
            >
              Pay $1,499.99 to delete account
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </Button>

            <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
              Payment is currently unavailable in this demonstration.
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
              <LockKeyhole className="size-3.5" aria-hidden="true" />
              Secure checkout
            </div>
          </aside>
        </div>

        <footer className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-xs leading-5 text-muted-foreground">
            © {new Date().getFullYear()} Verdant AI. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
