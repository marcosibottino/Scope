export default function RegisterPage() {
  return (
    <div className="w-full max-w-sm">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-xl font-semibold">Scope</h1>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold">Create your account</h2>
      <p className="mt-1 text-sm opacity-70">
        Get started with Scope
      </p>

      {/* Social buttons */}
      <div className="mt-6 space-y-3">
        <button className="w-full rounded-md border border-border py-2 text-sm">
          Sign up with Google
        </button>
        <button className="w-full rounded-md border border-border py-2 text-sm">
          Sign up with GitHub
        </button>
      </div>

      {/* Divider */}
      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs opacity-50">or</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Form */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full name"
          className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm"
        />

        <button className="w-full rounded-md bg-white text-black py-2 text-sm font-medium">
          Create account
        </button>
      </form>

      {/* Footer */}
      <p className="mt-6 text-sm opacity-70">
        Already have an account?{' '}
        <a href="/login" className="underline">
          Sign in
        </a>
      </p>
    </div>
  )
}
