export interface Library {
  name: string;
  description: string;
  features: string[];
  installCommand: string;
  installNote?: string;
  exampleCode: string;
  docUrl: string;
  color: {
    primary: string;
    hover: string;
    title: string;
  };
  badge?: string;
  summary: string;
  tags: string[];
}

export const libraries: Library[] = [
  {
    name: "Motion",
    description:
      "React, Vue, JavaScript를 위한 고성능 애니메이션 라이브러리입니다. 복잡한 애니메이션도 간단한 API로 쉽게 구현할 수 있어요. 하드웨어 가속을 활용해 부드러운 성능을 자랑합니다.",
    features: [
      "독립적인 transform 속성 (x, y, rotateZ 등)",
      "스크롤 기반 애니메이션",
      "제스처 지원 (hover, drag 등)",
      "자연스러운 스프링 애니메이션",
    ],
    installCommand: "npm install motion",
    installNote: "이 프로젝트에는 이미 설치되어 있어 바로 사용 가능합니다",
    exampleCode: `// React 사용 시
import { motion } from "motion/react"

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  애니메이션 컨텐츠
</motion.div>`,
    docUrl: "https://motion.dev/",
    color: {
      primary: "text-blue-600",
      hover: "hover:text-blue-700",
      title: "text-blue-900",
    },
    badge: "설치됨",
    summary: "웹 애니메이션",
    tags: ["애니메이션", "React", "Vue"],
  },
  {
    name: "Base UI",
    description:
      "스타일이 없는(unstyled) UI 컴포넌트 라이브러리로, 완전히 커스터마이징 가능한 기본 컴포넌트를 제공합니다. Radix와 Material UI 제작자들이 만든 접근성 우수한 컴포넌트들이에요.",
    features: [
      "완전한 커스터마이징 가능",
      "WCAG 접근성 가이드라인 준수",
      "UI 로직과 스타일 완전 분리",
      "유연한 컴포넌트 조합",
      "다양한 커스텀 훅 제공",
    ],
    installCommand: "npm install @base-ui-components/react",
    exampleCode: `import { Button } from "@base-ui-components/react/Button"

<Button className="your-styles">
  클릭하세요
</Button>`,
    docUrl: "https://base-ui.com/",
    color: {
      primary: "text-purple-600",
      hover: "hover:text-purple-700",
      title: "text-purple-900",
    },
    summary: "Unstyled 컴포넌트",
    tags: ["UI", "컴포넌트", "접근성"],
  },
  {
    name: "shadcn/ui",
    description:
      "Next.js 생태계에서 가장 유명한 headless UI 라이브러리입니다. Tailwind CSS로 스타일링되어 있어 바로 사용할 수 있으며, copy & paste 방식으로 프로젝트에 직접 추가하세요. npm 패키지가 아니라 소스 코드를 가져오기 때문에 완전한 소유권을 가질 수 있어요.",
    features: [
      "Copy & Paste 방식",
      "완전한 소유권",
      "Tailwind CSS 기반",
      "접근성 우수 (Radix UI 기반)",
      "다크모드 지원",
    ],
    installCommand: "npx shadcn@latest init",
    exampleCode: `npx shadcn@latest add button

// 컴포넌트가 프로젝트에 추가됨
import { Button } from "@/components/ui/button"

<Button>클릭하세요</Button>`,
    docUrl: "https://ui.shadcn.com/",
    color: {
      primary: "text-purple-600",
      hover: "hover:text-purple-700",
      title: "text-purple-900",
    },
    summary: "Headless UI (Next.js)",
    tags: ["UI", "Next.js", "Tailwind"],
  },
  {
    name: "React Three Fiber (R3F)",
    description:
      "React를 위한 three.js 렌더러입니다. JSX로 3D 장면을 선언적으로 만들 수 있고, React의 상태 관리와 생태계를 그대로 활용할 수 있어요. 복잡한 3D 웹 콘텐츠도 React 컴포넌트처럼 쉽게 만들 수 있습니다.",
    features: [
      "JSX로 선언적 3D 장면 구축",
      "React 상태 관리 통합",
      "대규모 장면에서도 최적 성능",
      "Three.js 최신 기능 즉시 사용",
      "풍부한 확장 라이브러리 생태계",
    ],
    installCommand: "npm install three @react-three/fiber",
    installNote: "⚠️ React 버전과 매칭 필요 (R3F@9 ↔ React@19)",
    exampleCode: `import { Canvas } from "@react-three/fiber"

<Canvas>
  <ambientLight />
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
</Canvas>`,
    docUrl: "https://r3f.docs.pmnd.rs/getting-started/introduction",
    color: {
      primary: "text-orange-600",
      hover: "hover:text-orange-700",
      title: "text-orange-900",
    },
    summary: "3D 웹 렌더러",
    tags: ["3D", "React", "WebGL"],
  },
  {
    name: "date-fns",
    description:
      "JavaScript 날짜 처리를 위한 현대적인 유틸리티 라이브러리입니다. 200개 이상의 함수를 제공하며, 필요한 것만 가져다 쓸 수 있어 번들 크기도 작아요. 순수 함수로 만들어져 안전하게 사용할 수 있습니다.",
    features: [
      "작은 번들 크기 (필요한 것만 import)",
      "순수 함수 (사이드 이펙트 없음)",
      "불변성 보장",
      "70개 이상 언어 지원",
      "TypeScript 완벽 지원",
    ],
    installCommand: "npm install date-fns",
    exampleCode: `import { format, addDays } from "date-fns"

const today = new Date()
const tomorrow = addDays(today, 1)
format(today, "yyyy-MM-dd")`,
    docUrl: "https://date-fns.org/",
    color: {
      primary: "text-green-600",
      hover: "hover:text-green-700",
      title: "text-green-900",
    },
    summary: "날짜/시간 유틸리티",
    tags: ["유틸리티", "날짜", "시간"],
  },
  {
    name: "React Bits",
    description:
      "React Bits는 React 애플리케이션을 위한 풍부한 UI 컴포넌트 컬렉션입니다. 다양한 애니메이션과 인터랙션 효과를 가진 컴포넌트들을 제공하여, 현대적인 웹 인터페이스를 빠르게 구축할 수 있도록 도와줍니다.",
    features: [
      "다양한 애니메이션 컴포넌트",
      "즉시 사용 가능한 UI 요소",
      "현대적인 디자인",
      "React 베스트 프랙티스 적용",
      "쉬운 커스터마이징",
    ],
    installCommand: "npm install react-bits",
    exampleCode: `import { AnimatedButton } from "react-bits"

function App() {
  return <AnimatedButton>Click Me</AnimatedButton>
}`,
    docUrl: "https://www.reactbits.dev/",
    color: {
      primary: "text-cyan-600",
      hover: "hover:text-cyan-700",
      title: "text-cyan-900",
    },
    summary: "React 컴포넌트",
    tags: ["React", "UI", "컴포넌트"],
  },
  {
    name: "p5.js",
    description:
      "p5.js는 예술과 디자인을 위한 친근한 JavaScript 라이브러리입니다. 코딩을 통해 시각 예술 작품을 쉽게 만들 수 있도록 지원하며, 예술가, 디자이너, 초보자, 교육자 모두를 환영합니다. 무료 오픈소스로 제공됩니다.",
    features: [
      "예술적 코딩에 최적화",
      "초보자도 쉽게 시작 가능",
      "풍부한 그래픽 기능",
      "활발한 커뮤니티",
      "접근성 향상 기능 포함",
    ],
    installCommand: "npm install p5",
    installNote: "또는 CDN으로도 사용 가능합니다",
    exampleCode: `import p5 from "p5"

new p5((sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(400, 400)
  }

  sketch.draw = () => {
    sketch.background(220)
    sketch.ellipse(200, 200, 50, 50)
  }
})`,
    docUrl: "https://p5js.org/",
    color: {
      primary: "text-pink-600",
      hover: "hover:text-pink-700",
      title: "text-pink-900",
    },
    summary: "예술적 코딩",
    tags: ["예술", "그래픽", "창작"],
  },
  {
    name: "GSAP",
    description:
      "GSAP(GreenSock Animation Platform)는 웹 애니메이션을 위한 강력한 JavaScript 라이브러리입니다. 복잡한 애니메이션을 부드럽고 효율적으로 구현할 수 있으며, 최고의 성능과 크로스 브라우저 호환성을 제공합니다.",
    features: [
      "업계 최고 수준의 성능",
      "강력한 타임라인 제어",
      "크로스 브라우저 호환성",
      "다양한 플러그인 생태계",
      "ScrollTrigger, Morphing 등 고급 기능",
    ],
    installCommand: "npm install gsap",
    exampleCode: `import gsap from "gsap"

// 기본 애니메이션
gsap.to(".box", {
  x: 100,
  duration: 1,
  rotation: 360
})

// 타임라인 사용
const tl = gsap.timeline()
tl.to(".box1", { x: 100, duration: 1 })
  .to(".box2", { y: 100, duration: 1 })`,
    docUrl: "https://gsap.com/",
    color: {
      primary: "text-teal-600",
      hover: "hover:text-teal-700",
      title: "text-teal-900",
    },
    summary: "고성능 애니메이션",
    tags: ["애니메이션", "성능", "타임라인"],
  },
  {
    name: "MediaPipe",
    description:
      "MediaPipe는 Google에서 개발한 오픈소스 프레임워크로, 실시간 스트리밍 미디어를 위한 크로스 플랫폼 머신러닝 솔루션을 제공합니다. 얼굴 인식, 손 추적, 포즈 추정 등 다양한 컴퓨터 비전 기능을 손쉽게 구현할 수 있습니다.",
    features: [
      "실시간 처리 성능 (모바일 GPU 지원)",
      "크로스 플랫폼 지원 (웹, 모바일, 데스크톱)",
      "얼굴 인식 및 손 추적",
      "포즈 추정 및 객체 인식",
      "오픈소스 및 커스터마이징 가능",
    ],
    installCommand: "npm install @mediapipe/tasks-vision",
    exampleCode: `import { useHandLandmarker } from "@mediapipe/tasks-vision"`,
    docUrl: "https://mediapipe-studio.webapps.google.com/home",
    color: {
      primary: "text-indigo-600",
      hover: "hover:text-indigo-700",
      title: "text-indigo-900",
    },
    summary: "머신러닝/컴퓨터 비전",
    tags: ["머신러닝", "컴퓨터비전", "실시간"],
  },
];
