import { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { RecursiveKeyValuePair } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      // Primary
      primary: ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--primary), ${opacityValue ?? 1})`,
      "primary-hover": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--primary-hover), ${opacityValue ?? 1})`,
      "primary-active": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--primary-active), ${opacityValue ?? 1})`,
      "primary-text": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--primary-text), ${opacityValue ?? 1})`,
      secondary: ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--secondary), ${opacityValue ?? 1})`,
      "secondary-hover": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--secondary-hover), ${opacityValue ?? 1})`,
      "secondary-active": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--secondary-active), ${opacityValue ?? 1})`,
      "secondary-text": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--secondary-text), ${opacityValue ?? 1})`,
      // Text
      fg: ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--fg), ${opacityValue ?? 1})`,
      "fg-secondary": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--fg-secondary), ${opacityValue ?? 1})`,
      "fg-faint": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--fg-faint), ${opacityValue ?? 1})`,
      // Background
      background: ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--background), ${opacityValue ?? 1})`,
      "background-secondary": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--background-secondary), ${opacityValue ?? 1})`,
      "background-tertiary": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--background-tertiary), ${opacityValue ?? 1})`,
      tooltip: ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--tooltip), ${opacityValue ?? 1})`,
      "tooltip-fg": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--tooltip-fg), ${opacityValue ?? 1})`,
      // System
      warning: ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--warning), ${opacityValue ?? 1})`,
      "warning-hover": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--warning-hover), ${opacityValue ?? 1})`,
      "warning-active": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--warning-active), ${opacityValue ?? 1})`,
      success: ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--success), ${opacityValue ?? 1})`,
      "success-hover": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--success-hover), ${opacityValue ?? 1})`,
      "success-active": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--success-active), ${opacityValue ?? 1})`,
      danger: ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--danger), ${opacityValue ?? 1})`,
      "danger-hover": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--danger-hover), ${opacityValue ?? 1})`,
      "danger-active": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--danger-active), ${opacityValue ?? 1})`,
      // Components
      link: ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--link), ${opacityValue ?? 1})`,
      input: ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--input), ${opacityValue ?? 1})`,
      "input-focus": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--input-focus), ${opacityValue ?? 1})`,
      border: ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--border), ${opacityValue ?? 1})`,
      // Header
      header: ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--header), ${opacityValue ?? 1})`,
      "header-border": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--header-border), ${opacityValue ?? 1})`,
      "header-fg": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--header-fg), ${opacityValue ?? 1})`,
      menu: ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--menu), ${opacityValue ?? 1})`,
      "menu-border": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--menu-border), ${opacityValue ?? 1})`,
      "menu-fg": ({ opacityValue }: { opacityValue: string }) =>
        `rgba(var(--menu-fg), ${opacityValue ?? 1})`,
    } as unknown as RecursiveKeyValuePair<string, string>,
    extend: {
      width: {
        "1/2": "50%",
        "2/2": "100%",
        "1/3": "33.33%",
        "2/3": "66.66%",
        "3/3": "100%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "4/4": "100%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "5/5": "100%",
        "1/8": "calc(100% / 7)",
      },
      zIndex: {
        0: "0",
        5: "5",
        10: "10",
        15: "15",
        20: "20",
        25: "25",
        30: "30",
        35: "35",
        40: "40",
        45: "45",
        50: "50",
        55: "55",
        60: "60",
        65: "65",
        70: "70",
        75: "75",
        80: "80",
        85: "85",
        90: "90",
        95: "95",
        100: "100",
      },
      borderRadius: {
        sm: "4px",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
      },
      keyframes: {
        fadein: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shake: {
          "0%": {
            transform: "translate(0,0) rotate(0deg)",
          },
          "10%": {
            transform: "translate(-4px,-2px) rotate(-1deg)",
            "transform-origin": "center",
          },
          "20%": {
            transform: "translate(4px,2px) rotate(1deg)",
            "transform-origin": "center",
          },
          "30%": {
            transform: "translate(-3px,-2px) rotate(-1deg)",
            "transform-origin": "center",
          },
          "40%": {
            transform: "translate(3px,2px) rotate(1deg)",
            "transform-origin": "center",
          },
          "50%": {
            transform: "translate(-2px,-2px) rotate(-0.5deg) scale(1.01)",
            "transform-origin": "center",
          },
          "60%": {
            transform: "translate(2px,2px) rotate(0.5deg) scale(1.02)",
            "transform-origin": "center",
          },
          "70%": {
            transform: "translate(0,0) rotate(-0deg) scale(1.03)",
            "transform-origin": "center",
          },
          "90%": {
            transform: "translate(-0,-0) rotate(-0deg) scale(1.01)",
            "transform-origin": "center",
          },
          "100%": {
            transform: "translate(0,0) rotate(0deg)",
            "transform-origin": "center",
          },
        },
        modalbounce: {
          "0%": {
            transform: "scale(0.5) translate(-50%,-50%)",
            "transform-origin": "top left",
            opacity: "0",
          },
          "70%": {
            transform: "scale(1.03) translate(-50%,-50%)",
            "transform-origin": "top left",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1) translate(-50%,-50%)",
            "transform-origin": "center",
            opacity: "1",
          },
        },
      },
      animation: {
        fadein: "fadein .3s ease",
        shake: "shake .4s ease",
        modalbounce: "modalbounce .3s ease",
      },
      listStyleType: { square: "square", roman: "upper-roman" },
    },
    // Fonts
    fontFamily: {
      "nunito-sans": "Nunito Sans",
      fira: "Fira Code",
      "dancing-script": "dancing-script",
    },
    //Font Weight
    fontWeight: {
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    minWidth: {
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.62rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "0.1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    maxWidth: {
      "0": "0rem",
      "1": "0.25rem",
      "1.5": "0.375rem",
      "2": "0.5rem",
      "2.5": "0.62rem",
      "3": "0.75rem",
      "3.5": "0.875rem",
      "4": "0.1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem",
      xs: "24rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      "8xl": "1600px",
      full: "100%",
    },
  },
  plugins: [],
};

export default config;
