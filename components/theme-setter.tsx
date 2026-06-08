"use client";

import {
  useLayoutEffect,
} from "react";

type ThemeSetterProps = {
  theme: string;
};

export default function ThemeSetter({
  theme,
}: ThemeSetterProps) {
  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);

  return null;
}
