# What is the recommended directory structure for React components in this application?

The directory structure for React components consists of three categories: Containers, Components, and Atoms.

## The Component Structure

The basic structure of a component is included a component .tsx file, a test file, a story file, and an index file.
The index file is used to export the component.

```bash
├── Component
│   ├── Component.tsx
│   ├── Component.test.tsx
│   ├── Component.stories.tsx
│   ├── index.ts
```

## Containers

The Containers are the same as pages and may include unique components specific to each Container.

```bash
├── containers
│   ├── PageMain
│   │   ├── Main.tsx
│   │   ├── Main.test.tsx
│   │   ├── ComponentForPageMain
│   │   │   ├── ComponentForPageMain.tsx
│   │   │   ├── ComponentForPageMain.test.tsx
│   │   │   ├── ComponentForPageMain.stories.tsx
│   │   │   ├── index.ts
```

## Components

The Components are commonly used components that are used in multiple places.

```bash
├── components
│   ├── CommonlyComponent
│   │   ├── CommonlyComponent.tsx
│   │   ├── CommonlyComponent.test.tsx
│   │   ├── CommonlyComponent.stories.tsx
│   │   ├── index.ts
```

## Atoms

The Atoms are the smallest components that are used in multiple places.
It's like the UI component library.

```bash
├── atoms
│   ├── AtomsComponent
│   │   ├── AtomsComponent.tsx
│   │   ├── AtomsComponent.test.tsx
│   │   ├── AtomsComponent.stories.tsx
│   │   ├── index.ts
```

We hope to switch from Chakra UI to Tailwind CSS, so when we change a component to Tailwind CSS, that component will be part of the Atoms directory.
