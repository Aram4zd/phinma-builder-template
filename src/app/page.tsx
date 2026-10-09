import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// This is the starter screen. Once Ticket 01 is done and you can see this
// page on your phone, delete everything here and build your own app.

const steps = [
  {
    n: "01",
    title: "Get it live",
    body: "If you are reading this on a vercel.app URL, this step is done. Put that URL at the top of your README and open it on your phone.",
  },
  {
    n: "02",
    title: "Find the real problem",
    body: "Run /grill-with-docs in Claude Code. You will be asked about a real person you have watched struggle. Have an answer.",
  },
  {
    n: "03",
    title: "Pitch it",
    body: "Run /pitch to turn your problem into a three-minute script for Session 1.",
  },
  {
    n: "04",
    title: "Spec, tickets, build",
    body: "/to-spec, then /to-tickets, then /implement one ticket at a time. Push after every ticket and check the live URL.",
  },
  {
    n: "05",
    title: "Review before you demo",
    body: "/code-review. Fix every red item. An unprotected database on a public URL is a real data leak.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-4 py-12 sm:py-20">
      <header className="flex flex-col gap-3">
        <span className="inline-flex w-fit items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          PHINMA AI Builder Workshop
        </span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Your app is live.
        </h1>
        <p className="text-base text-muted-foreground">
          This page is deployed on the internet right now. Anyone with the link
          can open it. That is the whole point — you will be building on
          something real, not something on your laptop.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What happens next</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          {steps.map((step) => (
            <div key={step.n} className="flex gap-4">
              <span className="font-mono text-sm text-muted-foreground tabular-nums">
                {step.n}
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">{step.title}</p>
                <p className="text-sm text-muted-foreground">{step.body}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex flex-wrap items-center gap-3">
        <Button>Replace this page with your app</Button>
        <span className="text-sm text-muted-foreground">
          src/app/page.tsx
        </span>
      </div>

      <footer className="mt-auto border-t border-border pt-6 text-sm text-muted-foreground">
        One user. One job. Demoable in three minutes.
      </footer>
    </main>
  );
}
