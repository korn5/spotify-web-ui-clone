"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Icons } from "@/components/icons";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef(
  ({ className, inset, children, ...props }, ref) => (
    <ContextMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm py-2.5 px-2 text-sm font-semibold outline-none focus:bg-stone-100 data-[state=open]:bg-stone-100 dark:focus:bg-stone-700 dark:data-[state=open]:bg-stone-700",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <Icons.caretRight className="ml-auto h-4 w-4" />
    </ContextMenuPrimitive.SubTrigger>
  )
);
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-stone-100 bg-white p-1 shadow-md animate-in slide-in-from-left-1 dark:border-stone-700 dark:bg-stone-800",
        className
      )}
      {...props}
    />
  )
);
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-stone-100 bg-white p-1 text-stone-700 shadow-md animate-in fade-in-80 dark:border-stone-800 dark:bg-stone-800 dark:text-stone-200",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-2.5 px-2 text-sm font-semibold outline-none focus:bg-stone-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-stone-700",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
);
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef(
  ({ className, children, checked, ...props }, ref) => (
    <ContextMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-stone-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-stone-700",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Icons.check className="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
);
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-stone-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-stone-700",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Icons.circle className="h-2 w-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
);
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Label
      ref={ref}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold text-stone-900 dark:text-stone-300",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
);
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Separator
      ref={ref}
      className={cn(
        "-mx-1 my-1 h-px bg-stone-100 dark:bg-stone-700",
        className
      )}
      {...props}
    />
  )
);
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-stone-500",
        className
      )}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
