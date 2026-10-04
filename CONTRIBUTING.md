# Contributing

- Keep components small and semantic.
- Add a Storybook story for every reusable component.
- Use `--lo-*` semantic variables from the token layer.
- Do not hard-code product reward behavior into UI components.
- Check Explorer, Builder, Navigator/Launch, Parent, English, and Arabic/RTL where relevant.
- Review Full / Reduced / Off motion for any animated change.
- Use the 390 / 768 / 1024 / 1440 Storybook viewports before merging screen changes.
- Treat visual-regression failures as review signals; do not update snapshots only to make CI pass.
- Prefer composing existing components, patterns and templates before introducing another abstraction.
- After V3.3 freeze, changes should be bug fixes, accessibility/responsive corrections, missing proven domain states, or explicitly approved product changes.
