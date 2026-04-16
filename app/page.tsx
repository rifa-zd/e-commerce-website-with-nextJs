export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* hero heading  */}
            <p className="text-black mb-6 text-4xl font-bold">
              For every version of{" "}
              <b>  
                <i>She</i>
              </b>
            </p>

            <div className="fon">
              <button>Join Today</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
