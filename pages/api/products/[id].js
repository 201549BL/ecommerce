import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  const body = JSON.parse(req.body);

  console.log(body);

  switch (method) {
    case "GET":
      return res.status(200).json({ method: "get" });
    case "DELETE":
      try {
        const success = await prisma.product.delete({
          where: {
            id: body.id,
          },
        });

        console.log(success);

        return res.status(204).end();
      } catch (error) {
        return res.status(500).json({ message: error.meta.cause });
      }

    default:
      return res.status(200).json({ error: "something went wrong" });
  }
}
