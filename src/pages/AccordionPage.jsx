import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "afdl",
      label: "can i use React on a project?",
      content:
        "you can use! you can use! you can use! you can use! you can use!",
    },
    {
      id: "iosfdsl",
      label: "can i use Javascript on a project?",
      content:
        "you can use! you can use! you can use! you can use! you can use!",
    },
    {
      id: "adfsouwe",
      label: "can i use CSS on a project?",
      content:
        "you can use! you can use! you can use! you can use! you can use!",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
