'use client';

export default function AnimatedBackground() {
  return (
    <div className="animated-background">
      <svg
        className="animated-svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>

          {/* Gradient 1: Teal to Purple */}
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A9D8F" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.7" />
          </linearGradient>

          {/* Gradient 2: Purple to Blue */}
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6B21A8" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#0F51BA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2A9D8F" stopOpacity="0.7" />
          </linearGradient>

          {/* Gradient 3: Blue to Teal */}
          <linearGradient id="grad3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2A9D8F" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Animated Blob 1 */}
        <circle
          cx="300"
          cy="200"
          r="150"
          fill="url(#grad1)"
          filter="url(#blur)"
          className="blob blob-1"
          opacity="0.6"
        />

        {/* Animated Blob 2 */}
        <circle
          cx="900"
          cy="600"
          r="180"
          fill="url(#grad2)"
          filter="url(#blur)"
          className="blob blob-2"
          opacity="0.5"
        />

        {/* Animated Blob 3 */}
        <circle
          cx="600"
          cy="400"
          r="200"
          fill="url(#grad3)"
          filter="url(#blur)"
          className="blob blob-3"
          opacity="0.4"
        />

        {/* Background shapes for depth */}
        <ellipse
          cx="150"
          cy="700"
          rx="120"
          ry="100"
          fill="url(#grad2)"
          filter="url(#blur)"
          className="blob blob-4"
          opacity="0.3"
        />

        <ellipse
          cx="1050"
          cy="150"
          rx="140"
          ry="110"
          fill="url(#grad1)"
          filter="url(#blur)"
          className="blob blob-5"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
