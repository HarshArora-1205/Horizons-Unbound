import { Post } from "@prisma/client";
import Tech from "./(home)/Tech";
import Travel from "./(home)/Travel";
import Trending from "./(home)/Trending";
import Other from "./(shared)/Other";
import Sidebar from "./(shared)/Sidebar";
import Subscribe from "./(shared)/Subscribe";
import { prisma } from "./api/client";

const getPosts = async () => {
  const posts: Array<Post> = await prisma.post.findMany();
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="leading-7 px-10">
      <Trending />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech />
          <Travel />
          <Other />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  )
}
