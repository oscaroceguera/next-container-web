export default function Home() {
  return (
    <div className="border-4 border-sky-700 h-screen">
      <h1 className="text-sky-700 border text-center p-4 text-xl">HOME</h1>
      <div className="border flex items-center justify-center gap-3">
        <a href="/tickets" className="border bg-purple-600 text-white p-2">
          TICKET
        </a>
        <a
          href="/tickets/details/numero"
          className="border bg-purple-600 text-white p-2"
        >
          TICKET_DETAIL
        </a>
      </div>
    </div>
  );
}
