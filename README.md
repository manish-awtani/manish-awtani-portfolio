# Manish Awtani Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Dark/Light Mode Toggle**: Seamless theme switching
- **Responsive Design**: Optimized for desktop and mobile devices
- **Interactive Project Showcase**: Hover effects and video previews with loading states
- **Blog System**: Markdown-based blog posts with syntax highlighting
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Video Loading**: Custom video loader component with progress indicators

## Components

### VideoWithLoader
A custom component that wraps video elements with loading states:

- **Loading Spinner**: Animated spinner while video loads
- **Progress Bar**: Shows buffering progress
- **Error Handling**: Graceful fallback for failed video loads
- **Auto-reset**: Resets loading state when video source changes

```jsx
<VideoWithLoader
  src="path/to/video.mp4"
  className="w-full h-full object-cover"
  autoPlay={true}
  muted={true}
  loop={true}
/>
```

## Tech Stack

- **React 19**: Latest React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **Lucide React**: Additional icons

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── layouts/            # Layout components
├── utils/              # Utility functions and constants
├── theme/              # Theme configuration
└── styles/             # Global styles
```
