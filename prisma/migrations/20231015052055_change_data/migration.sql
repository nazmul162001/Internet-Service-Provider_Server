/*
  Warnings:

  - Added the required column `channel` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hdChannel` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "channel" TEXT NOT NULL,
ADD COLUMN     "hdChannel" TEXT NOT NULL;
