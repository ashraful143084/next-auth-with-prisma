import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Home = async () => {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  return (
    <section className="relative text-white bg-cyan-500 w-full min-h-screen text center flex justify-center items-center text-3xl flex-col gap-10">
      {allUsers.map((user, index) => (
        <div key={index}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </section>
  );
};

export default Home;
