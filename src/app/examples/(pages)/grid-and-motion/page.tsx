import Box from "./Box";

export default function head() {
  return (
    <div>
      <header className="h-[56px] flex items-center justify-center">
        <p className="text-4xl">Foreword, Contributors</p>
      </header>
      <main className="grid grid-cols-2">
        <Box
          color="bg-amber-300"
          title="Tools for Slowing Down"
          description="This is a box"
        />
        <Box
          color="bg-blue-300"
          title="Tools for Slowing Down"
          description="This is a box"
        />
        <Box
          color="bg-green-300"
          title="Tools for Slowing Down"
          description="This is a box"
        />
        <Box
          color="bg-purple-300"
          title="Tools for Slowing Down"
          description="This is a box"
        />
        <Box
          color="bg-pink-300"
          title="Tools for Slowing Down"
          description="This is a box"
        />
        <Box
          color="bg-orange-300"
          title="Tools for Slowing Down"
          description="This is a box"
        />
        <Box
          color="bg-red-300"
          title="Tools for Slowing Down"
          description="This is a box"
        />
        <Box
          color="bg-amber-300"
          title="Tools for Slowing Down"
          description="This is a box"
        />
      </main>
    </div>
  );
}
