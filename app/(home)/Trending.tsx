import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

type TrendingCardProps = {
  className?: string;
};

const TrendingCard = ({ className }: TrendingCardProps ) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      href="/"
    >
      <div className="z-0 relative w-full h-full bg-wh-500">
          image
      </div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
      <div className="absolute z-2 bottom-0 left-0 p-3" >
          <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
            category
          </h4>
          <div className="text-wh-100 mt-2">
            title
          </div>
      </div>
    </Link>
  )
}

type Props = {};

const Trending = (props: Props) => {
  return (
    <section className="pt-3 pb-10">
        <div className="flex items-center gap-3">
            <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
                TRENDING
            </div>
            <p className="text-sm">
                Find some trending blogs related to Artificial Intelligence and tech. Stay updated with latest technology.
            </p>
        </div>

        {/* Grid */}
        <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
            <TrendingCard className="col-span-2 row-span-2 bg-wh-500" />
            <TrendingCard className="col-span-2 row-span-1 bg-wh-500" />
            <TrendingCard className="col-span-1 row-span-1 bg-wh-500" />
            <TrendingCard className="col-span-1 row-span-1 bg-wh-500" />
        </div>

        <p className="text-sm">
            AI Blog Application leverages cutting-edge artificial intelligence technology to provide you with a seamless writing experience. With advanced natural language processing capabilities, it helps you generate engaging and compelling blog posts in just a few clicks. Whether you are a seasoned blogger or a newcomer to the writing scene, our AI-powered tool is designed to boost your productivity, spark your creativity, and elevate the quality of your content. Discover a new era of efficient and effective blogging with our AI Blog Application.
        </p>
    </section>
  )
}

export default Trending