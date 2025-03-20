# GitHub Repository Explorer

A web application that allows users to search for GitHub repositories by username, view details, and filter results.

This project implements a responsive, accessible interface with multi-language support and dark mode.

[Live Demo](https://github-repository-explorer-khaki.vercel.app/)

## Features

- Search for GitHub repositories by username
- Infinite scroll for loading more repositories
- Filter repositories by programming language
- Sort repositories by stars or update date
- View repository details (stars, forks, issues, etc.)
- Multi-language support (English and Korean)
- Dark mode / Light mode toggle

## Tech Stack

- **Framework**: Next.js (App Router) + React.js (Function Components + Hooks)
- **Styling**: TailwindCSS
- **Internationalization**: next-i18next
- **Testing**: Jest / React Testing Library
- **Component Documentation**: Storybook
- **API**: GitHub REST API

##  Installation and Setup

### Prerequisites

- Node.js ^20.12.2 or >=22.12.0
- yarn or npm

### Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/PtCookie/github-repository-explorer.git
   cd github-repo-explorer
   ```

2. Install dependencies:
   ```shell
   yarn install
   # or
   npm install
   ```

3. Run the development server:
   ```shell
   yarn run dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Enter a GitHub username in the search box
2. View the list of repositories for that user
3. Use language filter or sort controls to refine results
4. Click on a repository to view detailed information
5. Toggle between light and dark mode using the theme toggle in the header
6. Switch between English and Korean using the language selector

## Running Tests

```shell
# Run all tests
yarn run test
# or
npm run test
```

## Storybook

Explore the component library with Storybook:

```shell
yarn run storybook
# or
npm run storybook
```

Then open [http://localhost:6006](http://localhost:6006) in your browser.

## Internationalization

This project supports English and Korean languages.

To add a new language:

1. Add a new translation in `locales/i18n.json`
2. Update the language selector in `components/LanguageSwitcher.tsx`

## Project Structure

```
github-repo-explorer/
├── .husky/                  # Husky git hooks
├── .storybook/              # Storybook configuration
├── __tests__/
│   ├── components/          # UI components tests
│   └── hooks/               # React hook tests
├── app/                     # Next.js App Router
├── components/              # UI components
├── hooks/                   # Custom React hooks
├── locales/                 # Translation files
├── public/                  # Global assets
├── stories/                 # Storybook stories
└── middleware.ts            # Next.js middleware
```

## License

MIT &copy; [PtCookie](https://devlog.ptcookie.net/)
