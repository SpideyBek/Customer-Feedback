import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";

export default function Home() {
  const isLoggedIn = true; // this is a boolean value which is used to check if the user is logged in or not.
  // If the user is logged in then it will show the dashboard page.
  const name = "BibekDon";

  return (
    <main>
      {/*header*/}
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">BibekCode</div>
          <div className="space-x-4 max-md-hidden">
            <a className="link link-hover">About Me</a>
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </div>
          <div>
            {" "}
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />{" "}
          </div>
        </div>
      </section>
      {/*hero section*/}
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
      {/*pricing*/}
      <section className="bg-base-200" id="pricing">
        <div className="px-8 py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs
          </h2>

          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">19$</div>
              <div className="uppercase font-medium opacity-90">/month</div>
            </div>
            <ul className="space-y-2">
              {[
                "Collect Customer Feedback",
                "24/7 Customer Care",
                "Admin Dashboard",
                "Everything from the free plan",
              ].map((priceitem) => (
                <li key={priceitem} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  {priceitem}
                </li>
              ))}
            </ul>
            <div>
              <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
            </div>
          </div>
        </div>
      </section>
      {/*FAQ*/}
      <section className="bg-base-200" id="faq">
        <div className="px-8 py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center">
            Frequently asked questions
          </h2>
          <ul className="max-w-lg mx-auto">
            {[
              {
                question: "Why does this do? ",
                answer:
                  "It helps you know user interaction and gives you feedback",
              },
              {
                question: "How does this work?",
                answer:
                  "It helps you know user interaction and gives you feedback",
              },
              {
                question: "How do I get started?",
                answer:
                  "It helps you know user interaction and gives you feedback",
              },
              {
                question: "How do I get support?",
                answer:
                  "It helps you know user interaction and gives you feedback",
              },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
