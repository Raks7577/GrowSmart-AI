# GrowSmart AI

## Overview
A mobile-style React web prototype demonstrating an AI-powered agricultural advisory system. This is a frontend-only demonstration app with static data, designed for college project presentation purposes.

## Core Features

### Home Feed Screen
- Instagram-style vertical scrollable feed displaying agricultural content
- Large image cards showing crops and farming techniques
- Each card contains:
  - Crop/technique image
  - Short descriptive title (translatable)
  - Play voice button (simulated functionality with language-specific audio)
- Smooth scrolling with card-based layout

### Voice Assistant Screen
- Siri/Google Assistant inspired interface
- Central circular microphone button with pulsing wave animation
- Voice interaction simulation with status text (translatable):
  - "Tap to speak" (idle state)
  - "Listening..." (active listening simulation)
  - "Speaking..." (response simulation)
- Language-specific audio responses based on selected language
- Clean, minimal design focused on the microphone interface

### Crop Information Screen
- Large crop image display
- "Play Audio" button for simulated voice explanation in selected language
- Brief crop description and key farming tips (translatable content)
- Language-specific audio files for crop information
- Clean, card-based information layout

### Soil Information Screen
- Grid of soil type cards with visual indicators
- Color-coded soil types (Loamy, Clayey, Sandy, etc.)
- Icon-based representation for each soil type
- Quick reference format for soil characteristics (translatable labels)

### Fertilizer Guide Screen
- Recommendation cards showing fertilizer options
- Small icons representing different fertilizers
- Soil and crop pairing information (translatable content)
- Simple, scannable card layout

### Language Selection Screen
- List of available languages: English, Hindi, Tamil, Malayalam, Telugu
- Flag icons or appropriate symbols for each language option
- Simple selection interface with immediate language switching
- Saves selected language preference for the session

## Navigation & UI Design

### Navigation Structure
- Bottom navigation bar with icons for:
  - Home (feed)
  - Assistant (voice interface)
  - Guides (soil/fertilizer info)
  - Settings (language selection)
- Navigation labels are translatable based on selected language
- No header design for clean mobile experience

### Visual Design
- Modern, professional interface with smooth animations
- Color scheme: natural greens, earthy browns, clean white backgrounds
- Large icons and minimal text for intuitive use
- Mobile-first responsive design
- Smooth transitions between screens (fade/slide effects)

## Technical Implementation
- React with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Animation library (Framer Motion) for smooth transitions and microphone animations
- Static JSON data structure for sample content in multiple languages
- Language switching functionality with dynamic text updates
- Audio file management for different languages

## Sample Data Structure
- Crop information (names, images, descriptions, tips) in English, Tamil, Malayalam, Telugu
- Soil types with characteristics and color codes (translatable labels)
- Fertilizer recommendations with compatibility information (translatable content)
- Language options with appropriate flag/symbol representations
- Audio file placeholders or sample files for each supported language
- Translation keys for all UI elements and content

## Multi-language Support
- Dynamic language switching through Settings page
- All UI text labels are translatable
- Content available in English, Tamil, Malayalam, and Telugu
- Language-specific audio files for Voice Assistant responses
- Language-specific audio for Crop Information explanations
- Persistent language selection across app sessions

## Animation Features
- Pulsing microphone button animation
- Smooth screen transitions
- Card hover effects
- Loading states for voice interactions
- Responsive touch feedback
