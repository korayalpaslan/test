import Link from "next/link";
const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Home() {
  const data = await getPosts();

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-4 font-semibold text-3xl">
        Postlardan birine tıklayın
      </h1>
      <ul className="flex flex-col space-y-2">
        {data.splice(0, 3).map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/${post.id}`}>
                Post {post.id} - {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        href="/login"
        className="bg-black text-white rounded-lg py-2 px-4 mt-4"
      >
        Sign In
      </Link>
    </main>
  );
}
