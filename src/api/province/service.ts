import prisma from '../../prisma';

export const getProvinceService = async () => {
  try {
    const result = await prisma.province.findMany();
    return result;
  } catch (error) {
    console.error(error);
  }
};
