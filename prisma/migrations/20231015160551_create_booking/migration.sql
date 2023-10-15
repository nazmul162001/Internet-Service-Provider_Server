/*
  Warnings:

  - Added the required column `userId` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Made the column `role` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profileImage` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Package" AS ENUM ('wifiInternet', 'mobileConnection', 'tvBox', 'smartHome', 'satelliteTv', 'internet', 'broadband', 'business');

-- AlterTable
ALTER TABLE "reviews" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "profileImage" SET NOT NULL,
ALTER COLUMN "phoneNumber" SET NOT NULL;

-- CreateTable
CREATE TABLE "bookings" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "thana" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "package" "Package" NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
