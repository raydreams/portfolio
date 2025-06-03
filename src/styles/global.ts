import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        /* Light theme variables */
        --bg-primary: #ffffff;
        --bg-secondary: #f8f9fa;
        --text-primary: #1a1a1a;
        --text-secondary: #4a4a4a;
        --accent-primary: #2563eb;
        --accent-secondary: #3b82f6;
        --border-color: #e5e7eb;
        --card-bg: #ffffff;
        --card-border: #e5e7eb;
        --card-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        --nav-bg: rgba(255, 255, 255, 0.8);
        --nav-border: rgba(0, 0, 0, 0.1);
        --code-bg: #f1f5f9;
        --code-text: #0f172a;
    }

    [data-theme='dark'] {
        --bg-primary: #0f172a;
        --bg-secondary: #1e293b;
        --text-primary: #f8fafc;
        --text-secondary: #cbd5e1;
        --accent-primary: #3b82f6;
        --accent-secondary: #60a5fa;
        --border-color: #334155;
        --card-bg: #1e293b;
        --card-border: #334155;
        --card-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3);
        --nav-bg: rgba(15, 23, 42, 0.8);
        --nav-border: rgba(255, 255, 255, 0.1);
        --code-bg: #1e293b;
        --code-text: #e2e8f0;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: var(--bg-primary);
        color: var(--text-primary);
        line-height: 1.5;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    a {
        color: var(--accent-primary);
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
            color: var(--accent-secondary);
        }
    }

    code {
        font-family: 'Fira Code', monospace;
        background-color: var(--code-bg);
        color: var(--code-text);
        padding: 0.2em 0.4em;
        border-radius: 4px;
        font-size: 0.9em;
    }

    pre {
        background-color: var(--code-bg);
        padding: 1em;
        border-radius: 8px;
        overflow-x: auto;
        margin: 1em 0;

        code {
            background: none;
            padding: 0;
        }
    }

    ::selection {
        background-color: var(--accent-primary);
        color: white;
    }

    /* Scrollbar styling */
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        background: var(--bg-secondary);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--border-color);
        border-radius: 5px;

        &:hover {
            background: var(--accent-primary);
        }
    }
` 