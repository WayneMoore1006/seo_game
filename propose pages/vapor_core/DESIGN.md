# Design System Strategy: The Cinematic Discovery Engine

This design system is a high-end framework engineered for a premier game discovery platform. It moves away from the utilitarian "database" aesthetic of traditional launchers, opting instead for a "Digital Curator" approach. By prioritizing cinematic immersion, tonal layering, and sophisticated typography, we transform a library of games into a curated gallery of experiences.

## 1. Creative North Star: The Digital Curator
The "Digital Curator" philosophy dictates that the UI must never compete with the art it hosts. Like a high-end gallery, the interface should feel "expensive" yet invisible. We achieve this through **Atmospheric Depth**—using deep charcoals and navy blues to create a sense of infinite space—and **Intentional Asymmetry**, where hero content breaks the grid to create a sense of editorial prestige.

## 2. Color & Surface Architecture
The palette is rooted in the "Deep Space" spectrum. We avoid the flat, "plastic" look of standard dark modes by using sophisticated tonal shifts.

### The "No-Line" Rule
**Prohibition:** Solid 1px borders are strictly forbidden for sectioning. 
**Execution:** Define boundaries exclusively through background color shifts. For example, a `surface-container-low` section should sit directly on a `background` or `surface` base. The transition should be felt, not seen as a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Each "inner" container should use a progressively higher or lower tier to define its importance:
- **Base Layer:** `surface` (#0b0e15) for the main application background.
- **Structural Sections:** `surface-container-low` (#10131b) for sidebars or secondary navigation.
- **Primary Content Cards:** `surface-container` (#161a22).
- **Interactive/Hover Elements:** `surface-bright` (#272c37).

### The "Glass & Gradient" Rule
To elevate interactive elements, we move beyond flat hex codes:
- **Glassmorphism:** Use `surface-variant` at 60% opacity with a `20px` backdrop-blur for floating overlays (e.g., game detail popovers).
- **Signature Gradients:** Main Action CTAs (Primary) must use a subtle linear gradient from `primary` (#71caff) to `primary-container` (#4daadc) at a 135-degree angle. This adds "soul" and weight to the interaction.

## 3. Typography: Editorial Authority
We utilize a dual-font system to balance high-impact discovery with functional legibility.

- **Display & Headlines (Manrope):** Our "Voice." Manrope provides a technical yet premium feel. Use `display-lg` for cinematic titles, ensuring tight letter-spacing (-0.02em) to maintain a bespoke, editorial look.
- **Body & Labels (Inter):** Our "Engine." Inter is used for all metadata and descriptions. Its neutral character ensures maximum readability against dark, complex backgrounds.
- **Hierarchy Tip:** Use `on-surface-variant` (#a9abb4) for secondary metadata (e.g., genre tags, release dates) to create a clear visual separation from the `on-surface` (#eff0fa) title.

## 4. Elevation & Depth
In this system, depth is a product of light and shadow, not lines and boxes.

- **The Layering Principle:** Achieve lift by stacking. Place a `surface-container-highest` card on a `surface-container` background. This "soft lift" feels more natural in a cinematic environment than a drop shadow.
- **Ambient Shadows:** For floating modals, use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow color must be a deep tint of the background, never a generic grey.
- **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use the `outline-variant` token at **15% opacity**. This creates a "suggestion" of a container without breaking the immersion.

## 5. Components & Interactive Patterns

### Cards (The Hero Component)
Cards are the heart of discovery. 
- **Style:** No borders. Use `xl` (0.75rem) rounded corners. 
- **Interaction:** On hover, a card should scale slightly (1.02x) and transition its background from `surface-container` to `surface-container-high`.
- **Imagery:** Support for 16:9 cinematic thumbnails with a subtle `primary` inner glow on hover.

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), `md` (0.375rem) corners. Text color is `on-primary`.
- **Secondary:** Surface-only. Use `surface-container-highest` with `on-surface` text.
- **Tertiary/Ghost:** No container. Use `primary` text. On hover, add a `primary` tint at 10% opacity as a background.

### Chips & Metadata Tags
- **Selection Chips:** Use `secondary-container` backgrounds with `on-secondary-container` text. 
- **Filter Chips:** Should be "Ghost" style—`outline-variant` (20% opacity) border, becoming solid `primary` only when active.

### Input Fields
- **Style:** Use `surface-container-lowest` for the field background to create an "etched" look into the UI.
- **States:** The active state should not use a thick border; instead, use a 1px `primary` bottom-border or a subtle `primary` outer glow (4px blur).

### List Items
- **Prohibition:** No horizontal dividers.
- **Separation:** Use `8` (2rem) or `10` (2.5rem) vertical spacing from the Spacing Scale to define list item boundaries.

## 6. Do’s and Don'ts

### Do:
- **Embrace Negative Space:** Use the `12` (3rem) and `16` (4rem) spacing tokens between major sections to let the cinematic imagery breathe.
- **Use "Tonal" Overlays:** When placing text over game art, use a gradient overlay from `transparent` to `surface-container-lowest` (80% opacity) to ensure readability.
- **Prioritize Motion:** Every hover state should have a `200ms ease-out` transition.

### Don't:
- **Don't use pure white:** The `on-surface` (#eff0fa) is a soft white. Pure #FFFFFF is too jarring against the deep navy palette.
- **Don't use "Drop Shadows" on Cards:** Use tonal layering (shifting background colors) instead. Only use shadows for elements that literally "float" above the UI (Modals, Tooltips).
- **Don't use 1px solid borders:** This is the quickest way to make a premium system look like a generic template.