# AGENTS.md - Instructions for AI Coding Agents

## Mandatory Project Directive: Living Memory (`memory.md`)

This project relies on `memory.md` as its central knowledge base and handoff document.

### Core Rule: Always Keep `memory.md` Updated
- **Requirement:** Whenever you make **ANY** modification to the codebase (creating, modifying, refactoring, or deleting files, updating dependencies, changing configuration, tweaking UI/UX, or adding features), you **MUST** update `memory.md` before finishing your turn.
- **Content to Maintain:**
  - **Project Overview & Objectives**
  - **Current Progress & Completion Checklist**
  - **Folder Structure & File Mapping**
  - **Architecture Decisions**
  - **Implemented Features (Chronological Table)**
  - **Database & API Documentation**
  - **Component & Utility Catalog**
  - **Dependencies & Configuration**
  - **Change Log**

---

## Constitution & Rule Compliance (`RULES.md`)

All AI agents must strictly follow the mandatory guidelines defined in `RULES.md`:
1. **Rule Priority:** User Instructions > `RULES.md` > Architecture > Style > Best Practices.
2. **Never Break Existing Functionality:** Preserve working features and backward compatibility.
3. **Modular Architecture:** Maintain isolated single-responsibility files inside `/components`, `/hooks`, `/types`, `/constants`, `/utils`, and `/lib`.
4. **Inter Typography Design System:** Use Inter font globally across all components (`font-sans`).
5. **Mobile-First Responsive System:** Optimize across 4 target breakpoints (Mobile 320-767px, Tablet 768-1023px, Desktop 1024-1439px, Wide Screen 1440px+). Ensure touch targets are at least 44px.
6. **SEO Maintenance:** Keep `robots.txt`, `sitemap.xml`, and dynamic metadata in sync.
7. **Verification:** Run `npm run lint` and `npm run build` before considering any task complete.
8. **Standard Section Padding:** All main layout sections must strictly use `py-8 lg:py-10` (or equivalent spacing) to ensure consistent and balanced vertical spacing throughout the application.
