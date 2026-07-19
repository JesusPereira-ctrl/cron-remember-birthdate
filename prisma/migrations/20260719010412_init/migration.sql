-- CreateTable
CREATE TABLE "Birthdays" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,

    CONSTRAINT "Birthdays_pkey" PRIMARY KEY ("id")
);
