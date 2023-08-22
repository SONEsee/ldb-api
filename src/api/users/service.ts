import prisma from '../../prisma';
import { join } from 'path';
import { existsSync, unlink } from 'fs';

export const createUserService = async (
  name: string,
  surename: string,
  date_of_birth: string,
  occupation: string,
  position: string,
  image: string,
  village_id: number
) => {
  try {
    const result = await prisma.users.create({
      data: {
        name: name,
        surename: surename,
        date_of_birth: new Date(date_of_birth),
        occupation: occupation,
        image: image,
        position: position,
        village_id: village_id,
      },
    });

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getUsersDataService = async () => {
  try {
    const result = await prisma.users.findMany({
      include: {
        village: {
          include: {
            dristric: {
              include: {
                province: true,
              },
            },
          },
        },
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getUserDataByIdService = async (id: number | string) => {
  try {
    const result = await prisma.users.findFirst({
      include: {
        village: {
          include: {
            dristric: {
              include: {
                province: true,
              },
            },
          },
        },
      },
      where: {
        id: Number(id),
      },
    });

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const updateUserService = async (
  name: string,
  surename: string,
  date_of_birth: string,
  occupation: string,
  position: string,
  file: string,
  village_id: string,
  user_id: string
) => {
  try {
    const object =
      file == null
        ? {
            name: name,
            surename: surename,
            date_of_birth: new Date(date_of_birth),
            occupation: occupation,
            position: position ?? '-',
            village_id: Number(village_id),
          }
        : {
            name: name,
            surename: surename,
            date_of_birth: new Date(date_of_birth),
            occupation: occupation,
            position: position ?? '-',
            village_id: Number(village_id),
            image: file,
          };
    const res = await prisma.users.updateMany({
      where: {
        id: Number(user_id),
      },
      data: object,
    });

    return res;
  } catch (error) {
    console.error(error);
  }
};

export const handleUpdateUploadImage = async (user_id: string | number) => {
  try {
    const user = await prisma.users.findFirst({
      where: {
        id: Number(user_id),
      },
    });
    if (user) {
      const { image } = user;

      //TODO remove image from local machine

      if (image !== null) {
        try {
          const path_image_exist = join(__dirname, '..', '..', image);
          if (existsSync(path_image_exist)) {
            unlink(path_image_exist, (err) => {
              if (err) {
                console.error(err);
              }
            });
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteUserByIdService = async (id: number | string) => {
  try {
    const result = await prisma.users.deleteMany({
      where: {
        id: Number(id),
      },
    });

    return result;
  } catch (error) {
    console.error(error);
  }
};
