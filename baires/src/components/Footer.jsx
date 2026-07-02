export default function Footer() {
  return (
    <footer className="w-full bg-black px-[18px] py-[28px] text-white sm:px-[32px] lg:px-[48px]">
      <div className="flex items-center justify-center border-t border-white/15 pt-[24px] text-[13px] text-white/60">
        <p>© {new Date().getFullYear()} Baires Fly. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
