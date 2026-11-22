# Rick and Morty Explorer — UI Component Library

A reusable Angular UI component library built as part of the Instaleap Frontend Technical Challenge. This project combines a standalone component library with a demonstration application that consumes data from the Rick and Morty API.

## Overview

The project is organized into two main parts:

- **UI Library (`ui-lib`):** A reusable collection of standalone UI components designed to be modular, reusable and configurable.
- **Demo Application (`demo-app`):** An application that demonstrates how the library components can be integrated into a real application using data from the Rick and Morty API.

The application allows users to browse characters, episodes and locations, filter characters by status, navigate through paginated results and interact with records through a table interface.

## Features

- Reusable standalone UI components.
- Angular Signals for reactive state management.
- Character, episode and location exploration.
- Character status filtering.
- Pagination with 20 records per page.
- Loading skeletons.
- Error and empty states.
- Record details modal.
- Delete confirmation modal.
- Local record removal.
- Responsive layout.
- Dark interface with green accent colors.
- Strict TypeScript configuration.

## Tech Stack

- Angular 21
- TypeScript
- Tailwind CSS
- Angular Signals
- Vitest
- Rick and Morty API
- Git

## Project Architecture

The project uses an Angular workspace with two separate projects.

```text
projects/
├── ui-lib/
│   └── src/
│       ├── lib/
│       │   ├── ui-button/
│       │   ├── ui-card/
│       │   ├── ui-select/
│       │   └── ui-table/
│       └── public-api.ts
│
└── demo-app/
    └── src/
        └── app/
            ├── models/
            ├── services/
            ├── app.ts
            └── app.html
```

### UI Library

The `ui-lib` project contains reusable components that can be consumed through the library's public API.

| Component | Description |
|---|---|
| `ui-button` | Reusable button with configurable presentation and behavior. |
| `ui-card` | Reusable card container for content presentation. |
| `ui-select` | Reusable selection component. |
| `ui-table` | Generic table supporting configurable columns, data, loading, empty and error states, and row actions. |

The library exposes its components through `projects/ui-lib/src/public-api.ts`.

### Demo Application

The `demo-app` project consumes the components exported by the UI library and integrates them with the Rick and Morty API.

It includes:

- Resource selection for characters, episodes and locations.
- Character status filtering.
- Pagination.
- Table rendering.
- Loading, error and empty states.
- Record details.
- Local record deletion.

## API Integration

Data is retrieved from the [Rick and Morty API](https://rickandmortyapi.com/).

The application supports the following resources:

- Characters
- Episodes
- Locations

The demo application manages resource data, loading states, errors, pagination and filtering through its application services.

## Design Decisions

- **Standalone components:** Components do not depend on traditional NgModules, improving modularity and reuse.
- **OnPush change detection:** Components use `ChangeDetectionStrategy.OnPush`.
- **Angular Signals:** Reactive state is managed with modern Signals APIs.
- **Strict typing:** TypeScript strict configuration is enabled to improve code reliability.
- **Public API:** Library components are exported through a centralized public API.
- **Separation of concerns:** UI components are separated from API integration and application state management.
- **Reusable table:** The table is designed to receive configurable columns and data rather than being tied to a specific resource.
- **Tailwind CSS:** Utility-first styling is used to maintain a consistent visual design.

## Requirements

- Node.js
- npm
- Angular CLI

## Installation

Clone the repository:

```bash
git clone https://github.com/johan-pasto/rick-and-morty-ui-library.git
```

Navigate to the project directory:

```bash
cd rick-and-morty-ui-library
```

Install dependencies:

```bash
npm install
```

## Development

### Run the Demo Application

```bash
ng serve demo-app
```

Open your browser at:

```text
http://localhost:4200/
```

### Build the UI Library

```bash
ng build ui-lib
```

### Build the Demo Application

```bash
ng build demo-app
```

Build artifacts are generated in the `dist/` directory.

## Testing

Run the UI library tests:

```bash
ng test ui-lib --watch=false
```

Run the demo application tests:

```bash
ng test demo-app --watch=false
```

## Repository Structure

```text
rick-and-morty-ui-library/
├── projects/
│   ├── demo-app/
│   └── ui-lib/
├── docs/
├── README.md
├── package.json
├── angular.json
└── tsconfig.json
```

## Author

Developed as part of the Instaleap Frontend Technical Challenge.

## Resources

- [Angular](https://angular.dev/)
- [Angular CLI](https://angular.dev/tools/cli)
- [Rick and Morty API](https://rickandmortyapi.com/)
- [Tailwind CSS](https://tailwindcss.com/)
