export default function Works() {
  return (
    <main className="p-4 flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Week 1</h1>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">1. 중앙 정렬</h2>
        <ul className="flex flex-col gap-2">
          <li className="space-y-1">
            <p>a. flexbox 사용</p>
            <div className="size-[400px] border flex items-center justify-center">
              <div className="size-[100px] bg-black"></div>
            </div>
          </li>
          <li className="space-y-1">
            <p>b. grid 사용</p>
            <div className="size-[400px] border grid place-items-center">
              <div className="size-[100px] bg-black"></div>
            </div>
          </li>
          <li className="space-y-1">
            <p>c. position 사용</p>
            <div className="size-[400px] border relative">
              <div className="size-[100px] bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">2. 1:2, 2:1 비율</h2>
        <ul className="flex flex-col gap-2">
          <li className="space-y-1">
            <p>a. flexbox 사용</p>
            <div className="size-[400px] border flex flex-col gap-2 justify-center">
              <div className="flex gap-2">
                <div className="flex-1 bg-black h-[100px]"></div>
                <div className="flex-2 bg-black h-[100px]"></div>
              </div>
              <div className="flex gap-2">
                <div className="flex-2 bg-black h-[100px]"></div>
                <div className="flex-1 bg-black h-[100px]"></div>
              </div>
            </div>
          </li>
          <li className="space-y-1">
            <p>b. grid 사용</p>
            <section className="size-[400px] border flex flex-col gap-2 justify-center">
              <div className="grid grid-cols-[1fr_2fr] gap-2">
                <div className="bg-black h-[100px]"></div>
                <div className="bg-black h-[100px]"></div>
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-2">
                <div className="bg-black h-[100px]"></div>
                <div className="bg-black h-[100px]"></div>
              </div>
            </section>
          </li>
        </ul>
      </div>
    </main>
  );
}
