export function BannerCincuenta() {
  return (
    <div className="flex h-screen items-center bg-gray-50">
      <section
        className="w-full bg-cover bg-center py-32"
        // style="background-image: url('https://source.unsplash.com/random');"
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="mb-6 text-5xl font-medium">Welcome to My Agency</h1>
          <p className="mb-12 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            euismod odio, gravida pellentesque urna varius vitae.
          </p>
          <a
            href="#"
            className="rounded-full bg-indigo-500 px-12 py-4 text-white hover:bg-indigo-600"
          >
            Demo
          </a>
        </div>
      </section>
    </div>
  );
}
