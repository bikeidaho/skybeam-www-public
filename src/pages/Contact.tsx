export default function Contact() {
  return (
    <main className="container-narrow py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold">Get connected</h1>
      <p className="mt-2 text-white/70 max-w-2xl">Tell us about your date(s), location, and use case and we’ll confirm availability ASAP.</p>

      <form className="mt-8 grid md:grid-cols-2 gap-6 card p-6" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label className="block text-sm text-white/80">Name</label>
          <input className="mt-1 w-full rounded-xl bg-white/10 border-white/20" name="name" required />
        </div>
        <div>
          <label className="block text-sm text-white/80">Email</label>
          <input type="email" className="mt-1 w-full rounded-xl bg-white/10 border-white/20" name="email" required />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-white/80">Dates & location</label>
          <input className="mt-1 w-full rounded-xl bg-white/10 border-white/20" name="details" placeholder="e.g., Oct 10–12 near Three Creek Lake" required />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-white/80">Message</label>
          <textarea className="mt-1 w-full rounded-xl bg-white/10 border-white/20" name="message" rows={5}></textarea>
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="btn-primary">Send</button>
        </div>
      </form>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <a className="card p-6 hover:bg-white/10" href="mailto:hello@example.com">
          <div className="font-semibold">Email</div>
          <div className="text-sm text-white/70">hello@example.com</div>
        </a>
        <a className="card p-6 hover:bg-white/10" href="tel:+15555550123">
          <div className="font-semibold">Phone</div>
          <div className="text-sm text-white/70">+1 (555) 555-0123</div>
        </a>
      </div>
      <p className="mt-4 text-xs text-white/60">Replace contact details or wire to your CRM/webhook.</p>
    </main>
  )
}
