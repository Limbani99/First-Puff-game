export default function Raft({ className = '' }) {
  return (
    <img
      src="/avatar/artist-boat.png"
      alt="Four crew members aboard the artist boat"
      className={`block w-40 h-40 object-contain select-none pointer-events-none drop-shadow-[0_16px_18px_rgba(2,12,27,0.3)] ${className}`}
      draggable="false"
      loading="eager"
    />
  );
}
