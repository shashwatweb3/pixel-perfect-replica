import { useId } from "react";

export function Idea({ className = "" }: { className?: string }) {
  return (
    <svg className={`idea ${className}`} viewBox="0 0 80 90" fill="none" aria-hidden="true">
      <path className="idea-face" d="M40 4 70 24 70 61 40 84 10 61 10 24Z" />
      <path className="idea-light" d="M40 4 40 40 10 24Z" />
      <path className="idea-mid" d="M40 40 70 24 70 61 40 84Z" />
      <path className="idea-edge" d="M10 24 40 40 70 24M40 40V84" />
    </svg>
  );
}

export function Builder({ variant = 0 }: { variant?: number }) {
  const id = useId();
  return (
    <svg className={`builder builder-${variant}`} viewBox="0 0 270 290" role="img" aria-label={variant === 1 ? "A builder receiving an idea" : "A developer sharing from their workstation"}>
      <defs><linearGradient id={id} x2="0.8" y2="1"><stop className="island-top" /><stop offset="1" className="island-bottom" /></linearGradient></defs>
      <ellipse className="island-shadow" cx="137" cy="253" rx="100" ry="17" />
      <path fill={`url(#${id})`} className="art-outline" d="m22 211 46-32 136 3 45 35-34 27-50 41-71-12-52-33Z" />
      <path className="terrain-top art-outline" d="m22 211 46-32 136 3 45 35-88 27-91-10Z" />
      <path className="art-outline art-rock" d="m39 217 25 25 11 23m156-50-37 25-18 35m-32-38-6 46" />
      <g className="character-idle">
        <path className="art-leg art-outline" d="m108 156 47 10 17 35-19 10-28-33-27-1Z" />
        <path className="art-shoe art-outline" d="m151 201 23-4 12 14-30 5Z" />
        <path className="art-leg art-outline" d="m99 156-13 24-4 32 20 2 12-30 23-15Z" />
        <path className="art-shoe art-outline" d="m82 206 23 3 3 15-37-1Z" />
        <path className="art-shirt art-outline" d="m100 97 32-3 23 60-19 19-45-13 1-41Z" />
        <path className="art-skin art-outline" d="m119 83 1 18-13 7-8-13 1-16Z" />
        <path className="art-skin art-outline" d="M92 54q28-12 35 12l-1 22-16 11-21-17-4-14Z" />
        <path className="art-hair art-outline" d="M84 75q-14-33 15-38 29-5 35 22l-26 1-11 19-7-6Z" />
        <path className="art-shirt art-outline" d="m125 105 22 18 28-7 5 14-40 15-27-19Z" />
        <path className="art-skin art-outline" d="m173 116 17-6 12 7-8 8-17 5Z" />
        <path className="art-laptop art-outline" d="m163 160-16-35 42-3 16 37Z" />
        <path className="art-laptop art-outline" d="m151 160 63-2-3 7-55 3Z" />
        <path className="art-code" d="m168 139-5 4 6 3m15-9 5 4-4 4m-8-11-2 15" />
      </g>
      <path className="art-plant art-outline" d="m219 193-7-31 15 12-3-36 15 22-6 37Z" />
      <path className="art-crystal art-outline" d="m49 195-6-20 12-17 9 19-4 20Z" />
    </svg>
  );
}

export function HandoffArt() {
  return (
    <div className="handoff-art">
      <svg className="connection-lines" viewBox="0 0 1000 320" fill="none" aria-hidden="true">
        <path className="connection-ghost" d="M150 170Q320 0 500 170T850 170" />
        <path className="connection-live" pathLength="1" d="M150 170Q320 0 500 170T850 170" />
        <circle className="connection-node" cx="150" cy="170" r="5" /><circle className="connection-node" cx="500" cy="170" r="5" /><circle className="connection-node" cx="850" cy="170" r="5" />
      </svg>
      <div className="builder-station station-one"><Builder /><span>A little discovery.</span></div>
      <div className="builder-station station-two"><Builder variant={1} /><span>A new possibility.</span></div>
      <div className="builder-station station-three"><Builder variant={2} /><span>And on it goes.</span></div>
      <div className="travelling-idea"><Idea /><span className="idea-trail" /></div>
    </div>
  );
}