import prisma from '../../prisma';
export const getVillageByDistrictIdService = async (id: number | string) => {
  try {
    const result = await prisma.village.findMany({
      where: {
        dr_id: Number(id),
      },
    });

    return result;
  } catch (error) {
    console.error(error);
  }
};
