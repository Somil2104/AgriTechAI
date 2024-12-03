"use client";

import { subscribeEmail } from "@/actions/subscribe-email";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function SubscribeEmailInput({
  className,
}: {
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const result = await subscribeEmail(email);
    if (result.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    } else {
      toast({
        title: "Success",
        description: result.success,
      });
    }
    setIsLoading(false);
  };

  return (
    <footer
      className={cn(
        "flex flex-col w-full gap-6 p-12 items-center justify-center",
        className
      )}
    >
      <h1 className="text-2xl font-bold">Subscribe to our newsletter</h1>
      <div className="flex flex-row max-w-xl gap-6 items-center justify-center w-full">
        <input
          className="w-full p-4 bg-secondary text-lg rounded-md border-2 border-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-primary text-secondary text-lg font-bold p-4 rounded-md hover:bg-primary/80 transition-colors"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>{" "}
      </div>
    </footer>
  );
}
