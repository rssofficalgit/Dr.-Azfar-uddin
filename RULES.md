# RULES.md - Project Development Rules

## Purpose

This document defines the **mandatory development rules** for this project.

These rules are **non-negotiable** and must be followed by every AI coding agent (ChatGPT, Claude Code, Cursor, Gemini CLI, GitHub Copilot, etc.) and every human developer working on this project.

Unless I explicitly override a rule, **do not ignore, modify, or bypass any rule defined in this file.**

---

# Rule Priority

When making decisions, always follow this order:

1. User's latest explicit instruction
2. RULES.md
3. Existing project architecture
4. Existing coding style
5. General best practices

Never violate a higher-priority rule because of a lower-priority preference.

---

# Mandatory Compliance

Before writing, modifying, refactoring, or deleting code, mentally verify that your changes comply with every applicable rule in this document.

If a requested implementation would violate these rules:

* Do not silently ignore the issue.
* Explain which rule would be violated.
* Suggest an alternative implementation that satisfies both the request and the project rules.

---

# Never Break Existing Functionality

Unless explicitly instructed:

* Never remove working features.
* Never introduce breaking changes.
* Never change existing behavior unnecessarily.
* Never delete files that are still in use.
* Preserve backward compatibility whenever possible.

---

# Modular Architecture

Always:

* Keep code modular.
* Separate responsibilities.
* Create reusable components.
* Keep files focused on a single responsibility.
* Avoid oversized files.
* Refactor large files into smaller modules when appropriate.

Never place unrelated logic inside a single file.

---

# Clean Code

Always write code that is:

* Readable
* Maintainable
* Scalable
* Reusable
* Well organized
* Properly formatted

Avoid:

* Duplicate code
* Dead code
* Magic numbers
* Hardcoded values
* Deep nesting
* Unclear variable names

---

# File Organization

Create new files whenever appropriate instead of expanding existing files indefinitely.

Organize code into logical folders such as:

* components
* services
* hooks
* utils
* lib
* api
* config
* constants
* types
* middleware
* assets
* styles

---

# Documentation

Whenever a meaningful project change is made:

* Update `memory.md`.
* Update `CHANGELOG.md` (if available).
* Update `TODO.md` when tasks are added or completed.
* Keep documentation synchronized with the codebase.

Code and documentation should never drift apart.

---

# Design System

Follow the project's design system consistently.

Use:

* Inter as the default font.
* Consistent spacing.
* Consistent typography.
* Consistent border radius.
* Consistent shadows.
* Consistent color usage.
* Consistent component patterns.

Do not introduce new visual styles without a clear reason.

---

# Mobile-First Development

Always design and implement for mobile first.

Verify compatibility across:

* Mobile
* Tablet
* Small Desktop
* Large Desktop

No feature is considered complete until it works correctly on every supported breakpoint.

---

# Responsive Quality

Never create:

* Horizontal scrolling
* Broken layouts
* Overflowing content
* Misaligned UI
* Inconsistent spacing

Every UI element must adapt smoothly across supported screen sizes.

---

# SEO

Maintain SEO best practices.

Keep:

* robots.txt
* sitemap.xml
* Metadata
* Canonical URLs
* Semantic HTML

up to date throughout the project.

---

# Performance

Prioritize performance.

Avoid:

* Unnecessary re-renders
* Large bundle sizes
* Duplicate dependencies
* Unoptimized images
* Layout shifts
* Blocking resources

---

# Accessibility

Ensure the UI is accessible.

Include:

* Keyboard navigation where appropriate
* Proper labels
* Semantic HTML
* Sufficient color contrast
* Visible focus indicators
* Accessible form controls

---

# Security

Never:

* Expose secrets
* Hardcode API keys
* Commit credentials
* Store sensitive values in client-side code

Always use environment variables for sensitive configuration.

---

# Error Handling

Never ignore errors.

Implement:

* Proper validation
* User-friendly error messages
* Logging where appropriate
* Graceful fallbacks

---

# Dependencies

Before adding a new dependency:

* Prefer built-in framework features.
* Reuse existing packages.
* Avoid unnecessary libraries.
* Keep the project lightweight.

---

# Code Review Checklist

Before considering any task complete, verify:

* Code compiles successfully.
* No linting errors.
* No type errors.
* No broken imports.
* No unused code.
* No duplicate logic.
* Responsive behavior verified.
* Design system followed.
* Documentation updated.
* Existing functionality preserved.

---

# AI Agent Behavior

When implementing any task:

1. Analyze the existing architecture first.
2. Reuse existing components whenever possible.
3. Avoid duplicate implementations.
4. Respect project conventions.
5. Keep changes minimal but scalable.
6. Update documentation automatically.
7. Explain major architectural decisions when introducing them.

Never make unnecessary changes outside the requested scope.

---

# Final Rule

Treat this document as the project's constitution.

These rules remain in effect for the lifetime of the project unless I explicitly instruct you to modify or remove them.

Never assume these rules no longer apply simply because they are not repeated in future prompts.
