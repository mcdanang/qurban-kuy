import { useCountdown } from "@/hooks/useCountdown";

export default function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown("06-29-2023");
  return (
    <div className="max-w-sm pb-8">
      <h1 className="font-monst py-2 text-choco font-medium text-lg">
        <span className="font-extrabold">{days + 1 > 0? days + 1 : 0} hari</span> lagi menuju Idul Adha.
      </h1>
    </div>
  );
}
