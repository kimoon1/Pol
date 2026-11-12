export default function HeroVisual() {
  return (
    <div
      className="experience-art"
      role="img"
      aria-label="화면, API 연동, 기능 권한을 함께 고려하는 프론트엔드 개발 경험 개념도"
    >
      <div className="experience-art-heading">
        <span>FRONTEND + SERVICE CONTEXT</span>
        <span className="art-status-dot" />
      </div>
      <svg viewBox="0 0 600 420" fill="none" aria-hidden="true">
        <defs>
          <pattern
            id="experience-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r=".8" fill="#2962ff" opacity=".18" />
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="600"
          height="420"
          fill="url(#experience-grid)"
        />
        <path
          d="M81 227L81 306L286 373L492 301L492 201"
          stroke="#2962ff"
          strokeOpacity=".3"
          strokeDasharray="4 6"
        />
        <path
          d="M270 167L423 112L514 149L514 233"
          stroke="#2962ff"
          strokeOpacity=".3"
          strokeDasharray="4 6"
        />
        <g className="art-plane plane-service">
          <path
            d="M197 294L353 239L456 283L300 339Z"
            fill="#fff"
            stroke="#2962ff"
            strokeOpacity=".3"
          />
          <path d="M197 294L300 339V378L197 333Z" fill="#212121" />
          <path d="M300 339L456 283V322L300 378Z" fill="#2962ff" />
          <path
            d="M318 352L435 310"
            stroke="#fff"
            strokeOpacity=".6"
            strokeWidth="2"
          />
          <text
            x="321"
            y="293"
            fill="#2962ff"
            textAnchor="middle"
            transform="rotate(-19 321 293)"
          >
            SERVICE CONTEXT
          </text>
        </g>
        <g className="art-plane plane-api">
          <path
            d="M352 190L448 155L533 190L436 226Z"
            fill="#fff"
            stroke="#2962ff"
            strokeOpacity=".4"
          />
          <path
            d="M352 190L436 226V273L352 237Z"
            fill="#2962ff"
            fillOpacity=".15"
          />
          <path
            d="M436 226L533 190V237L436 273Z"
            fill="#2962ff"
            fillOpacity=".3"
          />
          <text
            x="440"
            y="195"
            fill="#2962ff"
            textAnchor="middle"
            transform="rotate(-20 440 195)"
          >
            API
          </text>
          <path
            d="M451 240L517 216M451 251L517 227"
            stroke="#2962ff"
            strokeOpacity=".5"
          />
        </g>
        <g className="art-plane plane-interface">
          <path
            d="M76 112L270 43L391 93L196 164Z"
            fill="#fff"
            stroke="#2962ff"
            strokeWidth="1.5"
          />
          <path d="M76 112L196 164V254L76 202Z" fill="#212121" />
          <path d="M196 164L391 93V181L196 254Z" fill="#2962ff" />
          <path
            d="M94 113L270 51L372 94L196 156Z"
            fill="#2962ff"
            fillOpacity=".065"
          />
          <path
            d="M116 112L268 58L284 65L132 119Z"
            fill="#2962ff"
            fillOpacity=".25"
          />
          <path d="M142 124L209 100L249 117L182 141Z" fill="#2962ff" />
          <path
            d="M219 96L283 73L319 89L256 112Z"
            fill="#fff"
            stroke="#2962ff"
            strokeOpacity=".25"
          />
          <path
            d="M264 117L325 95L353 107L292 129Z"
            fill="#2962ff"
            fillOpacity=".2"
          />
          <path
            d="M212 187L369 130M212 202L342 155"
            stroke="#fff"
            strokeOpacity=".55"
            strokeWidth="2"
          />
          <circle cx="99" cy="155" r="3" fill="#fff" />
          <circle cx="113" cy="161" r="3" fill="#fff" fillOpacity=".4" />
          <text
            x="284"
            y="162"
            fill="#fff"
            textAnchor="middle"
            transform="rotate(-20 284 162)"
          >
            INTERFACE
          </text>
        </g>
        <circle cx="478" cy="88" r="4" fill="#2962ff" />
        <path d="M470 95L422 134" stroke="#2962ff" strokeOpacity=".35" />
        <circle cx="120" cy="318" r="4" fill="#2962ff" />
        <path d="M128 323L173 339" stroke="#2962ff" strokeOpacity=".35" />
      </svg>
      <div className="experience-art-footer">
        <span>화면 · API · 권한</span>
        <span>개발 경험 개념도</span>
      </div>
    </div>
  );
}
