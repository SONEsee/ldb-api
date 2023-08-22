import prisma from '../../prisma';

export const getDistrictByProvinceService = async (id: number | string) => {
  try {
    const result = await prisma.dristric.findMany({
      where: {
        pr_id: Number(id),
      },
    });

    return result;
  } catch (error) {
    console.error(error);
  }
};
