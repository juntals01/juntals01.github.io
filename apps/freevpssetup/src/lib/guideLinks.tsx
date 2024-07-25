import HowToMakeWebsiteContent from "@/components/content/HowToMakeWebsiteContent";

const GuideLinks: {
  label: string;
  slug: string;
  image: string;
  description?: string;
  content?: React.ReactNode;
}[] = [
  {
    label: "Create a website using Free Virtual Private Server",
    slug: "/guides/create-website-with-free-virtual-private-server",
    image: "/guides/how-to-make-free-website.jpg",
    description:
      "This tutorial is about how to create a free website. This is not the same with other websites that offer free builders with a slow response time. This method will give your website a fast enough response time for decent to fairly huge web users. You will have your own VPS or Virtual Private Server.",
    content: <HowToMakeWebsiteContent />,
  },
];

export default GuideLinks;
