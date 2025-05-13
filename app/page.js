import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true; // this is a boolean value which is used to check if the user is logged in or not.
  // If the user is logged in then it will show the dashboard page.
  const name = "BibekDon";
  return (
    <main>
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">CodeFastSaas</div>
          <div className="space-x-4 max-md-hidden">
            <a className="link link-hover">About Me</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            {" "}
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />{" "}
          </div>
        </div>
      </section>
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          {" "}
          Collect customer feedback to build better products{" "}
        </h1>
        <div className="opacity-90 mb-6">
          Create a feedback form to collect customer feedback and build better
          products.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
