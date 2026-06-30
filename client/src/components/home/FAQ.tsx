import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "../../data/faq";

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about LawConnect.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-xl border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="border-t border-gray-200 px-6 py-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;