# Remotion Video - Book Call Video

This project includes a Remotion video component for creating a promotional video about booking a call.

## Setup

The Remotion dependencies are already installed. To get started:

## Usage

### 1. Preview the Video (Remotion Studio)

Run the Remotion studio to preview and edit the video:

```bash
npm run video
```

This will open Remotion Studio in your browser where you can:
- Preview the video
- Edit props and timing
- See the video in real-time
- Export the video

### 2. Render the Video

To render the video as an MP4 file:

```bash
npm run video:render
```

This will create `out/video.mp4` with your booking call video.

## Customization

You can customize the video by editing `src/remotion/BookCallVideo.tsx`:

- **Title**: Change the main title text
- **Subtitle**: Modify the subtitle message
- **CTA Text**: Update the call-to-action button text
- **Booking URL**: Update the calendar booking link
- **Colors**: Modify the gradient background
- **Animations**: Adjust timing and animation effects

## Video Specifications

- **Duration**: 10 seconds (300 frames at 30fps)
- **Resolution**: 1920x1080 (Full HD)
- **Format**: MP4

## Props

The video accepts these props:

- `bookingUrl`: The Google Calendar booking link
- `title`: Main headline text
- `subtitle`: Supporting text below the title
- `ctaText`: Text for the call-to-action button

## Animation Timeline

- **0-1s**: Title fades in and slides up
- **1-2s**: Subtitle fades in
- **2-3s**: Google Meet icon scales and rotates in
- **3-4s**: CTA button appears with scale animation
- **4-10s**: Button pulses gently

Enjoy creating your video!

