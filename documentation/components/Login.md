# Login Component Documentation

## Overview
The Login component is a React Native form interface that provides user authentication functionality. It's built using various UI components from a custom component library and integrates with Expo Router for navigation.

## Features
- Email/Phone input field
- Password input field
- Sign In button
- Navigation to registration
- Back button navigation
- Help icon button
- Responsive layout with scroll support

## Dependencies
- React Native
- Expo Router
- Custom UI Components:
  - Box, Button, Heading, HStack, Input, Pressable, Text, VStack
- Lucide React Native (for icons)

## Props
This component doesn't accept any props as it's a standalone page component.

## State Management
The component uses React's useState hook to manage form data:
- `name`: Stores the user's name (currently unused in the form)
- `email`: Stores the user's email
- `password`: Stores the user's password

## Component Structure

### Header Section
- Back button (left side)
- Empty heading space (center)
- Help icon button (right side)

### Main Content
1. Title Section
   - Main heading displaying app name
   - Subtitle with instructions

2. Form Section
   - Email/Phone input field
   - Password input field
   - Sign In button
   - Registration link

3. Footer Section
   - Company branding ("Metina Platforms")

## Usage Example

```typescript
import Register from './path/to/Register';

function App() {
  return <Register />;
}
```