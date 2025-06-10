import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "History",
        imageSrc: "/history.png",
      },
      {
        id: 2,
        title: "Law",
        imageSrc: "/law.png",
      },
      {
        id: 3,
        title: "Finance",
        imageSrc: "/finance.png",
      },
      {
        id: 4,
        title: "Geography",
        imageSrc: "/geography.png",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "History lessons 1",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "History of Finland",
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "History of Sweden",
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: "History of Norway",
      },
      {
        id: 4,
        unitId: 1,
        order: 4,
        title: "History of Poland",
      },
      {
        id: 5,
        unitId: 1,
        order: 5,
        title: "History of England",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: "Which one of these is the capital of Finland",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/profile-pic.png",
        correct: true,
        text: "Helsinki",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/profile-pic.png",
        correct: false,
        text: "Turku",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/profile-pic.png",
        correct: false,
        text: "Oulu",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to seed the database");
  }
};

main();
