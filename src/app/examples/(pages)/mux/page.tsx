import MuxPlayer from "@mux/mux-player-react";

export default function MuxPage() {
  return (
    <div className="h-svh grid grid-cols-3 gap-2">
      <div className="p-2 space-y-1">
        <h1>Mux Player</h1>
        <div className="aspect-2/3 w-full">
          <MuxPlayer
            playbackId="RJg2f3qkm1KB9No3cUwdh8BuyG7VT3HB9TmG3hyWeH8"
            autoPlay
            muted
            loop
            playsInline
            minResolution="1080p"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="p-2 space-y-1">
        <h1>Thumbnail</h1>
        <img
          className="w-full h-auto"
          src="https://image.mux.com/RJg2f3qkm1KB9No3cUwdh8BuyG7VT3HB9TmG3hyWeH8/thumbnail.png?width=600&time=4"
          alt="thumbnail"
        />
      </div>
      <div className="p-2 space-y-1">
        <h1>Animated GIFs</h1>
        <img
          className="w-full h-auto"
          src="https://image.mux.com/RJg2f3qkm1KB9No3cUwdh8BuyG7VT3HB9TmG3hyWeH8/animated.gif?width=600"
          alt="animated gif"
        />
      </div>
    </div>
  );
}
