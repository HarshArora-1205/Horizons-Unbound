// Imports
import React from 'react';
import { prisma } from '@/app/api/client';
import { Post as PostType } from '@prisma/client';
import { FormattedPost } from '@/app/types';
import Sidebar from '@/app/(shared)/Sidebar';
import Content from './Content';

// Defining Props
type Props = {
  params: {id: string}
}

// Revalidate data after k seconds
export const revalidate = 100;

// Function to fetch specific post from given id
const getPost = async (id: string) => {
  const post: PostType | null = await prisma.post.findUnique({
    where: { id }
  });

  // Handling Error
  if(!post) {
    console.log(`Post with id ${id} not found!`)
    return null;
  }

  // Formatting dates
  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  }

  return formattedPost;
}

// Post Page
const Post = async ({params}: Props) => {
  const { id } = params;
  const post: FormattedPost | null =  await getPost(id);

  if(!post) {
    return <div>Post Not Found</div>
  }

  return (
    <main className="leading-7 px-10">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Content post={post}/> 
        </div>
        <div className="basis-1/4">
        <Sidebar />
        </div>
      </div>
    </main>
  )
}

export default Post;