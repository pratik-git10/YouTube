"use client";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/25 rounded-full shadow-none">
            <UserCircleIcon />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
