"use client";

import * as React from "react";
import { Download, GitFork } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Platform = "mac" | "win";

const MAC_DOWNLOAD_URL =
  "https://github.com/STR7ANGER/popPrompt/releases/latest/download/PopPrompt.dmg";
const WIN_DOWNLOAD_URL =
  "https://github.com/STR7ANGER/popPrompt/releases/latest/download/PopPrompt.msi";
const SOURCE_CODE_URL = "https://github.com/STR7ANGER/popPrompt";

function detectPlatform(): Platform {
  const platform =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator as any).userAgentData?.platform ?? navigator.platform ?? "";
  const ua = navigator.userAgent ?? "";
  const combined = `${platform} ${ua}`.toLowerCase();

  if (combined.includes("win")) return "win";
  if (
    combined.includes("mac") ||
    combined.includes("iphone") ||
    combined.includes("ipad")
  ) {
    return "mac";
  }

  return "mac";
}

function DownloadTab({ platform }: { platform: Platform }) {
  const isMac = platform === "mac";
  const href = isMac ? MAC_DOWNLOAD_URL : WIN_DOWNLOAD_URL;
  const buttonLabel = isMac
    ? "Download for macOS (DMG)"
    : "Download for Windows (MSI)";
  const subLabel = isMac ? "Works on macOS" : "Windows x64";

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm text-muted-foreground">Installer</div>
          <div className="text-base font-medium">{subLabel}</div>
        </div>

        <Button asChild className="w-full sm:w-auto">
          <a href={href} target="_blank" rel="noreferrer">
            <Download className="h-4 w-4" />
            {buttonLabel}
          </a>
        </Button>
      </div>

      <div className="rounded-lg border border-border/60 bg-background/30 p-4">
        <div className="text-sm font-medium">Developer note</div>
        <div className="mt-2 text-sm text-muted-foreground">
          {isMac ? (
            <div className="space-y-3">
              <p>
                The macOS download is a{" "}
                <span className="text-foreground">DMG</span>.
              </p>
              <ol className="list-decimal space-y-1 pl-5">
                <li>Open the DMG.</li>
                <li>
                  Drag <span className="text-foreground">PopPrompt.app</span>{" "}
                  into Applications.
                </li>
                <li>
                  Launch PopPrompt from Applications (it lives in the menu bar).
                </li>
              </ol>
              <p>
                If macOS blocks it: right click → Open, or go to System Settings
                → Privacy &amp; Security.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <p>
                The Windows download is an{" "}
                <span className="text-foreground">MSI</span> installer.
              </p>
              <ol className="list-decimal space-y-1 pl-5">
                <li>Run the MSI and finish setup.</li>
                <li>Launch PopPrompt (it lives in the system tray).</li>
              </ol>
              <p>
                If SmartScreen warns: click “More info” → “Run anyway” (only if
                you trust the source).
              </p>
              <p>Uninstall via Settings → Apps → Installed apps → PopPrompt.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function DownloadPanel() {
  const [platform, setPlatform] = React.useState<Platform>(() => {
    if (typeof navigator === "undefined") return "mac";
    return detectPlatform();
  });

  return (
    <Card className="border-border/60 bg-card/30 backdrop-blur supports-[backdrop-filter]:bg-card/25">
      <CardHeader className="gap-1">
        <CardTitle className="text-xl tracking-tight">Download</CardTitle>
        <CardDescription>
          Auto-detects your OS. Switch tabs to grab the right installer.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs value={platform} onValueChange={(v) => setPlatform(v as Platform)}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mac">macOS</TabsTrigger>
            <TabsTrigger value="win">Windows</TabsTrigger>
          </TabsList>
          <TabsContent value="mac" className="mt-6">
            <DownloadTab platform="mac" />
          </TabsContent>
          <TabsContent value="win" className="mt-6">
            <DownloadTab platform="win" />
          </TabsContent>
        </Tabs>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-muted-foreground">
            Source code &amp; build workflow live in the main repo.
          </div>
          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <a href={SOURCE_CODE_URL} target="_blank" rel="noreferrer">
              <GitFork className="h-4 w-4" />
              View source
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
