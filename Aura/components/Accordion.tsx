import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqData = [
  {
    value: 'item-1',
    question: 'What is EchoMind?',
    answer:
      'EchoMind is a platform for easy feedback form integration, featuring AI summaries and showcases.',
  },
  {
    value: 'item-2',
    question: 'How can EchoMind improve user feedback collection?',
    answer:
      'EchoMind streamlines feedback collection with intuitive and integrable forms.',
  },
  {
    value: 'item-3',
    question: 'What are the key features of EchoMind?',
    answer:
      'EchoMind offers user-friendliness, seamless integration, and a simplified interface.',
  },
  {
    value: 'item-4',
    question: 'How secure is the data collected by EchoMind?',
    answer: 'EchoMind ensures data security through secure storage.',
  },
  {
    value: 'item-5',
    question: 'Can I export the feedback data?',
    answer:
      'Yes, you can export feedback data as a CSV file for analysis and record-keeping.',
  },
];

const Accordian = () => {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="  mx-auto max-w-[70vw] text-slate-800 dark:text-[#E7E9EC] text-sm "
      >
        {faqData.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-400 ">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Accordian;
