// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
  const products = await prisma.product.findMany();

  return products;
};

export default async function handler(req, res) {
  const products = await getProducts();

  return res.status(200).json({ products });
}
