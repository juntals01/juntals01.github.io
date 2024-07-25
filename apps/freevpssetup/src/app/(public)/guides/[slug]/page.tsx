import GuideLinks from "@/lib/guideLinks";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const content = GuideLinks.find((guide) => guide.slug === "/guides/" + slug);

  return {
    title: content?.label,
    description: content?.description,
    openGraph: {
      title: content?.label,
      description: content?.description,
      url: "https://freevpssetup.com" + "/guides/" + slug,
      siteName: "Free Virtual Private Server",
      images: [
        {
          url: "https://freevpssetup.com" + content?.image, // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: content?.label,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

const GuidesPages = ({ params: { slug } }: { params: { slug: string } }) => {
  const content = GuideLinks.find((guide) => guide.slug === "/guides/" + slug);

  if (!content) {
    return redirect("/404");
  } else {
    return (
      <div className="bg-white px-8 py-8 rounded-lg">
        <Image
          width={500}
          height={200}
          className="h-80 rounded-lg object-cover w-full"
          src={content.image}
          alt=""
        />
        <div>
          <h2 className="text-primary">{content.label}</h2>
        </div>
        {content.content}
      </div>
    );
  }
};

export default GuidesPages;
