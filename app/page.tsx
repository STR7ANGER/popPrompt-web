import { Copy, Search, Sparkles, Zap } from "lucide-react";

import { DownloadPanel } from "@/components/download-panel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="relative flex-1 bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 py-10 md:py-16">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background font-semibold">
              P
            </div>
            <div className="leading-tight">
              <div className="text-sm font-medium tracking-tight">PopPrompt</div>
              <div className="text-xs text-muted-foreground">
                macOS + Windows tray prompts
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="secondary" size="sm">
              <a
                href="https://github.com/STR7ANGER/popPrompt"
                target="_blank"
                rel="noreferrer"
              >
                Source code
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="#download">Download</a>
            </Button>
          </div>
        </header>

        <main className="mt-12 grid gap-10 md:mt-16">
          <section className="grid gap-6">
            <div className="grid gap-4">
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Prompts, always within reach.
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                PopPrompt is a lightweight tray/menu bar app that lets you
                store, search, and instantly copy your most-used prompts—without
                breaking flow.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-border/60 bg-card/30">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Tray-first UX
                  </CardTitle>
                  <CardDescription>
                    Stays out of the way until you need it.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Open PopPrompt from the menu bar / system tray, search fast,
                  and copy in one click.
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/30">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Instant search
                  </CardTitle>
                  <CardDescription>Find the right prompt in seconds.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Type-to-filter, expand inline content, and keep everything
                  local.
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/30">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Copy className="h-4 w-4" />
                    One-click copy
                  </CardTitle>
                  <CardDescription>No more prompt hunting.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Copy your most-used prompts to clipboard immediately—ready to
                  paste anywhere.
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card/30">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Monochrome UI
                  </CardTitle>
                  <CardDescription>Clean black &amp; white aesthetic.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Minimal, techy, and distraction-free—built for daily use.
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="download" className="scroll-mt-24">
            <DownloadPanel />
          </section>

          <footer className="flex flex-col gap-2 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} PopPrompt</div>
            <div className="flex gap-4">
              <a
                className="hover:text-foreground transition-colors"
                href="https://github.com/STR7ANGER/popPrompt"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a className="hover:text-foreground transition-colors" href="#download">
                Download
              </a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
