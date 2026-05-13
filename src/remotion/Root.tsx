import React from 'react';
import { Composition } from 'remotion';
import { HeroVideo }          from './compositions/HeroVideo';
import { ServicesVideo }      from './compositions/ServicesVideo';
import { ProcessVideo }       from './compositions/ProcessVideo';
import { ResultsVideo }       from './compositions/ResultsVideo';
import { BookingIconsLoop }    from './compositions/BookingIconsLoop';
import { ServiceEnginesLoop } from './compositions/ServiceEnginesLoop';
import './style.css';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/*
       * HeroVideo — 30s cinematic brand story
       * 5 scenes: Broken Agency → Capture → Intelligence → Launch → Reveal
       * Render: npm run video:render -- --composition=HeroVideo --output=out/hero.mp4
       */}
      <Composition
        id="HeroVideo"
        component={HeroVideo}
        durationInFrames={900}
        fps={30}
        width={1280}
        height={720}
      />

      {/*
       * ServicesVideo — 12s four AI engines showcase
       * Render: npm run video:render -- --composition=ServicesVideo --output=out/services.mp4
       */}
      <Composition
        id="ServicesVideo"
        component={ServicesVideo}
        durationInFrames={360}
        fps={30}
        width={1280}
        height={720}
      />

      {/*
       * ProcessVideo — 12s capture→qualify→create→monetize workflow
       * Render: npm run video:render -- --composition=ProcessVideo --output=out/process.mp4
       */}
      <Composition
        id="ProcessVideo"
        component={ProcessVideo}
        durationInFrames={360}
        fps={30}
        width={1280}
        height={720}
      />

      {/*
       * ResultsVideo — 8s key stats counting up with neon glow
       * Render: npm run video:render -- --composition=ResultsVideo --output=out/results.mp4
       */}
      <Composition
        id="ResultsVideo"
        component={ResultsVideo}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      {/*
       * ServiceEnginesLoop — 5s seamless loop · engine cards for Services section header
       * Render: npm run video:service-engines
       */}
      <Composition
        id="ServiceEnginesLoop"
        component={ServiceEnginesLoop}
        durationInFrames={150}
        fps={30}
        width={1200}
        height={200}
      />

      {/*
       * BookingIconsLoop — 4s seamless loop · trust icons for BookingSection
       * Render: npm run video:booking-icons
       */}
      <Composition
        id="BookingIconsLoop"
        component={BookingIconsLoop}
        durationInFrames={120}
        fps={30}
        width={1200}
        height={180}
      />
    </>
  );
};
