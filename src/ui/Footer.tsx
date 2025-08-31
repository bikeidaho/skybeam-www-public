export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-narrow text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Skybeam. All rights reserved.</div>
        <div className="flex gap-5">
          <a className="hover:text-white/90" href="#">Terms</a>
          <a className="hover:text-white/90" href="#">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
