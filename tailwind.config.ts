import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				'custom-bg': '#235956',
        'custom-dark': '#25625f',
        'custom-gradient': '#2a6865',
				'custom-color': '#25625f',
        'custom-yellow': '#c4e652',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			backgroundImage: {
				"hero-gradient": "linear-gradient(135deg, #1A524F 0%, rgba(26, 82, 79, 0.9) 100%)",
				"advantages-gradient": "linear-gradient(90deg, #B9DF4C 0%, rgba(185, 223, 76, 0.9) 100%)",
				"footer-gradient": "linear-gradient(135deg, #1A524F 0%, rgba(26, 82, 79, 0.95) 100%)",
        'custom-gradient-pattern': `
          linear-gradient(#2a6865 2.8px, transparent 2.8px),
          linear-gradient(90deg, #2a6865 2.8px, transparent 2.8px),
          linear-gradient(#2a6865 1.4px, transparent 1.4px),
          linear-gradient(90deg, #2a6865 1.4px, #25625f 1.4px)
        `,
				'custom-pattern': "url(\"data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 0H0v36h36V0zM15.126 2H2v13.126c.367.094.714.24 1.032.428L15.554 3.032c-.188-.318-.334-.665-.428-1.032zM18 4.874V18H4.874c-.094-.367-.24-.714-.428-1.032L16.968 4.446c.318.188.665.334 1.032.428zM22.874 2h11.712L20 16.586V4.874c1.406-.362 2.512-1.468 2.874-2.874zm10.252 18H20v13.126c.367.094.714.24 1.032.428l12.522-12.522c-.188-.318-.334-.665-.428-1.032zM36 22.874V36H22.874c-.094-.367-.24-.714-.428-1.032l12.522-12.522c.318.188.665.334 1.032.428zm0-7.748V3.414L21.414 18h11.712c.362-1.406 1.468-2.512 2.874-2.874zm-18 18V21.414L3.414 36h11.712c.362-1.406 1.468-2.512 2.874-2.874zM4.874 20h11.712L2 34.586V22.874c1.406-.362 2.512-1.468 2.874-2.874z' fill='%231d7465' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E\")",
			},
			'custom-yellow-pattern': `
			repeating-radial-gradient(circle at 0 0, transparent 0, #c4e652 14px),
			repeating-linear-gradient(#c8ec5155, #c8ec51)
		`,
			backgroundSize: {
        'custom-pattern': '70px 70px, 70px 70px, 14px 14px, 14px 14px',
			},
			backgroundPosition: {
        'custom-pattern': `
          -2.8px -2.8px, -2.8px -2.8px,
          -1.4px -1.4px, -1.4px -1.4px
        `,
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
