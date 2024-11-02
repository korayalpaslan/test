import React from "react";
import Link from "next/link";

// export async function generateStaticParams() {
//   const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
//     (res) => res.json()
//   );

//   return posts.map((post) => ({
//     id: post.id.toString(),
//   }));
// }

const getPostDetail = async (params) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params}`
  );
  const data = await res.json();
  return data;
};

const DetailPage = async ({ params }) => {
  const data = await getPostDetail(params.id);
  // const { id } = await params;
  // const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // const data = await post.json();

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-semibold">Detail Page {data.id}</h1>
      <p className="text-lg mb-2">{data.title}</p>
      <p>{data.body}</p>
      <Link href="/" className="text-red-600 underline">
        Back to Main Page
      </Link>
    </div>
  );
};

export default DetailPage;
