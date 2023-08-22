import * as multer from 'multer';
import { diskStorage } from 'multer';
import { join } from 'path';
import { v4 } from 'uuid';

//@ts-ignore
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
};
const upload = (directory: string = '') =>
  multer({
    storage: diskStorage({
      destination: join(__dirname, '..', `uploads/${directory}`),
      filename: (req, file, cb) => {
        cb(
          null,
          `${v4()}.${file.mimetype.split('/').reverse()[0]}`
          // new Date().toISOString().substr(0, 10) +
          //   '+' +
          //   `${shortId.generate()}` +
          //   '+' +
          //   `${file.originalname}`
        );
      },
    }),
    fileFilter: fileFilter,
    limits: {
      fieldSize: 1024 * 1024 * 5,
    },
  });

export default upload;
