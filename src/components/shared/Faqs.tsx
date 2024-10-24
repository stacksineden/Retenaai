import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div className="container my-4">
      <div className="pl-4 mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-5xl font-bold text-primary-black">
          Frequently asked questions
        </h2>
      </div>

      <div className="w-full md:w-[75%] mx-auto mt-4">
        <Accordion type="single" collapsible>
          {faqs &&
            faqs?.map((faq, _i) => (
              <AccordionItem value={faq.key} key={_i}>
                <AccordionTrigger className="text-primary-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary-blue2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;

export const faqs = [
  {
    key: "question_1",
    question: "What is Retena.ai, and how does it work?",
    answer:
      "Retena.ai is an advanced AI-powered application designed to create stunning, professional-grade photos with ease. It allows you to elevate your online presence without the hassle of hiring a photographer, buying expensive outfits, or traveling to photoshoots—all from the comfort of your home. How it works: Simply upload your photos—whether selfies, close-ups, or full-body shots—and Retena.ai’s cutting-edge technology will train a model based on your images. Once the model is trained, the AI generates photorealistic images of you tailored for any scenario, delivering extraordinary results that highlight your style and personality effortlessly.",
  },
  {
    key: "question_2",
    question: "How do I train my model?",
    answer:
      "After creating an account, you'll be directed to a page where a custom AI model is trained on your face. To generate high-quality, realistic photos, you'll need to upload a variety of images. For the best results, submit photos with multiple expressions, different backgrounds, no facial obstructions, and a mix of close-up, waist-up, and full-body shots.",
  },
  {
    key: "question_3",
    question: "Can I upload kids or minors?",
    answer:
      "Absolutely not. This is against our terms of service. Please only upload photos of legal adults (18+) that you own the rights to, such as your own images, for training the model.",
  },
  {
    key: "question_4",
    question: "What type of photos should I submit?",
    answer:
      "To train your model, you need to submit photos of yourself. We recommend uploading between 15 to 30 images for the best quality. Please ensure that the photos feature clear shots of your face, are close-ups, and do not include anyone else besides yourself.",
  },
  {
    key: "question_5",
    question: "How long does it take?",
    answer:
      "To train the custom AI model of yourself, it can vary from 40minutes - 1hour depending on the package you paid for.  This is because it is computationally expensive.  However, once the model is trained, you can generate photos of yourself near instantly for each image generation.",
  },
  {
    key: "question_6",
    question:
      "Are there refunds?",
    answer:
      "Unfortunately, we incur significant costs for server maintenance to train the AI on your photos. As a result, we are unable to offer refunds.",
  }
];
