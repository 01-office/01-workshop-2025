"use client";

import { useState } from "react";
import SidePanel from "./SidePanel";

export default function SidePanelPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-black">Side Panel</h1>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-3 bg-black text-white border border-black hover:bg-white hover:text-black transition-colors"
      >
        {isOpen ? "패널 닫기" : "패널 열기"}
      </button>

      <SidePanel isOpen={isOpen}>
        <div className="p-8 h-full  border-black">
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-black">
            <h2 className="text-xl font-bold text-black">사이드 패널</h2>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-gray-600 transition-colors text-xl"
            >
              ✕
            </button>
          </div>

          <div className="space-y-6 text-black">
            <p>이것은 사이드 패널 예시입니다.</p>
            <p>패널을 열고 닫을 수 있습니다.</p>
            <ul className="list-disc list-inside space-y-3">
              <li>애니메이션이 부드럽게 적용됩니다</li>
              <li>오른쪽에서 왼쪽으로 슬라이드됩니다</li>
              <li>내용을 자유롭게 추가할 수 있습니다</li>
            </ul>
          </div>
        </div>
        <div className="h-svh"></div>
      </SidePanel>
    </div>
  );
}
