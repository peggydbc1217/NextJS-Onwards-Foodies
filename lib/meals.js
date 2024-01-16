import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((reslove) => setTimeout(reslove, 2000));
  // throw new Error('Some error');
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  //set meal slug
  meal.slug = slugify(meal.title, { lower: true });

  //sanitize instructions
  meal.instructions = xss(meal.instructions);

  //create a file name
  const entension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${entension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  //convert image to buffer(binnary data)
  //meail.image is a data url like data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACt...
  const bufferImage = await meal.image.arrayBuffer();

  //write buffer to that new file
  stream.write(Buffer.from(bufferImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  //save meal to database, do not use file but use the file path
  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals (title, slug, summary, instructions, image, creator_email, creator)
    VALUES (@title, @slug, @summary, @instructions, @image, @creator_email, @creator)
    `
  ).run(meal);
}
