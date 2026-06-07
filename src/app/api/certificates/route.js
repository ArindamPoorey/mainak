import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const certificatesDir = path.join(
      process.cwd(),
      "public",
      "certificates"
    );

    const files = fs.readdirSync(certificatesDir);

    const images = files
      .filter((file) =>
        /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
      )
      .map((file) => ({
        src: `/certificates/${file}`,
      }));

    return Response.json(images);
  } catch (error) {
    return Response.json([]);
  }
}