# ath-button

## Description

Buttons are interactive components used to trigger actions or decisions. They are fundamental to standardize interaction, ensure consistency, accessibility, and reusability across products. Each button variant must clearly communicate the action it performs through well-defined labels, states, and styles.

---

## When to use

- To trigger primary or important actions.
- To emphasize a relevant action in an interface.
- To guide the user through the interface using button hierarchy.
- On touch devices, using large and well-spaced buttons to ensure precise interaction.

---

## When not to use

- When there are too many buttons on the interface.
- When the action is not immediate.
- For static content.
- When there is not enough space for safe clicks.
- When the action is already duplicated by another interactive element.

---

## Anatomy

- **Icon**
- **Button text**

---

## Variants (Visual hierarchy)

### High relevance

- Highest contrast button.
- Used for final actions or to unlock a flow.
- Examples: Create, Save, Confirm, Done.

### Medium relevance

- Outlined button.
- Used for secondary actions or to exit a flow.
- Examples: View all, Cancel, Edit.

### Low relevance

- Less visual prominence.
- Used for low-emphasis actions.
- Examples: Learn more, View more, Change, Print.

---

## Appearance

- **Primary**: Uses the brand color.
- **Secondary**: Uses a neutral color.

---

## Clear variant

- Uses the same color but with a clear (transparent) fill.

Accessibility rules:

- Minimum 3:1 contrast between the button background and adjacent color.
- Minimum 4.5:1 contrast between text and its background.
- Use with an icon whenever possible.
- If no representative icon can be used, consider using a medium-relevance button instead.

---

## Sizes

- **xs**
  - Padding Y: 4px
  - Line height: 16px
  - Font size: 14px

- **sm**
  - Padding Y: 6px
  - Line height: 20px
  - Font size: 14px

- **md**
  - Padding Y: 8px
  - Line height: 24px
  - Font size: 16px

- **lg**
  - Padding Y: 16px
  - Line height: 32px
  - Font size: 16px

---

## Icon & label

- **none**: Text only.
- **left**: Icon to the left of the label.
- **right**: Icon to the right of the label.
- **icon only**: Icon only.

---

## States

- default
- hover
- focus
- active
- disabled

---

## Button combinations

### Do

- Secondary action + primary action.

### Don't

- Avoid using two primary buttons together.

---

## Button copy guidelines

- Be brief (1–3 words).
- Be descriptive.
- Use verb + noun.
- Prefer infinitive over imperative.
- First letter uppercase, rest lowercase.
- No final period and no bold text.

Examples:

- **Do**: Iniciar solicitud
- **Don't**: ESTE PRODUCTO ES PARA MÍ
- **Do**: Ir a home
- **Don't**: Ir a Home

---

## Theming

### Modes

- Light
- Dark

### Themes

- Commercial: does not affect the button appearance.

---

## Accessibility

- Do not vary color, size, or other specifications.
- Button background must have at least 3:1 contrast with the surrounding background.
- Button text must have at least 4.5:1 contrast with its background.
- Focus state must maintain at least 3:1 contrast against background and adjacent elements.
- Do not use two primary buttons of the same hierarchy together.
- Avoid complex gestures; provide simple gesture alternatives.

---

## Do

- Use only one primary button per view or action group.
- Use loading/disabled states for async actions.
- Use clear hierarchy between primary, secondary, and low-relevance buttons.

---

## Don't

- Do not use primary buttons for secondary or low-priority actions.
- Do not use buttons for navigation or static content.
- Do not overload interfaces with too many buttons.
