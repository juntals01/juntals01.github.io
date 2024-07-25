"use client";

import * as React from "react";

import { Button } from "@headlessui/react";
import { MdKeyboardCommandKey } from "react-icons/md";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Calendar } from "lucide-react";
import PageLinks from "@/lib/pageLinks";

export function SearchCommand() {
  const [open, setOpen] = React.useState(false);

  const openCommand = () => {
    setOpen(!open);
  };
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        onClick={openCommand}
        className="text-sm text-muted-foreground text-[#a3a1a1] bg-[#f0efef] px-3 py-1 rounded-md flex items-center hover:bg-[#d0cece] hover:text-[#101827]"
      >
        <span className="pr-8">Search</span>
        <kbd className="bg-white text-black pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">
            <MdKeyboardCommandKey />
          </span>
          K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          className="h-6"
          placeholder="Type a command or search..."
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {PageLinks.map((link) => (
              <CommandItem key={link.slug}>
                <Calendar className="mr-2 h-4 w-4" />
                <a href={link.slug}>
                  <span>{link.label}</span>
                </a>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
