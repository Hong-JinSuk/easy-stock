'use client';

import { Check, ChevronDown } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Language, LanguageType } from '@/types/types';

type Props = {
  data: Language[];
  language: string;
  setLanguage: (value: LanguageType) => void;
};

export function SelectLanguage({ data, language, setLanguage }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between"
        >
          <img
            src={data.find((lang) => lang.value === language)?.flag}
            className="aspect-[3/2] w-6"
          />
          {data.find((lang) => lang.value === language)?.label}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandList>
            <CommandGroup>
              {data.map((lang) => (
                <CommandItem
                  key={lang.value}
                  value={lang.value}
                  onSelect={(currentValue) => {
                    setLanguage(currentValue as LanguageType);
                    setOpen(false);
                  }}
                >
                  <img src={lang.flag} className="aspect-[3/2] w-6" />
                  {lang.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      language === lang.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
